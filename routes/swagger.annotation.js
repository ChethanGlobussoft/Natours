/**
 * @swagger
 * /api/v1/tours:
 *   get:
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
 *   post:
 *     summary: Create a new tour
 *     description: |
 *       This endpoint allows authorized users with specific roles (admin, lead-guide) to create a new tour if they are logged in.
 *     security:
 *       - JWTAuth: []
 *     tags:
 *       - Tours
 *     parameters:
 *       - in: body
 *         name: tour
 *         description: The tour object to be created
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             duration:
 *               type: number
 *             maxGroupSize:
 *               type: number
 *             difficulty:
 *               type: string
 *             ratingsAverage:
 *               type: number
 *             ratingsQuantity:
 *               type: number
 *             price:
 *               type: number
 *             priceDiscount:
 *               type: number
 *             summary:
 *               type: string
 *             description:
 *               type: string
 *             imageCover:
 *               type: string
 *             images:
 *               type: array
 *               items:
 *                 type: string
 *             createdAt:
 *               type: string
 *             startDates:
 *               type: array
 *               items:
 *                 type: string
 *             slug:
 *               type: string
 *             secretTour:
 *               type: boolean
 *             startLocation:
 *               type: object
 *               properties:
 *                 type:
 *                   type: string
 *                 coordinates:
 *                   type: array
 *                   items:
 *                     type: number
 *                 address:
 *                   type: string
 *                 description:
 *                   type: string
 *             locations:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   type:
 *                     type: string
 *                   coordinates:
 *                     type: array
 *                     items:
 *                       type: number
 *                   address:
 *                     type: string
 *                   description:
 *                     type: string
 *                   day:
 *                     type: number
 *     responses:
 *       '200':
 *         description: Tour created successfully
 *       '401':
 *         description: Unauthorized access
 *       '403':
 *         description: Forbidden, user does not have the necessary permissions
 */
/**
 * @swagger
 * /api/v1/tours/{id}:
 *   get:
 *     summary: Get a tour by ID
 *     description: |
 *       This endpoint retrieves a tour by its ID.
 *     tags:
 *       - Tours
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the tour to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Tour retrieved successfully
 *       '404':
 *         description: Tour not found
 *
 *   patch:
 *     summary: Update a tour by ID
 *     description: |
 *       This endpoint allows authorized users with specific roles (admin, lead-guide) to update a tour by its ID.
 *     security:
 *       - JWTAuth: []
 *     tags:
 *       - Tours
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the tour to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: The updated tour object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               duration:
 *                 type: number
 *               maxGroupSize:
 *                 type: number
 *               difficulty:
 *                 type: string
 *               ratingsAverage:
 *                 type: number
 *               ratingsQuantity:
 *                 type: number
 *               price:
 *                 type: number
 *               priceDiscount:
 *                 type: number
 *               summary:
 *                 type: string
 *               description:
 *                 type: string
 *               imageCover:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *               startDates:
 *                 type: array
 *                 items:
 *                   type: string
 *               slug:
 *                 type: string
 *               secretTour:
 *                 type: boolean
 *               startLocation:
 *                 type: object
 *                 properties:
 *                   type:
 *                     type: string
 *                   coordinates:
 *                     type: array
 *                     items:
 *                       type: number
 *                   address:
 *                     type: string
 *                   description:
 *                     type: string
 *               locations:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     type:
 *                       type: string
 *                     coordinates:
 *                       type: array
 *                       items:
 *                         type: number
 *                     address:
 *                       type: string
 *                     description:
 *                       type: string
 *                     day:
 *                       type: number
 *     responses:
 *       '200':
 *         description: Tour updated successfully
 *       '401':
 *         description: Unauthorized access
 *       '403':
 *         description: Forbidden, user does not have the necessary permissions
 *
 *   delete:
 *     summary: Delete a tour by ID
 *     description: |
 *       This endpoint allows authorized users with specific roles (admin, lead-guide) to delete a tour by its ID.
 *     security:
 *       - JWTAuth: []
 *     tags:
 *       - Tours
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the tour to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Tour deleted successfully
 *       '401':
 *         description: Unauthorized access
 *       '403':
 *         description: Forbidden, user does not have the necessary permissions
 */

