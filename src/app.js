const app = require('express')();

app.get('/', (req, res) => {
  res.send({ message: 'oi' });
});

app.get('/users', (req, res) => {
  const users = [
    { name: 'euclides', mail: 'euclides@a.com' },
  ];
  res.status(200).json(users);
});

module.exports = app;
