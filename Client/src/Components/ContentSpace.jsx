import React from 'react';
import HospitalCard from './HospitalCard'; // Import the HospitalCard component

const hospitals = [
  {
    id: 1,
    name: 'City Hospital',
    specialty: 'Cardiology',
    address: '123 Main St, Springfield',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkwveVnYz2YjJp5ch9qZC47JgKcvFli1EOw&s', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Greenwood Medical Center',
    specialty: 'Neurology',
    address: '456 Elm St, Springfield',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkwveVnYz2YjJp5ch9qZC47JgKcvFli1EOw&s',
  },
  {
    id: 3,
    name: 'Sunrise Clinic',
    specialty: 'Pediatrics',
    address: '789 Oak St, Springfield',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfkwveVnYz2YjJp5ch9qZC47JgKcvFli1EOw&s',
  },
  // Add more hospitals as needed
];

const ContentSpace = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Hospitals Near You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hospitals.map((hospital) => (
          <HospitalCard key={hospital.id} hospital={hospital} />
        ))}
      </div>
    </div>
  );
};

export default ContentSpace;
