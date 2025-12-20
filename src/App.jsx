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
    <div className="flex flex-col items-center gap-2 transition hover:scale-110">
      <div className="text-3xl">{icon}</div>
      <span className="text-xs text-center text-gray-400">{name}</span>
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
    <div className="min-h-screen font-sans text-gray-100 bg-gray-950">
      {/* ================= NAVBAR ================= */}
     <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-gray-950/80 backdrop-blur">
  <nav className="flex items-center justify-between p-4 mx-auto max-w-7xl">
    <h1 className="text-xl font-bold">Yash Jaiswal</h1>

    {/* Desktop Menu */}
    <div className="hidden space-x-6 text-sm md:flex">
      <a href="#about" className="transition-colors duration-300 hover:text-blue-400">About</a>
      <a href="#skills" className="transition-colors duration-300 hover:text-blue-400">Skills</a>
      <a href="#projects" className="transition-colors duration-300 hover:text-blue-400">Projects</a>
      <a href="#education" className="transition-colors duration-300 hover:text-blue-400">Education</a>
      <a href="#contact" className="transition-colors duration-300 hover:text-blue-400">Contact</a>
    </div>

    {/* Mobile Button */}
    <button className="md:hidden" onClick={() => setOpen(true)}>
      <Menu />
    </button>
  </nav>

  {/* Mobile Drawer */}
  {open && (
    <div className="fixed inset-0 bg-black/70">
      <div className="fixed top-0 right-0 w-64 h-full p-6 bg-gray-950">
        <button
          className="absolute top-4 right-4"
          onClick={() => setOpen(false)}
        >
          <X />
        </button>

        <div className="flex flex-col gap-6 mt-12 text-lg">
          {["about", "skills", "projects", "education", "contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="px-4 py-2 transition-all duration-300 bg-gray-900 rounded-lg hover:bg-gray-800 hover:text-blue-400"
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
      <section className="grid items-center gap-10 px-6 pt-32 pb-20 mx-auto max-w-7xl md:grid-cols-2">
        <div>
          <h2 className="text-5xl font-bold">Full Stack Developer</h2>
          <p className="mt-6 text-gray-400">
           {typedText}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
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
            className="object-cover transition-transform duration-300 border-4 border-gray-800 rounded-full shadow-lg w-72 h-72 hover:scale-105 hover:-translate-y-2 animate-float"
          />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="px-6 mx-auto max-w-7xl">
          <h3 className="mb-6 text-3xl font-semibold">About Me</h3>
          <p className="max-w-3xl text-gray-400">
            I am a Computer Engineering student at RK University. I have
            experience in full-stack development using MERN, backend development
            with Java and PHP, and mobile app development using Flutter. I enjoy
            building real-world applications and learning new technologies.
          </p>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="px-6 py-20 mx-auto max-w-7xl">
        <h3 className="mb-10 text-3xl font-semibold">Technical Skills</h3>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Languages */}
          <div className="p-6 bg-gray-900 rounded-xl">
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
          <div className="p-6 bg-gray-900 rounded-xl">
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
          <div className="p-6 bg-gray-900 rounded-xl">
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
          <div className="p-6 bg-gray-900 rounded-xl">
            <h4 className="mb-4 font-semibold">Databases</h4>
            <div className="flex flex-wrap gap-6">
              <Skill icon={<SiMongodb />} name="MongoDB" />
              <Skill icon={<SiMysql />} name="MySQL" />
              <Skill icon={<SiPostgresql />} name="PostgreSQL" />
              <Skill icon={<Database />} name="Mongoose" />
            </div>
          </div>

          {/* Mobile */}
          <div className="p-6 bg-gray-900 rounded-xl">
            <h4 className="mb-4 font-semibold">App Development</h4>
            <Skill icon={<SiFlutter />} name="Flutter" />
          </div>

          {/* AI Tools */}
          <div className="p-6 bg-gray-900 rounded-xl">
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
        <div className="px-6 mx-auto max-w-7xl">
          {" "}
          <h3 className="mb-10 text-3xl font-semibold">Projects</h3>{" "}
          <div className="grid gap-8 md:grid-cols-2">
            {" "}
            <div className="p-6 border border-gray-800 bg-gray-950 rounded-xl">
              {" "}
              <h4 className="text-xl font-semibold">
                College Management System
              </h4>{" "}
              <p className="mt-2 text-gray-400">
                {" "}
                Full-stack web application using HTML, Bootstrap, JavaScript,
                and PHP. Worked as backend developer and implemented payment
                system and online verification.{" "}
              </p>{" "}
            </div>{" "}
            <div className="p-6 border border-gray-800 bg-gray-950 rounded-xl">
              {" "}
              <h4 className="text-xl font-semibold">Blood Donation App</h4>{" "}
              <p className="mt-2 text-gray-400">
                {" "}
                Flutter app with Firebase Authentication and Firestore allowing
                users to donate or request blood.{" "}
              </p>{" "}
            </div>{" "}
            <div className="p-6 border border-gray-800 bg-gray-950 rounded-xl">
              {" "}
              <h4 className="text-xl font-semibold">
                Online Learning Platform (MERN Stack & Java Development)
              </h4>{" "}
              <p className="mt-2 text-gray-400">
                {" "}
                MERN stack application with JWT authentication, REST APIs,
                Tailwind UI, and course enrollment.{" "}<br /><br />
                {" "}
                Developed a Java application for managing student records using JDBC, applying OOP, exception handling, and modular design for scalability.{" "}

              </p>{" "}
            </div>{" "}
            <div className="p-6 border border-gray-800 bg-gray-950 rounded-xl">
              {" "}
              <h4 className="text-xl font-semibold">TextUtils</h4>{" "}
              <p className="mt-2 text-gray-400">
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
        <div className="px-6 mx-auto max-w-7xl">
          {" "}
          <h3 className="mb-6 text-3xl font-semibold">Education</h3>{" "}
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
        <div className="px-6 mx-auto max-w-7xl">
          <h3 className="mb-6 text-3xl font-semibold">Contact</h3>

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
