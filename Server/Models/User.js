//Creating db schema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { 
    type: String, 
    enum: ['User', 'Hospital/Admin'], // Specify the allowed user types
    required: true 
  },
}, { timestamps: true }); // Optional: Add timestamps for createdAt and updatedAt

const User = mongoose.model('User', userSchema);

module.exports = User;
