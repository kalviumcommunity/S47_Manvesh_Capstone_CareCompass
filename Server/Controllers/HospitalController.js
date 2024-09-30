const Hospital = require('../Models/Hospital');

// Get all hospitals
exports.getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hospitals' });
  }
};

// Create a new hospital
exports.createHospital = async (req, res) => {
  try {
    const newHospital = await Hospital.create(req.body);
    res.status(201).json(newHospital);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create hospital' });
  }
};

// Update a hospital
exports.updateHospital = async (req, res) => {
  try {
    const updatedHospital = await Hospital.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedHospital);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update hospital' });
  }
};

// Delete a hospital
exports.deleteHospital = async (req, res) => {
  try {
    await Hospital.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete hospital' });
  }
};
