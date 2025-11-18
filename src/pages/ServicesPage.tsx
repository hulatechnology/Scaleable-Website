import { useState } from 'react';
import { 
  Lightbulb, 
  Code, 
  Bot, 
  BarChart3, 
  Palette, 
  Users 
} from 'lucide-react';
import PageLayout from '../components/PageLayout';

const services = [
  {
    icon: <Lightbulb className="text-red-500" size={32} />,
    title: "Product Strategy",
    description: "Strategic roadmapping and market analysis to guide your product development and business growth.",
    image: '/images/product-strategy.png'
  },
  {
    icon: <Code className="text-red-500" size={32} />,
    title: "Software Development",
    description: "Custom web and mobile applications built with cutting-edge technologies and best practices.",
    image: '/images/software-development.png'
  },
  {
    icon: <Bot className="text-red-500" size={32} />,
    title: "AI & Automation",
    description: "Intelligent automation solutions and AI-powered tools to streamline your business operations.",
    image: '/images/ai-automation.png'
  },
  {
    icon: <BarChart3 className="text-red-500" size={32} />,
    title: "Data & Analytics",
    description: "Transform your data into actionable insights with advanced analytics and visualization tools.",
    image: '/images/data-analytics.png'
  },
  {
    icon: <Palette className="text-red-500" size={32} />,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that enhance engagement and drive conversions.",
    image: '/images/uiux.png'
  },
  {
    icon: <Users className="text-red-500" size={32} />,
    title: "Fractional Services",
    description: "Part-time C-level expertise to accelerate growth without full-time executive costs.",
    image: '/images/fractional.png'
  }
];

const ServicesPage = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

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
            className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800/50 hover:border-red-500/30 transition-all duration-500 cursor-pointer fade-in-up overflow-hidden"
            onClick={() => setActiveService(index)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="mb-6 p-3 bg-red-600/10 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-red-600/20 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {service.description.slice(0, 60)}...
              </p>
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-red-600/5 rounded-full blur-xl group-hover:bg-red-600/10 transition-colors duration-500"></div>
          </div>
        ))}
      </div>

      {/* Service Modal */}
      {activeService !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-3xl p-8 max-w-3xl w-full relative animate-fade-in-up">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
              onClick={() => setActiveService(null)}
            >
              ×
            </button>
            <img src={services[activeService].image} alt={services[activeService].title} className="w-full h-64 object-cover rounded-2xl mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-red-500">{services[activeService].title}</h2>
            <p className="text-gray-300 text-lg">{services[activeService].description}</p>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default ServicesPage;
