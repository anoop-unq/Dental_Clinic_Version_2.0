import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar, ChevronDown, Home as HomeIcon } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon className="h-4 w-4" /> },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true
    },
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
    setServicesOpen(false);
  }, [location]);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Enhanced navigation function
  const navigateTo = (path) => {
    // Close mobile menu if open
    setMobileMenuOpen(false);
    
    // If already on the target page, just scroll to top
    if (location.pathname === path) {
      scrollToTop();
    } else {
      // Navigate to the page first
      navigate(path);
      
      // Scroll to top after a short delay to ensure page is loaded
      setTimeout(() => {
        scrollToTop();
      }, 100);
    }
  };

  // Smooth scroll to FAQ section
  const scrollToFAQ = () => {
    if (location.pathname !== '/') {
      // Navigate to home first, then scroll to FAQ
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
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                SmileCare
              </span>
              <span className="text-xs text-teal-600 font-medium">DENTAL CLINIC</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div 
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200">
                      <span>{link.name}</span>
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 p-2"
                        >
                          {[
                            'Teeth Cleaning',
                            'Dental Implants',
                            'Cosmetic Dentistry',
                            'Orthodontics',
                            'Pediatric Dentistry',
                            'Emergency Care'
                          ].map((service) => (
                            <Link
                              key={service}
                              to={`/services#${service.toLowerCase().replace(' ', '-')}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md transition-colors duration-200"
                              onClick={() => {
                                setServicesOpen(false);
                                scrollToTop();
                              }}
                            >
                              {service}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    onClick={() => navigateTo(link.path)}
                    className={`flex items-center space-x-1 px-3 py-2 font-medium transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-teal-600'
                        : 'text-gray-700 hover:text-teal-600'
                    }`}
                  >
                    {link.icon && <span className="mr-1">{link.icon}</span>}
                    <span>{link.name}</span>
                  </button>
                )}
              </div>
            ))}
            
            {/* FAQ Link */}
            <button
              onClick={scrollToFAQ}
              className="px-3 py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200"
            >
              FAQ
            </button>
            
            <div className="flex items-center space-x-4 ml-6">
              <a
                href="tel:+914012345678"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200"
              >
                <Phone className="h-4 w-4 mr-2" />
                +91 40 1234 5678
              </a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => navigateTo('/contact')}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-teal-500 hover:to-teal-400 transition-all duration-300"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </button>
              </motion.div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-teal-600 transition-colors duration-200"
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
              className="lg:hidden bg-white shadow-xl rounded-lg mt-4 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setServicesOpen(!servicesOpen)}
                          className="flex items-center justify-between w-full px-3 py-3 text-left text-gray-700 hover:text-teal-600 font-medium rounded-lg"
                        >
                          <span className="flex items-center">
                            {link.icon && <span className="mr-2">{link.icon}</span>}
                            {link.name}
                          </span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6 space-y-2"
                            >
                              {[
                                'Teeth Cleaning',
                                'Dental Implants',
                                'Cosmetic Dentistry',
                                'Orthodontics'
                              ].map((service) => (
                                <button
                                  key={service}
                                  onClick={() => {
                                    navigateTo('/services');
                                    setMobileMenuOpen(false);
                                  }}
                                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-teal-600 rounded-md transition-colors duration-200"
                                >
                                  {service}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={() => navigateTo(link.path)}
                        className="flex items-center w-full text-left px-3 py-3 text-gray-700 hover:text-teal-600 font-medium rounded-lg transition-colors duration-200"
                      >
                        {link.icon && <span className="mr-3">{link.icon}</span>}
                        {link.name}
                      </button>
                    )}
                  </div>
                ))}
                
                {/* FAQ Link in Mobile */}
                <button
                  onClick={scrollToFAQ}
                  className="flex items-center w-full text-left px-3 py-3 text-gray-700 hover:text-teal-600 font-medium rounded-lg transition-colors duration-200"
                >
                  <span className="mr-3">📋</span>
                  FAQ
                </button>
                
                <div className="pt-4 space-y-3 border-t border-gray-200">
                  <a
                    href="tel:+914012345678"
                    className="flex items-center px-3 py-3 text-gray-700 hover:text-teal-600 rounded-lg transition-colors duration-200"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    Call: +91 40 1234 5678
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

export default Header;