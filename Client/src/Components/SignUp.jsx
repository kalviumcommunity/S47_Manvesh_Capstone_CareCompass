// // import React, { useState } from 'react';
// // import SignUpWithGoogle from './SignUpWithGoogle';

// // const SignupForm = ({ onToggle }) => {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [error, setError] = useState('');

// //   const validatePassword = (password) => {
// //     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
// //     return regex.test(password);
// //   };

// //   const handleSignup = (e) => {
// //     e.preventDefault();
    
// //     if (!validatePassword(password)) {
// //       setError('Password must have at least 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character.');
// //       return;
// //     }

// //     if (password !== confirmPassword) {
// //       setError('Passwords do not match.');
// //       return;
// //     }

// //     setError('');
// //     console.log('Sign Up Form Submitted:', { username, email, password });
// //   };

// //   return (
// //     <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8">
// //       <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Create an Account</h2>
// //       <form onSubmit={handleSignup} className="space-y-6">
// //         <div>
// //           <label className="block text-sm font-semibold text-gray-600">Username</label>
// //           <input
// //             type="text"
// //             placeholder="Enter your username"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-semibold text-gray-600">Email</label>
// //           <input
// //             type="email"
// //             placeholder="Enter your email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-semibold text-gray-600">Password</label>
// //           <input
// //             type="password"
// //             placeholder="Enter your password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-semibold text-gray-600">Confirm Password</label>
// //           <input
// //             type="password"
// //             placeholder="Confirm your password"
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //             required
// //             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
// //           />
// //         </div>
// //         <div>
// //           <button
// //             type="submit"
// //             className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 active:scale-95 duration-300"
// //           >
// //             Sign Up
// //           </button>
// //         </div>
// //         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
// //       </form>
// //       <div className="mt-6 text-center">
// //         <p className="text-sm text-gray-600">
// //           Already have an account? 
// //           <button onClick={onToggle} className="text-indigo-500 hover:text-indigo-700 font-medium"> Sign In</button>
// //         </p>
// //         <SignUpWithGoogle/>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignupForm;

// // import React, { useState } from 'react';
// // import axiosInstance from '../Components/axiosInstance'; // Axios instance
// // import SignUpWithGoogle from './SignUpWithGoogle'; // Component for Google signup

// // const SignupForm = ({ onToggle }) => {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [error, setError] = useState('');

// //   // Function to validate password
// //   const validatePassword = (password) => {
// //     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
// //     return regex.test(password);
// //   };

// //   // Function to handle signup form submission
// //   const handleSignup = async (e) => {
// //     e.preventDefault();

// //     // Validate password format
// //     if (!validatePassword(password)) {
// //       setError('Password must have at least 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character.');
// //       return;
// //     }

// //     // Ensure password and confirm password match
// //     if (password !== confirmPassword) {
// //       setError('Passwords do not match.');
// //       return;
// //     }
    
// //     console.log('User registered successfully:', response.data);
// //     try {
// //       // Call the backend API for signup
// //       const response = await axiosInstance.post('/signup', {
// //         username,
// //         email,
// //         password,
// //       });

// //       // Handle successful signup
// //       setError('');
// //       // You can redirect the user or show a success message here

// //     } catch (error) {
// //       // Handle signup error
// //       console.error('Error during sign up:', error);
// //       setError(error.response?.data?.message || 'Failed to sign up.');
// //     }
// //   };

