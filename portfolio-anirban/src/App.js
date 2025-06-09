import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full backdrop-blur-sm bg-white/70 border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">Anirban.dev</h1>
          <div className="space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-600 transition">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
            <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero */}
        <section className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">Hi, I’m Anirban 👋</h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-6">
            I build clean UIs with React, explore data, and solve DSA challenges.
          </p>
          <a href="#contact">
            <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition">
              Let’s Connect
            </button>
          </a>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed">
              I'm currently pursuing MCA and love building cool stuff with React and Tailwind CSS.
              I'm also sharpening my DSA skills and exploring data analysis. Outside code, I enjoy logic puzzles and making my parents smile.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {["HTML", "CSS", "JavaScript", "React", "Python", "DSA", "Tailwind", "Git"].map(skill => (
                <div
                  key={skill}
                  className="bg-gray-100 hover:bg-indigo-50 p-4 rounded-lg shadow transition duration-300"
                >
                  <p className="font-medium text-lg">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Portfolio Website", desc: "Modern responsive site using React + Tailwind." },
                { title: "Todo App", desc: "Daily task tracker with smooth UI." },
                { title: "DSA Visualizer", desc: "Interactive visual learning of stacks, queues, and more." },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-indigo-700 text-white py-20 text-center px-6">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
            <p className="mb-6">Reach out for collaboration, work, or just to say hi!</p>
            <div className="flex justify-center space-x-6 text-2xl">
              <a href="mailto:your.email@example.com" className="hover:text-indigo-200"><FaEnvelope /></a>
              <a href="https://linkedin.com" className="hover:text-indigo-200" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com" className="hover:text-indigo-200" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-4">
          <p>© {new Date().getFullYear()} Anirban Routh. Built with ❤️</p>
        </footer>
      </main>
    </div>
  );
}
