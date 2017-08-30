const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/api/test', (req, res) => {
  console.log('Service 2: -> /api/test');

  res.json({ test: true });
});

app.listen(4000, () => {
  console.log('Service 2 listening on port 4000!')
});
