// import React, { useState } from 'react';
// import SigninForm from './SignIn'; // Import SignIn form
// import SignupForm from './SignUp'; // Import SignUp form

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showSignin, setShowSignin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false); // State to control display of SignUp form

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     setShowSignin(false); // Hide SignIn form on login
//     setShowSignup(false); // Hide SignUp form on login
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="p-4 flex items-center justify-between bg-white shadow-lg">
//         {/* Left Section */}
//         <div className="flex items-center space-x-2">
//           <img src="/logo.png" alt="Logo" className="h-8 w-8" />
//         </div>

//         {/* Center Section */}
//         <div className="flex-grow text-center">
//           <span className="text-2xl font-bold">CareCompass</span>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center space-x-4">
//           {isLoggedIn ? (
//             <>
//               <button className="rounded-full overflow-hidden h-10 w-10">
//                 <img 
//                   src="/user.jpg" 
//                   alt="Profile" 
//                   className="h-full w-full object-cover"
//                 />
//               </button>
//               <button 
//                 onClick={handleLogout} 
//                 className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <button 
//                 onClick={() => { setShowSignin(true); setShowSignup(false); }} // Show SignIn form
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//               >
//                 Login
//               </button>
//               <button 
//                 onClick={() => { setShowSignup(true); setShowSignin(false); }} // Show SignUp form
//                 className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
//               >
//                 Sign Up
//               </button>
//             </>
//           )}
//         </div>
//       </nav>

//       {/* Conditional rendering of SignInForm or SignUpForm */}
//       {showSignin && (
//         <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
//           <div className="relative bg-white shadow-lg p-8 rounded-lg">
//             {/* Styled Close Button */}
//             <button
//               onClick={() => setShowSignin(false)}
//               className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 shadow-md hover:shadow-lg focus:outline-none transition-all duration-200 ease-in-out"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             <SigninForm onLogin={handleLogin} />
//           </div>
//         </div>
//       )}

//       {showSignup && (
//         <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
//           <div className="relative bg-white shadow-lg p-8 rounded-lg">
//             {/* Styled Close Button */}
//             <button
//               onClick={() => setShowSignup(false)}
//               className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 shadow-md hover:shadow-lg focus:outline-none transition-all duration-200 ease-in-out"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             <SignupForm onSignup={handleLogin} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import SigninForm from './SignIn'; // Import SignIn form
import SignupForm from './SignUp'; // Import SignUp form

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false); // State to control display of SignUp form

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowSignin(false); // Hide SignIn form on login
    setShowSignup(false); // Hide SignUp form on login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="p-4 flex items-center justify-between bg-white shadow-lg">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        </div>

        {/* Center Section */}
        <div className="flex-grow text-center">
          <span className="text-2xl font-bold">CareCompass</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <button className="rounded-full overflow-hidden h-10 w-10">
                <img 
                  src="/user.jpg" 
                  alt="Profile" 
                  className="h-full w-full object-cover"
                />
              </button>
              <button 
                onClick={handleLogout} 
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => { setShowSignin(true); setShowSignup(false); }} // Show SignIn form
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Login
              </button>
              <button 
                onClick={() => { setShowSignup(true); setShowSignin(false); }} // Show SignUp form
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Conditional rendering of SignInForm or SignUpForm */}
      {showSignin && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
          <div className="relative bg-white shadow-lg p-8 rounded-lg">
            {/* Styled Close Button */}
            <button
              onClick={() => setShowSignin(false)}
              className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 shadow-md hover:shadow-lg focus:outline-none transition-all duration-200 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <SigninForm onLogin={handleLogin} onClose={() => setShowSignin(false)} /> {/* Pass onClose */}
          </div>
        </div>
      )}

      {showSignup && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
          <div className="relative bg-white shadow-lg p-8 rounded-lg">
            {/* Styled Close Button */}
            <button
              onClick={() => setShowSignup(false)}
              className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 shadow-md hover:shadow-lg focus:outline-none transition-all duration-200 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <SignupForm onSignup={handleLogin} onClose={() => setShowSignup(false)} /> {/* Pass onClose */}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
