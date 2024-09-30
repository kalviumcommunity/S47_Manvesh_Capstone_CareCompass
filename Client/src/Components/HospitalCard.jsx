// import React from 'react';

// const HospitalCard = ({ hospital, onEdit, onDelete }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-4">
//       <img src={hospital.imageUrl} alt={hospital.name} className="w-full h-48 object-cover rounded-lg" />
//       <h3 className="text-xl font-bold mt-4">{hospital.name}</h3>
//       <p className="text-gray-600">{hospital.specialty}</p>
//       <p className="text-gray-600">{hospital.address}</p>

//       {/* Buttons for edit and delete */}
//       <div className="mt-4 flex space-x-4">
//         <button
//           onClick={onEdit}
//           className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
//         >
//           Edit
//         </button>
//         <button
//           onClick={onDelete}
//           className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HospitalCard;

import React from 'react';

const HospitalCard = ({ hospital, onEdit, onDelete }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col">
      <img src={hospital.imageUrl} alt={hospital.name} className="h-32 w-full object-cover rounded-md mb-4" />
      <h3 className="text-lg font-bold">{hospital.name}</h3>
      <p className="text-sm text-gray-600">Specialty: {hospital.specialty}</p>
      <p className="text-sm text-gray-600">Address: {hospital.address}</p>
      <div className="mt-auto flex justify-between">
        <button onClick={onEdit} className="mt-2 py-1 px-2 bg-blue-600 text-white rounded">
          Edit
        </button>
        <button onClick={onDelete} className="mt-2 py-1 px-2 bg-red-600 text-white rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;
