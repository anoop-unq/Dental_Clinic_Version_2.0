import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { isDarkMode } = useTheme();

  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting the dentist every six months for a regular check-up and cleaning. However, some patients may need more frequent visits depending on their oral health.",
      bg: isDarkMode ? 'from-blue-900/20 to-gray-800' : 'from-blue-50 to-white'
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we accept most major dental insurance plans. Please contact our office with your insurance information and we'll verify your benefits.",
      bg: isDarkMode ? 'from-teal-900/20 to-gray-800' : 'from-teal-50 to-white'
    },
    {
      question: "What should I do in a dental emergency?",
      answer: "If you're experiencing severe pain, swelling, or have had a tooth knocked out, please call us immediately at (123) 456-7890. We offer emergency dental services and will do our best to see you as soon as possible.",
      bg: isDarkMode ? 'from-amber-900/20 to-gray-800' : 'from-amber-50 to-white'
    },
    {
      question: "Are dental X-rays safe?",
      answer: "Yes, dental X-rays are very safe. We use digital X-rays which emit significantly less radiation than traditional film X-rays. The amount of radiation is minimal and comparable to what you'd receive from a short flight.",
      bg: isDarkMode ? 'from-purple-900/20 to-gray-800' : 'from-purple-50 to-white'
    },
    {
      question: "How can I improve my smile?",
      answer: "We offer a variety of cosmetic dentistry options including teeth whitening, veneers, and orthodontics. During a consultation, we can discuss which options would work best for your smile goals.",
      bg: isDarkMode ? 'from-rose-900/20 to-gray-800' : 'from-rose-50 to-white'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="faq-section" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-block text-sm font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-6 shadow-lg ${
            isDarkMode 
              ? 'bg-gradient-to-r from-teal-700 to-blue-700 text-white' 
              : 'bg-gradient-to-r from-teal-600 to-blue-600 text-white'
          }`}>
            Patient Questions
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Get answers to common dental queries from our experts
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                activeIndex === index ? 'ring-2 ring-teal-500 ring-opacity-50' : ''
              } ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white'
              }`}
            >
              <button
                className="flex justify-between items-center w-full text-left p-6 focus:outline-none group"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className={`text-lg font-semibold transition-colors duration-200 ${
                  activeIndex === index 
                    ? 'text-teal-400' 
                    : isDarkMode 
                      ? 'text-white group-hover:text-teal-400' 
                      : 'text-gray-800 group-hover:text-teal-600'
                }`}>
                  {faq.question}
                </h3>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`ml-6 flex-shrink-0 p-2 rounded-full transition-colors duration-200 ${
                    activeIndex === index
                      ? isDarkMode 
                        ? 'bg-teal-900/50 text-teal-400' 
                        : 'bg-teal-100 text-teal-600'
                      : isDarkMode 
                        ? 'bg-gray-700 text-gray-400 group-hover:bg-teal-900/50 group-hover:text-teal-400' 
                        : 'bg-gray-100 text-gray-500 group-hover:bg-teal-100 group-hover:text-teal-600'
                  }`}
                >
                  {activeIndex === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </motion.span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className={`leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <Link to="/contact">
            <button className={`font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-teal-700 to-blue-700 hover:from-teal-600 hover:to-blue-600 text-white' 
                : 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white'
            }`}>
              Schedule a Consultation
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;