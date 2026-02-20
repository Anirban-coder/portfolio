import React, { useState, useEffect } from 'react';
import { Code, Cloud, Github, Linkedin, Mail, ExternalLink, Award, Plus, Edit2, Moon, Sun, Trash2, FileText, Database, Server, Settings } from 'lucide-react';
import { 
  FaHtml5,  
  FaJs, 
  FaReact, 
  FaPython, 
  FaGitAlt, 
  FaGoogle, 
  FaJava, 
  FaNodeJs 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiLeetcode,
  SiPostman
} from "react-icons/si";

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [showAddProject, setShowAddProject] = useState(false);
  const [showAddCertificate, setShowAddCertificate] = useState(false);
  
  const [newProject, setNewProject] = useState({ title: '', description: '', tech: '', github: '', demo: '' });
  const [newCertificate, setNewCertificate] = useState({ name: '', issuer: '', link: '' });
  
  // 🚀 MERGED: All your previous projects PLUS the new ones from your Resume
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      title: 'AI-Powered EdTech Ecosystem', 
      description: 'Developing a platform integrating Generative & Agentic AI to analyze student performance and recommend career paths. Architecting a Hybrid Cloud Solution utilizing MongoDB and Cloud SQL, plus an internal ATS Resume Builder.', 
      tech: ['MERN', 'Python', 'Cloud SQL', 'GenAI'], 
      github: 'https://github.com/Anirban-coder/nextstepper', 
    },
    { 
      id: 2, 
      title: 'Agentic AI Document Assistant', 
      description: 'Built a Context-Aware AI Agent using Groq API capable of retaining conversation history with 98% accuracy. Integrated RAG to process 200MB+ PDF uploads for deep document analysis.', 
      tech: ['Groq API', 'RAG', 'Agentic AI'], 
      github: 'https://github.com/Anirban-coder/agenticaiprjct1st', 
      demo: 'https://theanirbanrouthai.streamlit.app/' 
    },
    { 
      id: 3, 
      title: 'SkillBridge - Freelance Marketplace', 
      description: 'Engineered a Full-Stack Marketplace with role-based dashboards and secure JWT Authentication. Implemented Real-Time Messaging (Socket.io) and integrated a mock Razorpay Payment Gateway.', 
      tech: ['MERN', 'Socket.io', 'JWT', 'Razorpay'], 
      github: 'https://github.com/Anirban-coder/skillbridge', 
      demo: '#' 
    },
    { 
      id: 4, 
      title: 'DSA Visualizer Platform', 
      description: 'Developed an interactive platform categorizing Data Structures & Algorithms problems with live visualizations. Implemented optimized search and Mobile-First layout, utilized by 50+ students.', 
      tech: ['React', 'Node.js', 'MongoDB'], 
      github: 'https://github.com/Anirban-coder/DSAVisualizer', 
      demo: 'https://dsa-visualizer-hwmd-git-main-anirban-coders-projects.vercel.app' 
    },
    { 
      id: 5, 
      title: 'YoChoice', 
      description: 'Decision-making platform built to help users make better choices interactively.', 
      tech: ['React', 'Node.js', 'MongoDB'], 
      github: 'https://github.com/Anirban-coder/yochoice.git', 
      demo: 'https://yochoice-zopf-git-main-anirban-coders-projects.vercel.app' 
    },
    { 
      id: 6, 
      title: 'Travel Geek', 
      description: 'Interactive travel planning platform with a smooth user interface and API integrations.', 
      tech: ['React', 'API Integration'], 
      github: 'https://github.com/Anirban-coder/travelgeek.git', 
      demo: '#' 
    },
    { 
      id: 7, 
      title: 'Cafe Everyday', 
      description: 'Daily task tracker with a clean, responsive, and smooth UI.', 
      tech: ['React', 'CSS'], 
      github: 'https://github.com/Anirban-coder/CafeEverday.git', 
      demo: '#' 
    },
    { 
      id: 8, 
      title: 'Portfolio Website', 
      description: 'Modern responsive personal portfolio site featuring an admin dashboard and dark mode.', 
      tech: ['React', 'Tailwind', 'JavaScript'], 
      github: 'https://github.com/Anirban-coder/portfolio.git', 
      demo: '#' 
    }
  ]);

  // 📜 RESTORED: Your original certificates
  const [certificates, setCertificates] = useState([
    { id: 1, name: 'Google Cloud Skills Boost Badge', issuer: 'Google Cloud', link: 'https://www.cloudskillsboost.google/public_profiles/b131287b-f220-4aa3-8b4e-116c192d8b5b/badges/16364840' },
    { id: 2, name: 'Preparing For Professional Cloud Journey', issuer: 'Google Cloud', link: 'https://www.cloudskillsboost.google/public_profiles/b131287b-f220-4aa3-8b4e-116c192d8b5b/badges/14006295' },
    { id: 3, name: 'Google Cloud Fundamentals', issuer: 'Google Cloud', link: 'https://www.cloudskillsboost.google/public_profiles/b131287b-f220-4aa3-8b4e-116c192d8b5b/badges/12044636' },
    { id: 4, name: 'Develop Gen AI Apps with Gemini', issuer: 'Google', link: 'https://www.skills.google/public_profiles/2183bd9e-6bb3-4ff5-8013-f244b8d87519/badges/20023735' },
    { id: 5, name: 'Prompt Design in Vertex AI', issuer: 'Google', link: 'https://www.skills.google/public_profiles/2183bd9e-6bb3-4ff5-8013-f244b8d87519/badges/19997037' },
    { id: 6, name: 'DSA Certification', issuer: 'Udemy', link: '#' }
  ]);

  // 🛠 MERGED SKILLS: Previous + New additions from Resume
  const skills = [
    { name: 'JavaScript (ES6+)', icon: <FaJs className="text-yellow-400" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
    { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', icon: <Server className="text-gray-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'Google Cloud (GCP)', icon: <FaGoogle className="text-blue-500" /> },
    { name: 'Cloud SQL', icon: <Database className="text-blue-400" /> },
    { name: 'Generative AI & RAG', icon: <Cloud className="text-purple-400" /> },
    { name: 'Machine Learning', icon: <Settings className="text-pink-400" /> },
    { name: 'REST APIs', icon: <Code className="text-cyan-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'HTML5 & CSS3', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'DSA', icon: <SiLeetcode className="text-orange-500" /> },
    { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
    { name: 'Java', icon: <FaJava className="text-red-600" /> }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const handleAdminLogin = () => {
    if (adminPassword === 'Argon18@20_11_2001') {
      setIsAdmin(true);
      setShowPasswordPrompt(false);
      setAdminPassword('');
    } else {
      alert('Incorrect password!');
    }
  };

  const addProject = () => {
    if (newProject.title && newProject.description) {
      setProjects([...projects, { ...newProject, id: Date.now(), tech: newProject.tech.split(',').map(t => t.trim()) }]);
      setNewProject({ title: '', description: '', tech: '', github: '', demo: '' });
      setShowAddProject(false);
    }
  };

  const addCertificate = () => {
    if (newCertificate.name && newCertificate.issuer) {
      setCertificates([...certificates, { ...newCertificate, id: Date.now() }]);
      setNewCertificate({ name: '', issuer: '', link: '' });
      setShowAddCertificate(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900'}`}>
      
      {/* Admin Login Modal */}
      {showPasswordPrompt && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-8 max-w-md w-full`}>
            <h3 className="text-2xl font-bold mb-4">Admin Access</h3>
            <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} placeholder="Enter password" className={`w-full p-3 rounded-lg mb-4 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} border-2 border-purple-400`} onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()} />
            <div className="flex gap-3">
              <button onClick={handleAdminLogin} className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold">Login</button>
              <button onClick={() => setShowPasswordPrompt(false)} className={`flex-1 ${darkMode ? 'bg-slate-700' : 'bg-gray-200'} py-3 rounded-lg font-semibold`}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all ${isScrolled ? (darkMode ? 'bg-slate-900/95' : 'bg-white/95') + ' shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Anirban Routh</div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'skills', 'projects', 'certificates', 'contact'].map((s) => (
                <button key={s} onClick={() => scrollToSection(s)} className="capitalize hover:text-cyan-400 transition-colors">{s}</button>
              ))}
            </div>
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${darkMode ? 'bg-slate-700' : 'bg-gray-200'}`}>
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
            </button>
            {!isAdmin ? (
              <button onClick={() => setShowPasswordPrompt(true)} className="p-2 rounded-full bg-purple-500 text-white"><Edit2 size={20} /></button>
            ) : (
              <button onClick={() => setIsAdmin(false)} className="px-3 py-2 rounded-full bg-red-500 text-white text-sm font-semibold">Logout</button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${darkMode ? 'bg-purple-500/30' : 'bg-purple-400/40'} rounded-full blur-3xl animate-pulse`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${darkMode ? 'bg-cyan-500/30' : 'bg-cyan-400/40'} rounded-full blur-3xl animate-pulse`}></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12 z-10 max-w-6xl w-full">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-slate-700 group-hover:border-cyan-400' : 'border-white group-hover:border-purple-400'} transition-all transform group-hover:scale-105 shadow-2xl`}>
              <div className={`w-full h-full ${darkMode ? 'bg-gradient-to-br from-slate-700 to-slate-800' : 'bg-gradient-to-br from-purple-200 to-blue-200'} flex items-center justify-center`}>
                <div className="text-center w-full h-full">
                  <img src="../profile.jpeg" alt="Anirban Routh Profile" className="w-full h-full rounded-full mx-auto object-cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6"><span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Hi, I'm Anirban 👋</span></h1>
            <p className={`text-2xl mb-4 font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full-Stack Web Developer | MCA Student</p>
            <p className={`text-xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Architecting scalable AI-driven solutions & building optimized, user-centric applications.</p>
            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mb-8">
              <a href="https://github.com/Anirban-coder" target="_blank" rel="noopener noreferrer" className={`p-3 ${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all transform hover:scale-110 shadow-lg group`}>
                <Github size={24} className="group-hover:text-white" />
              </a>
              <a href="https://linkedin.com/in/anirban-routh" target="_blank" rel="noopener noreferrer" className={`p-3 ${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all transform hover:scale-110 shadow-lg group`}>
                <Linkedin size={24} className="group-hover:text-white" />
              </a>
              <a href="https://leetcode.com/u/Anirban_Routh/" target="_blank" rel="noopener noreferrer" className={`p-3 ${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all transform hover:scale-110 shadow-lg group`}>
                <SiLeetcode size={24} className="group-hover:text-white" />
              </a>
              <a href="mailto:anirbanrouth22@gmail.com" className={`p-3 ${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all transform hover:scale-110 shadow-lg group`}>
                <Mail size={24} className="group-hover:text-white" />
              </a>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => scrollToSection('projects')} className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <span className="flex items-center justify-center">View Projects <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" /></span>
              </button>
              <a href="/resume.pdf" download="Anirban_Routh_Resume.pdf" className={`group px-8 py-4 ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-gray-50'} rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center`}>
                Download Resume <FileText size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">About Me</h2>
          <div className={`${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/80 border-purple-200'} rounded-2xl p-8 shadow-2xl border`}>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6`}>
              I am an aspiring Software Engineer currently pursuing my Master of Computer Applications (MCA) at Netaji Subhash Engineering College. I am highly proficient in the MERN Stack, Python, and the Google Cloud Platform.
            </p>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6`}>
              My passion lies in architecting scalable AI-driven solutions using Generative AI, Groq API, and Cloud SQL. I thrive on building optimized, user-centric applications and leveraging data analytics to drive strategic business growth.
            </p>
            
            {/* Education Summary integrated in About */}
            <div className="mt-8 pt-6 border-t border-purple-400/30">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-purple-50'} p-4 rounded-xl`}>
                  <p className="font-bold text-cyan-400">Master of Computer Applications (MCA)</p>
                  <p className="text-sm">Netaji Subhash Engineering College</p>
                  <p className="text-xs mt-1 opacity-70">Sept 2024 - Present</p>
                </div>
                <div className={`${darkMode ? 'bg-slate-700/50' : 'bg-purple-50'} p-4 rounded-xl`}>
                  <p className="font-bold text-purple-400">Bachelor of Computer Applications (BCA)</p>
                  <p className="text-sm">Netaji Subhash Engineering College</p>
                  <p className="text-xs mt-1 opacity-70">2020 - 2023 | GPA: 8.7/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className={`${darkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white/80 border-purple-200 hover:border-purple-400'} rounded-xl p-6 border transition-all transform hover:scale-105 hover:shadow-xl flex flex-col items-center justify-center text-center`}>
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-sm font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</h2>
            {isAdmin && <button onClick={() => setShowAddProject(true)} className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-3 rounded-full hover:shadow-xl transform hover:scale-110"><Plus size={24} /></button>}
          </div>

          {/* Admin Add Project Form */}
          {showAddProject && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
              <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto`}>
                <h3 className="text-2xl font-bold mb-6">Add New Project</h3>
                <input type="text" placeholder="Project Title" value={newProject.title} onChange={(e) => setNewProject({...newProject, title: e.target.value})} className={`w-full p-3 rounded-lg mb-4 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} border-2 border-purple-400`} />
                <textarea placeholder="Description" value={newProject.description} onChange={(e) => setNewProject({...newProject, description: e.target.value})} className={`w-full p-3 rounded-lg mb-4 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} border-2 border-purple-400 h-24`} />
                <input type="text" placeholder="Technologies (comma separated)" value={newProject.tech} onChange={(e) => setNewProject({...newProject, tech: e.target.value})} className={`w-full p-3 rounded-lg mb-4 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} border-2 border-purple-400`} />
                <input type="url" placeholder="GitHub Link" value={newProject.github} onChange={(e) => setNewProject({...newProject, github: e.target.value})} className={`w-full p-3 rounded-lg mb-4 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} border-2 border-purple-400`} />
                <input type="url" placeholder="Demo Link" value={newProject.demo} onChange={(e) => setNewProject({...newProject, demo: e.target.value})} className={`w-full p-3 rounded-lg mb-6 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} border-2 border-purple-400`} />
                <div className="flex gap-3">
                  <button onClick={addProject} className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold">Add</button>
                  <button onClick={() => setShowAddProject(false)} className={`flex-1 ${darkMode ? 'bg-slate-700' : 'bg-gray-200'} py-3 rounded-lg font-semibold`}>Cancel</button>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <div key={p.id} className={`${darkMode ? 'bg-slate-800/50 border-slate-700 hover:border-purple-400' : 'bg-white/80 border-purple-200 hover:border-purple-400'} rounded-xl p-6 border transition-all transform hover:-translate-y-2 hover:shadow-2xl relative flex flex-col`}>
                {isAdmin && <button onClick={() => setProjects(projects.filter(pr => pr.id !== p.id))} className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full"><Trash2 size={16} /></button>}
                <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6 flex-grow leading-relaxed`}>{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, i) => <span key={i} className={`${darkMode ? 'bg-slate-700 text-cyan-400 border border-cyan-400/30' : 'bg-purple-100 text-purple-700 border border-purple-200'} px-3 py-1 rounded-full text-xs font-medium`}>{t}</span>)}
                </div>
                <div className="flex gap-4 mt-auto">
                  {p.github !== '#' && <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-purple-400 hover:text-purple-300">GitHub <ExternalLink size={16} className="ml-1" /></a>}
                  {p.demo !== '#' && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-semibold text-cyan-400 hover:text-cyan-300">Live App <ExternalLink size={16} className="ml-1" /></a>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Certifications</h2>
            {isAdmin && <button onClick={() => setShowAddCertificate(true)} className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-3 rounded-full hover:shadow-xl transform hover:scale-110"><Plus size={24} /></button>}
          </div>

          {showAddCertificate && (
             <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
               <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-8 max-w-2xl w-full`}>
                 <h3 className="text-2xl font-bold mb-6">Add Certificate</h3>
                 <input type="text" placeholder="Certificate Name" value={newCertificate.name} onChange={(e) => setNewCertificate({...newCertificate, name: e.target.value})} className={`w-full p-3 rounded-lg mb-4 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} border-2 border-purple-400`} />
                 <input type="text" placeholder="Issuer" value={newCertificate.issuer} onChange={(e) => setNewCertificate({...newCertificate, issuer: e.target.value})} className={`w-full p-3 rounded-lg mb-4 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} border-2 border-purple-400`} />
                 <input type="url" placeholder="Certificate Link" value={newCertificate.link} onChange={(e) => setNewCertificate({...newCertificate, link: e.target.value})} className={`w-full p-3 rounded-lg mb-6 ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} border-2 border-purple-400`} />
                 <div className="flex gap-3">
                   <button onClick={addCertificate} className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold">Add</button>
                   <button onClick={() => setShowAddCertificate(false)} className={`flex-1 ${darkMode ? 'bg-slate-700' : 'bg-gray-200'} py-3 rounded-lg font-semibold`}>Cancel</button>
                 </div>
               </div>
             </div>
          )}

          <div className={`${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/80 border-purple-200'} rounded-2xl p-8 border`}>
            <div className="flex items-center mb-6"><Award size={40} className="text-cyan-400 mr-4" /><h3 className="text-2xl font-bold">Licenses & Certifications</h3></div>
            <div className="space-y-4">
              {certificates.map((c) => (
                <div key={c.id} className={`${darkMode ? 'bg-slate-700/50 border-slate-600 hover:border-cyan-400' : 'bg-purple-50 border-purple-200 hover:border-purple-400'} rounded-lg p-4 border transition-all flex items-center justify-between`}>
                  <div className="flex items-center flex-1">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                    <div>
                      {c.link !== '#' ? (
                        <a href={c.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-lg hover:text-cyan-400 transition-colors">{c.name}</a>
                      ) : (
                        <span className="font-semibold text-lg">{c.name}</span>
                      )}
                      <p className={`text-sm mt-1 font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{c.issuer}</p>
                    </div>
                  </div>
                  {isAdmin && <button onClick={() => setCertificates(certificates.filter(cert => cert.id !== c.id))} className="p-2 bg-red-500 text-white rounded-full ml-4"><Trash2 size={16} /></button>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Get In Touch</h2>
          <div className={`${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white/80 border-purple-200'} rounded-2xl p-8 border`}>
            <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 text-lg`}>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <form action="https://formspree.io/f/manjogkz" method="POST" className="space-y-4">
              <input type="text" name="name" placeholder="Your Name" required className={`w-full p-3 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} border-2 border-purple-400`} />
              <input type="email" name="email" placeholder="Your Email" required className={`w-full p-3 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} border-2 border-purple-400`} />
              <textarea name="message" placeholder="Your Message" required className={`w-full p-3 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-100'} border-2 border-purple-400 h-32`} />
              <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                Send Message
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-purple-400/30">
              <div className="flex flex-wrap justify-center gap-6">
                <a href="https://github.com/Anirban-coder" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-purple-600'} transition-colors`}>
                  <Github size={20} /><span>GitHub</span>
                </a>
                <a href="www.linkedin.com/in/anirban-routh-77849b324" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-purple-600'} transition-colors`}>
                  <Linkedin size={20} /><span>LinkedIn</span>
                </a>
                <a href="https://leetcode.com/u/Anirban_Routh/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-purple-600'} transition-colors`}>
                  <SiLeetcode size={20} /><span>LeetCode</span>
                </a>
                <a href="mailto:anirbanrouth22@gmail.com" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-purple-600'} transition-colors`}>
                  <Mail size={20} /><span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-slate-900/50' : 'bg-white/50'} py-8 border-t ${darkMode ? 'border-slate-700' : 'border-purple-200'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2026 Anirban Routh. Built with React & Tailwind CSS.
          </p>
          <p className={`mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'} text-sm`}>
            Architected with 💻 and ☕
          </p>
        </div>
      </footer>
    </div>
  );
}