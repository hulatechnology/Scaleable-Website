import { 
  Linkedin, 
  Facebook,
  Code
} from 'lucide-react';
// 1. IMPORT LINK FROM REACT ROUTER
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Data mapping the footer link name to the specific Case Study ID (id: 'factor6', id: 'fairfield', etc.)
  const caseStudyLinks = [
    { name: 'Education', id: 'wced' },
    { name: 'Government', id: 'wced' }, // Both Education and Government point to the WCED case study
    { name: 'Learning & Development', id: 'factor6' }, // Points to Factor6 case study
    { name: 'Retail', id: 'fairfield' } // Retail points to Fairfield Meat Centre case study
  ];

  return (
    <footer className="bg-[#D92626] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* COLUMN 1: Brand Info */}
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
            
            {/* Social Icons (External links) */}
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

          {/* COLUMN 2: Navigation (Standard Links) */}
          <div className="lg:col-span-2 lg:pl-8">
            <h3 className="text-white font-bold text-xl mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/90 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-white/90 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-white/90 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-white/90 hover:text-white transition-colors">Discuss a Project</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Services Links (All point to main Services page) */}
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

          {/* COLUMN 4: Case Studies Deep Links (Uses 'state' for direct access) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-xl mb-6">Case Studies</h3>
            <ul className="space-y-4">
              {caseStudyLinks.map((item) => (
                <li key={item.id}>
                  {/* CRITICAL FIX: Sends the specific case study ID via the 'state' prop */}
                  <Link
                    to="/case-studies"
                    state={{ activeId: item.id }} 
                    className="text-white/90 hover:text-white text-base transition-colors duration-200"
                  >
                    {item.name}
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