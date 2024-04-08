# Natours

Natours is a nature tours application built with Node.js, Express.js, and MongoDB. It provides various REST APIs for managing users, tours, reviews, bookings, authentication, and payments.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ChethanGlobussoft/Natours.git
   ```

2. Install dependencies:

   ```bash
   cd natours
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:

   ```bash
   npm start
   ```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the JWT token in the request headers as follows:

```plaintext
Authorization: Bearer your_jwt_token
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
