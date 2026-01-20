import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 sm:hidden touch-none"
        />
      )}

      <aside
        role="navigation"
        aria-label="Sidebar"
        className={`
          fixed sm:static z-40
          h-screen w-64 overflow-y-auto
          bg-gray-900 text-white font-bold p-5
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0
        `}
      >
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        <nav className="flex flex-col gap-3">
          {[
            { to: "/", label: "Dashboard" },
            { to: "/board", label: "Board" },
            { to: "/settings", label: "Settings" }
          ].map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded transition
                 focus:outline-none focus:ring-2 focus:ring-gray-400
                 ${isActive ? "bg-gray-700" : "hover:bg-gray-700"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
