const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('Привет');
  res.send('Hello кто-то!');
});

app.listen(3000);