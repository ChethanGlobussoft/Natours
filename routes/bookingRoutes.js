const express = require('express');
const router = express.Router();
// Controller functions for authentication
const {
  protect,
  restrictTo,
} = require(`${__dirname}/../controllers/authController`);
const {
  getCheckoutSession,
  getAllBookings,
  createBooking,
  getBooking,
  deleteBooking,
  updateBooking,
} = require(`${__dirname}/../controllers/bookingController`);

router.use(protect);
router.get('/checkout-session/:tourId', getCheckoutSession);
router.use(restrictTo('admin', 'lead-guide'));
router.route('/').get(getAllBookings).post(createBooking);
router.route('/:id').get(getBooking).patch(updateBooking).delete(deleteBooking);
module.exports = router;
