import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useTheme } from './ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const footerRef = useRef(null);
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Teeth Cleaning', path: '/services' },
    { name: 'Dental Implants', path: '/services' },
    { name: 'Cosmetic Dentistry', path: '/services' },
    { name: 'Root Canal', path: '/services' },
  ];

  const socialIcons = [
    { name: 'Facebook', icon: 'facebook', path: 'https://facebook.com' },
    { name: 'Instagram', icon: 'instagram', path: 'https://instagram.com' },
    { name: 'Twitter', icon: 'twitter', path: 'https://twitter.com' },
    { name: 'LinkedIn', icon: 'linkedin', path: 'https://linkedin.com' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      const elements = footerRef.current.querySelectorAll('.footer-item');
      elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 1.25}s`;
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className={`${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-800 to-gray-700'} text-white py-16 px-4 relative overflow-hidden`}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-teal-300 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-blue-300 animate-pulse-slow" style={{animationDelay: '2.25s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main footer card with glassmorphism effect */}
        <div className={`${isDarkMode ? 'bg-gray-800/70' : 'bg-gray-700/70'} backdrop-blur-lg border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-600/50'} rounded-2xl p-8 shadow-2xl transform transition-all duration-700 hover:shadow-2xl hover:shadow-teal-500/10`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* About Section */}
            <div className="footer-item opacity-0 transform translate-y-10 transition-all duration-700">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">About SmileCare</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Providing exceptional dental care in Hyderabad for over 15 years with state-of-the-art technology and compassionate care.
              </p>
              <div className="flex space-x-4">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white transition-all duration-300 hover:bg-teal-500 hover:scale-110 hover:shadow-lg hover:shadow-teal-400/30"
                    aria-label={social.name}
                  >
                    <i className={`fab fa-${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-item opacity-0 transform translate-y-10 transition-all duration-700">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name} className="overflow-hidden">
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-teal-300 transition-all duration-300 flex items-center group transform hover:translate-x-2"
                      style={{ transitionDelay: `${index * 55}ms` }}
                    >
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                      <span className="relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-teal-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-item opacity-0 transform translate-y-10 transition-all duration-700">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={service.name} className="overflow-hidden">
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-teal-300 transition-all duration-300 flex items-center group transform hover:translate-x-2"
                      style={{ transitionDelay: `${index * 65}ms` }}
                    >
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                      <span className="relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-teal-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-item opacity-0 transform translate-y-10 transition-all duration-700">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-teal-400 mr-3 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <span className="text-gray-300 group-hover:text-teal-300 transition-colors duration-300 pt-1.5">#45, Jubilee Hills, Hyderabad</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-teal-400 mr-3 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <span className="text-gray-300 group-hover:text-teal-300 transition-colors duration-300">+91 40 1234 5678</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-teal-400 mr-3 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <EnvelopeIcon className="h-5 w-5" />
                  </div>
                  <span className="text-gray-300 group-hover:text-teal-300 transition-colors duration-300">info@smilecare.com</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-teal-400 mr-3 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                    <ClockIcon className="h-5 w-5" />
                  </div>
                  <span className="text-gray-300 group-hover:text-teal-300 transition-colors duration-300">Mon-Sat: 9AM - 8PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-700/50 text-center footer-item opacity-0 transform translate-y-10 transition-all duration-700">
            <p className="text-gray-400 text-sm mb-4">
              &copy; {new Date().getFullYear()} SmileCare Dental Clinic. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <Link  className="hover:text-teal-300 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-teal-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Privacy Policy</Link>
              <Link  className="hover:text-teal-300 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-teal-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Terms of Service</Link>
              <Link className="hover:text-teal-300 transition-colors duration-300 relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-teal-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.05);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;