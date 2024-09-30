// // const User = require('../Models/User');
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');

// // // Signup function
// // exports.signup = async (req, res) => {
// //   const { username, email, password } = req.body;
// //   try {
// //     // Check if user exists
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: 'User already exists' });
// //     }

// //     // Hash the password
// //     const salt = await bcrypt.genSalt(10);
// //     const hashedPassword = await bcrypt.hash(password, salt);

// //     // Create new user
// //     const newUser = new User({ username, email, password: hashedPassword });
// //     await newUser.save();

// //     // Generate JWT Token
// //     const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
// //       expiresIn: '1h',
// //     });

// //     res.status(201).json({ token });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };

// // // Signin function
// // exports.signin = async (req, res) => {
// //   const { email, password } = req.body;
// //   try {
// //     // Find user by email
// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(400).json({ message: 'User not found' });
// //     }

// //     // Check password
// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(400).json({ message: 'Invalid credentials' });
// //     }

// //     // Generate JWT Token
// //     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
// //       expiresIn: '1h',
// //     });

// //     res.json({ token });
// //   } catch (error) {
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };

// // exports.getUserById = async (req, res) => {
// //   const { id } = req.params; // Get the user ID from the request parameters
// //   try {
// //     const user = await User.findById(id).select('-password'); // Exclude password
// //     if (!user) {
// //       return res.status(404).json({ message: 'User not found' });
// //     }
// //     res.json(user); // Return user data
// //   } catch (error) {
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };
// // Controllers/authController.js
// // Controllers/authController.js
// const User = require('../Models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // Signup function
// exports.signup = async (req, res) => {
//   console.log("Signup function called"); // For debugging
//   const { username, email, password } = req.body;
//   try {
//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create new user
//     const newUser = new User({ username, email, password: hashedPassword });
//     await newUser.save();

//     // Generate JWT Token
//     const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.status(201).json({ token });
//   } catch (error) {
//     console.error(error); // Log error for debugging
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Signin function
// exports.signin = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     // Find user by email
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     // Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT Token
//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.json({ token });
//   } catch (error) {
//     console.error(error); // Log error for debugging
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// exports.getUserById = async (req, res) => {
//   const { id } = req.params; // Get the user ID from the request parameters
//   try {
//     const user = await User.findById(id).select('-password'); // Exclude password
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user); // Return user data
//   } catch (error) {
//     console.error(error); // Log error for debugging
//     res.status(500).json({ message: 'Server error' });
//   }
// };

const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup function
exports.signup = async (req, res) => {
  console.log("Signup function called"); // For debugging
  const { username, email, password, userType } = req.body; // Include userType
  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user with userType
    const newUser = new User({ 
      username, 
      email, 
      password: hashedPassword,
      userType // Include userType
    });
    await newUser.save();

    // Generate JWT Token
    const token = jwt.sign({ userId: newUser._id, userType: newUser.userType }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ token });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

// Signin function
exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT Token including userType
    const token = jwt.sign({ userId: user._id, userType: user.userType }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user by ID function
exports.getUserById = async (req, res) => {
  const { id } = req.params; // Get the user ID from the request parameters
  try {
    const user = await User.findById(id).select('-password'); // Exclude password
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user); // Return user data
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};