/**
 * @swagger
 * /api/v1/tours/top-5-tours:
 *   get:
 *     tags:
 *     - Tours
 *     summary: Get top 5 tours
 *     description: This route is used to GET top 5 tours.
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

/**
 * @swagger
 * /api/v1/tours/tour-stats:
 *   get:
 *     tags:
 *     - Tours
 *     summary: Get tour statistics
 *     description: This route is used to GET tour statistics.
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

/**
 * @swagger
 * /api/v1/tours/monthly-plan/{year}:
 *   get:
 *     summary: Get monthly plan for a specific year
 *     description: |
 *       This endpoint retrieves the monthly plan for a specific year.
 *     tags:
 *       - Tours
 *     parameters:
 *       - in: path
 *         name: year
 *         description: The year for which to fetch the monthly plan
 *         required: true
 *         schema:
 *           type: integer
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '200':
 *         description: Monthly plan retrieved successfully
 *       '401':
 *         description: Unauthorized access
 *       '403':
 *         description: Forbidden, user does not have the necessary permissions
 *       '404':
 *         description: Monthly plan not found
 *       '500':
 *         description: Server error
 */

// ********************************************************************************

/**
 * @swagger
 * /api/v1/users/signup:
 *   post:
 *     summary: User signup
 *     description: Endpoint for user registration/signup.
 *     tags:
 *       - User Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's name
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password
 *               passwordConfirm:
 *                 type: string
 *                 format: password
 *                 description: Confirm password (should match password field)
 *             example:
 *               name: Chethan S
 *               email: chethan@mailsac.com
 *               password: test1234
 *               passwordConfirm: test1234
 *     responses:
 *       '200':
 *         description: Signup successful
 *       '400':
 *         description: Bad request, invalid input or user already exists
 */

/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     summary: User login
 *     description: Endpoint for user login.
 *     tags:
 *       - User Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password
 *             example:
 *               email: chethan@mailsac.com
 *               password: test1234
 *     responses:
 *       '200':
 *         description: Login successful
 *       '401':
 *         description: Unauthorized, invalid credentials
 */

/**
 * @swagger
 * /api/v1/users/logout:
 *   get:
 *     summary: User logout
 *     description: Endpoint for user logout.
 *     tags:
 *       - User Authentication
 *     responses:
 *       '200':
 *         description: Logout successful
 *       '401':
 *         description: Unauthorized, missing JWT token
 */

/**
 * @swagger
 * /api/v1/users/forgotPassword:
 *   post:
 *     summary: Forgot password
 *     description: Endpoint to request a password reset via email. A token will be sent to email which should be used in resetPassword route.
 *     tags:
 *       - User Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address to send password reset instructions.
 *             example:
 *               email: testuser5@gmail.com
 *     responses:
 *       '200':
 *         description: Password reset email sent successfully
 *       '400':
 *         description: Bad request, invalid input or user not found
 */

/**
 * @swagger
 * /api/v1/users/resetPassword/{token}:
 *   patch:
 *     summary: Reset password
 *     description: Endpoint to reset user's password using the provided reset token in mail.
 *     tags:
 *       - User Authentication
 *     parameters:
 *       - in: path
 *         name: token
 *         description: Password reset token received via email.
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: New password for the user account.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 format: password
 *                 description: New password for the user account
 *               passwordConfirm:
 *                 type: string
 *                 format: password
 *                 description: Confirm password (should match new password)
 *           example:
 *             password: test1234
 *             passwordConfirm: test1234
 *     responses:
 *       '200':
 *         description: Password reset successful
 *       '400':
 *         description: Bad request, invalid input or expired token
 *       '401':
 *         description: Unauthorized, invalid or expired reset token
 */

