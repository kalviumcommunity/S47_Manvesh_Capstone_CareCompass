// import React, { useState, useEffect } from 'react';
// import HospitalCard from './HospitalCard'; // Import HospitalCard component
// import Modal from './Modal'; // Import Modal component

// // Sample initial data for hospitals
// const initialHospitals = [
//   {
//     id: 1,
//     name: 'City Hospital',
//     specialty: 'Cardiology',
//     address: '123 Main St, Springfield',
//     imageUrl: 'https://via.placeholder.com/300',
//   },
//   {
//     id: 2,
//     name: 'Greenwood Medical Center',
//     specialty: 'Neurology',
//     address: '456 Elm St, Springfield',
//     imageUrl: 'https://via.placeholder.com/300',
//   },
//   {
//     id: 3,
//     name: 'Sunrise Clinic',
//     specialty: 'Pediatrics',
//     address: '789 Oak St, Springfield',
//     imageUrl: 'https://via.placeholder.com/300',
//   },
// ];

// const AdminContent = () => {
//   // States
//   const [hospitals, setHospitals] = useState(initialHospitals); // List of hospitals
//   const [selectedHospital, setSelectedHospital] = useState(null); // Currently selected hospital for editing
//   const [formData, setFormData] = useState({
//     name: '',
//     specialty: '',
//     address: '',
//     imageUrl: '',
//   }); // Form data for the modal
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

//   // Handle click on "Edit" for a hospital
//   const handleEditClick = (hospital) => {
//     setSelectedHospital(hospital);
//     setFormData({
//       name: hospital.name,
//       specialty: hospital.specialty,
//       address: hospital.address,
//       imageUrl: hospital.imageUrl,
//     });
//     setIsModalOpen(true); // Open modal for editing
//   };

//   // Handle changes in the input fields
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle saving (either edit or add new hospital)
//   const handleSave = () => {
//     if (selectedHospital) {
//       // Editing existing hospital
//       const updatedHospitals = hospitals.map((hospital) =>
//         hospital.id === selectedHospital.id ? { ...hospital, ...formData } : hospital
//       );
//       setHospitals(updatedHospitals);
//     } else {
//       // Adding a new hospital
//       const newHospital = { id: Date.now(), ...formData }; // Use Date.now() for unique id
//       setHospitals([...hospitals, newHospital]);
//     }
//     resetForm(); // Clear form and close modal
//   };

//   // Handle deleting a hospital
//   const handleDelete = (id) => {
//     const updatedHospitals = hospitals.filter((hospital) => hospital.id !== id);
//     setHospitals(updatedHospitals);
//   };

//   // Reset form and close modal
//   const resetForm = () => {
//     setSelectedHospital(null);
//     setFormData({ name: '', specialty: '', address: '', imageUrl: '' }); // Clear form
//     setIsModalOpen(false); // Close modal
//   };

//   // Handle escape key press to close modal
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         resetForm(); // Close modal on Escape key
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div className="p-8">
//       <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Admin Panel</h2>
//       <button
//         onClick={() => {
//           resetForm(); // Clear selected hospital and open modal for adding
//         }}
//         className="mb-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
//       >
//         Add Hospital
//       </button>
      
//       {/* Hospital List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//         {hospitals.map((hospital) => (
//           <div key={hospital.id}>
//             <HospitalCard 
//               hospital={hospital} 
//               onEdit={() => handleEditClick(hospital)} 
//               onDelete={() => handleDelete(hospital.id)} 
//             />
//           </div>
//         ))}
//       </div>

//       {/* Modal for adding/editing hospital */}
//       <Modal isOpen={isModalOpen} onClose={resetForm}>
//         <h3 className="text-2xl font-bold text-gray-800 mb-4">
//           {selectedHospital ? 'Edit Hospital' : 'Add New Hospital'}
//         </h3>
//         <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//           <div>
//             <label className="block text-sm font-semibold text-gray-600">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold text-gray-600">Specialty</label>
//             <input
//               type="text"
//               name="specialty"
//               value={formData.specialty}
//               onChange={handleChange}
//               className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold text-gray-600">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold text-gray-600">Image URL</label>
//             <input
//               type="text"
//               name="imageUrl"
//               value={formData.imageUrl}
//               onChange={handleChange}
//               className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <button
//             type="button"
//             onClick={handleSave}
//             className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:bg-indigo-700"
//           >
//             {selectedHospital ? 'Save Changes' : 'Add Hospital'}
//           </button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default AdminContent;

