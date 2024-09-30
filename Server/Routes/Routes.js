// // Routes/Routes.js
// const express = require('express');
// const router = express.Router();
// const authController = require('../Controllers/authController');
// const auth = require('../Middilewares/authMiddleware');

// // Existing routes
// router.post('/signup', authController.signup);
// router.post('/signin', authController.signin);

// // New route for getting user information
// router.get('/user/:id', auth, authController.getUserById); // Protect this route with auth middleware

// module.exports = router;
// Routes/Routes.js
// Routes/Routes.js
const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');
const auth = require('../Middilewares/authMiddleware'); // Correct the spelling here if needed

// Existing routes
router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

// New route for getting user information
router.get('/user/:id', auth, authController.getUserById); // Protect this route with auth middleware

module.exports = router;
