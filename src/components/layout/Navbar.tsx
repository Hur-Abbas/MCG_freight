import React from "react";
import { FaGlobe } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";

const navLinks = [
  { id: 1, label: "Home" },
  { id: 2, label: "Services" },
  { id: 3, label: "About Us" },
  { id: 4, label: "Partnerships" },
  { id: 5, label: "Resources" },
];

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent absolute">
      <div className="max-w-full flex flex-col lg:flex-row items-center justify-between py-4 px-6">

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Company Logo" className="w-full" />
          </div>
          <button
            type="button"
            className="text-[#7C4EAF] rounded-xl text-sm md:text-base font-bold border-3 border-[#7C4EAF] px-2 py-3 hover:bg-[#7C4EAF] hover:text-white transition-colors"
          >
            Get Quick Quote
          </button>
        </div>

        <ul className="hidden lg:flex items-center gap-8 text-[16px] text-black">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="hover:text-[#7C4EAF] cursor-pointer flex items-center gap-1"
            >
              {link.label}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button
            type="button"
            className="text-white rounded-2xl font-bold border-3 bg-[#7C4EAF] px-10 py-3 hover:bg-white hover:text-[#7C4EAF] transition-colors"
          >
            Get Started
          </button>
          <button
            type="button"
            className="text-[#7C4EAF] rounded-xl font-bold border-3 border-[#7C4EAF] px-7 py-3 hover:bg-[#7C4EAF] hover:text-white transition-colors"
          >
            Book a Demo
          </button>
          <button
            type="button"
            className="text-base text-gray-600 hover:text-[#7C4EAF] cursor-pointer bg-transparent"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
