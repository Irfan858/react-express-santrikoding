// Import Express
const express = require('express');

// Init App
const app = express();

// Define Port
const port = 3000;

// Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});