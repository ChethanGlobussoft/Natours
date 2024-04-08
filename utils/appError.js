// Define a custom error class AppError that extends the built-in Error class
class AppError extends Error {
  constructor(message, statusCode) {
    // Call the constructor of the Error class with the provided message
    super(message);

    // Set additional properties for the error
    this.statusCode = statusCode; // HTTP status code associated with the error
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'; // Status type based on the status code (fail for 4xx, error for others)
    this.isOperational = true; // Indicates if the error is operational (i.e., expected and handled)
    // Capture the stack trace of the error
    Error.captureStackTrace(this, this.constructor);
  }
}

// Export the custom error class for use in other modules
module.exports = AppError;
