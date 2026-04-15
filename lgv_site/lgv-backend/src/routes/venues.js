const express = require('express');
const router = express.Router();
const db = require('../config/db'); // This imports your database connection

// GET all venues from the database
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM venues WHERE is_active = 1');
    res.json(rows); // This sends the list of halls to your browser
  } catch (error) {
    res.status(500).json({ error: "Database error: " + error.message });
  }
});

module.exports = router;