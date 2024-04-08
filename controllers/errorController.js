const AppError = require(`${__dirname}/../utils/appError`);

// Typical errror handling functions
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};
const handleDuplicateFieldsDB = (err) => {
  const message = `Duplicate field value: ${err.keyValue.name}. Please use another value`;
  return new AppError(message, 400);
};
const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Invalid token. Please log in again!', 401);

const handleJWTExpiredError = () =>
  new AppError('Your token has expired. Please log in again!', 401);
// Error for dev
const sendErrorDev = (err, req, res) => {
  // API
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      err: err,
    });
  }
  // RENDERED WEBSITE
  console.error('🔥', err);
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: err.message,
  });
};

// Error for prod
const sendErrorProduction = (err, req, res) => {
  // API
  if (req.originalUrl.startsWith('/api')) {
    // Operational, trusted error: send message to client
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }

    // Programming or other unknown error: don't leak error details

    // 1) Log the error
    console.error('🔥', err);

    // 2) Send generic message
    return res.status(500).json({
      status: 'error',
      message: 'Something went wrong!',
    });
  }
  // RENDERED WEBSITE
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    return res.status(err.statusCode).render('error', {
      title: 'Something went wrong!',
      msg: err.message,
    });
  }

  // Programming or other unknown error: don't leak error details
  // 1) Log the error
  console.error('🔥', err);

  // 2) Send generic message
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: 'Please try again later',
  });
};
// Global error handler middleware
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err, name: err.name, message: err.message };

    // Get tour id casting
    if (error.name === 'CastError') error = handleCastErrorDB(error);

    // Create tour duplicates
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);

    // Update tour
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);

    // When token is manipulated/Invalid
    if (error.name === 'JsonWebTokenError') error = handleJWTError();

    // When token is expired
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

    sendErrorProduction(error, req, res);
  }
};