// //   return (
// //     <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8">
// //       <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Create an Account</h2>
// //       <form onSubmit={handleSignup} className="space-y-6">
// //         <div>
// //           <label className="block text-sm font-semibold text-gray-600">Username</label>
// //           <input
// //             type="text"
// //             placeholder="Enter your username"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-semibold text-gray-600">Email</label>
// //           <input
// //             type="email"
// //             placeholder="Enter your email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-semibold text-gray-600">Password</label>
// //           <input
// //             type="password"
// //             placeholder="Enter your password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-semibold text-gray-600">Confirm Password</label>
// //           <input
// //             type="password"
// //             placeholder="Confirm your password"
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //             required
// //             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
// //           />
// //         </div>
// //         <div>
// //           <button
// //             type="submit"
// //             className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 active:scale-95 duration-300"
// //           >
// //             Sign Up
// //           </button>
// //         </div>
// //         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
// //       </form>
// //       <div className="mt-6 text-center">
// //         <p className="text-sm text-gray-600">
// //           Already have an account? 
// //           <button onClick={onToggle} className="text-indigo-500 hover:text-indigo-700 font-medium"> Sign In</button>
// //         </p>
// //         <SignUpWithGoogle/>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignupForm;

// // import React, { useState } from 'react';
// // import axiosInstance from '../Components/axiosInstance'; // Axios instance for API requests
// // import SignUpWithGoogle from './SignUpWithGoogle'; // Component for Google signup

// // const SignupForm = ({ onToggle }) => {
// //   const [username, setUsername] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [error, setError] = useState('');

// //   // Function to validate password
// //   const validatePassword = (password) => {
// //     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
// //     return regex.test(password);
// //   };

// //   // Function to handle signup form submission
// //   const handleSignup = async (e) => {
// //     e.preventDefault();

// //     // Validate password format
// //     if (!validatePassword(password)) {
// //       setError('Password must have at least 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character.');
// //       return;
// //     }

// //     // Ensure password and confirm password match
// //     if (password !== confirmPassword) {
// //       setError('Passwords do not match.');
// //       return;
// //     }

// //     try {
// //       // Call the backend API for signup
// //       const response = await axiosInstance.post('/signup', {
// //         username,
// //         email,
// //         password,
// //       });

// //       // Log success and handle the response data
// //       console.log('User registered successfully:', response.data);

// //       // Clear any previous error
// //       setError('');

// //       // You can redirect the user or show a success message here

// //     } catch (error) {
// //       // Handle signup error
// //       console.error('Error during sign up:', error);
// //       setError(error.response?.data?.message || 'Failed to sign up.');
// //     }
// //   };

// //   return (
// //     <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8">
// //       <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Create an Account</h2>
// //       <form onSubmit={handleSignup} className="space-y-6">
// //         <div>
// //           <label className="block text-sm font-semibold text-gray-600">Username</label>
// //           <input
// //             type="text"
// //             placeholder="Enter your username"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-semibold text-gray-600">Email</label>
// //           <input
// //             type="email"
// //             placeholder="Enter your email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-semibold text-gray-600">Password</label>
// //           <input
// //             type="password"
// //             placeholder="Enter your password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
// //           />
// //         </div>
// //         <div>
// //           <label className="block text-sm font-semibold text-gray-600">Confirm Password</label>
// //           <input
// //             type="password"
// //             placeholder="Confirm your password"
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //             required
// //             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
// //           />
// //         </div>
// //         <div>
// //           <button
// //             type="submit"
// //             className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 active:scale-95 duration-300"
// //           >
// //             Sign Up
// //           </button>
// //         </div>
// //         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
// //       </form>
// //       <div className="mt-6 text-center">
// //         <p className="text-sm text-gray-600">
// //           Already have an account? 
// //           <button onClick={onToggle} className="text-indigo-500 hover:text-indigo-700 font-medium"> Sign In</button>
// //         </p>
// //         <SignUpWithGoogle />
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignupForm;
// // src/Components/SignUp.jsx
// import React, { useState } from 'react';
// import SignUpWithGoogle from './SignUpWithGoogle'; // Import your Google signup component

// const SignupForm = ({ onToggle }) => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   // Function to validate password
//   const validatePassword = (password) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
//     return regex.test(password);
//   };

//   // Function to handle signup form submission
//   const handleSignup = async (e) => {
//     e.preventDefault();