// import React, { useState, useEffect } from 'react';
// import HospitalCard from './HospitalCard'; // Import HospitalCard component
// import Modal from './Modal'; // Import Modal component

// const AdminContent = () => {
//   // States
//   const [hospitals, setHospitals] = useState([]); // List of hospitals
//   const [selectedHospital, setSelectedHospital] = useState(null); // Currently selected hospital for editing
//   const [formData, setFormData] = useState({
//     name: '',
//     specialty: '',
//     address: '',
//     imageUrl: '',
//   }); // Form data for the modal
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

//   // Fetch hospitals from the backend on component mount
//   useEffect(() => {
//     const fetchHospitals = async () => {
//       const response = await fetch('http://localhost:5000/api/hospitals');
//       const data = await response.json();
//       setHospitals(data);
//     };

//     fetchHospitals();
//   }, []);

//   // Handle click on "Edit" for a hospital
//   const handleEditClick = (hospital) => {
//     setSelectedHospital(hospital);
//     setFormData({
//       name: hospital.name,
//       specialty: hospital.specialty,
//       address: hospital.address,
//       imageUrl: hospital.imageUrl,
//     });
//     setIsModalOpen(true); // Open modal for editing
//   };

//   // Handle changes in the input fields
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle saving (either edit or add new hospital)
//   const handleSave = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/hospitals', {
//         method: selectedHospital ? 'PUT' : 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const newHospital = await response.json();
//       if (selectedHospital) {
//         const updatedHospitals = hospitals.map((hospital) =>
//           hospital._id === selectedHospital._id ? newHospital : hospital
//         );
//         setHospitals(updatedHospitals);
//       } else {
//         setHospitals([...hospitals, newHospital]);
//       }

//       resetForm(); // Clear form and close modal
//     } catch (error) {
//       console.error('Error saving hospital:', error);
//     }
//   };

//   // Handle deleting a hospital
//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/hospitals/${id}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       setHospitals(hospitals.filter((hospital) => hospital._id !== id));
//     } catch (error) {
//       console.error('Error deleting hospital:', error);
//     }
//   };

//   // Reset form and close modal
//   const resetForm = () => {
//     setSelectedHospital(null);
//     setFormData({ name: '', specialty: '', address: '', imageUrl: '' }); // Clear form
//     setIsModalOpen(false); // Close modal
//   };

//   // Handle escape key press to close modal
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         resetForm(); // Close modal on Escape key
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div className="p-8">
//       <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Admin Panel</h2>
//       <button
//         onClick={() => {
//           resetForm(); // Clear selected hospital and open modal for adding
//         }}
//         className="mb-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
//       >
//         Add Hospital
//       </button>
      
//       {/* Hospital List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//         {hospitals.map((hospital) => (
//           <div key={hospital._id}>
//             <HospitalCard 
//               hospital={hospital} 
//               onEdit={() => handleEditClick(hospital)} 
//               onDelete={() => handleDelete(hospital._id)} 
//             />
//           </div>
//         ))}
//       </div>

//       {/* Modal for adding/editing hospital */}
//       <Modal isOpen={isModalOpen} onClose={resetForm}>
//         <h3 className="text-2xl font-bold text-gray-800 mb-4">
//           {selectedHospital ? 'Edit Hospital' : 'Add New Hospital'}
//         </h3>
//         <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//           <div>
//             <label className="block text-sm font-semibold text-gray-600">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold text-gray-600">Specialty</label>
//             <input
//               type="text"
//               name="specialty"
//               value={formData.specialty}
//               onChange={handleChange}
//               className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold text-gray-600">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold text-gray-600">Image URL</label>
//             <input
//               type="text"
//               name="imageUrl"
//               value={formData.imageUrl}
//               onChange={handleChange}
//               className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <button
//             type="button"
//             onClick={handleSave}
//             className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:bg-indigo-700"
//           >
//             {selectedHospital ? 'Save Changes' : 'Add Hospital'}
//           </button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default AdminContent;
// import React, { useState, useEffect } from 'react';
// import HospitalCard from './HospitalCard'; // Import HospitalCard component
// import Modal from './Modal'; // Import Modal component

