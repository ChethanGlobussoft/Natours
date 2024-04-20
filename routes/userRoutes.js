const express = require('express');
const router = express.Router();

// User related controllers
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
  getMe,
  uploadUserPhoto,
  resizeUserPhoto,
} = require(`${__dirname}/../controllers/userController`);

// Authentication related controllers
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  protect,
  updatePassword,
  restrictTo,
  logout,
} = require(`${__dirname}/../controllers/authController`);

router.post('/signup', signup); // signup
router.post('/login', login); // login
router.get('/logout', logout); // logout

router.post('/forgotPassword', forgotPassword); // forgot password
router.patch('/resetPassword/:token', resetPassword); // reset password

// Protect the below routes
router.use(protect);
router.patch('/updateMyPassword', updatePassword); // update current user password
router.patch('/updateMe', uploadUserPhoto, resizeUserPhoto, updateMe); // update current user data
router.delete('/deleteMe', deleteMe); // delete current user
router.get('/me', getMe, getUser); // get current user

// Only to admins
router.use(restrictTo('admin'));
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
