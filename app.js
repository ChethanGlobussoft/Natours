// Importing required modules
const path = require('path');
const express = require('express'); // Express framework for Node.js web applications
const morgan = require('morgan'); // HTTP request logger middleware
const rateLimit = require('express-rate-limit'); // Rate limit middleware
const helmet = require('helmet'); // To set security HTTP headers
const mongoSanitize = require('express-mongo-sanitize'); // To sanitize NoSQL query injection
const { xss } = require('express-xss-sanitizer'); // To sanitize xss(Sending html code to DB)
const hpp = require('hpp'); // For CSP
const cookieParser = require('cookie-parser'); //To parse the incoming cookies
const compression = require('compression');

// For swagger documentation
const swaggerDocs = require('./swagger');

// Custom error handling and routing modules
const AppError = require(`${__dirname}/utils/appError`); // Custom error class
const globalErrorHandler = require(`${__dirname}/controllers/errorController`); // Global error handler

const tourRouter = require(`${__dirname}/routes/tourRoutes`); // Router for tour-related routes
const userRouter = require(`${__dirname}/routes/userRoutes`); // Router for user-related routes
const reviewRouter = require(`${__dirname}/routes/reviewRoutes`); // Router for review-related routes
const viewRouter = require(`${__dirname}/routes/viewRoutes`); // Router for view-related routes
const bookingRouter = require(`${__dirname}/routes/bookingRoutes`); // Router for review-related routes

const app = express(); // Creating an instance of Express
swaggerDocs(app, process.env.PORT);

app.set('view engine', 'pug'); // Telling express that we are using pug template engine
app.set('views', path.join(__dirname, 'views'));

// 1) GLOBAL MIDDLEWARES

// Middleware for serving static files from the 'public' directory
// app.use(express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP headers
const defaultSrcUrls = ['https://js.stripe.com/'];

const scriptSrcUrls = [
  'https://unpkg.com/',
  'https://tile.openstreetmap.org',
  'https://cdnjs.cloudflare.com/ajax/libs/axios/1.0.0-alpha.1/axios.min.js',
  'https://js.stripe.com/v3/',
  'https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.8/axios.min.js',
];

const styleSrcUrls = [
  'https://unpkg.com/',
  'https://tile.openstreetmap.org',
  'https://fonts.googleapis.com/',
];

const connectSrcUrls = [
  'https://*.stripe.com',
  'https://unpkg.com',
  'https://tile.openstreetmap.org',
  'https://*.cloudflare.com',
  'http://localhost:3000/api/v1/users/login',
  'http://localhost/api/v1/bookings/checkout-session/',
];

const fontSrcUrls = ['fonts.googleapis.com', 'fonts.gstatic.com'];

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", ...defaultSrcUrls],
      scriptSrc: ["'self'", ...scriptSrcUrls],
      connectSrc: ["'self'", ...connectSrcUrls],
      fontSrc: ["'self'", ...fontSrcUrls],
      styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
      imgSrc: ["'self'", 'blob:', 'data:', 'https:'],
      workerSrc: ["'self'", 'blob:'],
    },
  })
);

// Middleware for logging in development environment
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit the API requests from same IP
const limiter = rateLimit({
  // 100 requests per hour
  max: 100,
  windowMS: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour',
  // To hide the limit count in headers
  legacyHeaders: false,
});
app.use('/api', limiter);

// Middleware for parsing JSON data in request bodies (max 10kb body size)
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection (sending query in data json)
app.use(mongoSanitize());

// Data sanitization against XSS ((sending html code in data json))
app.use(xss());

// Preventing parameter pollution(Including same parameter multiple times)
app.use(
  hpp({
    // Allowing same parameter multiple times
    whitelist: [
      'duration',
      'ratingsAverage',
      'ratingsQuantity',
      'price',
      'difficulty',
      'maxGroupSize',
    ],
  })
);
app.use(compression());
// Logger middleware
app.use((req, res, next) => {
  // console.log(req.cookies);
  next();
});

// Routes setup using the defined routers
app.use('/', viewRouter);
app.use('/api/v1/tours', tourRouter); // Mounting tourRouter at '/api/v1/tours' endpoint
app.use('/api/v1/users', userRouter); // Mounting userRouter at '/api/v1/users' endpoint
app.use('/api/v1/reviews', reviewRouter); // Mounting userRouter at '/api/v1/reviews' endpoint
app.use('/api/v1/bookings', bookingRouter); // Mounting userRouter at '/api/v1/reviews' endpoint

// Handling undefined routes with a custom error message
app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl}`, 404));
});

// Global error handling middleware
app.use(globalErrorHandler);

// Exporting the Express application instance for use in other files
module.exports = app;
