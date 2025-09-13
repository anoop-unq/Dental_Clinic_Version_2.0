import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Main content component that handles routing
const MainContent = () => {
  const location = useLocation();
  
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      {/* Show FAQ on all pages except services */}
      {location.pathname !== '/services' && <FAQ />}
    </>
  );
};

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Apply overflow-x hidden to html and body elements
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    
    return () => {
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-x-hidden">
        <Navbar />
        <ScrollToTop />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <MainContent key={location.pathname} />
          </AnimatePresence>
        </main>
        {/* Show footer on all pages */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;