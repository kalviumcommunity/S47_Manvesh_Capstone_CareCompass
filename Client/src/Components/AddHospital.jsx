import React, { useState } from 'react';

const AddHospital = () => {
  // State to store hospital data and new hospitals
  const [hospitalData, setHospitalData] = useState({
    name: '',
    location: '',
    availableSlots: '',
  });

  const [hospitalList, setHospitalList] = useState([]);

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHospitalData({
      ...hospitalData,
      [name]: value,
    });
  };

  // Function to add a new hospital to the list
  const handleAddHospital = () => {
    setHospitalList([...hospitalList, hospitalData]);
    // Reset form after submission
    setHospitalData({
      name: '',
      location: '',
      availableSlots: '',
    });
  };

  return (
    <div>
      <h2>Add New Hospital</h2>
      <form>
        <div>
          <label>Hospital Name:</label>
          <input
            type="text"
            name="name"
            value={hospitalData.name}
            onChange={handleInputChange}
            placeholder="Enter hospital name"
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={hospitalData.location}
            onChange={handleInputChange}
            placeholder="Enter location"
          />
        </div>
        <div>
          <label>Available Slots:</label>
          <input
            type="number"
            name="availableSlots"
            value={hospitalData.availableSlots}
            onChange={handleInputChange}
            placeholder="Enter available slots"
          />
        </div>
        <button type="button" onClick={handleAddHospital}>
          Add Hospital
        </button>
      </form>

      {/* Render hospital cards */}
      <div style={{ marginTop: '20px' }}>
        <h3>Hospital List:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {hospitalList.map((hospital, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                margin: '10px',
                borderRadius: '8px',
                width: '200px',
              }}
            >
              <h4>{hospital.name}</h4>
              <p>Location: {hospital.location}</p>
              <p>Available Slots: {hospital.availableSlots}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddHospital;
