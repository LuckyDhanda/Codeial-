// Require the mongoose library
const mongoose = require('mongoose');

// Connect to the database with async/await and error handling
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/codeial_development');
    console.log("Successfully connected to the MongoDB database");
  } catch (error) {
    console.log("Error connecting to the MongoDB database:", error);
  }
}

main();

// Acquire the connection
const db = mongoose.connection;

// Listen for error events after the connection is established
db.on('error', console.error.bind(console, "MongoDB connection error:"));

// When the connection is successful, print a message
db.once('open', () => {
  console.log("MongoDB database connection is open and running");
});

// Export the mongoose connection (optional, depending on your app's needs)
module.exports = mongoose;