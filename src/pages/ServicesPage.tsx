import { useState, useEffect } from 'react';
import { 
  Lightbulb, 
  Code, 
  Bot, 
  BarChart3, 
  Palette, 
  Users,
  X
} from 'lucide-react';
// Assuming PageLayout is in the same relative path you provided
import PageLayout from '../components/PageLayout'; 

const services = [
  {
    icon: <Lightbulb className="text-red-500" size={32} />,
    title: "Product Strategy",
    description: "Strategic roadmapping and market analysis to guide your product development and business growth. We help you define your MVP and scale.",
    // Using Unsplash for instant visualization - replace with your local paths later if needed
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Code className="text-red-500" size={32} />,
    title: "Software Development",
    description: "Custom web and mobile applications built with cutting-edge technologies like React, Node.js, and Python to ensure scalability.",
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Bot className="text-red-500" size={32} />,
    title: "AI & Automation",
    description: "Intelligent automation solutions and AI-powered tools to streamline your business operations and reduce manual overhead.",
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <BarChart3 className="text-red-500" size={32} />,
    title: "Data & Analytics",
    description: "Transform your data into actionable insights with advanced analytics and visualization tools to make data-driven decisions.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Palette className="text-red-500" size={32} />,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that enhance engagement and drive conversions through intuitive interfaces.",
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Users className="text-red-500" size={32} />,
    title: "Fractional Services",
    description: "Part-time C-level expertise to accelerate growth without full-time executive costs. Get a CTO or CPO on demand.",
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80'
  }
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveService(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (activeService !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeService]);

  return (
    <PageLayout
      title={<>Our <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Services</span></>}
      description="Comprehensive solutions to scale your business from ideation to market domination"
    >
      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800/50 hover:border-red-500/30 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col h-full"
            onClick={() => setActiveService(index)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex-grow">
              <div className="mb-6 p-3 bg-red-600/10 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-red-600/20 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                {service.title}
              </h3>
              {/* line-clamp-3 is better than slice() because it doesn't cut words in half */}
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
                {service.description}
              </p>
            </div>

            {/* "Read More" Indicator */}
            <div className="relative z-10 mt-6 pt-4 border-t border-gray-800 group-hover:border-red-500/20 transition-colors">
                <span className="text-sm text-red-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                  View Details &rarr;
                </span>
            </div>
            
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-red-600/5 rounded-full blur-xl group-hover:bg-red-600/10 transition-colors duration-500"></div>
          </div>
        ))}
      </div>

      {/* Service Modal Overlay */}
      {activeService !== null && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[100] p-4"
          onClick={() => setActiveService(null)} // Click outside to close
        >
          {/* Modal Content */}
          <div 
            className="bg-[#0a0a0a] rounded-3xl border border-gray-800 w-full max-w-4xl relative overflow-hidden shadow-2xl animate-fade-in-up flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-red-600 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
              onClick={() => setActiveService(null)}
            >
              <X size={20} />
            </button>

            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={services[activeService].image} 
                alt={services[activeService].title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a] opacity-90"></div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6 text-red-500">
                {services[activeService].icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                {services[activeService].title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {services[activeService].description}
              </p>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 w-fit"
                onClick={() => setActiveService(null)}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default ServicesPage;