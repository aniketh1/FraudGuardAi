import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white px-2 py-1 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/logo512.png"
            alt="Logo"
            className="w-12 h-12"
          />
          <span className="text-lg font-bold">FraudGuardAI </span>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="detect"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:underline"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
