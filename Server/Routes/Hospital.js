const express = require('express');
const {
  getHospitals,
  createHospital,
  updateHospital,
  deleteHospital,
} = require('../Controllers/HospitalController');

const router = express.Router();

router.get('/', getHospitals); // Usage of get route to get all hospitals
router.post('/', createHospital); // POST a new hospital
router.put('/:id', updateHospital); // PUT update a hospital
router.delete('/:id', deleteHospital); // DELETE a hospital

module.exports = router;