import React, { useState, useEffect } from 'react';
// Ensure useLocation and Link are imported
import { useLocation, Link, useParams } from 'react-router-dom'; 
import { 
  ArrowRight, 
  ArrowLeft, 
  ExternalLink, 
  Target, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp,
  LayoutTemplate,
  Cpu,
  ShoppingBag,
  GraduationCap
} from 'lucide-react';
// Ensure this path is correct for your project structure
import PageLayout from '../components/PageLayout'; 

// === NEW IMPORTS FOR CASE STUDY IMAGES ===
import factor6Image from '../assets/images/case_studies/the-jopwell-collection-u5pAYGDWD54-unsplash.jpg';
import hulaImage from '../assets/images/case_studies/Kids2.jpg';
import fairfieldImage from '../assets/images/case_studies/Fairfields.webp';
import wcedImage from '../assets/images/case_studies/Creating-Career-Pathways-Through-Training-Initiatives-2-scaled.webp';


// --- 1. TYPE DEFINITIONS ---
interface Feature {
  title: string;
  desc: string;
}

interface Solution {
  main: string;
  features: Feature[];
}

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  icon: React.ReactNode;
  image: string; 
  website: string;
  overview: string;
  challenge: string[];
  solution: Solution;
  impact: string[];
}

// --- 2. DATA POPULATION ---
const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'factor6',
    client: 'Factor6',
    industry: 'EdTech / L&D',
    title: 'Learning & Development Platform for QS Professionals',
    icon: <LayoutTemplate size={32} className="text-red-500" />,
    image: factor6Image,
    website: 'https://www.factor6.co.za/Profile-2/', 
    overview: "Factor6, a team of seasoned professionals in the Quantity Surveying industry, identified a critical obstacle: learners were overwhelmed by an intensive curriculum of 12 subjects across just three years. The learning material was scattered, and students were losing valuable time.",
    challenge: [
      "Students were struggling to manage a high-volume, multi-year learning load.",
      "Existing study materials lacked structure and clarity.",
      "No centralized platform existed to guide learners efficiently toward exam success."
    ],
    solution: {
      main: "Scalable designed and developed a complete end-to-end Learning & Development platform engineered to strip away complexity and deliver only what students needed to succeed.",
      features: [
        { title: "Video Summaries", desc: "High-quality, concise lectures simplifying difficult QS concepts." },
        { title: "Insights & Analytics", desc: "Data-driven dashboards for students and administrators to track performance." },
        { title: "Streamlined Path", desc: "A structured curriculum designed around what mattered most for passing QA exams." }
      ]
    },
    impact: [
      "Students gained a singular, structured learning environment.",
      "Learning efficiency increased through concise lectures.",
      "Factor6 gained a scalable digital product supporting hundreds of future learners."
    ]
  },
  {
    id: 'hula',
    client: 'Hula',
    industry: 'AI / EdTech',
    title: 'Ruby & Lucy: AI for Personalised Learning',
    icon: <Cpu size={32} className="text-red-500" />,
    image: hulaImage,
    website: 'https://hulatechnology.com/',
    overview: "Hula set out to build two high-impact AI products: Ruby (an AI tutor) and Lucy (an AI teacher assistant). However, development challenges had stalled progress. The product codebase had become fragmented, unstable, and lacked the scalability needed for growth.",
    challenge: [
      "Codebase was fragmented and unstable due to multiple development handovers.",
      "Unstable infrastructure resulted in unpredictable responses and slow performance.",
      "No analytics layer to track learning outcomes or user behaviour."
    ],
    solution: {
      main: "Scalable rebuilt both Ruby and Lucy from the ground up. The goal: create fast, reliable, and intelligent AI experiences aligned with curriculum standards.",
      features: [
        { title: "Multilingual AI", desc: "Curriculum-aligned tutoring across 11 South African languages." },
        { title: "Contextual Reasoning", desc: "Ruby supports students using photos of textbook pages or handwriting." },
        { title: "Automated Planning", desc: "Lucy generates lesson plans, worksheets, and assessments in seconds." }
      ]
    },
    impact: [
      "Teachers save hours each week with automated planning tools.",
      "Platform stability increased dramatically, restoring trust among schools.",
      "Infrastructure now supports scaling to tens of thousands of learners."
    ]
  },
  {
    id: 'fairfield',
    client: 'Fairfield Meat Centre',
    industry: 'Retail / E-commerce',
    title: 'Digital Transformation for Modern Retail',
    icon: <ShoppingBag size={32} className="text-red-500" />,
    image: fairfieldImage,
    website: 'https://fairfieldmeats.co.za/',
    overview: "Fairfield Meat Centre faced rising operational pressures. Their ecommerce setup, built on Shopify and plugins, had become slow and costly. Manual workflows led to fulfillment delays and unreliable customer experiences.",
    challenge: [
      "High platform fees and payment processing costs eating into margins.",
      "Manual pick, pack, and dispatch processes prone to delays and errors.",
      "A fragmented tech stack that lacked scalability and reliability."
    ],
    solution: {
      main: "Scalable rebuilt Fairfield's digital infrastructure end-to-end, delivering a robust, automated ecommerce and fulfillment platform purpose-built for a butchery.",
      features: [
        { title: "Custom Platform", desc: "Full ownership of the journey with support for variable-weight items and custom cuts." },
        { title: "Logistics Integration", desc: "Smart routing and a driver interface for route management and confirmations." },
        { title: "Real-Time Updates", desc: "Live status updates improving customer transparency and trust." }
      ]
    },
    impact: [
      "Significant cost savings by eliminating Shopify fees and lowering processing costs.",
      "Reduced operational errors through automation and real-time tools.",
      "Faster order turnaround and higher delivery success rates."
    ]
  },
  {
    id: 'wced',
    client: 'WCED Career Clubs',
    industry: 'Government / Public Sector',
    title: 'AI-Enabled Career Pathways for Learners',
    icon: <GraduationCap size={32} className="text-red-500" />,
    image: wcedImage,
    website: 'https://careerclubs.co.za/',
    overview: "The Western Cape Government sought partners to solve youth unemployment. Scalable partnered with them to support Career Clubs, an initiative across 230+ schools aimed at giving learners exposure to real-world careers.",
    challenge: [
      "Limited access to structured, accurate career guidance for learners.",
      "Overburdened teachers with little time for individual guidance.",
      "No digital infrastructure that could scale to hundreds of schools across the province."
    ],
    solution: {
      main: "A comprehensive digital ecosystem that supports learners and government stakeholders through AI-driven career exploration and data intelligence.",
      features: [
        { title: "Pathways Engine", desc: "AI recommendations matching learners to careers based on interests and strengths." },
        { title: "Skills Discovery", desc: "Digital modules introducing real-world workplace skills like teamwork and digital literacy." },
        { title: "Insights Dashboard", desc: "Real-time data for the WCED to measure engagement and trends." }
      ]
    },
    impact: [
      "230+ schools onboarded, with 1,000 more planned for rollout.",
      "Tens of thousands of learners gained access to structured career guidance.",
      "Teachers receive AI-powered support, reducing workload."
    ]
  }
];

