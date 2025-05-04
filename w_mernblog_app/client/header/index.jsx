import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">MyBlog</div>

        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
          <a href="/blog" className="hover:text-blue-600">
            Blog
          </a>
          <a href="/about" className="hover:text-blue-600">
            About
          </a>
          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "X" : "="}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <a href="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="/blog" className="block text-gray-700 hover:text-blue-600">
            Blog
          </a>
          <a href="/about" className="block text-gray-700 hover:text-blue-600">
            About
          </a>
          <a
            href="/contact"
            className="block text-gray-700 hover:text-blue-600"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