//     // Validate password format
//     if (!validatePassword(password)) {
//       setError('Password must have at least 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character.');
//       return;
//     }

//     // Ensure password and confirm password match
//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     try {
//       // Call the backend API for signup using fetch
//       const response = await fetch('/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           email,
//           password,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to sign up');
//       }

//       const data = await response.json();
//       console.log('User registered successfully:', data);

//       // Clear any previous error
//       setError('');
//       // You can redirect the user or show a success message here

//     } catch (error) {
//       // Handle signup error
//       console.error('Error during sign up:', error);
//       setError('Failed to sign up.');
//     }
//   };

//   return (
//     <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8">
//       <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Create an Account</h2>
//       <form onSubmit={handleSignup} className="space-y-6">
//         <div>
//           <label className="block text-sm font-semibold text-gray-600">Username</label>
//           <input
//             type="text"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-600">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-600">Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-600">Confirm Password</label>
//           <input
//             type="password"
//             placeholder="Confirm your password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
//           />
//         </div>
//         <div>
//           <button
//             type="submit"
//             className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 active:scale-95 duration-300"
//           >
//             Sign Up
//           </button>
//         </div>
//         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//       </form>
//       <div className="mt-6 text-center">
//         <p className="text-sm text-gray-600">
//           Already have an account? 
//           <button onClick={onToggle} className="text-indigo-500 hover:text-indigo-700 font-medium"> Sign In</button>
//         </p>
//         <SignUpWithGoogle />
//       </div>
//     </div>
//   );
// };

// export default SignupForm; // Ensure this is a default export
// import React, { useState } from 'react';
// import SignUpWithGoogle from './SignUpWithGoogle'; // Import your Google signup component

// const SignupForm = ({ onToggle }) => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   // Function to validate password
//   const validatePassword = (password) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
//     return regex.test(password);
//   };

//   // Function to handle signup form submission
//   const handleSignup = async (e) => {
//     e.preventDefault();

//     // Validate password format
//     if (!validatePassword(password)) {
//       setError('Password must have at least 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character.');
//       return;
//     }

//     // Ensure password and confirm password match
//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     try {
//       // Call the backend API for signup using fetch
//       const response = await fetch('http://localhost:5000/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           email,
//           password,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to sign up');
//       }

//       const data = await response.json();
//       console.log('User registered successfully:', data);

//       // Clear any previous error
//       setError('');
//       // You can redirect the user or show a success message here

//     } catch (error) {
//       // Handle signup error
//       console.error('Error during sign up:', error);
//       setError('Failed to sign up.');
//     }
//   };

//   return (
//     <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8">
//       <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Create an Account</h2>
//       <form onSubmit={handleSignup} className="space-y-6">
//         <div>
//           <label className="block text-sm font-semibold text-gray-600">Username</label>
//           <input
//             type="text"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-600">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-600">Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-600">Confirm Password</label>
//           <input
//             type="password"
//             placeholder="Confirm your password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
//           />
//         </div>
//         <div>
//           <button
//             type="submit"
//             className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 active:scale-95 duration-300"
//           >
//             Sign Up
//           </button>
//         </div>
//         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//       </form>
//       <div className="mt-6 text-center">
//         <p className="text-sm text-gray-600">
//           Already have an account? 
//           <button onClick={onToggle} className="text-indigo-500 hover:text-indigo-700 font-medium"> Sign In</button>
//         </p>
//         <SignUpWithGoogle />
//       </div>
//     </div>
//   );
// };

// export default SignupForm;
// import React, { useState, useEffect } from 'react';
// import SignUpWithGoogle from './SignUpWithGoogle'; // Import your Google signup component

// const SignupForm = ({ onToggle, onClose }) => { // Add onClose prop
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [userType, setUserType] = useState('User'); // State for user type
//   const [error, setError] = useState('');

//   // Function to validate password
//   const validatePassword = (password) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
//     return regex.test(password);
//   };

