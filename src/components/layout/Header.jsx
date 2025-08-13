import { useState } from "react";
import { Menu, Search, X } from "lucide-react";

import logo from "../../assets/logo/logo.png";
import { Link } from "react-router";

const AnimatedHamburger = ({ isOpen, toggleMenu }) => (
  <button
    onClick={toggleMenu}
    className="cursor-pointer"
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    {!isOpen ? <Menu size={24} className="" /> : <X size={24} />}
  </button>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border- b border-gray-200 relative">
      {/* Desktop Header */}
      <div className="hidden w-[90%] mx-auto md:flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="size-14 w-auto" />
        </Link>

        <div className="flex items-center space-x-12">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-14 text-lg">
            <a
              href="/work"
              className="text-gray-700 hover:text-black transition-colors relative group"
            >
              Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
            <a
              href="/studio"
              className="text-gray-700 hover:text-black transition-colors relative group"
            >
              Studio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
            <a
              href="/clients"
              className="text-gray-700 hover:text-black transition-colors relative group"
            >
              Clients
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-black transition-colors relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
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
          <img src={logo} alt="Logo" className="size-10 w-auto" />
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search size={20} className="text-gray-700" />
          </button>
          <AnimatedHamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <span className="text-lg font-semibold text-black">Menu</span>
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded- full transition-colors"
          >
            <AnimatedHamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="px-6 py-2">
          <div className="space-y-1">
            <a
              href="/work"
              className="block text-gray-700 hover:text-black hover:bg-gray-50 transition-all py-4 border-b border-[#DCDCDC] text-center roun ded-lg transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="/studio"
              className="block text-gray-700 hover:text-black hover:bg-gray-50 transition-all py-4 border-b border-[#DCDCDC] text-center roun ded-lg transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Studio
            </a>
            <a
              href="/clients"
              className="block text-gray-700 hover:text-black hover:bg-gray-50 transition-all py-4 border-b border-[#DCDCDC] text-center roun ded-lg transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </a>
            <a
              href="/contact"
              className="block text-gray-700 hover:text-black hover:bg-gray-50 transition-all py-4 border-b border-[#DCDCDC] text-center roun ded-lg transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
