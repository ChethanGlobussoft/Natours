// ERROR HANDLERS
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  // server.close(() => {
  //   process.exit(1);
  // });
});
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION shutting down...');
  console.log(err.name, err.message);
  // server.close(() => {
  //   process.exit(1);
  // });
});

// Importing required modules
const mongoose = require('mongoose'); // MongoDB object modeling tool
const dotenv = require('dotenv'); // Module for loading environment variables from a .env file
dotenv.config({
  path: './config.env', // Path to the .env file containing environment variables
});
const app = require('./app'); // Importing the Express application instance

// Connect to MongoDB database
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD); // Constructing the MongoDB connection string
mongoose.connect(DB).then((connection) => console.log('CONNECTED to DB 🤝')); // Connecting to the database

// Listen for incoming HTTP requests on the specified port
const PORT = process.env.PORT || 3000; // Setting the port number from environment variables or default to 3000
const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`); // Logging a message indicating the app is running and listening on the specified port
});