/**
 * @swagger
 * /api/v1/users/updateMyPassword:
 *   patch:
 *     summary: Update current user password
 *     description: Endpoint to update the current user's password.
 *     tags:
 *       - User
 *     security:
 *       - JWTAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               passwordCurrent:
 *                 type: string
 *                 format: password
 *                 description: Current password of the user
 *               password:
 *                 type: string
 *                 format: password
 *                 description: New password for the user account
 *               passwordConfirm:
 *                 type: string
 *                 format: password
 *                 description: Confirm new password (should match new password)
 *             example:
 *               passwordCurrent: 1234567891
 *               password: 12345678912
 *               passwordConfirm: 12345678912
 *     responses:
 *       '200':
 *         description: Password updated successfully
 *       '400':
 *         description: Bad request, invalid input or password incorrect
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 */

/**
 * @swagger
 * /api/v1/users/updateMe:
 *   patch:
 *     summary: Update current user photo
 *     description: Endpoint to update the current user's photo.
 *     tags:
 *       - User
 *     security:
 *       - JWTAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               photo:
 *                 type: string
 *                 format: binary
 *                 description: New profile photo for the user
 *     responses:
 *       '200':
 *         description: User data updated successfully
 *       '400':
 *         description: Bad request, invalid input or email already exists
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 */

/**
 * @swagger
 * /api/v1/users/deleteMe:
 *   delete:
 *     summary: Delete current user
 *     description: Endpoint to delete the current user account but not permanently.
 *     tags:
 *       - User
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '204':
 *         description: User deleted successfully
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '404':
 *         description: Not found, user not exist
 */

/**
 * @swagger
 * /api/v1/users/me:
 *   get:
 *     summary: Get current user
 *     description: Endpoint to get the details of the current user.
 *     tags:
 *       - User
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '200':
 *         description: Current user details retrieved successfully
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 */

/**
 * @swagger
 * /api/v1/users/:
 *   get:
 *     summary: Get all users
 *     description: |
 *       Endpoint to get all users. Only accessible to admin users.
 *     tags:
 *       - User
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '200':
 *         description: Users retrieved successfully
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '403':
 *         description: Forbidden, user does not have admin privileges
 */

/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Endpoint to get user details by ID. Only accessible to admin users.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '200':
 *         description: User details retrieved successfully
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '403':
 *         description: Forbidden, user does not have admin privileges
 *
 *   patch:
 *     summary: Update user by ID
 *     description: Endpoint to update user details by ID. Only accessible to admin users.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated user data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: New name for the user
 *           example:
 *             name: John Doe
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '200':
 *         description: User updated successfully
 *       '400':
 *         description: Bad request, invalid input or user not found
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '403':
 *         description: Forbidden, user does not have admin privileges
 *
 *   delete:
 *     summary: Delete user by ID
 *     description: Endpoint to delete user by ID. Only accessible to admin users.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID to delete
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '204':
 *         description: User deleted successfully
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '403':
 *         description: Forbidden, user does not have admin privileges
 */

// ****************************************************************************

/**
 * @swagger
 * /api/v1/reviews:
 *   get:
 *     summary: Get all reviews
 *     description: Endpoint to get all reviews. Requires authentication.
 *     tags:
 *       - Reviews
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '200':
 *         description: Reviews retrieved successfully
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *
 *   post:
 *     summary: Create a review
 *     description: |
 *       Endpoint to create a new review. Requires authentication as a user.
 *     tags:
 *       - Reviews
 *     security:
 *       - JWTAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               review:
 *                 type: string
 *                 description: The review content
 *               rating:
 *                 type: number
 *                 description: The rating for the tour (1 to 5)
 *               tour:
 *                 type: string
 *                 description: ID of the tour the review is for
 *               user:
 *                 type: string
 *                 description: ID of the user creating the review
 *             example:
 *               review: Mindblowing
 *               rating: 4
 *               tour: 5c88fa8cf4afda39709c2951
 *               user: 6606ab43047ac4320b7753a8
 *     responses:
 *       '201':
 *         description: Review created successfully
 *       '400':
 *         description: Bad request, invalid input data
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '403':
 *         description: Forbidden, user does not have necessary permissions
 */

