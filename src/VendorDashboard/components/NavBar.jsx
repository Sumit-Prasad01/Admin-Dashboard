import React from "react";

const NavBar = ({ showLoginHandler, showRegisterHandler, showLogOut, logOutHandler }) => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/assets/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
        <span className="ml-3 text-lg font-semibold text-gray-800">Vendor Dashboard</span>
      </div>

      {/* Authentication */}
      <div>
        {!showLogOut ? (
          <div className="space-x-4">
            <button onClick={showLoginHandler} className="text-gray-700 hover:text-blue-600 transition">
              Login
            </button>
            <button onClick={showRegisterHandler} className="text-gray-700 hover:text-blue-600 transition">
              Register
            </button>
          </div>
        ) : (
          <button
            onClick={logOutHandler}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
