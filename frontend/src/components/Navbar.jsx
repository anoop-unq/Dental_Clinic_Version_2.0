
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  ChevronDown, 
  Home as HomeIcon,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon className="h-4 w-4" /> },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navigateTo = (path) => {
    setMobileMenuOpen(false);
    
    if (location.pathname === path) {
      scrollToTop();
    } else {
      navigate(path);
      setTimeout(() => {
        scrollToTop();
      }, 100);
    }
  };

  const scrollToFAQ = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const faqSection = document.getElementById('faq-section');
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      const faqSection = document.getElementById('faq-section');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isDarkMode 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-white/95 backdrop-blur-md shadow-lg py-3'
        : isDarkMode 
          ? 'bg-gray-900/90 backdrop-blur-sm py-5' 
          : 'bg-white/90 backdrop-blur-sm py-5'
    }`}>
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 group cursor-pointer"
            onClick={() => navigateTo('/')}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-teal-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SC</span>
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:text-teal-400 transition-colors`}>
                SmileCare
              </span>
              <span className="text-xs text-teal-400 font-medium">DENTAL CLINIC</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <button
                  onClick={() => navigateTo(link.path)}
                  className={`flex items-center space-x-1 px-3 py-2 font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? isDarkMode ? 'text-teal-400' : 'text-teal-600'
                      : isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {link.icon && <span className="mr-1">{link.icon}</span>}
                  <span>{link.name}</span>
                </button>
              </div>
            ))}
            
            {/* FAQ Link */}
            <button
              onClick={scrollToFAQ}
              className={`px-3 py-2 font-medium transition-colors duration-200 ${isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'}`}
            >
              FAQ
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-200`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            <div className="flex items-center space-x-4 ml-2">
              <a
                href="tel:6302447010"
                className={`hidden xl:flex items-center px-3 py-2 font-medium transition-colors duration-200 ${isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'}`}
              >
                <Phone className="h-4 w-4 mr-2" />
                6302447010
              </a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => navigateTo('/contact')}
                  className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-teal-500 hover:to-teal-400 transition-all duration-300"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </button>
              </motion.div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-200`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'}`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className={`lg:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl rounded-lg mt-4 overflow-hidden`}
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <button
                      onClick={() => navigateTo(link.path)}
                      className={`flex items-center w-full text-left px-3 py-3 font-medium rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'}`}
                    >
                      {link.icon && <span className="mr-3">{link.icon}</span>}
                      {link.name}
                    </button>
                  </div>
                ))}
                
                {/* FAQ Link in Mobile */}
                <button
                  onClick={scrollToFAQ}
                  className={`flex items-center w-full text-left px-3 py-3 font-medium rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'}`}
                >
                  <span className="mr-3">📋</span>
                  FAQ
                </button>
                
                <div className="pt-4 space-y-3 border-t border-gray-200">
                  <a
                    href="tel:6302447010"
                    className={`flex items-center px-3 py-3 rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-700 hover:text-teal-600'}`}
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    Call: 6302447010
                  </a>
                  <button
                    onClick={() => navigateTo('/contact')}
                    className="flex items-center justify-center w-full px-3 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;