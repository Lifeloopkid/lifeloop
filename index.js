const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();

// Define the port here
const port = process.env.PORT || 4000;  // You can change 4000 to any available port

// Your existing code to set up the SQLite database and routes...

// Start the server
app.listen(port, () => {
  console.log(`LifeLoop app listening at http://localhost:${port}`);
});


