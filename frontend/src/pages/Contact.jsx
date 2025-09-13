// import React, { useState } from 'react';
// import axios from 'axios';
// import { 
//   MapPinIcon, 
//   PhoneIcon, 
//   EnvelopeIcon, 
//   ClockIcon,
//   ArrowRightIcon,
//   CheckCircleIcon
// } from '@heroicons/react/24/outline';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [submitting, setSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setSubmitError('');
    
//     try {
//       // Simulate API call with Axios
//       await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
//       setSubmitSuccess(true);
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//     } catch (error) {
//       setSubmitError('There was an error submitting your form. Please try again.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-white font-sans antialiased">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-teal-700 to-teal-500 text-white overflow-hidden min-h-[400px]">
//         <div className="absolute inset-0">
//           <img
//             className="w-full h-full object-cover object-center"
//             src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=800&q=80"
//             alt="Dental clinic"
//             loading="eager"
//           />
//           <div className="absolute inset-0 bg-gradient-to-br from-teal-800/90 to-teal-600/80"></div>
//         </div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-24">
//           <div className="text-center w-full">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
//               Contact Our Dental Clinic
//             </h1>
//             <p className="mt-4 text-xl text-teal-100 max-w-3xl mx-auto">
//               We're here to answer your questions and schedule your appointments.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Contact Form and Info */}
//       <div className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="order-2 lg:order-1">
//               <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
//                 <div className="text-center mb-8">
//                   <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
//                   <p className="text-gray-600">
//                     Fill out the form below and our team will get back to you within 24 hours.
//                   </p>
//                 </div>
                
//                 {submitSuccess ? (
//                   <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center mb-6">
//                     <div className="flex justify-center mb-4">
//                       <CheckCircleIcon className="h-12 w-12 text-green-500" />
//                     </div>
//                     <h3 className="text-xl font-medium text-green-800 mb-2">Message Sent Successfully!</h3>
//                     <p className="text-green-700">
//                       Thank you for contacting us. We'll get back to you within 24 hours.
//                     </p>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     {submitError && (
//                       <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700">
//                         {submitError}
//                       </div>
//                     )}
                    
//                     <div className="space-y-1">
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                         Full Name
//                       </label>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         required
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-200"
//                         placeholder="John Doe"
//                       />
//                     </div>

//                     <div className="space-y-1">
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                         Email Address
//                       </label>
//                       <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-200"
//                         placeholder="you@example.com"
//                       />
//                     </div>

//                     <div className="space-y-1">
//                       <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
//                         Subject
//                       </label>
//                       <input
//                         type="text"
//                         name="subject"
//                         id="subject"
//                         required
//                         value={formData.subject}
//                         onChange={handleChange}
//                         className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-200"
//                         placeholder="Appointment Request"
//                       />
//                     </div>

//                     <div className="space-y-1">
//                       <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//                         Your Message
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows={5}
//                         required
//                         value={formData.message}
//                         onChange={handleChange}
//                         className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-200"
//                         placeholder="Tell us how we can help..."
//                       ></textarea>
//                     </div>

//                     <div className="pt-2">
//                       <button
//                         type="submit"
//                         disabled={submitting}
//                         className="w-full flex justify-center items-center px-6 py-4 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-200 transform hover:-translate-y-1 hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
//                       >
//                         {submitting ? (
//                           <>
//                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                             </svg>
//                             Sending...
//                           </>
//                         ) : (
//                           <>
//                             Send Message
//                             <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
//                           </>
//                         )}
//                       </button>
//                     </div>
//                   </form>
//                 )}
//               </div>
//             </div>

//             {/* Contact Info */}
//             <div className="order-1 lg:order-2">
//               <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 h-full">
//                 <div className="text-center mb-8">
//                   <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Information</h2>
//                   <p className="text-gray-600">
//                     Reach out to us through any of these channels
//                   </p>
//                 </div>

//                 <div className="space-y-8">
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3 mr-4">
//                       <MapPinIcon className="h-6 w-6 text-teal-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
//                       <p className="mt-1 text-gray-600">123 Dental Street, Health City, HC 12345</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3 mr-4">
//                       <PhoneIcon className="h-6 w-6 text-teal-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900">Phone Numbers</h3>
//                       <p className="mt-1 text-gray-600">Main: (123) 456-7890</p>
//                       <p className="text-gray-600">Emergency: (123) 456-7891</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3 mr-4">
//                       <EnvelopeIcon className="h-6 w-6 text-teal-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900">Email Addresses</h3>
//                       <p className="mt-1 text-gray-600">General: info@smilecare.com</p>
//                       <p className="text-gray-600">Appointments: appointments@smilecare.com</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3 mr-4">
//                       <ClockIcon className="h-6 w-6 text-teal-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900">Working Hours</h3>
//                       <p className="mt-1 text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
//                       <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
//                       <p className="text-gray-600">Sunday: Closed</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-12">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Contact</h3>
//                   <p className="text-gray-600 mb-4">
//                     For dental emergencies outside of business hours, please call our emergency line:
//                   </p>
//                   <a 
//                     href="tel:+1234567891" 
//                     className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200"
//                   >
//                     <PhoneIcon className="h-5 w-5 mr-2" />
//                     Emergency: (123) 456-7891
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Map Section */}
//           <div className="mt-20">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Location</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Visit our state-of-the-art dental clinic conveniently located in the heart of the city
//               </p>
//             </div>
            
