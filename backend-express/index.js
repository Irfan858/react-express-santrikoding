// Import Express
const express = require('express');

// Import CORS
const cors = require('cors');

// Import Body Parser
const bodyParser = require('body-parser');

// Init App
const app = express();

// Use CORS
app.use(cors());

// BODY PARSER
// 1. Use Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// 2. parse application/json
app.use(bodyParser.json());

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



