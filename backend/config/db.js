// eslint-disable-next-line no-undef
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb',
});

db.connect(err => {
  if (err) console.error('Помилка підключення до MySQL:', err);
  else console.log('Підключено до MySQL');
});

module.exports = db;
