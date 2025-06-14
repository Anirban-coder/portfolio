import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { GiBrain } from "react-icons/gi";



export default function App() {
  const [dark, setDark] = useState(false);

useEffect(() => {
  const root = window.document.documentElement;
  if (dark) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}, [dark]);
  return (
    <div className="font-sans text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-950 shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">Anirban Routh</h1>
          <div className="space-x-6 font-medium text-sm">
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#skills" className="hover:text-indigo-600">Skills</a>
            <a href="#projects" className="hover:text-indigo-600">Projects</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <button
  onClick={() => setDark(!dark)}
  className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
  aria-label="Toggle dark mode"
>
  {dark ? <FaSun className="text-yellow-400" /> : <FaMoon />}
</button>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center px-6 dark:from-indigo-800 dark:via-purple-900 dark:to-gray-900"
>
  <h1 className="text-5xl font-bold mb-4">Hi, I’m Anirban 👋</h1>
  <p className="text-xl max-w-2xl mb-6">I build clean UIs with React, explore data, and solve DSA challenges.</p>
  <a href="#contact">
    <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-indigo-100 transition">Let’s Connect</button>
  </a>
</section>

        {/* About Section */}
        <section id="about" className="bg-white dark:bg-gray-800 py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6 text-indigo-700">About Me</h2>
    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
      I'm currently pursuing MCA and love building cool stuff with React and Tailwind CSS. I'm also sharpening my DSA skills and exploring data analysis. Outside code, I enjoy logic puzzles and making my parents smile.
    </p>
    <a href="/resume.pdf" download className="inline-block mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
      Download Resume
    </a>
  </div>
</section>

        {/* Skills Section */}
        <section id="skills" className="bg-gray-50 dark:bg-gray-900 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center text-indigo-700">Tech Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-3xl mx-auto mb-2" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-3xl mx-auto mb-2" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl mx-auto mb-2" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-3xl mx-auto mb-2" /> },
  { name: "Python", icon: <FaPython className="text-blue-400 text-3xl mx-auto mb-2" /> },
  { name: "DSA", icon: <GiBrain className="text-purple-500 text-3xl mx-auto mb-2" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-3xl mx-auto mb-2" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-3xl mx-auto mb-2" /> },
].map(skill => (
                <div key={skill.name} className="bg-white shadow hover:shadow-md p-4 rounded-lg text-center font-semibold text-gray-800">
                  {skill.icon}
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </section>
<section id="achievements" className="bg-white dark:bg-gray-800 py-16 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold mb-6 text-indigo-700">Achievements</h2>
    <ul className="list-disc pl-6 text-lg text-gray-700 dark:text-gray-200">
      <li>
        <a
          href="https://www.cloudskillsboost.google/public_profiles/b131287b-f220-4aa3-8b4e-116c192d8b5b/badges/16364840?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Google Cloud Skills Boost Badge
        </a>
      </li>
      <li>
        <a
          href="https://www.cloudskillsboost.google/public_profiles/b131287b-f220-4aa3-8b4e-116c192d8b5b/badges/14006295?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Preparing For Professional Cloud Journey
        </a>
      </li>
      <li>
        <a
          href="https://www.cloudskillsboost.google/public_profiles/b131287b-f220-4aa3-8b4e-116c192d8b5b/badges/12044636?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Google Certifications
        </a>
      </li>
      <li>
        <button className="text-indigo-600 hover:underline">
  DSA Certification from Udemy 
</button>

 
      </li> 
    </ul>
  </div>
</section>
        {/* Projects Section */}
      <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 text-center text-indigo-700">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Portfolio Website",
          desc: "Modern responsive site using React + Tailwind.",
          github: "https://github.com/Anirban-coder/portfolio.git",
          demo: "https://your-live-demo.com",
          image: "/images/portfolio.jpg"
        },
        {
          title: "Cafe Everyday",
          desc: "Daily task tracker with smooth UI.",
          github: "https://github.com/Anirban-coder/CafeEverday.git",
          demo: "https://your-todo-demo.com",
          image: "/images/cafe.jpg"
        },
        {
          title: "Travel Geek",
          desc: "Interactive visual learning of stacks, queues, and more.",
          github: "https://github.com/Anirban-coder/travelgeek.git",
          demo: "https://your-dsa-demo.com",
          image: "/images/travelgeek.jpg"
        },
        {
          title: "YoChoice",
          desc: "Interactive visual learning of stacks, queues, and more.",
          github: "https://github.com/Anirban-coder/yochoice.git",
          demo: "https://yochoice-zopf-git-main-anirban-coders-projects.vercel.app",
          image: "/images/yochoice.jpg"
        }
      ].map(({ title, desc, github, demo, image }) => (
        <div key={title} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col h-full">
          {/* Uncomment the line below when you add images */}
          {/* <img src={image} alt={title + ' screenshot'} className="w-full h-32 object-cover rounded mb-4" /> */}
          <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-indigo-300">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{desc}</p>
          <div className="mt-auto">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline mr-4"
            >
              GitHub
            </a>
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section id="testimonials" className="bg-gray-100 dark:bg-gray-800 py-12">
  <h2 className="text-2xl font-bold text-center mb-8 text-indigo-700">Testimonials</h2>
  <div className="max-w-2xl mx-auto">
    <blockquote className="italic text-lg text-gray-700 dark:text-gray-200">
      "Anirban is a fantastic developer!"
    </blockquote>
    <p className="text-right mt-2 font-semibold text-indigo-600 dark:text-indigo-300">— Happy Client</p>
  </div>
</section>

        {/* Contact Section */}
        <section id="contact" className="bg-indigo-700 dark:bg-indigo-900 text-white py-20 text-center px-6">
  <div className="max-w-xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
    <p className="mb-6">Reach out for collaboration, work, or just to say hi!</p>
    <div className="flex justify-center space-x-6 text-2xl mb-8">
      <a href="mailto:anirbanrouth22@gmail.com" className="hover:text-indigo-200"><FaEnvelope /></a>
      <a href="https://linkedin.com" className="hover:text-indigo-200" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="https://github.com" className="hover:text-indigo-200" target="_blank" rel="noreferrer"><FaGithub /></a>
    </div>
    <form action="https://formspree.io/f/manjogkz" method="POST" className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-left">
      <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 rounded text-gray-900" />
      <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 rounded text-gray-900" />
      <textarea name="message" placeholder="Your Message" required className="w-full p-2 rounded text-gray-900" />
      <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">Send</button>
    </form>
  </div>
</section>
        {/* Footer */}
                <footer className="bg-gray-900 dark:bg-black text-white text-center py-4">
          <p>© {new Date().getFullYear()} Anirban Routh. Built with ❤️</p>
        </footer>
      </main>
    </div>
  ); 
}
