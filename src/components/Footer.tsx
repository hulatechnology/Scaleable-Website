import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Phone,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-red-600 text-white">
      {/* Top black gradient tip with pulsing glow */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-black to-red-600 animate-pulse-tip"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-white text-2xl font-bold">{'</>'}</div>
              <div className="text-white text-xl font-bold tracking-widest" style={{ fontFamily: 'Anata, Inter, sans-serif' }}>
                SCALABLE
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Scalable Technology is a product development partner building AI-driven and scalable software for businesses
              across education, retail, learning and development. Our work supports public and private sector
              innovation through modern, data-informed solutions.
            </p>
            <div className="flex space-x-4">
              {[Twitter, Linkedin, Github].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4"> Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-white/80">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>hello@scalable.tech</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {currentYear} Scalable. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="bg-white/10 hover:bg-white text-red-100 hover:text-white rounded-full p-2 transition-all duration-300 hover:scale-110"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
