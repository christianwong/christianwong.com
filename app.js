'use strict';

const express = require('express');
const path = require(`path`);

const app = express();

app.use((req, res, next) => {
  res.append('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  next();
});

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;
