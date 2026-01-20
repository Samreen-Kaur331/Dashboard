import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-4 py-3">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        
        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Dashboard Overview
        </h2>

        {/* Right section */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          
          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="
              border 
              px-3 
              py-2 
              rounded-lg 
              w-full 
              sm:w-64
              focus:outline-none
              focus:ring-2
              focus:ring-black
            "
          />

          {/* Avatar */}
          <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
