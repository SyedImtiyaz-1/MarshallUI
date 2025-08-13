import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";

import logo from "../../assets/logo/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border- b border-gr ay-200">
      {/* Desktop Header */}
      <div className="hidden w-[90%] mx-auto md:flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="size-14 w-auto" />
        </div>

        <div className="flex items-center space-x-12">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-14 text-lg">
            <a
              href="#work"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Work
            </a>
            <a
              href="#studio"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Studio
            </a>
            <a
              href="#clients"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Clients
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Search Icon */}
          <div className="flex-shrink-0">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold text-black italic">
            My<span className="text-sm font-normal">CG</span>
          </span>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search size={20} className="text-gray-700" />
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            {isMenuOpen ? (
              <X size={20} className="text-gray-700" />
            ) : (
              <Menu size={20} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-6 py-4 space-y-4">
            <a
              href="#work"
              className="block text-gray-700 hover:text-black transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#studio"
              className="block text-gray-700 hover:text-black transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Studio
            </a>
            <a
              href="#clients"
              className="block text-gray-700 hover:text-black transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-black transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
