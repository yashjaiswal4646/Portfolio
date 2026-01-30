import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

// Import components
import MobileDrawer from "./components/MobileDrawer";
import ProjectCard from "./components/ProjectCard";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import TrailCursor from "./components/TrailCursor";

// Import utilities and data
import useTyping from "./utils/useTyping";
import { projects } from "./data/projectsData";

// Import global styles
import { globalStyles } from "./utils/globalStyles";

export default function App() {
  const [open, setOpen] = useState(false);
  const typedText = useTyping(
    "  I build Full-Stack applications using React, Node.js, Express and MongoDB."
  );

  // Prevent body scrolling when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  // Scroll to top function for Home link
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden font-sans text-gray-100 bg-gray-950">
      {/* Global Styles */}
      <style jsx global>{globalStyles}</style>

      {/* Canvas Cursor */}
      <TrailCursor />

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 z-50 w-full overflow-x-hidden border-b border-gray-800 bg-gray-950/95 backdrop-blur-lg">
        <nav className="flex items-center justify-between p-4 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-blue-400">Yash Jaiswal</h1>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 text-sm md:flex">
            <button
              onClick={scrollToTop}
              className="transition-colors duration-300 hover:text-blue-400 hover:scale-110"
            >
              Home
            </button>
            <a
              href="#about-section"
              className="transition-colors duration-300 hover:text-blue-400 hover:scale-110"
            >
              About
            </a>
            <a
              href="#skills"
              className="transition-colors duration-300 hover:text-blue-400 hover:scale-110"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="transition-colors duration-300 hover:text-blue-400 hover:scale-110"
            >
              Projects
            </a>
            <a
              href="#education"
              className="transition-colors duration-300 hover:text-blue-400 hover:scale-110"
            >
              Education
            </a>
            <a
              href="#contact"
              className="transition-colors duration-300 hover:text-blue-400 hover:scale-110"
            >
              Contact
            </a>
          </div>

          {/* Mobile Button */}
          <button 
            className="p-2 transition-colors duration-300 rounded-lg md:hidden hover:bg-gray-800"
            onClick={() => setOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer - Moved outside header for full-screen overlay */}
      <MobileDrawer open={open} setOpen={setOpen} />   

      {/* ================= HERO ================= */}
      <section id="about" className="grid items-center gap-10 px-4 pt-32 pb-20 mx-auto overflow-x-hidden sm:px-6 max-w-7xl md:grid-cols-2">
        <div className="text-center md:text-left"> {/* Added text-center for mobile, text-left for desktop */}
          {/* Big Hey, I'm Yash Jaiswal heading - Centered */}
          <div className="mb-4">
            <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              <span className="text-gray-300">Hey, I'm </span>
              <span className="text-white">Yash</span>
              <span className="text-blue-400"> Jaiswal</span>
            </h1>
          </div>
          
          {/* A software developer from india - Smaller and centered */}
          <h2 className="mb-4 text-xl font-medium text-gray-400 sm:text-2xl md:text-3xl">
            A software developer from India
          </h2>
          
          <p className="mt-4 text-sm text-gray-400 sm:text-base">
            {typedText}
          </p>

          {/* Buttons with reduced width on mobile */}
          <div className="flex flex-col items-center w-full gap-4 mt-8 sm:flex-row sm:items-start md:justify-start">
            <a
              href="#contact"
              className="w-3/4 px-4 py-3 text-sm text-center bg-blue-600 rounded-lg sm:w-auto sm:px-6 hover:bg-blue-700 sm:text-base"
            >
              Hire Me
            </a>
            <a
              href="/resume.pdf"
              download
              className="w-3/4 px-4 py-3 text-sm text-center border border-gray-700 rounded-lg sm:w-auto sm:px-6 hover:bg-gray-800 sm:text-base"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-8 md:mt-0">
          <img
            src="/profile.jpg"
            alt="Yash Jaiswal"
            className="object-cover w-48 h-48 transition-transform duration-300 border-4 rounded-full shadow-lg border-blue-500/50 sm:w-60 sm:h-60 md:w-72 md:h-72 hover:scale-105 hover:-translate-y-2 animate-float"
          />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <AboutSection />

      {/* ================= SKILLS ================= */}
      <SkillsSection />

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-20 overflow-x-hidden bg-gray-900">
        <div className="px-4 mx-auto sm:px-6 max-w-7xl">
          <h3 className="px-2 mb-10 text-2xl font-semibold sm:text-3xl">Featured Projects</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                sourceCode={project.sourceCode}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <EducationSection />

      {/* ================= CONTACT ================= */}
      <ContactSection />

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}