// const AdminContent = () => {
//   // States
//   const [hospitals, setHospitals] = useState([]); // List of hospitals
//   const [selectedHospital, setSelectedHospital] = useState(null); // Currently selected hospital for editing
//   const [formData, setFormData] = useState({
//     name: '',
//     specialty: '',
//     address: '',
//     imageUrl: '',
//   }); // Form data for the modal
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

//   // Fetch hospitals from the backend on component mount
//   useEffect(() => {
//     const fetchHospitals = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/hospitals');
//         if (!response.ok) {
//           throw new Error('Failed to fetch hospitals');
//         }
//         const data = await response.json();
//         setHospitals(data);
//       } catch (error) {
//         console.error('Error fetching hospitals:', error);
//       }
//     };

//     fetchHospitals();
//   }, []);

//   // Handle click on "Edit" for a hospital
//   const handleEditClick = (hospital) => {
//     setSelectedHospital(hospital);
//     setFormData({
//       name: hospital.name,
//       specialty: hospital.specialty,
//       address: hospital.address,
//       imageUrl: hospital.imageUrl,
//     });
//     setIsModalOpen(true); // Open modal for editing
//   };

//   // Handle changes in the input fields
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle saving (either edit or add new hospital)
//   const handleSave = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/hospitals', {
//         method: selectedHospital ? 'PUT' : 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to save hospital');
//       }

//       const newHospital = await response.json();
//       if (selectedHospital) {
//         const updatedHospitals = hospitals.map((hospital) =>
//           hospital._id === selectedHospital._id ? newHospital : hospital
//         );
//         setHospitals(updatedHospitals);
//       } else {
//         setHospitals([...hospitals, newHospital]);
//       }

//       resetForm(); // Clear form and close modal
//     } catch (error) {
//       console.error('Error saving hospital:', error);
//     }
//   };

//   // Handle deleting a hospital
//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/hospitals/${id}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete hospital');
//       }

//       setHospitals(hospitals.filter((hospital) => hospital._id !== id));
//     } catch (error) {
//       console.error('Error deleting hospital:', error);
//     }
//   };

//   // Reset form and close modal
//   const resetForm = () => {
//     setSelectedHospital(null);
//     setFormData({ name: '', specialty: '', address: '', imageUrl: '' }); // Clear form
//     setIsModalOpen(false); // Close modal
//   };

//   // Handle escape key press to close modal
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         resetForm(); // Close modal on Escape key
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div className="p-8">
//       <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Admin Panel</h2>
//       <button
//         onClick={() => {
//           resetForm(); // Clear selected hospital and open modal for adding
//           setIsModalOpen(true); // Open modal for adding a new hospital
//         }}
//         className="mb-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
//       >
//         Add Hospital
//       </button>
      
//       {/* Hospital List */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//         {hospitals.map((hospital) => (
//           <div key={hospital._id}>
//             <HospitalCard 
//               hospital={hospital} 
//               onEdit={() => handleEditClick(hospital)} 
//               onDelete={() => handleDelete(hospital._id)} 
//             />
//           </div>
//         ))}
//       </div>

