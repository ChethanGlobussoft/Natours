const express = require('express');
const router = express.Router(); // Create a new router instance
const reviewRouter = require('./../routes/reviewRoutes');

// Nested route
router.use('/:tourId/reviews', reviewRouter);

// Import controller functions for handling tour-related requests
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
  getToursWithin,
  getDistance,
  uploadTourImages,
  resizeTourImages,
} = require(`${__dirname}/../controllers/tourController`);
const {
  protect,
  restrictTo,
} = require(`${__dirname}/../controllers/authController`);

// Define routes and their corresponding controller functions
router.route('/top-5-tours').get(aliasTopTours, getAllTours); // Route for getting top 5 tours with aliasTopTours middleware
router.route('/tour-stats').get(getTourStats); // Route for getting tour statistics
router
  .route('/monthly-plan/:year')
  .get(protect, restrictTo('admin', 'lead-guide', 'guide'), getMonthlyPlan); // Route for getting monthly plan based on year

// Get tours within a particular radius
router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(getToursWithin);

// Get tour distance from a particular point
router.route('/distances/:latlng/unit/:unit').get(getDistance);

/**
 * @swagger
 * '/api/v1/tours':
 *  get:
 *     tags:
 *     - Tours
 *     summary: Get all tours
 *     description: This route is used to GET all the tours.
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */

router
  .route('/')
  .get(getAllTours)
  .post(protect, restrictTo('admin', 'lead-guide'), createTour); // Route for getting all tours and creating a new tour

/**
 * @swagger
 * '/api/v1/tours/{id}':
 *   get:
 *     tags:
 *       - Tours
 *     summary: Get a tour by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the tour to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tour fetched successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Tour not found
 *       500:
 *         description: Server error
 */

router
  .route('/:id')
  .get(getTour)
  .patch(
    protect,
    restrictTo('admin', 'lead-guide'),
    uploadTourImages,
    resizeTourImages,
    updateTour
  )
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour); // Route for getting, updating, and deleting a specific tour by ID

module.exports = router; // Export the router for use in other modules
