import { FC, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LandingPage, AboutPage, ServicesPage, CaseStudiesPage, ContactPage } from './pages';

const App: FC = () => {
  
  // The "Mo_Codes" Interactive Easter Egg 🥚
  useEffect(() => {
    // 1. Define the style for the big red banner
    const bannerStyle = [
      'font-size: 14px',
      'font-family: monospace',
      'background: #D92626', // Scalable Red
      'color: white',
      'padding: 8px 16px',
      'border-radius: 4px',
      'font-weight: bold'
    ].join(';');

    // 2. The Message
    console.log('%c 👨‍💻 ARCHITECT DETECTED 👨‍💻 ', bannerStyle);
    console.log('You dug deep enough to find the source. Here is a challenge for you:');
    console.log('');
    console.log('❓ RIDDLE: "I have keys, but no locks. I have a space, but no room. You can enter, but can never leave. What am I?"');
    console.log('');
    console.log('Know the answer? Connect and message "Mo_Codes" on LinkedIn:');
    // 3. REPLACE THIS WITH YOUR ACTUAL LINKEDIN URL
    console.log('https://www.linkedin.com/in/moholeng-mokoena-00a097278/'); 
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
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