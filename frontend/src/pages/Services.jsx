
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { 
  FaceSmileIcon,
  ViewfinderCircleIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../components/ThemeContext';
import { motion } from 'framer-motion';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const services = [
    {
      name: "Teeth Cleaning",
      description: "Professional cleaning to remove plaque and tartar buildup.",
      details: [
        "Complete oral examination",
        "Plaque and tartar removal",
        "Teeth polishing",
        "Fluoride treatment options",
        "Personalized oral hygiene instructions"
      ],
      icon: <FaceSmileIcon className="h-8 w-8 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      name: "Dental Implants",
      description: "Permanent solution for missing teeth that look and function naturally.",
      details: [
        "Titanium implant placement",
        "Custom crown fabrication",
        "Bone grafting when needed",
        "Single tooth or full arch solutions",
        "Lifetime average of 25+ years"
      ],
      icon: <WrenchScrewdriverIcon className="h-8 w-8 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80&fit=crop"
    },
    {
      name: "Cosmetic Dentistry",
      description: "Enhance your smile with veneers, whitening, and other cosmetic procedures.",
      details: [
        "Porcelain veneers",
        "Professional teeth whitening",
        "Composite bonding",
        "Gum contouring",
        "Smile makeover consultations"
      ],
      icon: <SparklesIcon className="h-8 w-8 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80&fit=crop&crop=faces"
    },
    {
      name: "Orthodontics",
      description: "Straighten teeth and correct bites with braces or clear aligners.",
      details: [
        "Traditional metal braces",
        "Ceramic braces",
        "Invisalign clear aligners",
        "Retainer options",
        "Child and adult treatments"
      ],
      icon: <ViewfinderCircleIcon className="h-8 w-8 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80&fit=crop"
    },
    {
      name: "Pediatric Dentistry",
      description: "Gentle dental care designed specifically for children.",
      details: [
        "Child-friendly environment",
        "Preventive care",
        "Dental sealants",
        "Behavior management",
        "Early orthodontic evaluation"
      ],
      icon: <FaceSmileIcon className="h-8 w-8 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80&fit=crop&crop=faces"
    },
    {
      name: "Emergency Care",
      description: "Immediate treatment for dental emergencies and urgent issues.",
      details: [
        "Toothache relief",
        "Broken tooth repair",
        "Knocked-out tooth preservation",
        "Abscess treatment",
        "Same-day appointments available"
      ],
      icon: <DevicePhoneMobileIcon className="h-8 w-8 text-teal-600" />,
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80&fit=crop"
    }
  ];

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const navigateToContact = () => {
    navigate('/contact');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} font-sans antialiased`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 text-white overflow-hidden min-h-[500px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=900&q=80"
            alt="Dental tools"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-800/90 to-teal-600/80"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-24"
        >
          <div className="text-center w-full">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-teal-100 bg-teal-700/30 rounded-full backdrop-blur-sm mb-6 border border-teal-400/20">
              Comprehensive Dental Care
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight drop-shadow-lg">
              Exceptional Dental Services
            </h1>
            <p className="mt-6 text-xl text-teal-100 max-w-3xl mx-auto drop-shadow-md">
              State-of-the-art treatments delivered with compassion and expertise for your entire family.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-teal-600 hover:bg-teal-50 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={navigateToContact}
                className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Services List */}
      <div id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className={`inline-block px-4 py-2 text-sm font-semibold ${isDarkMode ? 'text-teal-300 bg-teal-800' : 'text-teal-600 bg-teal-100'} rounded-full mb-4`}>
              Our Comprehensive Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Advanced Dental Treatments
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                We offer a full range of dental services using cutting-edge technology and evidence-based techniques to ensure optimal oral health.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border overflow-hidden flex flex-col ${
                  isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
                }`}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`rounded-lg p-3 shadow-sm ${isDarkMode ? 'bg-teal-800' : 'bg-teal-100'}`}>
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{service.description}</p>
                  
                  <button
                    onClick={() => toggleService(index)}
                    className="flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
                  >
                    {expandedService === index ? (
                      <>
                        <span>Show less</span>
                        <ChevronUpIcon className="ml-2 h-5 w-5" />
                      </>
                    ) : (
                      <>
                        <span>Learn more</span>
                        <ChevronDownIcon className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>

                  {expandedService === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 space-y-4"
                    >
                      <h4 className="font-semibold">Treatment includes:</h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <span className="flex-shrink-0 mt-1 mr-2">
                              <svg className="h-4 w-4 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={navigateToContact}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-200"
                        >
                          Book this service
                          <ArrowRightIcon className="ml-2 -mr-1 h-4 w-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-teal-600 to-teal-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto mb-8">
              Schedule your appointment today and experience world-class dental care in a comfortable, welcoming environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={navigateToContact}
                className="px-8 py-4 bg-white text-teal-600 hover:bg-teal-50 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Your Appointment
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+1234567890"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="hidden sm:inline">Call us: </span>(123) 456-7890
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;