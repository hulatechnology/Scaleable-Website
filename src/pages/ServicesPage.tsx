
import { 
  Lightbulb, 
  Code, 
  Bot, 
  BarChart3, 
  Palette, 
  Users 
} from 'lucide-react';
import PageLayout from '../components/PageLayout';

const ServicesPage = () => {
  const services = [
    {
      icon: <Lightbulb className="text-red-500" size={32} />,
      title: "Product Strategy",
      description: "Strategic roadmapping and market analysis to guide your product development and business growth."
    },
    {
      icon: <Code className="text-red-500" size={32} />,
      title: "Software Development",
      description: "Custom web and mobile applications built with cutting-edge technologies and best practices."
    },
    {
      icon: <Bot className="text-red-500" size={32} />,
      title: "AI & Automation",
      description: "Intelligent automation solutions and AI-powered tools to streamline your business operations."
    },
    {
      icon: <BarChart3 className="text-red-500" size={32} />,
      title: "Data & Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization tools."
    },
    {
      icon: <Palette className="text-red-500" size={32} />,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that enhance engagement and drive conversions."
    },
    {
      icon: <Users className="text-red-500" size={32} />,
      title: "Fractional Services",
      description: "Part-time C-level expertise to accelerate growth without full-time executive costs."
    }
  ];

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
            style={{ animationDelay: `${index * 0.1}s` }}
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
                {service.description}
              </p>
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-red-600/5 rounded-full blur-xl group-hover:bg-red-600/10 transition-colors duration-500"></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center fade-in-up">
        <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl p-12 border border-gray-800/50">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals and scale your business to new heights.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 hover:scale-105"
          >
            Get Started Today
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600/20 to-red-700/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default ServicesPage;
