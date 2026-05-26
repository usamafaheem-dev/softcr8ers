"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Search, 
  ArrowRight, 
  Sparkles, 
  CheckCircle, 
  Users, 
  Zap, 
  Heart, 
  FileText, 
  Send, 
  ChevronRight, 
  X, 
  Upload, 
  Coffee, 
  Laptop, 
  Compass, 
  Smile, 
  Award, 
  Rocket 
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CinematicFooter } from "@/components/ui/motion-footer";
import { useTranslation } from "@/context/LanguageContext";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Define TypeScript interfaces for our job positions
interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  deadline?: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const JOBS_DATA: Job[] = [
  {
    id: "wordpress-developer",
    title: "WordPress Developer",
    department: "Engineering",
    location: "Remote Job",
    type: "Full-Time",
    salary: "",
    deadline: "2024-01-01",
    description: "Build robust and scalable WordPress architectures for high-end clients.",
    requirements: [
      "2+ years experience in WordPress theme and plugin development",
      "Proficiency in PHP, JavaScript, HTML, and CSS",
      "Experience with headless WordPress is a plus",
    ],
    responsibilities: [
      "Develop custom WordPress themes and plugins",
      "Optimize website performance and security",
      "Collaborate with designers to implement pixel-perfect UIs",
    ]
  },
  {
    id: "frontend-intern",
    title: "Frontend Intern",
    department: "Engineering",
    location: "Remote Job",
    type: "Internship",
    salary: "",
    deadline: "2024-01-01", // Passed
    description: "Kickstart your career by building beautiful React interfaces.",
    requirements: [
      "Basic understanding of React and Tailwind CSS",
      "Strong desire to learn and write clean code",
      "Good communication skills",
    ],
    responsibilities: [
      "Assist in developing UI components",
      "Write clean, maintainable frontend code",
      "Participate in daily standups and code reviews",
    ]
  },
  {
    id: "python-intern",
    title: "Python Intern",
    department: "Engineering",
    location: "Remote Job",
    type: "Internship",
    salary: "",
    deadline: "2024-01-01",
    description: "Work on exciting backend systems and scripts using Python.",
    requirements: [
      "Familiarity with Python and basic backend concepts",
      "Understanding of REST APIs",
      "Problem-solving mindset",
    ],
    responsibilities: [
      "Write scripts for automation",
      "Assist in API development using FastAPI or Django",
      "Debug and test backend systems",
    ]
  },
  {
    id: "ml-intern",
    title: "ML Intern",
    department: "AI/Data",
    location: "Remote Job",
    type: "Internship",
    salary: "",
    deadline: "2024-01-01", // Passed
    description: "Dive into the world of Machine Learning and AI models.",
    requirements: [
      "Basic knowledge of Machine Learning algorithms",
      "Experience with libraries like Pandas, Scikit-Learn, or TensorFlow",
      "Analytical thinking",
    ],
    responsibilities: [
      "Prepare and clean datasets for model training",
      "Assist in training and evaluating ML models",
      "Implement simple predictive features",
    ]
  }
];

