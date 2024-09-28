import React, { useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
      </div>
      
      <div className="flex items-center space-x-2 mx-4">
      <span className="text-xl font-bold">CareCompass</span>


 
      </div>
      
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <button 
              className="rounded-full overflow-hidden h-10 w-10"
            >
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
              onClick={handleLogin} 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
