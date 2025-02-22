const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = user => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

// 📌 **Реєстрація**
exports.register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Всі поля обов'язкові" });

  const hashedPassword = await bcrypt.hash(password, 10);
  db.query(
    'INSERT INTO users (email, password) VALUES (?, ?)',
    [email, hashedPassword],
    err => {
      if (err) return res.status(500).json({ error: 'Помилка реєстрації' });
      res.status(201).json({ message: 'Реєстрація успішна' });
    }
  );
};

// 📌 **Логін**
exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Всі поля обов'язкові" });

  db.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    async (err, results) => {
      if (err) return res.status(500).json({ error: 'Помилка сервера' });

      if (results.length === 0)
        return res.status(401).json({ error: 'Невірний email або пароль' });

      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(401).json({ error: 'Невірний email або пароль' });

      const token = generateToken(user);
      res.json({ token, message: 'Успішний вхід' });
    }
  );
};
