import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../public/Fin/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setPagesDropdownOpen(false); // Close dropdowns when toggling menu
    setBlogDropdownOpen(false);
  };

  // Toggle dropdowns on mobile
  const togglePagesDropdown = () => {
    setPagesDropdownOpen(!pagesDropdownOpen);
  };

  const toggleBlogDropdown = () => {
    setBlogDropdownOpen(!blogDropdownOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 ${isScrolled ? 'bg-blue-900 shadow-md' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={Logo} alt="Finloans Logo" className="h-10" />
          </Link>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="text-2xl text-teal-400 cursor-pointer md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links for Larger Screens */}
        <nav className="hidden space-x-6 text-white md:flex">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/loan" className="hover:text-blue-400">Loan</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>

          {/* Pages Dropdown */}
          <div className="relative group">
            <span className="flex items-center hover:text-teal-400">
              Pages <FaAngleDown className="ml-1" />
            </span>
            <ul className="absolute hidden mt-1 text-gray-800 bg-white rounded-lg shadow-lg group-hover:block">
              <li><Link to="/apply" className="block px-4 py-2 hover:bg-blue-100">Apply Loan</Link></li>
              <li><Link to="/elements" className="block px-4 py-2 hover:bg-blue-100">Elements</Link></li>
            </ul>
          </div>

          {/* Blog Dropdown */}
          <div className="relative group">
            <span className="flex items-center hover:text-blue-400">
              Blog <FaAngleDown className="ml-1" />
            </span>
            <ul className="absolute hidden mt-1 text-gray-800 bg-white rounded-lg shadow-lg group-hover:block">
              <li><Link to="/blog1" className="block px-4 py-2 hover:bg-blue-100">Blog 1</Link></li>
              <li><Link to="/blog2" className="block px-4 py-2 hover:bg-blue-100">Blog 2</Link></li>
            </ul>
          </div>

          <Link to="/faq" className="hover:text-blue-400">FAQ</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </nav>

        {/* Contact and Apply Button */}
        <div className="items-center hidden space-x-6 md:flex">
          <div className="flex items-center text-white">
            <FaPhoneAlt className="mr-2 text-teal-400" />
            <span>+10 673 567 367</span>
          </div>
          <Link
            to="/apply"
            className="px-4 py-2 text-teal-400 transition border border-teal-400 rounded-lg hover:bg-teal-400 hover:text-white"
          >
            Apply For A Loan
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="flex flex-col items-center space-y-6 text-white bg-blue-900 md:hidden">
          <Link to="/" className="hover:text-blue-400" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/loan" className="hover:text-blue-400" onClick={toggleMobileMenu}>Loan</Link>
          <Link to="/about" className="hover:text-blue-400" onClick={toggleMobileMenu}>About</Link>

          {/* Pages Dropdown */}
          <div className="relative">
            <span className="flex items-center cursor-pointer hover:text-teal-400" onClick={togglePagesDropdown}>
              Pages <FaAngleDown className="ml-1" />
            </span>
            {pagesDropdownOpen && (
              <ul className="mt-1 text-gray-800 bg-white rounded-lg shadow-lg">
                <li><Link to="/apply" className="block px-4 py-2 hover:bg-blue-100" onClick={toggleMobileMenu}>Apply Loan</Link></li>
                <li><Link to="/elements" className="block px-4 py-2 hover:bg-blue-100" onClick={toggleMobileMenu}>Elements</Link></li>
              </ul>
            )}
          </div>

          {/* Blog Dropdown */}
          <div className="relative">
            <span className="flex items-center cursor-pointer hover:text-blue-400" onClick={toggleBlogDropdown}>
              Blog <FaAngleDown className="ml-1" />
            </span>
            {blogDropdownOpen && (
              <ul className="mt-1 text-gray-800 bg-white rounded-lg shadow-lg">
                <li><Link to="/blog1" className="block px-4 py-2 hover:bg-blue-100" onClick={toggleMobileMenu}>Blog 1</Link></li>
                <li><Link to="/blog2" className="block px-4 py-2 hover:bg-blue-100" onClick={toggleMobileMenu}>Blog 2</Link></li>
              </ul>
            )}
          </div>

          <Link to="/faq" className="hover:text-blue-400" onClick={toggleMobileMenu}>FAQ</Link>
          <Link to="/contact" className="hover:text-blue-400" onClick={toggleMobileMenu}>Contact</Link>

          <div className="flex items-center space-x-6 text-white">
            <FaPhoneAlt className="mr-2 text-teal-400" />
            <span>+10 673 567 367</span>
          </div>
          <Link
            to="/apply"
            className="px-4 py-2 text-teal-400 transition border border-teal-400 rounded-lg hover:bg-teal-400 hover:text-white"
            onClick={toggleMobileMenu}
          >
            Apply For A Loan
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
