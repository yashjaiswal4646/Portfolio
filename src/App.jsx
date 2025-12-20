import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Menu,
  Cpu,
  X,
  Database,
} from "lucide-react";

/* ===== ICONS (ONLY SAFE ONES) ===== */
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiCss3,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFlutter,
  SiOpenai,
  SiGithubcopilot,
  SiGoogle,
} from "react-icons/si";

import { FaJava, FaHtml5 } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";

/* ===== SKILL ITEM ===== */

function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center gap-2 hover:scale-110 transition">
      <div className="text-3xl">{icon}</div>
      <span className="text-xs text-gray-400 text-center">{name}</span>
    </div>
  );
}

function useTyping(text, speed = 150) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}


export default function App() {
  const [open, setOpen] = useState(false);
    const typedText = useTyping("  MERN Stack | Java | Flutter | Modern Web Technologies");


  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* ================= NAVBAR ================= */}
     <header className="fixed top-0 w-full bg-gray-950/80 backdrop-blur border-b border-gray-800 z-50">
  <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
    <h1 className="text-xl font-bold">Yash Jaiswal</h1>

    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-6 text-sm">
      <a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a>
      <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">Skills</a>
      <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">Projects</a>
      <a href="#education" className="hover:text-blue-400 transition-colors duration-300">Education</a>
      <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">Contact</a>
    </div>

    {/* Mobile Button */}
    <button className="md:hidden" onClick={() => setOpen(true)}>
      <Menu />
    </button>
  </nav>

  {/* Mobile Drawer */}
  {open && (
    <div className="fixed inset-0 bg-black/70">
      <div className="fixed right-0 top-0 h-full w-64 bg-gray-950 p-6">
        <button
          className="absolute top-4 right-4"
          onClick={() => setOpen(false)}
        >
          <X />
        </button>

        <div className="mt-12 flex flex-col gap-6 text-lg">
          {["about", "skills", "projects", "education", "contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {item.toUpperCase()}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  )}
</header>


      {/* ================= HERO ================= */}
      <section className="pt-32 pb-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold">Full Stack Developer</h2>
          <p className="mt-6 text-gray-400">
           {typedText}
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Yash Jaiswal"
            className="w-72 h-72 rounded-full object-cover border-4 border-gray-800 shadow-lg
             transition-transform duration-300 hover:scale-105 hover:-translate-y-2
             animate-float"
          />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-6">About Me</h3>
          <p className="text-gray-400 max-w-3xl">
            I am a Computer Engineering student at RK University. I have
            experience in full-stack development using MERN, backend development
            with Java and PHP, and mobile app development using Flutter. I enjoy
            building real-world applications and learning new technologies.
          </p>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-20 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-semibold mb-10">Technical Skills</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="bg-gray-900 p-6 rounded-xl">
            <h4 className="mb-4 font-semibold">Languages</h4>
            <div className="flex flex-wrap gap-6">
              <Skill icon={<SiPython />} name="Python" />
              <Skill icon={<SiJavascript />} name="JavaScript" />
              <Skill icon={<FaJava />} name="Java" />
              <Skill icon={<DiDotnet />} name="C#" />
              <Skill icon={<SiTypescript />} name="TypeScript" />
            </div>
          </div>

          {/* Frontend */}
          <div className="bg-gray-900 p-6 rounded-xl">
            <h4 className="mb-4 font-semibold">Frontend</h4>
            <div className="flex flex-wrap gap-6">
              <Skill icon={<FaHtml5 />} name="HTML" />
              <Skill icon={<SiCss3 />} name="CSS" />
              <Skill icon={<SiReact />} name="React.js" />
              <Skill icon={<SiNextdotjs />} name="Next.js" />
              <Skill icon={<SiTailwindcss />} name="Tailwind CSS" />
              <Skill icon={<SiBootstrap />} name="Bootstrap" />
              <Skill icon={<Cpu />} name="JSP" />
            </div>
          </div>

          {/* Backend */}
          <div className="bg-gray-900 p-6 rounded-xl">
            <h4 className="mb-4 font-semibold">Backend</h4>
            <div className="flex flex-wrap gap-6">
              <Skill icon={<SiNodedotjs />} name="Node.js" />
              <Skill icon={<SiExpress />} name="Express.js" />
              <Skill icon={<SiFirebase />} name="Firebase" />
              <Skill icon={<SiPhp />} name="PHP" />
              <Skill icon={<Cpu />} name="Servlet" />
            </div>
          </div>

          {/* Databases */}
          <div className="bg-gray-900 p-6 rounded-xl">
            <h4 className="mb-4 font-semibold">Databases</h4>
            <div className="flex flex-wrap gap-6">
              <Skill icon={<SiMongodb />} name="MongoDB" />
              <Skill icon={<SiMysql />} name="MySQL" />
              <Skill icon={<SiPostgresql />} name="PostgreSQL" />
              <Skill icon={<Database />} name="Mongoose" />
            </div>
          </div>

          {/* Mobile */}
          <div className="bg-gray-900 p-6 rounded-xl">
            <h4 className="mb-4 font-semibold">App Development</h4>
            <Skill icon={<SiFlutter />} name="Flutter" />
          </div>

          {/* AI Tools */}
          <div className="bg-gray-900 p-6 rounded-xl">
            <h4 className="mb-4 font-semibold">AI & Tools</h4>
            <div className="flex flex-wrap gap-6">
              <Skill icon={<SiOpenai />} name="OpenAI" />
              <Skill icon={<SiGithubcopilot />} name="GitHub Copilot" />
              <Skill icon={<SiGoogle />} name="Gemini" />
              <Skill icon={<Cpu />} name="Cursor" />
              <Skill icon={<Cpu />} name="Blackbox" />
              <Skill icon={<Cpu />} name="Llama 3" />
              <Skill icon={<Cpu />} name="DeepSeek" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-20 bg-gray-900">
        {" "}
        <div className="max-w-7xl mx-auto px-6">
          {" "}
          <h3 className="text-3xl font-semibold mb-10">Projects</h3>{" "}
          <div className="grid md:grid-cols-2 gap-8">
            {" "}
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
              {" "}
              <h4 className="text-xl font-semibold">
                College Management System
              </h4>{" "}
              <p className="text-gray-400 mt-2">
                {" "}
                Full-stack web application using HTML, Bootstrap, JavaScript,
                and PHP. Worked as backend developer and implemented payment
                system and online verification.{" "}
              </p>{" "}
            </div>{" "}
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
              {" "}
              <h4 className="text-xl font-semibold">Blood Donation App</h4>{" "}
              <p className="text-gray-400 mt-2">
                {" "}
                Flutter app with Firebase Authentication and Firestore allowing
                users to donate or request blood.{" "}
              </p>{" "}
            </div>{" "}
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
              {" "}
              <h4 className="text-xl font-semibold">
                Online Learning Platform (MERN Stack & Java Development)
              </h4>{" "}
              <p className="text-gray-400 mt-2">
                {" "}
                MERN stack application with JWT authentication, REST APIs,
                Tailwind UI, and course enrollment.{" "}<br /><br />
                {" "}
                Developed a Java application for managing student records using JDBC, applying OOP, exception handling, and modular design for scalability.{" "}

              </p>{" "}
            </div>{" "}
            <div className="bg-gray-950 border border-gray-800 rounded-xl p-6">
              {" "}
              <h4 className="text-xl font-semibold">TextUtils</h4>{" "}
              <p className="text-gray-400 mt-2">
                {" "}
                React SPA for live text manipulation with dark/light mode,
                clipboard support, and real-time statistics.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="py-20">
        {" "}
        <div className="max-w-7xl mx-auto px-6">
          {" "}
          <h3 className="text-3xl font-semibold mb-6">Education</h3>{" "}
          <div className="space-y-4 text-gray-400">
            {" "}
            <p>
              {" "}
              <strong>RK University, Rajkot</strong> — B.Tech Computer
              Engineering (2022–2026) | CGPA: 7.16{" "}
            </p>{" "}
            <p>
              {" "}
              <strong>Anchit Sah Madh Vidhyalay (BSEB)</strong> — Intermediate
              (2019–2021) | Percentage: 70%{" "}
            </p>{" "}
            <p>
              {" "}
              <strong>Indian Public School (CBSE)</strong> — Matric (2018–2019)
              | Percentage: 70%{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-6">Contact</h3>

          <div className="flex flex-wrap gap-6 text-gray-400">
            <span className="flex items-center gap-2 ">
              <Phone size={18} /> 7549637198
            </span>
            <span className="flex items-center gap-2">
              <Mail size={18} /> architect4646@gmail.com
            </span>
            <a
              className="flex items-center gap-2 transition-transform duration-300 hover:scale-110"
              href="https://github.com"
              target="_blank"
            >
              <Github size={18} /> GitHub
            </a>

            <a
              className="flex items-center gap-2 transition-transform duration-300 hover:scale-110"
              href="https://linkedin.com"
              target="_blank"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-6 text-center text-gray-500 border-t border-gray-800">
        © 2025 Yash Jaiswal. All rights reserved.
      </footer>
    </div>
  );
}
