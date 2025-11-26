import { 
  Linkedin, 
  Facebook,
  Code
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // 1. Services Mapping: name -> slug (to identify it on the next page)
  const serviceDeepLinks = [
    { name: 'Software Development', slug: 'software-development' },
    { name: 'AI & Automation', slug: 'ai-automation' },
    { name: 'Product Strategy', slug: 'product-strategy' },
    { name: 'UI/UX Design', slug: 'ui-ux-design' },
    { name: 'Data & Analytics', slug: 'data-analytics' },
    { name: 'Fractional Services', slug: 'fractional-services' } 
  ];

  // 2. Case Studies Mapping (Remains as per your previous correct setup)
  const caseStudyLinks = [
    { name: 'Education', id: 'hula' },
    { name: 'Government', id: 'wced' },
    { name: 'Learning & Development', id: 'factor6' },
    { name: 'Retail', id: 'fairfield' }
  ];

  return (
    <footer className="bg-[#D92626] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="text-white text-3xl font-medium tracking-wide uppercase">SCALABLE</span>
              <Code size={32} strokeWidth={2} />
            </div>
            <p className="text-white/90 text-base leading-relaxed max-w-sm">
              Scalable Technology is a product development partner building AI-driven and scalable software for businesses.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.linkedin.com/company/hula-technology/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="border border-white/30 p-2.5 hover:bg-white hover:text-[#D92626] transition-all duration-300">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61551471058333" target="_blank" rel="noopener noreferrer" className="border border-white/30 p-2.5 hover:bg-white hover:text-[#D92626] transition-all duration-300">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:pl-8">
            <h3 className="text-white font-bold text-xl mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-white/90 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-white/90 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-white/90 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-white/90 hover:text-white transition-colors">Discuss a Project</Link></li>
            </ul>
          </div>

          {/* Services Links (CORRECTED) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-xl mb-6">Services</h3>
            <ul className="space-y-4">
              {serviceDeepLinks.map((item) => (
                <li key={item.name}>
                  {/* Now points to /services and sends the 'slug' in state */}
                  <Link
                    to="/services"
                    state={{ activeServiceSlug: item.slug }} 
                    className="text-white/90 hover:text-white text-base transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Studies Links */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-xl mb-6">Case Studies</h3>
            <ul className="space-y-4">
              {caseStudyLinks.map((item) => (
                <li key={item.id}>
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
          <p className="text-white font-medium text-sm">Scalable Technology © {currentYear}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;