// Import required modules
const express = require('express');

// Create an instance of Express.js
const app = express();

// Array of quotes
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Stay hungry, stay foolish. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Don't let the noise of others' opinions drown out your own inner voice. - Steve Jobs"
];

// Route to get a random quote
app.get('/quote', (req, res) => {
  // Generate a random index
  const index = Math.floor(Math.random() * quotes.length);

  // Send the random quote as a response
  res.send(quotes[index]);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
