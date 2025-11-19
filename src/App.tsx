import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Update the import below (assuming you exported it from pages/index.ts)
import { LandingPage, AboutPage, ServicesPage, CaseStudiesPage, ContactPage } from './pages';

const App: FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            
            {/* Updated Route Path and Component */}
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