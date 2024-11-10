const express = require('express');
const app = express();

// Route to send a success message
app.get('/', (req, res) => {
  res.send('Success! Your application is running.');
});

// Start server
app.listen(5001, () => {
  console.log('Server running on port 5001');
});