import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto mt-4 rounded-2xl  bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-red-300 text-2xl font-bold tracking-wide">
          Shop<span className="text-green-300">Mania</span>
        </h1>
        <div className="space-x-6">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 font-medium transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="text-white hover:text-yellow-300 font-medium transition duration-300"
          >
            Cart
          </Link>
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
