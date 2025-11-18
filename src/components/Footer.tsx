import { 
  Twitter, 
  Linkedin, 
  Facebook,
  Instagram,
  Code
} from 'lucide-react';

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
            
            {/* Social Icons - Boxed Style */}
            <div className="flex space-x-4 pt-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="border border-white/30 p-2.5 hover:bg-white hover:text-[#D92626] transition-all duration-300"
                  aria-label="Social Link"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: Navigation (Spans 2 cols) */}
          <div className="lg:col-span-2 lg:pl-8">
            <h3 className="text-white font-bold text-xl mb-6">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'Our Work', 'Discuss a Project'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white/90 hover:text-white text-base transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
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
                  <a
                    href="#"
                    className="text-white/90 hover:text-white text-base transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Our Work (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-xl mb-6">Our Work</h3>
            <ul className="space-y-4">
              {[
                'Education',
                'Government',
                'Learning & Development',
                'Retail'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/90 hover:text-white text-base transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Centered Copyright */}
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