//             <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
//               <iframe
//                 title="Clinic Location"
//                 width="100%"
//                 height="450"
//                 frameBorder="0"
//                 style={{ border: 0 }}
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179535!2d-73.9878449241646!3d40.74844097138992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
//                 allowFullScreen
//                 loading="lazy"
//                 className="filter grayscale hover:grayscale-0 transition duration-500"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import axios from 'axios';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../components/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const { isDarkMode } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    
    try {
      // Simulate API call with Axios
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitError('There was an error submitting your form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={`font-sans antialiased ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-700 to-teal-500 text-white overflow-hidden min-h-[400px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&h=800&q=80"
            alt="Dental clinic"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-800/90 to-teal-600/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-24">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Contact Our Dental Clinic
            </h1>
            <p className="mt-4 text-xl text-teal-100 max-w-3xl mx-auto">
              We're here to answer your questions and schedule your appointments.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className={`rounded-2xl shadow-xl p-8 border ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
              }`}>
                <div className="text-center mb-8">
                  <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Send Us a Message
                  </h2>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>
                
                {submitSuccess ? (
                  <div className={`border rounded-xl p-6 text-center mb-6 ${
                    isDarkMode ? 'bg-green-900/30 border-green-700' : 'bg-green-50 border-green-200'
                  }`}>
                    <div className="flex justify-center mb-4">
                      <CheckCircleIcon className="h-12 w-12 text-green-500" />
                    </div>
                    <h3 className={`text-xl font-medium mb-2 ${isDarkMode ? 'text-green-300' : 'text-green-800'}`}>
                      Message Sent Successfully!
                    </h3>
                    <p className={isDarkMode ? 'text-green-200' : 'text-green-700'}>
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <div className={`border rounded-xl p-4 ${
                        isDarkMode ? 'bg-red-900/30 border-red-700 text-red-200' : 'bg-red-50 border-red-200 text-red-700'
                      }`}>
                        {submitError}
                      </div>
                    )}
                    
                    <div className="space-y-1">
                      <label htmlFor="name" className={`block text-sm font-medium ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'border-gray-300'
                        }`}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className={`block text-sm font-medium ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'border-gray-300'
                        }`}
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="subject" className={`block text-sm font-medium ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'border-gray-300'
                        }`}
                        placeholder="Appointment Request"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="message" className={`block text-sm font-medium ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 transition duration-200 ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'border-gray-300'
                        }`}
                        placeholder="Tell us how we can help..."
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full flex justify-center items-center px-6 py-4 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-200 transform hover:-translate-y-1 hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <div className={`rounded-2xl shadow-xl p-8 border h-full ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'
              }`}>
                <div className="text-center mb-8">
                  <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Contact Information
                  </h2>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Reach out to us through any of these channels
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3 mr-4">
                      <MapPinIcon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Our Location
                      </h3>
                      <p className={`mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        123 Dental Street, Health City, HC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3 mr-4">
                      <PhoneIcon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Phone Numbers
                      </h3>
                      <p className={`mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Main: 6302447010
                      </p>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        Emergency: 6302447010
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3 mr-4">
                      <EnvelopeIcon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Email Addresses
                      </h3>
                      <p className={`mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        General: info@smilecare.com
                      </p>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        Appointments: appointments@smilecare.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3 mr-4">
                      <ClockIcon className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Working Hours
                      </h3>
                      <p className={`mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Monday - Friday: 8:00 AM - 6:00 PM
                      </p>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        Saturday: 9:00 AM - 2:00 PM
                      </p>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 ">
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Emergency Contact
                  </h3>
                  <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    For dental emergencies outside of business hours, please call our emergency line:
                  </p>
                  <div className='flex justify-center'>
                  <a 
                    href="tel:+91 6302447010" 
                    className="inline-flex items-center px-6 py-3 md:mt-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    Emergency: 6302447010
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Our Location
              </h2>
              <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Visit our state-of-the-art dental clinic conveniently located in the heart of the city
              </p>
            </div>
            
            <div className={`rounded-2xl overflow-hidden shadow-xl border ${
              isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <iframe
                title="Clinic Location"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179535!2d-73.9878449241646!3d40.74844097138992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                className="filter grayscale hover:grayscale-0 transition duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;