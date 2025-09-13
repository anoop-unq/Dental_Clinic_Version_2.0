// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   Calendar, 
//   Phone, 
//   Shield, 
//   Heart, 
//   Star,
//   ArrowRight
// } from 'lucide-react';

// const Home = () => {
//   const services = [
//     {
//       name: "Teeth Cleaning",
//       description: "Professional cleaning to remove plaque and tartar, keeping your gums healthy and your smile bright.",
//       icon: <Shield className="h-8 w-8 text-teal-600" />
//     },
//     {
//       name: "Dental Implants",
//       description: "Permanent solution for missing teeth that look, feel, and function like natural teeth.",
//       icon: <Heart className="h-8 w-8 text-teal-600" />
//     },
//     {
//       name: "Cosmetic Dentistry",
//       description: "Enhance your smile with veneers, whitening, and other cosmetic procedures.",
//       icon: <Star className="h-8 w-8 text-teal-600" />
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   return (
//     <div className="font-sans antialiased text-gray-800 pt-16">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-teal-600 to-teal-400 text-white overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="relative z-10 py-24 md:py-32 lg:py-40">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
//             >
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
//                 <span className="block">Your Beautiful Smile</span>
//                 <span className="block text-teal-100">Is Our Priority</span>
//               </h1>
//               <p className="mt-6 text-lg md:text-xl text-teal-50 leading-relaxed">
//                 Experience gentle, comprehensive dental care in a comfortable environment with our expert team.
//               </p>
//               <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Link
//                     to="/contact"
//                     className="flex items-center px-8 py-4 bg-white text-teal-600 hover:bg-teal-50 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//                   >
//                     <Calendar className="h-5 w-5 mr-2" />
//                     Book Appointment
//                   </Link>
//                 </motion.div>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Link
//                     to="/services"
//                     className="flex items-center px-8 py-4 bg-teal-700 bg-opacity-80 hover:bg-opacity-100 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//                   >
//                     Our Services
//                     <ArrowRight className="h-5 w-5 ml-2" />
//                   </Link>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <span className="inline-block px-4 py-2 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full mb-4">
//               About Us
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
//               Compassionate Dental Care
//             </h2>
//             <div className="max-w-3xl mx-auto">
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 At SmileCare Dental, we believe in providing personalized, gentle dental care using the latest technology. 
//                 Our team of experienced professionals is dedicated to making your visit comfortable and stress-free.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           >
//             {[
//               {
//                 icon: <Calendar className="h-8 w-8" />,
//                 title: "15+ Years Experience",
//                 description: "Our dentists have extensive experience in all aspects of general and cosmetic dentistry."
//               },
//               {
//                 icon: <Shield className="h-8 w-8" />,
//                 title: "Modern Technology",
//                 description: "We use state-of-the-art equipment for accurate diagnoses and comfortable treatments."
//               },
//               {
//                 icon: <Heart className="h-8 w-8" />,
//                 title: "Patient Comfort",
//                 description: "Your comfort is our priority, from our relaxing office environment to our gentle techniques."
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="p-3 bg-teal-100 rounded-lg text-teal-600">
//                     {item.icon}
//                   </div>
//                   <h3 className="ml-4 text-xl font-semibold text-gray-800">{item.title}</h3>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed">
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Services Preview */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <span className="inline-block px-4 py-2 text-sm font-semibold text-teal-600 bg-teal-100 rounded-full mb-4">
//               Our Services
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
//               Comprehensive Dental Care
//             </h2>
//             <p className="max-w-2xl mx-auto text-lg text-gray-600">
//               We offer a wide range of dental services to keep your smile healthy and beautiful.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//           >
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="p-8">
//                   <div className="flex items-center mb-6">
//                     <div className="p-3 bg-teal-100 rounded-lg">
//                       {service.icon}
//                     </div>
//                     <h3 className="ml-4 text-xl font-semibold text-gray-800">{service.name}</h3>
//                   </div>
//                   <p className="text-gray-600 mb-6 leading-relaxed">
//                     {service.description}
//                   </p>
//                   <Link
//                     to="/services"
//                     className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
//                   >
//                     Learn more
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="mt-16 text-center"
//           >
//             <Link
//               to="/services"
//               className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//             >
//               View All Services
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-500 text-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl sm:text-4xl font-bold mb-6"
//           >
//             Ready to Transform Your Smile?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto"
//           >
//             Schedule your appointment today and experience the difference of personalized dental care.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 to="/contact"
//                 className="flex items-center px-8 py-4 bg-white text-teal-600 hover:bg-teal-50 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <Calendar className="h-5 w-5 mr-2" />
//                 Book Now
//               </Link>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <a
//                 href="tel:+914012345678"
//                 className="flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
//               >
//                 <Phone className="h-5 w-5 mr-2" />
//                 Call Us: +91 40 1234 5678
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Phone, 
  Shield, 
  Heart, 
  Star,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../components/ThemeContext'; // Adjust path as needed

const Home = () => {
  const { isDarkMode } = useTheme();
  
  const services = [
    {
      name: "Teeth Cleaning",
      description: "Professional cleaning to remove plaque and tartar, keeping your gums healthy and your smile bright.",
      icon: <Shield className="h-8 w-8 text-teal-600 dark:text-teal-400" />
    },
    {
      name: "Dental Implants",
      description: "Permanent solution for missing teeth that look, feel, and function like natural teeth.",
      icon: <Heart className="h-8 w-8 text-teal-600 dark:text-teal-400" />
    },
    {
      name: "Cosmetic Dentistry",
      description: "Enhance your smile with veneers, whitening, and other cosmetic procedures.",
      icon: <Star className="h-8 w-8 text-teal-600 dark:text-teal-400" />
    }
  ];

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
    <div className={`font-sans antialiased min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-r from-teal-600 to-teal-400 text-white overflow-hidden ${isDarkMode ? 'from-teal-800 to-teal-600' : ''}`}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 py-24 md:py-32 lg:py-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                <span className="block">Your Beautiful Smile</span>
                <span className="block text-teal-100">Is Our Priority</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-teal-50 leading-relaxed">
                Experience gentle, comprehensive dental care in a comfortable environment with our expert team.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="flex items-center px-8 py-4 bg-white text-teal-600 hover:bg-teal-50 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Appointment
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/services"
                    className="flex items-center px-8 py-4 bg-teal-700 bg-opacity-80 hover:bg-opacity-100 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Our Services
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className={`inline-block px-4 py-2 text-sm font-semibold rounded-full mb-4 ${isDarkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-600'}`}>
              About Us
            </span>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Compassionate Dental Care
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                At SmileCare Dental, we believe in providing personalized, gentle dental care using the latest technology. 
                Our team of experienced professionals is dedicated to making your visit comfortable and stress-free.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "15+ Years Experience",
                description: "Our dentists have extensive experience in all aspects of general and cosmetic dentistry."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Modern Technology",
                description: "We use state-of-the-art equipment for accurate diagnoses and comfortable treatments."
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Patient Comfort",
                description: "Your comfort is our priority, from our relaxing office environment to our gentle techniques."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600' 
                    : 'bg-white border-gray-100'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-600'}`}>
                    {item.icon}
                  </div>
                  <h3 className={`ml-4 text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {item.title}
                  </h3>
                </div>
                <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className={`inline-block px-4 py-2 text-sm font-semibold rounded-full mb-4 ${isDarkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-teal-100 text-teal-600'}`}>
              Our Services
            </span>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Comprehensive Dental Care
            </h2>
            <p className={`max-w-2xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We offer a wide range of dental services to keep your smile healthy and beautiful.
            </p>
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
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-teal-900/30' : 'bg-teal-100'}`}>
                      {service.icon}
                    </div>
                    <h3 className={`ml-4 text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      {service.name}
                    </h3>
                  </div>
                  <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className={`inline-flex items-center font-semibold transition-colors duration-200 ${isDarkMode ? 'text-teal-400 hover:text-teal-300' : 'text-teal-600 hover:text-teal-700'}`}
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r from-teal-600 to-teal-500 text-white ${isDarkMode ? 'from-teal-800 to-teal-700' : ''}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Smile?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto"
          >
            Schedule your appointment today and experience the difference of personalized dental care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="flex items-center px-8 py-4 bg-white text-teal-600 hover:bg-teal-50 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="tel:+914012345678"
                className="flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Us: +91 40 1234 5678
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;