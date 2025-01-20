// server.js
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Hello from the Bookbook back-end!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
