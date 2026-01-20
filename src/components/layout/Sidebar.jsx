import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Overlay (mobile only) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 sm:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed sm:static z-40
          h-screen w-64
          bg-gray-900 text-white font-bold p-5
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0
        `}
      >
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded 
              ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`
            }
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/board"
            className={({ isActive }) =>
              `px-4 py-2 rounded 
              ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`
            }
            onClick={() => setIsOpen(false)}
          >
            Board
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `px-4 py-2 rounded 
              ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`
            }
            onClick={() => setIsOpen(false)}
          >
            Settings
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
