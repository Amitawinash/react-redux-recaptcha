
const express = require('express');
const path = require('path');
const env = require('./env.json');

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

const server = app.listen(env.PORT, () => {
  const port = server.address().port;
  console.log('Demo application  is listening at :%s', port);
});
