const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 1. MIDDLEWARE
app.use(cors()); 
app.use(express.json());

// 2. ROUTES (With extra safety checks)
try {
    app.use('/api/auth',     require('./src/routes/auth'));
    //Note: If the files below don't exist yet, comment them out with // 
    app.use('/api/venues',   require('./src/routes/venues'));
    app.use('/api/bookings', require('./src/routes/bookings'));
    app.use('/api/contact',  require('./src/routes/contact'));
    app.use('/api/hall',     require('./src/routes/hall'));
    app.use('/api/admin',    require('./src/routes/admin'));
} catch (err) {
    console.error("❌ ROUTE LOADING ERROR:", err.message);
}

// 3. HEALTH CHECK
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Wedding Platform Server is running!' });
});

// 4. START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`👉 Test Auth List: http://localhost:${PORT}/api/auth/users`);
});