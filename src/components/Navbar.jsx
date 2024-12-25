import { NavbarData } from "../data/Navbar";
import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full h-[60px] flex justify-center items-center p-4 bg-blue-900 gap-x-10">
      {NavbarData.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold text-xl"
              : "text-white font-medium text-xl"
          }
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
