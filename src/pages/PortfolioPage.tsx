
import { ExternalLink, Github } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import aiEcommerceImage from '../assets/images/portfolio/Ai Eccommerce.svg';
import analyticsDashboardImage from '../assets/images/portfolio/analytics-dashboard.svg';
import careerPlatformImage from '../assets/images/portfolio/career-platform.svg';

const PortfolioPage = () => {
  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      category: "AI & Automation",
      description: "Revolutionary e-commerce solution with AI-driven product recommendations and automated inventory management.",
      image: aiEcommerceImage,
      tags: ["AI", "E-commerce", "Automation"]
    },
    {
      title: "Retail Analytics Dashboard",
      category: "Data & Analytics",
      description: "Real-time analytics platform providing actionable insights for retail chains across multiple locations.",
      image: analyticsDashboardImage,
      tags: ["Analytics", "Dashboard", "Retail"]
    },
    {
      title: "Career Guidance Platform",
      category: "EdTech",
      description: "AI-powered career guidance platform helping professionals make data-driven career decisions.",
      image: careerPlatformImage,
      tags: ["AI", "Career", "Platform"]
    }
  ];

  return (
    <PageLayout
      title={<>Our <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Portfolio</span></>}
      description="Showcasing successful transformations and innovative solutions that drive real business results"
    >

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mb-16 md:mb-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800/50 hover:border-red-500/30 transition-all duration-500 fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-red-600/80 transition-all duration-300 hover:scale-110">
                      <ExternalLink size={18} className="text-white" />
                    </button>
                    <button className="bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-red-600/80 transition-all duration-300 hover:scale-110">
                      <Github size={18} className="text-white" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-red-600/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-red-600/10 text-red-400 rounded-full text-sm border border-red-600/20 group-hover:bg-red-600/20 group-hover:border-red-600/30 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

      {/* Call to Action */}
      <div className="text-center fade-in-up">
        <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl p-12 border border-gray-800/50">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to discuss your project and see how we can help you achieve similar results.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 hover:scale-105"
          >
            Start Your Project
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600/20 to-red-700/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default PortfolioPage;
