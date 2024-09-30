// // // Import necessary modules
// // const express = require('express');
// // const cors = require('cors');
// // const mongoose = require('mongoose');
// // const authRoutes = require('./Routes/Routes'); // Make sure this path is correct
// // require('dotenv').config(); 
// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Connect to MongoDB
// // const dbURI = process.env.MONGODB_URI; // Get the URI from the environment variable

// // mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => console.log('MongoDB connected successfully'))
// //   .catch(err => console.error('MongoDB connection error:', err));

// // // Routes
// // app.use('/api/auth', authRoutes); 


// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });
// // server.js
// // server.js
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const authRoutes = require('./Routes/Routes'); // Ensure this path is correct
// require('dotenv').config(); 

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// const dbURI = process.env.MONGODB_URI; // Ensure this variable is set in your .env file
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/api/auth', authRoutes); 

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./Routes/Routes'); // Ensure this path is correct
const hospitalRoutes = require('./Routes/Hospital'); // Import hospital routes
require('dotenv').config(); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const dbURI = process.env.MONGODB_URI; // Ensure this variable is set in your .env file
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/hospitals', hospitalRoutes); // Hospital management routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
