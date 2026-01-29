import { useState } from "react";
import { Menu } from "lucide-react";

// Import components
import MobileDrawer from "./components/MobileDrawer";
import ProjectCard from "./components/ProjectCard";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Import utilities and data
import useTyping from "./utils/useTyping";
import { projects } from "./data/projectsData";

export default function App() {
  const [open, setOpen] = useState(false);
  const typedText = useTyping(
    "  MERN Stack | Java | Flutter | Modern Web Technologies"
  );

  return (
    <div className="min-h-screen overflow-x-hidden font-sans text-gray-100 bg-gray-950">
      {/* Add custom animation styles */}
      <style jsx global>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutToLeft {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-50px);
          }
        }

        @keyframes slideOutToRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(50px);
          }
        }

        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRightToLeft {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }

        .animate-slideOut {
          animation: slideOut 0.3s ease-in forwards;
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.5s ease-out forwards;
        }

        .animate-slideInFromRight {
          animation: slideInFromRight 0.5s ease-out forwards;
        }

        .animate-slideOutToLeft {
          animation: slideOutToLeft 0.3s ease-in forwards;
        }

        .animate-slideOutToRight {
          animation: slideOutToRight 0.3s ease-in forwards;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-none {
          -webkit-line-clamp: unset;
        }
      `}</style>

      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 z-50 w-full overflow-x-hidden border-b border-gray-800 bg-gray-950/95 backdrop-blur-lg">
        <nav className="flex items-center justify-between p-4 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-blue-400">Yash Jaiswal</h1>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 text-sm md:flex">
            <a
              href="#about"
              className="transition-colors duration-300 hover:text-blue-400"
            >
              About
            </a>
            <a
              href="#skills"
              className="transition-colors duration-300 hover:text-blue-400"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="transition-colors duration-300 hover:text-blue-400"
            >
              Projects
            </a>
            <a
              href="#education"
              className="transition-colors duration-300 hover:text-blue-400"
            >
              Education
            </a>
            <a
              href="#contact"
              className="transition-colors duration-300 hover:text-blue-400"
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

        {/* Mobile Drawer */}
        <MobileDrawer open={open} setOpen={setOpen} />
      </header>

      {/* ================= HERO ================= */}
      <section id="about" className="grid items-center gap-10 px-4 pt-32 pb-20 mx-auto overflow-x-hidden sm:px-6 max-w-7xl md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Full Stack Developer</h2>
          <p className="mt-6 text-sm text-gray-400 sm:text-base">
            {typedText}
          </p>

          <div className="flex flex-col gap-4 mt-8 sm:flex-row">
            <a
              href="#projects"
              className="px-4 py-3 text-sm text-center bg-blue-600 rounded-lg sm:px-6 hover:bg-blue-700 sm:text-base"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-4 py-3 text-sm text-center border border-gray-700 rounded-lg sm:px-6 hover:bg-gray-800 sm:text-base"
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
      <section id="about" className="py-20 overflow-x-hidden bg-gray-900">
        <div className="px-4 mx-auto sm:px-6 max-w-7xl">
          <h3 className="px-2 mb-6 text-2xl font-semibold sm:text-3xl">About Me</h3>
          <p className="px-2 text-sm text-gray-400 sm:text-base">
            I am a Computer Engineering student at RK University. I have
            experience in full-stack development using MERN, backend development
            with Java and PHP, and mobile app development using Flutter. I enjoy
            building real-world applications and learning new technologies.
          </p>
        </div>
      </section>

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