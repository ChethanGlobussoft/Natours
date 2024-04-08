// Import required files
const Review = require('./../models/reviewModel');
const factory = require(`${__dirname}/handlerFactory`);

// Set ids so that it can be populated later
exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

// Get all reviews
exports.getAllReviews = factory.getAll(Review);

// Get one review
exports.getReview = factory.getOne(Review);

// Create a review
exports.createReview = factory.createOne(Review);

// Update a review
exports.updateReview = factory.updateOne(Review);

// Delete a review
exports.deleteReview = factory.deleteOne(Review);
