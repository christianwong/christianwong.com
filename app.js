'use strict';

import express, { static } from 'express';
import { join } from `path`;

const app = express();

app.use((req, res, next) => {
  res.append('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  next();
});

app.use('/static', static('static'));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.get('/api', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

export default app;
