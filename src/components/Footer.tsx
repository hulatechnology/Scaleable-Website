import { 
  Linkedin, 
  Facebook,
  Code
} from 'lucide-react';
// 1. IMPORT LINK FROM REACT ROUTER
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#D92626] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* COLUMN 1: Brand Info (Spans 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-white text-3xl font-medium tracking-wide uppercase">
                SCALABLE
              </span>
              <Code size={32} strokeWidth={2} />
            </div>
            
            <p className="text-white/90 text-base leading-relaxed max-w-sm">
              Scalable Technology is a product development partner building AI-driven and scalable software for businesses
              across education, retail, and learning and development. Our work supports public and private sector
              innovation through modern, data-informed solutions.
            </p>
            
            {/* Social Icons (Keep as <a> tags because they are external links) */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/company/hula-technology/?viewAsMember=true"
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white/30 p-2.5 hover:bg-white hover:text-[#D92626] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              
              <a
                href="https://www.facebook.com/profile.php?id=61551471058333"
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-white/30 p-2.5 hover:bg-white hover:text-[#D92626] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Navigation (Spans 2 cols) */}
          <div className="lg:col-span-2 lg:pl-8">
            <h3 className="text-white font-bold text-xl mb-6">Navigation</h3>
            <ul className="space-y-4">
              {/* Switched to <Link> to prevent 404 errors */}
              <li>
                <Link to="/" className="text-white/90 hover:text-white text-base transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/90 hover:text-white text-base transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-white/90 hover:text-white text-base transition-colors duration-200">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/90 hover:text-white text-base transition-colors duration-200">
                  Discuss a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Services (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-xl mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                'Software Development',
                'AI & Automation',
                'Product Strategy',
                'UI/UX Design',
                'Data & Analytics',
                'Fractional Services'
              ].map((item) => (
                <li key={item}>
                  {/* Link to services page */}
                  <Link
                    to="/services"
                    className="text-white/90 hover:text-white text-base transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Case Studies (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-xl mb-6">Case Studies</h3>
            <ul className="space-y-4">
              {[
                'Education',
                'Government',
                'Learning & Development',
                'Retail'
              ].map((item) => (
                <li key={item}>
                  {/* Link to case studies page */}
                  <Link
                    to="/case-studies"
                    className="text-white/90 hover:text-white text-base transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center">
          <p className="text-white font-medium text-sm">
            Scalable Technology © {currentYear}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;