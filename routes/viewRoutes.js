const express = require('express');
const router = express.Router();
const {
  isLoggedIn,
  protect,
} = require(`${__dirname}/../controllers/authController`);
const {
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
  getMyTours,
} = require(`${__dirname}/../controllers/viewsController`);
const {
  createBookingCheckout,
} = require(`${__dirname}/../controllers/bookingController`);

// router.use(isLoggedIn);

// Home page
router.get('/', createBookingCheckout, isLoggedIn, getOverview);

// Tour detail
router.get('/tour/:slug', isLoggedIn, getTour);

// Login
router.get('/login', isLoggedIn, getLoginForm);

router.get('/me', protect, getAccount);

router.get('/my-tours', protect, getMyTours);

module.exports = router;
