const express = require('express');
const {
  getHospitals,
  createHospital,
  updateHospital,
  deleteHospital,
} = require('../controllers/hospitalController');

const router = express.Router();

router.get('/', getHospitals); // GET all hospitals
router.post('/', createHospital); // POST a new hospital
router.put('/:id', updateHospital); // PUT update a hospital
router.delete('/:id', deleteHospital); // DELETE a hospital

module.exports = router;
// const express = require('express');
// const {
//   getHospitals,
//   createHospital,
//   updateHospital,
//   deleteHospital,
// } = require('../controllers/hospitalController');
// const { authMiddleware } = require('../Middilewares/authMiddleware'); // Import your existing JWT middleware

// const router = express.Router();

// // Public route to get all hospitals
// router.get('/', getHospitals); // GET all hospitals

// // Protected routes with authentication
// router.post('/',  createHospital); // POST a new hospital
// router.put('/:id', authMiddleware, updateHospital); // PUT update a hospital
// router.delete('/:id', authMiddleware, deleteHospital); // DELETE a hospital

// module.exports = router;
