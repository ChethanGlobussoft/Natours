const express = require('express');

// Controller functions for authentication
const {
  protect,
  restrictTo,
} = require(`${__dirname}/../controllers/authController`);

// Controller functions for review routes
const {
  createReview,
  getAllReviews,
  deleteReview,
  updateReview,
  setTourUserIds,
  getReview,
} = require(`${__dirname}/../controllers/reviewController`);

// Merging because of nested routes
const router = express.Router({ mergeParams: true });

// Protect the below routes
router.use(protect);

// GET and POST routes
router
  .route('/')
  .get(getAllReviews)
  .post(restrictTo('user'), setTourUserIds, createReview);

// PATCH and DELETE routes
router
  .route('/:id')
  .get(getReview)
  .patch(restrictTo('user', 'admin'), updateReview)
  .delete(restrictTo('user', 'admin'), deleteReview);
module.exports = router;
