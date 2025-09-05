import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";

import logo from "../../assets/logo/logo.png";
import bigLogo from "../../assets/logo/footerLogoBlack.png";
import { Link } from "react-router";

const AnimatedHamburger = ({ isOpen, toggleMenu }) => (
  <button
    onClick={toggleMenu}
    className="cursor-pointer transform transition-all duration-200 hover:scale-110 hover:rotate-12 active:scale-95"
    aria-label={isOpen ? "Close menu" : "Open menu"}
  >
    {!isOpen ? (
      <Menu
        size={24}
        className="transition-all duration-300 hover:text-blue-600"
      />
    ) : (
      <X size={24} className="transition-all duration-300 hover:text-red-500" />
    )}
  </button>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
      // Show the logo when the user scrolls down
      setLogoVisible(scrollTop > 50); // Adjust this threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full top-0 left-0 bg-white transition-all duration-500 ease-in-out ${
        isScrolled ? "drop-shadow-lg backdrop-blur-sm" : "drop-shadow-none"
      }`}
    >
      {/* Desktop Header */}
      <div className="hidden w-[90%] mx-auto md:flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-rotate-1 active:scale-95 relative w-56"
        >
          <img
            src={bigLogo} // Conditionally render the logo
            alt="Logo"
            className={`absolute left-0 top-0 size-14 w-auto transition-all duration-300 ${
              logoVisible ? "opacity-0" : "opacity-100"
            }`} // Fade effect
            style={{ transition: "opacity 0.3s ease-in-out" }}
          />
          <img
            src={logo} // Conditionally render the logo
            alt="Logo"
            className={`size-14 w-auto transition-all duration-300 ${
              logoVisible ? "opacity-100" : "opacity-0"
            }`} // Fade effect
            style={{ transition: "opacity 0.3s ease-in-out" }}
          />
        </Link>

        <div className="flex items-center space-x-12">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-14 text-lg">
            <a
              href="/work"
              className="text-gray-700 hover:text-black transition-all duration-300 relative group transform hover:scale-110 hover:-rotate-1 active:scale-95"
            >
              Work
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-400 ease-out group-hover:w-full group-hover:h-1 group-hover:-bottom-1"></span>
              <span className="absolute -top-1 -right-1 w-0 h-0 bg-purple-600 rounded-full transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
            </a>
            <a
              href="/studio"
              className="text-gray-700 hover:text-black transition-all duration-300 relative group transform hover:scale-110 hover:rotate-1 active:scale-95"
            >
              Studio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-teal-600 transition-all duration-400 ease-out group-hover:w-full group-hover:h-1 group-hover:-bottom-1"></span>
              <span className="absolute -top-1 -right-1 w-0 h-0 bg-green-400 rounded-full transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
            </a>
            <a
              href="/clients"
              className="text-gray-700 hover:text-black transition-all duration-300 relative group transform hover:scale-110 hover:-rotate-1 active:scale-95"
            >
              Clients
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-red-600 transition-all duration-400 ease-out group-hover:w-full group-hover:h-1 group-hover:-bottom-1"></span>
              <span className="absolute -top-1 -right-1 w-0 h-0 bg-pink-400 rounded-full transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-black transition-all duration-300 relative group transform hover:scale-110 hover:rotate-1 active:scale-95"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-600 transition-all duration-400 ease-out group-hover:w-full group-hover:h-1 group-hover:-bottom-1"></span>
              <span className="absolute -top-1 -right-1 w-0 h-0 bg-orange-400 rounded-full transition-all duration-300 group-hover:w-2 group-hover:h-2"></span>
            </a>
          </nav>

          {/* Search Icon */}
          <div className="flex-shrink-0">
            <button className="p-2 hover:bg-gradient-to-br from-blue-50 to-purple-50 rounded-full transition-all duration-300 transform hover:scale-125 hover:rotate-12 hover:shadow-lg active:scale-90">
              <Search
                size={24}
                className="text-gray-700 transition-all duration-300 hover:text-blue-600 hover:drop-shadow-lg"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0 transform transition-all duration-300 hover:scale-110 hover:-rotate-3">
          <img
            src={logoVisible ? logo : bigLogo}
            alt="Logo"
            className="size-10 w-auto"
          />
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gradient-to-br from-blue-50 to-purple-50 rounded-full transition-all duration-300 transform hover:scale-125 hover:rotate-12 active:scale-90">
            <Search
              size={20}
              className="text-gray-700 transition-all duration-300 hover:text-blue-600"
            />
          </button>
          <AnimatedHamburger isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