export default function CareersPage() {
  const { t } = useTranslation();
  
  // State variables for dynamic interaction
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  
  // Application Form State
  const [isApplying, setIsApplying] = useState<boolean>(false);
  const [appliedJob, setAppliedJob] = useState<Job | null>(null);
  const [formStep, setFormStep] = useState<number>(1);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
    linkedin: "",
    experience: "1-3 Years",
    resume: null as File | null,
    resumeText: "",
    whySoftcr8ors: "",
    salaryExpectation: "",
  });

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Filter positions based on category & search query
  const filteredJobs = JOBS_DATA.filter((job) => {
    const matchesCategory = selectedCategory === "All" || job.department === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleApplyClick = (job: Job) => {
    setAppliedJob(job);
    setIsApplying(true);
    setFormStep(1);
    setFormSubmitted(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep < 3) {
      setFormStep(formStep + 1);
    } else {
      // Final submission logic simulation
      setFormSubmitted(true);
      setTimeout(() => {
        // Reset states
        setIsApplying(false);
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          portfolio: "",
          linkedin: "",
          experience: "1-3 Years",
          resume: null,
          resumeText: "",
          whySoftcr8ors: "",
          salaryExpectation: "",
        });
      }, 3500);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-slate-50 text-slate-800 overflow-x-hidden relative font-sans selection:bg-purple-100 selection:text-slate-900">
      <Navbar />

      {/* Decorative Blur Orbs Tailored for Light Theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-200/30 via-indigo-100/20 to-purple-200/30 blur-[130px] pointer-events-none z-0" />

      {/* ══ SMALL BANNER HERO SECTION ══ */}
      <section className="pt-32 md:pt-40 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900">
            Careers
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-2 mt-4 md:mt-0 text-sm font-medium text-slate-800"
        >
          <a href="/" className="hover:text-purple-600 transition-colors">Home</a>
          <span className="text-slate-400">&rarr;</span>
          <span className="text-[#a906c9]">Careers</span>
        </motion.div>
      </section>

      {/* ══ BENEFITS & PERKS ══ */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs font-medium tracking-[0.4em] uppercase text-purple-600">
            EMPLOYEE COMPENSATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mt-3">
            The SoftCr8ors <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Standard</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mt-4 font-normal">
            We compensate our people like elite players. Outstanding benefits designed for high-performing remote operators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <DollarSign className="w-6 h-6 text-blue-600" />,
              title: "Top-Tier Salaries",
              desc: "We regularly review and target the 90th percentile of remote compensation benchmarks."
            },
            {
              icon: <Coffee className="w-6 h-6 text-purple-600" />,
              title: "Flexible Workspaces",
              desc: "$3,000 yearly coworking stipend plus $2,000 home office upgrade budget upon sign-on."
            },
            {
              icon: <Laptop className="w-6 h-6 text-pink-600" />,
              title: "Ultimate Dev Gear",
              desc: "Latest high-tier MacBook Pro M-series max chip and 4K displays delivered to your doorstep."
            },
            {
              icon: <Compass className="w-6 h-6 text-indigo-600" />,
              title: "Remote Hub Retreats",
              desc: "Past meets included luxury beach resorts in Bali, private alpine lodges in Chamonix, and Tokyo."
            },
            {
              icon: <Smile className="w-6 h-6 text-emerald-600" />,
              title: "Unlimited PTO",
              desc: "Mandatory 4 weeks minimum. Take what you need when you need it to stay fully refreshed."
            },
            {
              icon: <Award className="w-6 h-6 text-amber-600" />,
              title: "Learning & Conferences",
              desc: "Full coverage for any tech classes, books, and international flight tickets to major developer summits."
            },
            {
              icon: <Heart className="w-6 h-6 text-rose-600" />,
              title: "Global Medical Care",
              desc: "Premium comprehensive medical, dental, and psychological care package globally for you and dependents."
            },
            {
              icon: <Rocket className="w-6 h-6 text-violet-600" />,
              title: "Equity & Profit-Share",
              desc: "Direct wealth growth via high-upside stock grants and periodic company performance cash splits."
            }
          ].map((perk, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-[#241c42] border border-[#392e63] rounded-2xl p-6 hover:shadow-md hover:border-[#4d4080] transition-all duration-300 relative group shadow-sm text-white"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-transparent to-transparent group-hover:from-white/5 rounded-tr-2xl transition-all duration-300" />
              
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 group-hover:border-white/30 transition-colors">
                {perk.icon}
              </div>
              <h3 className="text-base font-medium mb-2 text-white">{perk.title}</h3>
              <p className="text-white/70 text-xs leading-relaxed font-normal">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ JOB POSITIONS & SEARCH ══ */}
      <section id="open-positions" className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full relative z-10 scroll-mt-24">
        <div className="text-center mb-20">
          <span className="text-xs font-medium tracking-[0.4em] uppercase text-purple-600">
            JOIN US IN REDEFINING FINANCE
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mt-3">
            Open Positions
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mt-4 font-normal">
            If you do not see a listing matching your skillset but identify with our ethos, select 'Speculative Application' or apply directly.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 bg-white/80 border border-slate-150 p-4 rounded-2xl backdrop-blur-md shadow-sm">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {["All", "Engineering", "Design", "Product", "Marketing"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-950 bg-slate-100/60 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search positions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:border-indigo-500 focus:bg-white text-slate-800 transition-colors shadow-inner"
            />
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={job.id}
                  className="bg-white border border-slate-100 hover:border-indigo-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative group shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2.5 items-center">
                      <span className="text-[10px] font-medium uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                      <div className="flex items-center gap-1 text-slate-500 text-[11px] font-medium">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-500 text-[11px] font-medium">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-medium text-slate-950 group-hover:text-indigo-600 transition-all duration-300">
                      {job.title}
                    </h3>
                    
                    <p className="text-slate-600 text-xs md:text-sm max-w-3xl leading-relaxed font-normal">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto shrink-0 border-t border-slate-100 pt-4 md:pt-0 md:border-0 gap-4">
                    <div className="text-left md:text-right">
                      {job.deadline && (
                        <div className="mb-2">
                          <span className="text-[10px] uppercase tracking-widest font-medium block text-slate-400">Deadline</span>
                          <span className={cn(
                            "text-xs font-medium", 
                            new Date(job.deadline) < new Date() ? "text-red-500" : "text-emerald-600"
                          )}>
                            {new Date(job.deadline) < new Date() ? "Passed" : new Date(job.deadline).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                        className="px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-50 text-xs font-medium text-slate-700 active:scale-95 transition-all"
                      >
                        {selectedJob?.id === job.id ? "Hide Details" : "View Details"}
                      </button>
                      <button
                        onClick={() => handleApplyClick(job)}
                        className="px-5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium active:scale-95 transition-all flex items-center gap-1 shadow-sm"
                      >
                        <span>Apply</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Expanded job details */}
                  {selectedJob?.id === job.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full border-t border-slate-100 pt-6 mt-4 col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-xs md:text-sm text-slate-600 bg-slate-50/50 p-4 rounded-xl"
                    >
                      <div>
                        <h4 className="font-medium uppercase text-[10px] text-indigo-600 tracking-widest mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i} className="flex gap-2 leading-relaxed font-normal">
                              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium uppercase text-[10px] text-indigo-600 tracking-widest mb-3">Requirements & Skills</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="flex gap-2 leading-relaxed font-normal">
                              <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="text-center py-16 bg-white border border-slate-100 rounded-2xl shadow-sm">
                <p className="text-slate-500 font-medium">No positions found matching your criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                  className="text-indigo-600 text-xs font-medium underline mt-2"
                >
                  Clear filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══ APPLICATION FORM MODAL (FULLY LIGHT-THEMED) ══ */}
      <AnimatePresence>
        {isApplying && appliedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsApplying(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate-150 rounded-3xl w-full max-w-xl overflow-hidden relative shadow-2xl z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/50">
                <div>
                  <span className="text-[9px] font-medium uppercase text-indigo-600 tracking-widest block mb-1">
                    APPLYING FOR
                  </span>
                  <h3 className="text-base md:text-lg font-medium text-slate-900 line-clamp-1">{appliedJob.title}</h3>
                </div>
                <button 
                  onClick={() => setIsApplying(false)}
                  className="p-2 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Steps */}
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex gap-4 text-xs font-medium text-slate-400 shrink-0">
                <div className={`flex items-center gap-1.5 ${formStep >= 1 ? "text-indigo-600" : ""}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center border text-[10px] font-medium ${
                    formStep > 1 ? "bg-indigo-600 border-indigo-600 text-white" : formStep === 1 ? "border-indigo-600" : "border-slate-200"
                  }`}>
                    {formStep > 1 ? "✓" : "1"}
                  </span>
                  <span>Credentials</span>
                </div>
                <div className="h-[1px] bg-slate-200 flex-1 self-center" />
                <div className={`flex items-center gap-1.5 ${formStep >= 2 ? "text-purple-600" : ""}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center border text-[10px] font-medium ${
                    formStep > 2 ? "bg-purple-600 border-purple-600 text-white" : formStep === 2 ? "border-purple-600" : "border-slate-200"
                  }`}>
                    {formStep > 2 ? "✓" : "2"}
                  </span>
                  <span>Portfolio</span>
                </div>
                <div className="h-[1px] bg-slate-200 flex-1 self-center" />
                <div className={`flex items-center gap-1.5 ${formStep >= 3 ? "text-pink-600" : ""}`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center border text-[10px] font-medium ${
                    formStep === 3 ? "border-pink-500 text-pink-600" : "border-slate-200"
                  }`}>
                    3
                  </span>
                  <span>Intent</span>
                </div>
              </div>

              {/* Modal Form Scrollable Wrapper */}
              <form onSubmit={handleFormSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-500 flex items-center justify-center text-emerald-600 shadow-sm">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-medium text-slate-900">Application Received!</h3>
                    <p className="text-slate-500 text-xs max-w-sm leading-relaxed font-medium">
                      Thank you for applying to SoftCr8ors. Our recruitment team will review your credentials and get back within 72 hours via email.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* STEP 1: Personal Credentials */}
                    {formStep === 1 && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-4"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">Full Name *</label>
                            <input 
                              type="text" 
                              required
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-inner"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">Email Address *</label>
                            <input 
                              type="email" 
                              required
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="john@example.com"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-inner"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">Phone Number *</label>
                          <input 
                            type="tel" 
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-inner"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">Years of Experience *</label>
                          <select 
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all shadow-sm"
                          >
                            <option>1-3 Years</option>
                            <option>3-5 Years</option>
                            <option>5-8 Years</option>
                            <option>8+ Years</option>
                          </select>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2: Portfolio & Links */}
                    {formStep === 2 && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                      >
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">Portfolio / Github URL *</label>
                          <input 
                            type="url" 
                            required
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleInputChange}
                            placeholder="https://github.com/yourusername"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-purple-500 focus:bg-white transition-all shadow-inner"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">LinkedIn Profile URL</label>
                          <input 
                            type="url" 
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleInputChange}
                            placeholder="https://linkedin.com/in/yourprofile"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-purple-500 focus:bg-white transition-all shadow-inner"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">Resume / CV Document *</label>
                          <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 bg-slate-50 text-center relative group hover:border-purple-400 hover:bg-slate-100/50 transition-all cursor-pointer">
                            <input 
                              type="file" 
                              required={!formData.resume}
                              onChange={handleFileChange}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                            />
                            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2 group-hover:text-purple-600 transition-colors" />
                            <p className="text-xs font-medium text-slate-700">
                              {formData.resume ? formData.resume.name : "Upload PDF or DOCX file"}
                            </p>
                            <p className="text-[10px] text-slate-400 mt-1 font-medium">Maximum file size 8MB</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3: Statement of Intent */}
                    {formStep === 3 && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                      >
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">Why SoftCr8ors? *</label>
                          <textarea 
                            required
                            rows={4}
                            name="whySoftcr8ors"
                            value={formData.whySoftcr8ors}
                            onChange={handleInputChange}
                            placeholder="Tell us what draws you to our design systems, remote velocity, or custom liquidity platforms..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-pink-500 focus:bg-white transition-all resize-none shadow-inner"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">Annual Base Compensation Expectation *</label>
                          <input 
                            type="text" 
                            required
                            name="salaryExpectation"
                            value={formData.salaryExpectation}
                            onChange={handleInputChange}
                            placeholder="e.g. $130,000 USD"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-pink-500 focus:bg-white transition-all shadow-inner"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Form Action Controls */}
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6 shrink-0">
                      <button
                        type="button"
                        disabled={formStep === 1}
                        onClick={() => setFormStep(formStep - 1)}
                        className="px-4 py-2 rounded-full border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none text-xs font-medium transition-all"
                      >
                        Previous
                      </button>
                      
                      <button
                        type="submit"
                        className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:shadow-md hover:shadow-indigo-500/20 active:scale-95 text-white text-xs font-medium transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        {formStep === 3 ? (
                          <>
                            <span>Submit Application</span>
                            <Send className="w-3.5 h-3.5" />
                          </>
                        ) : (
                          <>
                            <span>Next Step</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CinematicFooter />
    </main>
  );
}

