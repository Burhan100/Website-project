const express = require('express');
const router = express.Router();

// This is a temporary "Health Check" for this specific route
router.get('/test', (req, res) => {
    res.json({ message: "Route is active!" });
});

// THIS IS THE LINE THAT FIXES YOUR ERROR:
module.exports = router;