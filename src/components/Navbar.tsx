import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const PHONE_NUMBER = '+1 (555) 123-4567';

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll effect on home page
      if (location.pathname === '/') {
        setIsScrolled(window.scrollY > 50);
      } else {
        // Always show white background on other pages
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to top when navigating
  };

  const handlePhoneCall = () => {
    window.location.href = `tel:${PHONE_NUMBER.replace(/\D/g, '')}`;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className={`font-playfair text-2xl font-bold ${
                location.pathname === '/' 
                  ? (isScrolled ? 'text-gray-900' : 'text-white')
                  : 'text-gray-900'
              }`}
              onClick={handleLinkClick}
            >
              Examplus
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-montserrat ${
                    location.pathname === item.path 
                      ? 'text-teal-600' 
                      : (
                        location.pathname === '/' 
                          ? (isScrolled ? 'text-gray-800' : 'text-white')
                          : 'text-gray-800'
                      )
                  } hover:text-teal-600 transition-colors duration-200`}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handlePhoneCall}
              className="p-2 bg-teal-100 text-teal-700 rounded-full hover:bg-teal-200 transition-colors duration-300"
              aria-label="Call Examplus Medical Spa"
            >
              <Phone size={20} />
            </button>
            <Link 
              to="/contact" 
              className="btn-primary"
              onClick={handleLinkClick}
            >
              Book Consultation
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${
                location.pathname === '/' 
                  ? (isScrolled ? 'text-gray-900' : 'text-white')
                  : 'text-gray-900'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 text-gray-800 hover:text-teal-600"
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2 flex space-x-4 items-center">
              <button 
                onClick={handlePhoneCall}
                className="p-2 bg-teal-100 text-teal-700 rounded-full hover:bg-teal-200 transition-colors duration-300"
                aria-label="Call Examplus Medical Spa"
              >
                <Phone size={20} />
              </button>
              <Link 
                to="/contact" 
                className="btn-primary flex-1"
                onClick={handleLinkClick}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
