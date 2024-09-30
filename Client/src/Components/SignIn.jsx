// import React, { useState } from 'react';
// import SignInWithGoogle from './SignInWithGoogle';

// const SigninForm = ({ onToggle }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const validatePassword = (password) => {
//     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
//     return regex.test(password);
//   };

//   const handleSignin = (e) => {
//     e.preventDefault();
//     if (!validatePassword(password)) {
//       setError('Invalid password format.');
//       return;
//     }
//     setError('');
//     console.log('Sign In Form Submitted:', { email, password });
//   };

//   return (
//     <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8">
//       <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Sign In</h2>
//       <form onSubmit={handleSignin} className="space-y-6">
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
//           <button
//             type="submit"
//             className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 active:scale-95 duration-300"
//           >
//             Sign In
//           </button>
//         </div>
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account? 
//             <button onClick={onToggle} className="text-indigo-500 hover:text-indigo-700 font-medium"> Sign Up</button>
//           </p>
//           <SignInWithGoogle/>
//         </div>
//         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default SigninForm;

// import React, { useState } from 'react';
// import axios from '../Components/axiosInstance'; // Axios instance
// import SignInWithGoogle from './SignInWithGoogle';

// // const SigninForm = ({ onToggle }) => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [error, setError] = useState('');

// //   // Validate password based on the specified regex
// //   const validatePassword = (password) => {
// //     const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
// //     return regex.test(password);
// //   };

// //   // Handle sign-in
// //   const handleSignin = async (e) => {
// //     e.preventDefault();
// //     if (!validatePassword(password)) {
// //       setError('Invalid password format.');
// //       return;
// //     }
// //     setError('');

// //     try {
// //       const response = await axios.post('/auth/signin', { email, password });
// //       // Store the token in localStorage
// //       localStorage.setItem('token', response.data.token);
// //       console.log('Signed in successfully:', response.data);
// //       // Redirect the user to the dashboard or the appropriate page
// //     } catch (error) {
// //       console.error('Error during sign-in:', error.response ? error.response.data.message : error.message);
// //       setError(error.response?.data.message || 'An error occurred during sign-in.');
// //     }
// //   };

// //   return (
// //     <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8">
// //       <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Sign In</h2>
// //       <form onSubmit={handleSignin} className="space-y-6">
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
// //           <button
// //             type="submit"
// //             className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 active:scale-95 duration-300"
// //           >
// //             Sign In
// //           </button>
// //         </div>
// //         <div className="mt-6 text-center">
// //           <p className="text-sm text-gray-600">
// //             Don't have an account?{' '}
// //             <button onClick={onToggle} className="text-indigo-500 hover:text-indigo-700 font-medium"> Sign Up</button>
// //           </p>
// //           <SignInWithGoogle />
// //         </div>
// //         {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
// //       </form>
// //     </div>
// //   );
// // };

// // export default SigninForm;
import React, { useState, useEffect } from 'react';
import axios from '../Components/axiosInstance'; // Axios instance
import SignInWithGoogle from './SignInWithGoogle';

const SigninForm = ({ onToggle, onClose }) => { // Add onClose prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Validate password based on the specified regex
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return regex.test(password);
  };

  // Handle sign-in
  const handleSignin = async (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError('Invalid password format.');
      return;
    }
    setError('');

    try {
      const response = await axios.post('/auth/signin', { email, password });
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      console.log('Signed in successfully:', response.data);
      // Redirect the user to the dashboard or the appropriate page

    } catch (error) {
      console.error('Error during sign-in:', error.response ? error.response.data.message : error.message);
      setError(error.response?.data.message || 'An error occurred during sign-in.');
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
      <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">Sign In</h2>
      <form onSubmit={handleSignin} className="space-y-6">
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
          <button
            type="submit"
            className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 active:scale-95 duration-300"
          >
            Sign In
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button onClick={() => { onToggle(); onClose(); }} className="text-indigo-500 hover:text-indigo-700 font-medium"> Sign Up</button>
          </p>
          <SignInWithGoogle />
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default SigninForm;