/**
 * @swagger
 * /api/v1/reviews/{id}:
 *   get:
 *     summary: Get review by ID
 *     description: Endpoint to get a review by its ID.
 *     tags:
 *       - Reviews
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Review ID to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '200':
 *         description: Review details retrieved successfully
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '404':
 *         description: Review not found

 *   patch:
 *     summary: Update review by ID
 *     description: |
 *       Endpoint to update a review by its ID.
 *     tags:
 *       - Reviews
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Review ID to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated review data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rating:
 *                 type: number
 *                 description: The new rating for the review (1 to 5)
 *           example:
 *             rating: 4
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '200':
 *         description: Review updated successfully
 *       '400':
 *         description: Bad request, invalid input data
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '403':
 *         description: Forbidden, user does not have necessary permissions
 *       '404':
 *         description: Review not found

 *   delete:
 *     summary: Delete review by ID
 *     description: |
 *       Endpoint to delete a review by its ID.
 *     tags:
 *       - Reviews
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Review ID to delete
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '204':
 *         description: Review deleted successfully
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '403':
 *         description: Forbidden, user does not have necessary permissions
 *       '404':
 *         description: Review not found
 */

// *****************************************************************************
/**
 * @swagger
 * /api/v1/bookings:
 *   get:
 *     summary: Get all bookings
 *     description: |
 *       Endpoint to retrieve all bookings. Requires authentication as an admin or lead guide.
 *     tags:
 *       - Tour Bookings
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '200':
 *         description: Bookings retrieved successfully
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '403':
 *         description: Forbidden, user does not have necessary permissions
 *
 *   post:
 *     summary: Create a new booking
 *     description: |
 *       Endpoint to create a new booking. Requires authentication as an admin or lead guide.
 *     tags:
 *       - Tour Bookings
 *     security:
 *       - JWTAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 description: The price of the booking
 *               tour:
 *                 type: string
 *                 description: ID of the tour for the booking
 *               user:
 *                 type: string
 *                 description: ID of the user making the booking
 *             example:
 *               price: 500
 *               tour: 5c88fa8cf4afda39709c2955
 *               user: 5c8a1d5b0190b214360dc057
 *     responses:
 *       '201':
 *         description: Booking created successfully
 *       '400':
 *         description: Bad request, invalid input data
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '403':
 *         description: Forbidden, user does not have necessary permissions
 */

/**
 * @swagger
 * /api/v1/bookings/checkout-session/{tourId}:
 *   get:
 *     summary: Get checkout session for a tour
 *     description: |
 *       Endpoint to retrieve the checkout session details for a specific tour ID. Requires authentication.
 *     tags:
 *       - Tour Bookings
 *     parameters:
 *       - in: path
 *         name: tourId
 *         description: ID of the tour for which checkout session is requested
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '200':
 *         description: Checkout session details retrieved successfully
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '404':
 *         description: Tour not found or checkout session not available
 */

/**
 * @swagger
 * /api/v1/bookings/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       description: ID of the booking
 *       schema:
 *         type: string
 *   get:
 *     summary: Get a booking by ID
 *     description: |
 *       Endpoint to retrieve a booking by its ID. Requires authentication as an admin or lead guide.
 *     tags:
 *       - Tour Bookings
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '200':
 *         description: Booking retrieved successfully
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '403':
 *         description: Forbidden, user does not have necessary permissions
 *
 *   patch:
 *     summary: Update a booking by ID
 *     description: |
 *       Endpoint to update a booking by its ID. Requires authentication as an admin or lead guide.
 *     tags:
 *       - Tour Bookings
 *     security:
 *       - JWTAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 description: The updated price of the booking
 *           example:
 *             price: 750
 *     responses:
 *       '200':
 *         description: Booking updated successfully
 *       '400':
 *         description: Bad request, invalid input data
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '403':
 *         description: Forbidden, user does not have necessary permissions
 *       '404':
 *         description: Booking not found
 *
 *   delete:
 *     summary: Delete a booking by ID
 *     description: |
 *       Endpoint to delete a booking by its ID. Requires authentication as an admin or lead guide.
 *     tags:
 *       - Tour Bookings
 *     security:
 *       - JWTAuth: []
 *     responses:
 *       '204':
 *         description: Booking deleted successfully
 *       '401':
 *         description: Unauthorized, missing or invalid JWT token
 *       '403':
 *         description: Forbidden, user does not have necessary permissions
 *       '404':
 *         description: Booking not found
 */
