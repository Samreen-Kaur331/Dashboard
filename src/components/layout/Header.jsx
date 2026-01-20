import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-3 shadow sm:px-6">
      
      {/* Left: Hamburger (mobile only) */}
      <button
        onClick={toggleSidebar}
        className="sm:hidden text-gray-700 focus:outline-none"
      >
        ☰
      </button>

      {/* Title */}
      <h1 className="text-lg font-semibold text-gray-800">
        Dashboard Overview
      </h1>

      {/* Right */}
      <div className="flex items-center gap-3">
        <input
          className="border rounded px-3 py-1 text-sm"
          placeholder="Search"
        />
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
