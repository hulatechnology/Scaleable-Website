import { FC, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Added useLocation
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LandingPage, AboutPage, ServicesPage, CaseStudiesPage, ContactPage } from './pages';

// 1. Global Scroll-to-Top Component (Fixes Client Issue #2)
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Scrolls the window to the top (Y=0) smoothly on every route change
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }, [pathname]); // Triggers every time the URL path changes
  return null;
};

const App: FC = () => {
  
  // The "Mo_Codes" Interactive Easter Egg 🥚 (Remains Unchanged)
  useEffect(() => {
    const bannerStyle = [
      'font-size: 14px',
      'font-family: monospace',
      'background: #D92626', // Scalable Red
      'color: white',
      'padding: 8px 16px',
      'border-radius: 4px',
      'font-weight: bold'
    ].join(';');

    console.log('%c 👨‍💻 ARCHITECT DETECTED 👨‍💻 ', bannerStyle);
    console.log('You dug deep enough to find the source. Here is a challenge for you:');
    console.log('');
    console.log('❓ RIDDLE: "I have keys, but no locks. I have a space, but no room. You can enter, but can never leave. What am I?"');
    console.log('');
    console.log('Know the answer? Connect and message "Mo_Codes" on LinkedIn:');
    console.log('https://www.linkedin.com/in/moholeng-mokoena-00a097278/'); 
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        {/* 2. PLACE THE SCROLL HANDLER HERE */}
        <ScrollToTop />
        <main>
          <Routes>
            {/* Routes remain the same */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;