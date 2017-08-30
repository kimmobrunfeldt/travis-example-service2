const express = require('express');

const app = express();

app.get('/api/test', (req, res) => {
  res.json({ test: true });
});

app.listen(4000, () => {
  console.log('Service 2 listening on port 000!')
});
