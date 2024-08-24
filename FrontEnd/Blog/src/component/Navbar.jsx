// src/component/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">Fashion Blog</div>

        {/* Menu Items */}
        <ul className="flex space-x-10 justify-between text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-gray-400 cursor-pointer ${
                  isActive ? "text-gray-400" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-gray-400 cursor-pointer ${
                  isActive ? "text-gray-400" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-gray-400 cursor-pointer ${
                  isActive ? "text-gray-400" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
