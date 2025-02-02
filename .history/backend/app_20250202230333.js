const express = require('express');
const app = express();

app.get('/simple_syslog', (req, res) => {
  res.send('Simple Syslog Page');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