//       {/* Modal for adding/editing hospital */}
//       <Modal isOpen={isModalOpen} onClose={resetForm}>
//         <h3 className="text-2xl font-bold text-gray-800 mb-4">
//           {selectedHospital ? 'Edit Hospital' : 'Add New Hospital'}
//         </h3>
//         <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//           <div>
//             <label className="block text-sm font-semibold text-gray-600">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold text-gray-600">Specialty</label>
//             <input
//               type="text"
//               name="specialty"
//               value={formData.specialty}
//               onChange={handleChange}
//               className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold text-gray-600">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold text-gray-600">Image URL</label>
//             <input
//               type="text"
//               name="imageUrl"
//               value={formData.imageUrl}
//               onChange={handleChange}
//               className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
//               required
//             />
//           </div>
//           <button
//             type="button"
//             onClick={handleSave}
//             className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:bg-indigo-700"
//           >
//             {selectedHospital ? 'Save Changes' : 'Add Hospital'}
//           </button>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default AdminContent;

import React, { useState, useEffect } from 'react';
import HospitalCard from './HospitalCard'; // Import HospitalCard component
import Modal from './Modal'; // Import Modal component

const AdminContent = () => {
    const [hospitals, setHospitals] = useState([]); // List of hospitals
    const [selectedHospital, setSelectedHospital] = useState(null); // Currently selected hospital for editing
    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        address: '',
        imageUrl: '',
    }); // Form data for the modal
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

    useEffect(() => {
        const fetchHospitals = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/hospitals');
                if (!response.ok) {
                    throw new Error('Failed to fetch hospitals');
                }
                const data = await response.json();
                setHospitals(data);
            } catch (error) {
                console.error('Error fetching hospitals:', error);
            }
        };

        fetchHospitals();
    }, []);

    const handleEditClick = (hospital) => {
        setSelectedHospital(hospital);
        setFormData({
            name: hospital.name,
            specialty: hospital.specialty,
            address: hospital.address,
            imageUrl: hospital.imageUrl,
        });
        setIsModalOpen(true); // Open modal for editing
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const url = selectedHospital 
                ? `http://localhost:5000/api/hospitals/${selectedHospital._id}` 
                : 'http://localhost:5000/api/hospitals';
            const method = selectedHospital ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to save hospital');
            }

            const newHospital = await response.json();
            if (selectedHospital) {
                const updatedHospitals = hospitals.map((hospital) =>
                    hospital._id === selectedHospital._id ? newHospital : hospital
                );
                setHospitals(updatedHospitals);
            } else {
                setHospitals([...hospitals, newHospital]);
            }

            resetForm(); // Clear form and close modal
        } catch (error) {
            console.error('Error saving hospital:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/hospitals/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete hospital');
            }

            setHospitals(hospitals.filter((hospital) => hospital._id !== id));
        } catch (error) {
            console.error('Error deleting hospital:', error);
        }
    };

    const resetForm = () => {
        setSelectedHospital(null);
        setFormData({ name: '', specialty: '', address: '', imageUrl: '' }); // Clear form
        setIsModalOpen(false); // Close modal
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                resetForm(); // Close modal on Escape key
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="p-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Admin Panel</h2>
            <button
                onClick={() => {
                    resetForm(); // Clear selected hospital and open modal for adding
                    setIsModalOpen(true); // Open modal for adding a new hospital
                }}
                className="mb-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
            >
                Add Hospital
            </button>
            
            {/* Hospital List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {hospitals.map((hospital) => (
                    <div key={hospital._id}>
                        <HospitalCard 
                            hospital={hospital} 
                            onEdit={() => handleEditClick(hospital)} 
                            onDelete={() => handleDelete(hospital._id)} 
                        />
                    </div>
                ))}
            </div>

            {/* Modal for adding/editing hospital */}
            <Modal isOpen={isModalOpen} onClose={resetForm}>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {selectedHospital ? 'Edit Hospital' : 'Add New Hospital'}
                </h3>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-600">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-600">Specialty</label>
                        <input
                            type="text"
                            name="specialty"
                            value={formData.specialty}
                            onChange={handleChange}
                            className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-600">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-600">Image URL</label>
                        <input
                            type="text"
                            name="imageUrl"
                            value={formData.imageUrl}
                            onChange={handleChange}
                            className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleSave}
                        className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:bg-indigo-700"
                    >
                        {selectedHospital ? 'Save Changes' : 'Add Hospital'}
                    </button>
                </form>
            </Modal>
        </div>
    );
};

export default AdminContent;
