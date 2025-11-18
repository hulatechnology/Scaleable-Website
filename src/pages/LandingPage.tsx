import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  Target, 
  Zap, 
  ChevronLeft, 
  ChevronRight, 
  Star,
  Lightbulb, 
  Code, 
  Bot, 
  BarChart3, 
  Palette, 
  Users,
  ExternalLink,
  Github,
  Phone,
  Mail,
  MapPin,
  Send,
  X // Added Close Icon
} from 'lucide-react';

// Keep your existing asset imports
import heroImage from '../assets/images/hero/Hero Image.png';
import aiEcommerceImage from '../assets/images/portfolio/Ai Eccommerce.svg';
import analyticsDashboardImage from '../assets/images/portfolio/analytics-dashboard.svg';
import careerPlatformImage from '../assets/images/portfolio/career-platform.svg';

const LandingPage = () => {
  // --- STATE MANAGEMENT ---
  const [activeService, setActiveService] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- DATA ---
  // Updated Services Data with Images for the Modal
  const services = [
    {
      icon: <Lightbulb className="text-red-500" size={32} />,
      title: "Product Strategy",
      description: "Strategic roadmapping and market analysis to guide your product development and business growth.",
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Code className="text-red-500" size={32} />,
      title: "Software Development",
      description: "Custom web and mobile applications built with cutting-edge technologies and best practices.",
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Bot className="text-red-500" size={32} />,
      title: "AI & Automation",
      description: "Intelligent automation solutions and AI-powered tools to streamline your business operations.",
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <BarChart3 className="text-red-500" size={32} />,
      title: "Data & Analytics",
      description: "Transform your data into actionable insights with advanced analytics and visualization tools.",
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Palette className="text-red-500" size={32} />,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that enhance engagement and drive conversions.",
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <Users className="text-red-500" size={32} />,
      title: "Fractional Services",
      description: "Part-time C-level expertise to accelerate growth without full-time executive costs.",
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const portfolioProjects = [
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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      company: "TechStart Inc.",
      content: "Scalable transformed our vision into a reality. Their AI automation solutions increased our efficiency by 300% and helped us scale from 10 to 100 employees in just 8 months.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, RetailFlow",
      company: "RetailFlow",
      content: "The team at Scalable didn't just build our platform – they became our strategic partners. Their insights and execution were instrumental in our successful Series A funding.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Emily Watson",
      role: "CTO, DataDriven",
      company: "DataDriven Analytics",
      content: "Working with Scalable was a game-changer. Their data analytics platform helped us uncover insights that drove a 250% increase in customer retention.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  // --- EFFECTS ---
  
  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveService(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeService !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeService]);

  // Testimonial carousel auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // --- HANDLERS ---

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative">
      
      {/* ================= HERO SECTION ================= */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-600/5 rounded-full blur-2xl"></div>
        </div>

        <div className="absolute top-0 left-0 right-0 h-20 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-24 md:py-32 lg:py-40">
          <div className="fade-in-up space-y-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="block text-white">
                Turning <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent inline-block animate-rotate-vision">Vision</span>
              </span>
              <span className="block text-white">
                Into <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">Reality</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              We partner with ambitious startups and established businesses to scale through 
              cutting-edge technology, AI automation, and strategic innovation.
            </p>
          </div>

          <div className="mt-20 mb-20 md:mt-24 md:mb-24 lg:mt-32 lg:mb-32 fade-in-up relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/3 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-red-500/2 via-transparent to-blue-500/2 rounded-full blur-2xl animate-spin" style={{animationDuration: '30s'}}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="relative group cursor-pointer">
                {/* Glow Effects */}
                <div className="absolute -inset-12 bg-gradient-to-r from-red-500/15 via-red-600/8 to-red-500/15 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1200 animate-pulse"></div>
                <div className="absolute -inset-8 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/15 rounded-[3.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-900"></div>
                
                {/* Hero Image Container */}
                <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] border-2 border-gray-800/40 group-hover:border-red-500/60 transition-all duration-800 shadow-[0_35px_70px_-12px_rgba(0,0,0,0.9)] group-hover:shadow-[0_50px_100px_-12px_rgba(239,68,68,0.4)] backdrop-blur-sm">
                  <img 
                    src={heroImage} 
                    alt="Scalable Technology Solutions - Innovation in Action"
                    className="w-full h-80 md:h-96 lg:h-[30rem] xl:h-[34rem] object-cover group-hover:scale-110 transition-transform duration-1200 ease-out filter group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-800"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mb-24 md:mb-32 fade-in-up">
            <button
              onClick={scrollToServices}
              className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 hover:scale-105 flex items-center space-x-3"
            >
              <span>Get Started</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION (UPDATED) ================= */}
      <section id="services" className="py-24 md:py-32 lg:py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions to scale your business from ideation to market domination
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => setActiveService(index)}
                className="group relative z-20 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800/50 hover:border-red-500/30 transition-all duration-500 cursor-pointer fade-in-up overflow-hidden flex flex-col h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex-grow">
                  <div className="mb-6 p-3 bg-red-600/10 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-red-600/20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  {/* line-clamp-3 prevents text from cutting off awkwardly */}
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-gray-800 group-hover:border-red-500/20 transition-colors">
                    <span className="text-sm text-red-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                      View Details &rarr;
                    </span>
                </div>
                
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-red-600/5 rounded-full blur-xl group-hover:bg-red-600/10 transition-colors duration-500"></div>
              </div>
            ))}
          </div>

          <div className="text-center fade-in-up">
            <button
              onClick={() => window.location.href = '/services'}
              className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 hover:scale-105 flex items-center space-x-3 mx-auto"
            >
              <span>Explore All Services</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}
      <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Real <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We don't just build technology – we build businesses that scale, succeed, and shape the future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center group fade-in-up">
              <div className="relative mb-8 mx-auto w-24 h-24 bg-gradient-to-br from-red-600/20 to-red-500/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-red-500/20">
                <TrendingUp className="text-red-400" size={40} />
                <div className="absolute inset-0 bg-red-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">Growth Acceleration</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Average 200% revenue growth within 12 months through strategic tech implementation
              </p>
            </div>

            <div className="text-center group fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-8 mx-auto w-24 h-24 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-blue-500/20">
                <Target className="text-blue-400" size={40} />
                <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">Market Fit</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                90% of our clients achieve product-market fit faster with our strategic approach
              </p>
            </div>

            <div className="text-center group fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative mb-8 mx-auto w-24 h-24 bg-gradient-to-br from-green-600/20 to-green-500/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-green-500/20">
                <Zap className="text-green-400" size={40} />
                <div className="absolute inset-0 bg-green-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">Efficiency Boost</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                60% operational efficiency improvement through AI automation and optimization
              </p>
            </div>
          </div>

          <div className="text-center fade-in-up">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 hover:scale-105"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO SECTION ================= */}
      <section id="portfolio" className="py-24 md:py-32 lg:py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Showcasing successful transformations and innovative solutions that drive real business results
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            {portfolioProjects.map((project, index) => (
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

          <div className="text-center fade-in-up">
            <button
              onClick={() => window.location.href = '/portfolio'}
              className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 hover:scale-105 flex items-center space-x-3 mx-auto"
            >
              <span>View All Projects & See The Magic</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-red-600/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Success <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it – hear from the leaders we've helped transform their businesses
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-gray-800/50 fade-in-up shadow-2xl">
              <div className="flex items-center justify-center mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current mx-1" size={28} />
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl text-center mb-12 leading-relaxed text-gray-100 font-light">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-6">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-red-500/20"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-red-600/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-left">
                  <div className="font-bold text-xl text-white mb-1">{testimonials[currentIndex].name}</div>
                  <div className="text-red-400 font-semibold text-lg">{testimonials[currentIndex].role}</div>
                  <div className="text-gray-400">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-red-600 rounded-full p-3 transition-colors duration-300 hover:glow-red"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-red-600 rounded-full p-3 transition-colors duration-300 hover:glow-red"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-red-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="py-24 md:py-32 lg:py-40 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? Let's discuss how we can help scale your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="fade-in-up">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-red-600/10 rounded-lg p-3 group-hover:bg-red-600/20 transition-colors duration-300">
                    <Phone className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">Available 24/7 for urgent matters</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-blue-600/10 rounded-lg p-3 group-hover:bg-blue-600/20 transition-colors duration-300">
                    <Mail className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-400">hello@scalable.tech</p>
                    <p className="text-gray-400">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-green-600/10 rounded-lg p-3 group-hover:bg-green-600/20 transition-colors duration-300">
                    <MapPin className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <p className="text-gray-400">San Francisco, CA</p>
                    <p className="text-gray-400">Remote-first, global presence</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black/60 rounded-xl border border-gray-800">
                <h4 className="font-semibold mb-2">Ready to Scale?</h4>
                <p className="text-gray-400 text-sm">
                  Book a free 30-minute consultation to discuss your project and get a custom proposal.
                </p>
              </div>
            </div>

            <div className="fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/60 border border-gray-800 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/60 border border-gray-800 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/60 border border-gray-800 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:glow-red pulse-glow flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE MODAL ================= */}
      {activeService !== null && services[activeService] && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[9999] p-4"
          onClick={() => setActiveService(null)}
        >
          <div 
            className="bg-[#0a0a0a] rounded-3xl border border-gray-800 w-full max-w-4xl relative overflow-hidden shadow-2xl animate-fade-in-up flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
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

    </div>
  );
};

export default LandingPage;