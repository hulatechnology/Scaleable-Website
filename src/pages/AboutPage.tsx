import { Rocket, Brain, Users2, Target } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const AboutPage = () => {
  const values = [
    {
      icon: <Rocket className="text-red-500" size={32} />,
      title: "Innovation First",
      description: "We leverage cutting-edge technologies to solve tomorrow's challenges today."
    },
    {
      icon: <Brain className="text-blue-500" size={32} />,
      title: "AI-Powered Solutions",
      description: "Intelligent automation and data-driven insights at the core of everything we build."
    },
    {
      icon: <Users2 className="text-green-500" size={32} />,
      title: "Partnership Approach",
      description: "We don't just deliver projects – we become your strategic technology partner."
    },
    {
      icon: <Target className="text-purple-500" size={32} />,
      title: "Results Focused",
      description: "Every solution is designed to drive measurable business growth and success."
    }
  ];

  return (
    <PageLayout
      title={<>About <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Scalable</span></>}
      description="We're not just another tech agency. We're your strategic partners in transformation."
    >
      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
        <div className="fade-in-up">
          <h2 className="heading-secondary">
            Our <span className="text-red-500">Mission</span>
          </h2>
          <p className="text-description mb-8">
            Specializing in helping startups and established businesses scale through innovative 
            technology solutions, AI automation, and data-driven strategies.
          </p>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Our mission is simple: turn your vision into reality by building scalable, 
            intelligent solutions that drive real business growth. From initial strategy 
            to full-scale implementation, we're with you every step of the way.
          </p>
          
          {/* Stats Block Removed as requested. */}
          
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in-up">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/50 hover:border-red-500/30 transition-all duration-500 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-4 p-3 bg-red-600/10 rounded-xl w-fit group-hover:scale-110 group-hover:bg-red-600/20 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-red-400 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;