//   // Function to handle signup form submission
//   const handleSignup = async (e) => {
//     e.preventDefault();

//     // Validate password format
//     if (!validatePassword(password)) {
//       setError('Password must have at least 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character.');
//       return;
//     }

//     // Ensure password and confirm password match
//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     try {
//       // Call the backend API for signup using fetch
//       const response = await fetch('http://localhost:5000/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username,
//           email,
//           password,
//           userType, // Include userType in the payload
//         }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json(); // Get the error response from the server
//         throw new Error(errorData.message || 'Failed to sign up'); // Use error message from server if available
//       }

//       const data = await response.json();
//       console.log('User registered successfully:', data);

//       // Clear any previous error
//       setError('');
//       // You can redirect the user or show a success message here

//     } catch (error) {
//       // Handle signup error
//       console.error('Error during sign up:', error);
//       setError('Failed to sign up. ' + error.message); // Display specific error message
//     }
//   };

//   // Effect to handle escape key press
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         onClose(); // Call the onClose function passed as a prop
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   return (
//     <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8">
//       <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Create an Account</h2>
//       <form onSubmit={handleSignup} className="space-y-6">
//         <div>
//           <label className="block text-sm font-semibold text-gray-600">Username</label>
//           <input
//             type="text"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-600">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-600">Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-600">Confirm Password</label>
//           <input
//             type="password"
//             placeholder="Confirm your password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-semibold text-gray-600">User Type</label>
//           <select
//             value={userType}
//             onChange={(e) => setUserType(e.target.value)}
//             className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
//           >
//             <option value="User">User</option>
//             <option value="Hospital/Admin">Hospital/Admin</option>
//           </select>
//         </div>
//         <div>
//           <button
//             type="submit"
//             className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 active:scale-95 duration-300"
//           >
//             Sign Up
//           </button>
//         </div>
//         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//       </form>
//       <div className="mt-6 text-center">
//         <p className="text-sm text-gray-600">
//           Already have an account? 
//           <button onClick={onToggle} className="text-indigo-500 hover:text-indigo-700 font-medium"> Sign In</button>
//         </p>
//         <SignUpWithGoogle />
//       </div>
//     </div>
//   );
// };


// export default SignupForm;
import React, { useState, useEffect } from 'react';
import SignUpWithGoogle from './SignUpWithGoogle'; // Import your Google signup component

const SignupForm = ({ onToggle, onClose }) => { // Add onClose prop
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('User'); // State for user type
  const [error, setError] = useState('');

  // Function to validate password
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return regex.test(password);
  };

  // Function to handle signup form submission
  const handleSignup = async (e) => {
    e.preventDefault();

    // Validate password format
    if (!validatePassword(password)) {
      setError('Password must have at least 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character.');
      return;
    }

    // Ensure password and confirm password match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Call the backend API for signup using fetch
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          userType, // Include userType in the payload
        }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Get the error response from the server
        throw new Error(errorData.message || 'Failed to sign up'); // Use error message from server if available
      }

      const data = await response.json();
      console.log('User registered successfully:', data);

      // Clear any previous error
      setError('');
      onClose(); // Call onClose after successful signup
      // You can redirect the user or show a success message here

    } catch (error) {
      // Handle signup error
      console.error('Error during sign up:', error);
      setError('Failed to sign up. ' + error.message); // Display specific error message
    }
  };

  // Effect to handle escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose(); // Call the onClose function passed as a prop
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Create an Account</h2>
      <form onSubmit={handleSignup} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-600">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-600">User Type</label>
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
          >
            <option value="User">User</option>
            <option value="Hospital/Admin">Hospital/Admin</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 active:scale-95 duration-300"
          >
            Sign Up
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account? 
          <button onClick={() => { onToggle(); onClose(); }} className="text-indigo-500 hover:text-indigo-700 font-medium"> Sign In</button>
        </p>
        <SignUpWithGoogle />
      </div>
    </div>
  );
};

export default SignupForm;
