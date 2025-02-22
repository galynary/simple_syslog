const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const db = require('../config/db');

const router = express.Router();

router.get('/userdata', authenticateToken, (req, res) => {
  db.query(
    'SELECT id, email FROM users WHERE id = ?',
    [req.user.id],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Помилка сервера' });
      res.json(results[0]);
    }
  );
});

module.exports = router;
