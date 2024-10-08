const express = require('express');
const {
  getHospitals,
  createHospital,
  updateHospital,
  deleteHospital,
} = require('../Controllers/HospitalController');

const router = express.Router();

router.get('/', getHospitals); // Usage of get route to get all hospitals
router.post('/', createHospital); // Usage of post route to create a new hospital
router.put('/:id', updateHospital); // Usage of put route to update a hospital
router.delete('/:id', deleteHospital); // DELETE a hospital

module.exports = router;