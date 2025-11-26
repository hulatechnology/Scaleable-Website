import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
    }`} style={{
      boxShadow: scrolled ? '0 4px 20px rgba(220, 38, 38, 0.3), 0 2px 10px rgba(220, 38, 38, 0.2)' : 'none'
    }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - MADE CLICKABLE WITH Link COMPONENT */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="text-white" style={{ 
              fontFamily: 'Anta, sans-serif', 
              fontWeight: '400', 
              fontSize: '20px', 
              lineHeight: '1.2', 
              letterSpacing: '0.26em' 
            }}>
              SCALABLE
            </div>
            <div className="text-red-500 font-bold text-xl">
              {'</>'}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`whitespace-nowrap hover:text-white transition-all duration-300 px-4 py-3 text-lg font-semibold ${
                    isActive(item.path) 
                      ? 'text-red-500' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:glow-red pulse-glow inline-block shadow-lg whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-lg font-semibold ${
                  isActive(item.path) ? 'text-red-500' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-red-600 hover:bg-red-700 text-white block px-4 py-3 rounded-md text-lg font-semibold mt-4 text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;