const CaseStudiesPage = () => {
  const [activeStudyId, setActiveStudyId] = useState<string | null>(null);
  const location = useLocation(); 

  // CRITICAL FIX: Reads the state on load and sets the initial active study
  useEffect(() => {
    const incomingId = location.state?.activeId; // Get ID from Footer link state

    if (incomingId) {
      // If a specific ID was passed, set the state to immediately display the detail view
      setActiveStudyId(incomingId);
      // Clear the state from the URL history (optional, but helps keep history clean)
      window.history.replaceState({}, document.title, location.pathname);
    } else {
      // If no ID is passed, ensure we show the list view (default)
      setActiveStudyId(null);
    }

    // Ensures page always loads at the top, even if showing a detail view immediately
    window.scrollTo(0, 0); 
  }, [location.pathname]); // Dependency on path change

  // Find the active study. activeStudy will be CaseStudy | undefined
  const activeStudy = CASE_STUDIES.find(s => s.id === activeStudyId);

  return (
    <PageLayout
      title={activeStudyId ? (
        <button 
          onClick={() => setActiveStudyId(null)} 
          className="group flex items-center gap-2 text-xl text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Case Studies
        </button>
      ) : (
        <>Our <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Case Studies</span></>
      )}
      description={activeStudyId ? "" : "Real-world problems solved with scalable technology."}
    >
      
      {/* === VIEW 1: THE GRID (List of Case Studies) === */}
      {!activeStudyId && (
        <div className="grid md:grid-cols-2 gap-8 mb-20 animate-fade-in-up">
          {CASE_STUDIES.map((study) => (
            <div 
              key={study.id}
              onClick={() => setActiveStudyId(study.id)}
              className="group bg-[#0a0a0a] rounded-3xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-500 cursor-pointer hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.2)]"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-gray-700 text-xs font-medium text-gray-300">
                  {study.industry}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                    {study.icon}
                  </div>
                  <span className="font-mono text-red-500 text-sm uppercase tracking-wider">
                    {study.client}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">
                  {/* Note: Removed activeStudy check here, which was unnecessary for the list view */}
                  {study.title} 
                </h3>
                <p className="text-gray-400 line-clamp-3 mb-6">
                  {study.overview}
                </p>
                
                <div className="flex items-center text-white font-medium group-hover:gap-3 transition-all duration-300">
                  Read Story <ArrowRight size={18} className="ml-2 text-red-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* === VIEW 2: THE STORY (Detail Page) === */}
      {/* 🛑 FIX APPLIED: Type narrowing is now done by TypeScript. */}
      {activeStudy && (
        <div className="animate-fade-in-up">
          
          {/* HERO */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden mb-16 group">
            {/* NO MORE ERROR HERE because TS knows activeStudy is defined */}
            <img 
              src={activeStudy.image} 
              alt={activeStudy.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full">
                  {activeStudy.industry}
                </span>
                <span className="text-gray-300 font-mono uppercase tracking-widest">
                  {activeStudy.client}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
                {activeStudy.title}
              </h1>
            </div>
          </div>

          {/* LAYOUT */}
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            
            {/* Left */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="text-red-500" /> Overview
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {activeStudy.overview}
              </p>
              
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp size={20} className="text-green-500" /> Impact Delivered
                </h3>
                <ul className="space-y-3">
                  {activeStudy.impact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5">
              <div className="bg-[#1a1a1a] p-8 rounded-3xl border-l-4 border-red-600 h-full shadow-xl">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <AlertCircle className="text-red-500" /> The Challenge
                </h2>
                <ul className="space-y-6">
                  {activeStudy.challenge.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-500 text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SOLUTION */}
          <div className="mb-20">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">The Solution</h2>
              <p className="text-gray-400 text-lg">
                {activeStudy.solution.main}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {activeStudy.solution.features.map((feature, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg">
                    <CheckCircle2 size={24}/>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="border-t border-gray-800 pt-12 pb-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <button 
              onClick={() => setActiveStudyId(null)}
              className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 font-medium"
            >
              <ArrowLeft size={20} /> Back to all case studies
            </button>

            <a 
              href={activeStudy.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-colors flex items-center gap-2"
            >
              Visit Client Website <ExternalLink size={18} />
            </a>
          </div>

        </div>
      )}
    </PageLayout>
  );
};

export default CaseStudiesPage;