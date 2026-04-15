const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); 

// 1. REGISTER a new user
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const [existingUser] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await db.query(
            'INSERT INTO users (full_name, email, password_hash, role) VALUES (?, ?, ?, ?)',
            [name, email, hashedPassword, 'client'] 
        );

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// 2. LOGIN a user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length === 0) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.JWT_SECRET || 'your_secret_key',
            { expiresIn: '1d' }
        );

        res.json({
            message: "Login successful",
            token,
            user: { id: user.id, name: user.full_name, role: user.role }
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 3. GET ALL USERS (Fixed the .execute to .query)
router.get('/users', async (req, res) => {
    try {
        // Changed .execute to .query to match the rest of your file
        const [rows] = await db.query('SELECT id, full_name, email, role, created_at FROM users');
        res.status(200).json(rows);
    } catch (err) {
        console.error("Database Error:", err);
        res.status(500).json({ message: "Error fetching users" });
    }
});

// 4. DELETE A USER (Add this so your delete button works)
router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM users WHERE id = ?', [id]);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
// 5. GET SINGLE USER PROFILE by ID
router.get('/profile/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query(
            'SELECT id, full_name, email, phone, role, created_at FROM users WHERE id = ?',
            [id]
        );
        if (!rows.length) return res.status(404).json({ message: 'User not found' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 6. UPDATE USER PROFILE
router.put('/profile/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { full_name, phone } = req.body;
        await db.query(
            'UPDATE users SET full_name = ?, phone = ? WHERE id = ?',
            [full_name, phone || null, id]
        );
        res.json({ message: 'Profile updated successfully!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
