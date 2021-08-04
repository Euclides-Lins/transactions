const app = require('express')();

app.get('/', (req, res) => {
  res.send({ message: 'oi' });
});

module.exports = app;
