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
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Asset imports // update 
import heroImage from '../assets/images/hero/Hero Image.avif';

// === 🔑 NEW IMPORTS FOR CASE STUDY IMAGES (Copied from CaseStudiesPage) 🔑 ===
import factor6Image from '../assets/images/case_studies/the-jopwell-collection-u5pAYGDWD54-unsplash.jpg';
import fairfieldImage from '../assets/images/case_studies/Fairfields.webp';
import wcedImage from '../assets/images/case_studies/Creating-Career-Pathways-Through-Training-Initiatives-2-scaled.webp';
// The 'hula' image is not used in the featured case studies, so only the necessary ones are imported/used below.
// ------------------------------------

// --- INTERFACES ---

interface FeaturedStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface TypedTextProps {
  typingSpeed?: number;
  delay?: number;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

// --- NEW COMPONENT: Simple, Continuous Typewriter Effect (UNCHANGED) ---
const FULL_TEXT = "Turning Vision Into Reality";

const TypedText: React.FC<TypedTextProps> = ({ typingSpeed = 100, delay = 500 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const intervalRef = React.useRef<number | null>(null);

  useEffect(() => {
    if (isTypingComplete) return;

    let i = 0;

    const startTyping = () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }

      const intervalId = setInterval(() => {
        if (i < FULL_TEXT.length) {
          setDisplayedText((prev) => prev + FULL_TEXT.charAt(i++));
        } else {
          clearInterval(intervalId);
          setIsTypingComplete(true);
        }
      }, typingSpeed);

      intervalRef.current = intervalId;
    };

    const delayTimer = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(delayTimer);
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [typingSpeed, delay, isTypingComplete]);

  const parts = FULL_TEXT.split(' Into ');
  const visionPart = parts.length > 0 ? parts[0].split(' ') : ['Turning', 'Vision'];
  const realityPart = parts.length > 1 ? parts[1] : 'Reality';
  const turning = visionPart.slice(0, -1).join(' ');
  const vision = visionPart[visionPart.length - 1];

  return (
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
      {isTypingComplete ? (
        <>
          <span className="block text-white">
            {turning}{' '}
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent inline-block">
              {vision}
            </span>
          </span>
          <span className="block text-white">
            Into <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">{realityPart}</span>
          </span>
        </>
      ) : (
        <span className="block text-white">
          {displayedText}
          <span className="inline-block w-1 h-14 md:h-20 ml-1 bg-red-500 align-text-bottom animate-blink"></span>
        </span>
      )}
    </h1>
  );
};


const LandingPage: React.FC = () => {
  // --- STATE & DATA (UNCHANGED) ---
  const [activeService, setActiveService] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const services: Service[] = [
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

  // ======================================================================
  // CLIENT REQUEST: UPDATED IMAGE PATHS FOR CASE STUDIES
  // ======================================================================
  const featuredCaseStudies: FeaturedStudy[] = [
    {
      id: 'wced',
      client: 'WCED Career Clubs',
      industry: 'Government',
      title: 'AI-Enabled Career Pathways',
      description: 'A comprehensive digital ecosystem supporting 230+ schools with AI-driven career exploration.',
      image: wcedImage, // <-- Updated to imported asset
      tags: ["GovTech", "AI", "Education"]
    },
    {
      id: 'factor6',
      client: 'Factor6',
      industry: 'EdTech',
      title: 'L&D Platform for QS Professionals',
      description: 'A focused, modern learning pathway that simplified the journey and improved student outcomes with AI summaries.',
      image: factor6Image, // <-- Updated to imported asset
      tags: ["EdTech", "Platform", "Video AI"]
    },
    {
      id: 'fairfield',
      client: 'Fairfield Meat Centre',
      industry: 'Retail',
      title: 'Digital Transformation for Retail',
      description: 'Automated ecommerce and fulfillment platform purpose-built to replace manual workflows.',
      image: fairfieldImage, // <-- Updated to imported asset
      tags: ["E-commerce", "Logistics", "Automation"]
    }
  ];

  const testimonials: Testimonial[] = [
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

  // --- EFFECTS & HANDLERS (UNCHANGED) ---
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveService(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (activeService !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeService]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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

      {/* ================= HERO SECTION (IMAGE REMOVED) ================= */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/8 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-600/5 rounded-full blur-2xl"></div>
        </div>

        <div className="absolute top-0 left-0 right-0 h-20 z-0"></div>

        {/* 1. Content container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-16 md:py-20 lg:py-24">
          <div className="fade-in-up space-y-12">
            
            <TypedText typingSpeed={70} delay={500} />

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              We help ambitious startups and established businesses scale with custom software development, AI solutions, and strategic innovation.
            </p>
          </div>

          {/* ======================================================================
            CLIENT REQUEST: COMMENTING OUT THE HERO IMAGE AND ITS CONTAINER ONLY 
            ======================================================================
          */}
          {/* <div className="mt-16 mb-8 md:mt-20 md:mb-10 lg:mt-24 lg:mb-12 fade-in-up relative overflow-hidden">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-12 bg-gradient-to-r from-red-500/15 via-red-600/8 to-red-500/15 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1200 animate-pulse"></div>
              <div className="absolute -inset-8 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/15 rounded-[3.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-900"></div>

              <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] border-2 border-gray-800/40 group-hover:border-red-500/60 transition-all duration-800 shadow-[0_35px_70px_-12px_rgba(0,0,0,0.9)] group-hover:shadow-[0_50px_100px_-12px_rgba(239,68,68,0.4)] backdrop-blur-sm">
                <img
                  src={heroImage}
                  alt="Scalable Technology Solutions - Innovation in Action"
                  className="w-full h-80 md:h-96 lg:h-[30rem] xl:h-[34rem] object-cover group-hover:scale-110 transition-transform duration-1200 ease-out filter group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-800"></div>
              </div>
            </div>
          </div> */}

          {/* 4. Button Container (kept) */}
          <div className="flex justify-center items-center mb-0 fade-in-up mt-16">
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

      {/* ================= SERVICES SECTION (MODIFIED PADDING) ================= */}
      {/* Reduced padding is kept here for overall compactness */}
      <section id="services" className="py-16 md:py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* REDUCED MARGIN BELOW HEADING: mb-20 -> mb-16 */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions to scale your business from ideation to market domination
            </p>
          </div>

          {/* REDUCED MARGIN BELOW GRID: mb-16 -> mb-12 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
            <Link
              to="/services"
              className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 hover:scale-105 flex items-center space-x-3 mx-auto w-fit"
            >
              <span>Explore All Services</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= IMPACT SECTION (UNCHANGED) ================= */}
      <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Real <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We don't just build technology – we build businesses that scale, succeed, and shape the future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center group fade-in-up">
              <div className="relative mb-8 mx-auto w-24 h-24 bg-gradient-to-br from-red-600/20 to-red-500/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-red-500/20">
                <TrendingUp className="text-red-400" size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">Growth Acceleration</h3>
              <p className="text-gray-300 leading-relaxed text-lg">Average 200% revenue growth within 12 months</p>
            </div>
            <div className="text-center group fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-8 mx-auto w-24 h-24 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-blue-500/20">
                <Target className="text-blue-400" size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">Market Fit</h3>
              <p className="text-gray-300 leading-relaxed text-lg">90% of clients achieve product-market fit faster</p>
            </div>
            <div className="text-center group fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative mb-8 mx-auto w-24 h-24 bg-gradient-to-br from-green-600/20 to-green-500/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 border border-green-500/20">
                <Zap className="text-green-400" size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">Efficiency Boost</h3>
              <p className="text-gray-300 leading-relaxed text-lg">60% operational efficiency improvement</p>
            </div>
          </div>

          <div className="text-center fade-in-up">
            <Link
              to="/contact"
              className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 hover:scale-105 inline-block"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FEATURED CASE STUDIES (IMAGE PATHS UPDATED) ================= */}
      <section id="case-studies" className="py-16 md:py-20 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Case Studies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Showcasing successful transformations and innovative solutions that drive real business results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {featuredCaseStudies.map((study, index) => (
              <div
                key={study.id}
                className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800/50 hover:border-red-500/30 transition-all duration-500 fade-in-up flex flex-col h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden h-64 shrink-0">
                  <img
                    src={study.image} // <-- This now uses the local imported variable
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500"></div>

                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-red-600/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                    {study.title}
                  </h3>
                  <div className="text-xs font-mono text-red-500 mb-2 uppercase tracking-widest">
                    {study.client}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-red-600/10 text-red-400 rounded-full text-sm border border-red-600/20 group-hover:bg-red-600/20 group-hover:border-red-600/30 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center fade-in-up">
            <Link
              to="/case-studies"
              className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 hover:scale-105 flex items-center space-x-3 mx-auto w-fit"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CONTACT US (UNCHANGED) ================= */}
      <section id="contact-us" className="py-16 md:py-20 lg:py-24 relative bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 fade-in-up">
            Ready to <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Scale?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Let's discuss your vision. Reach out and start your transformation today.
          </p>

          <Link
            to="/contact" // Assuming you have a dedicated contact page
            className="group relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 rounded-2xl text-xl font-semibold transition-all duration-300 shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 hover:scale-105 inline-block fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Get in Touch Now
          </Link>
        </div>
      </section>

      {/* ================= SERVICE DETAIL MODAL (UNCHANGED) ================= */}
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

            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a] opacity-90"></div>
            </div>

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