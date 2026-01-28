import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Menu,
  Cpu,
  X,
  Database,
  ExternalLink,
  Code,
  Home,
  User,
  BookOpen,
  Briefcase,
  GraduationCap,
  ChevronRight,
  MessageSquare,
  Star,
  ArrowUpRight,
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
  SiHtml5,
} from "react-icons/si";

import { FaJava, FaHtml5 } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";

/* ===== SKILL ITEM ===== */
function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center flex-shrink-0 gap-2 px-2 transition hover:scale-110">
      <div className="text-3xl">{icon}</div>
      <span className="text-xs text-center text-gray-400 whitespace-nowrap">{name}</span>
    </div>
  );
}

/* ===== MOBILE SCROLLING SKILLS CONTAINER ===== */
function MobileScrollingSkills({ skills, index }) {
  // Even sections (0, 2, 4) scroll left-to-right
  // Odd sections (1, 3, 5) scroll right-to-left
  const animationName = index % 2 === 0 ? "scrollLeftToRight" : "scrollRightToLeft";
  const animationSpeed = "10s";

  return (
    <div className="relative w-full overflow-hidden md:hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute top-0 bottom-0 left-0 z-10 w-8 pointer-events-none bg-gradient-to-r from-gray-900 to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 z-10 w-8 pointer-events-none bg-gradient-to-l from-gray-900 to-transparent"></div>
      
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-6 py-3"
          style={{
            animation: `${animationName} ${animationSpeed} linear infinite`,
            animationPlayState: 'running',
            width: 'max-content'
          }}
        >
          {/* Render skills twice for seamless looping */}
          {[...skills, ...skills].map((skill, idx) => (
            <div key={idx} className="flex-shrink-0">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===== DESKTOP STATIC SKILLS ===== */
function DesktopSkills({ children }) {
  return (
    <div className="flex-wrap hidden gap-6 md:flex">
      {children}
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

/* ===== ENHANCED PROJECT CARD COMPONENT ===== */
function ProjectCard({
  title,
  description,
  image,
  technologies,
  sourceCode,
  index
}) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasAnimated(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const animationClass = index % 2 === 0 
    ? (isVisible ? 'animate-slideInFromLeft' : 'animate-slideOutToLeft')
    : (isVisible ? 'animate-slideInFromRight' : 'animate-slideOutToRight');

  const resetClass = !isVisible && hasAnimated ? 'opacity-0' : '';

  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden transition-all duration-500 border border-gray-800 bg-gray-950 rounded-xl group ${animationClass} ${resetClass}`}
      style={{
        animationFillMode: 'forwards',
        animationDuration: '0.5s'
      }}
    >
      {/* Project Image with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 transition-all duration-500 opacity-0 bg-gradient-to-t from-gray-950 via-gray-950/70 to-transparent group-hover:opacity-100"></div>
        <div className="absolute top-0 right-0 p-2 m-2 text-xs font-semibold rounded bg-gray-900/90">
          Project
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h4 className="text-xl font-semibold">{title}</h4>
          <ArrowUpRight size={20} className="text-gray-500 transition-all duration-300 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className="text-gray-400 transition-all duration-500 line-clamp-3 group-hover:line-clamp-none">
          {description}
        </p>

        {/* Technologies Used - Enhanced hover effect */}
        <div className="mt-6 transition-all duration-500 transform group-hover:scale-105 group-hover:translate-y-0">
          <h5 className="mb-3 text-sm font-medium text-gray-300 transition-all duration-300 group-hover:text-blue-300">
            Technologies Used:
          </h5>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium text-blue-300 transition-all duration-300 border rounded-full bg-blue-900/30 border-blue-700/50 hover:bg-blue-800 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-900/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons - FIXED FOR MOBILE: Always visible on mobile */}
        <div className={`mt-8 transition-all duration-500 ${
          isMobile 
            ? 'translate-y-0 opacity-100' 
            : 'transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
        }`}>
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm font-medium transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20"
          >
            <Code size={18} />
            View Source Code
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Desktop-only enhanced hover overlay */}
        <div className="absolute inset-0 hidden transition-all duration-500 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 rounded-xl md:group-hover:block"></div>
      </div>

      {/* Shine effect on hover - Desktop only */}
      <div className="absolute inset-0 hidden transition-all duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full md:block"></div>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const typedText = useTyping(
    "  MERN Stack | Java | Flutter | Modern Web Technologies"
  );

  // Define skills for each section
  const skillSections = [
    {
      title: "Languages",
      skills: [
        <Skill key="python" icon={<SiPython />} name="Python" />,
        <Skill key="javascript" icon={<SiJavascript />} name="JavaScript" />,
        <Skill key="java" icon={<FaJava />} name="Java" />,
        <Skill key="csharp" icon={<DiDotnet />} name="C#" />,
        <Skill key="typescript" icon={<SiTypescript />} name="TypeScript" />,
      ]
    },
    {
      title: "Frontend",
      skills: [
        <Skill key="html" icon={<FaHtml5 />} name="HTML" />,
        <Skill key="css" icon={<SiCss3 />} name="CSS" />,
        <Skill key="react" icon={<SiReact />} name="React.js" />,
        <Skill key="nextjs" icon={<SiNextdotjs />} name="Next.js" />,
        <Skill key="tailwind" icon={<SiTailwindcss />} name="Tailwind CSS" />,
        <Skill key="bootstrap" icon={<SiBootstrap />} name="Bootstrap" />,
        <Skill key="jsp" icon={<Cpu />} name="JSP" />,
      ]
    },
    {
      title: "Backend",
      skills: [
        <Skill key="nodejs" icon={<SiNodedotjs />} name="Node.js" />,
        <Skill key="express" icon={<SiExpress />} name="Express.js" />,
        <Skill key="firebase" icon={<SiFirebase />} name="Firebase" />,
        <Skill key="php" icon={<SiPhp />} name="PHP" />,
        <Skill key="servlet" icon={<Cpu />} name="Servlet" />,
      ]
    },
    {
      title: "Databases",
      skills: [
        <Skill key="mongodb" icon={<SiMongodb />} name="MongoDB" />,
        <Skill key="mysql" icon={<SiMysql />} name="MySQL" />,
        <Skill key="postgresql" icon={<SiPostgresql />} name="PostgreSQL" />,
        <Skill key="mongoose" icon={<Database />} name="Mongoose" />,
      ]
    },
    {
      title: "App Development",
      skills: [
        <Skill key="flutter" icon={<SiFlutter />} name="Flutter" />,
      ]
    },
    {
      title: "AI & Tools",
      skills: [
        <Skill key="openai" icon={<SiOpenai />} name="OpenAI" />,
        <Skill key="copilot" icon={<SiGithubcopilot />} name="GitHub Copilot" />,
        <Skill key="gemini" icon={<SiGoogle />} name="Gemini" />,
        <Skill key="cursor" icon={<Cpu />} name="Cursor" />,
        <Skill key="blackbox" icon={<Cpu />} name="Blackbox" />,
        <Skill key="llama" icon={<Cpu />} name="Llama 3" />,
        <Skill key="deepseek" icon={<Cpu />} name="DeepSeek" />,
      ]
    },
  ];

  // Projects Data
  const projects = [
    {
      title: "College Management System",
      description:
        "Full-stack web application using HTML, Bootstrap, JavaScript, and PHP. Worked as backend developer and implemented payment system and online verification.",
      image: "https://market-resized.envatousercontent.com/previews/files/436611465/preview/01_home.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=5c98a43af4d75446c6825ac38ff243d21c2e088ed8347863a3712e69edd988a3",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Bootstrap", "MySQL"],
      sourceCode: "https://github.com/yourusername/college-management",
    },
    {
      title: "Blood Donation App",
      description:
        "Flutter app with Firebase Authentication and Firestore allowing users to donate or request blood. Real-time notifications and geolocation features.",
      image: "https://market-resized.envatousercontent.com/previews/files/452243231/RedDot+presentation.jpg?w=590&h=590&cf_fit=crop&crop=top&format=auto&q=85&s=879686b38f5a11ca6a345fa82fbfa1cd8d28ccec63bf303c102b0b3a58dabf17",
      technologies: ["Flutter", "Firebase", "Dart", "Firestore", "Google Maps API"],
      sourceCode: "https://github.com/yourusername/blood-donation-app",
    },
    {
      title: "Online Learning Platform (MERN Stack)",
      description:
        "MERN stack application with JWT authentication, REST APIs,Tailwind UI, and course enrollment.",
      image: "https://static.vecteezy.com/system/resources/thumbnails/020/831/999/small/laptop-computer-blank-white-screen-on-table-photo.jpg",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      sourceCode: "https://github.com/yourusername/learning-platform",
    },
    {
      title: "Online Learning Platform (JAVA Web Development)",
      description:
        "Developed a Java application for managing student records using JDBC, applying OOP, exception handling, and modular design for scalability.",
      image: "https://nazmidincer.com/assets/img/e-learning-platform-development.jpg",
      technologies: [
        "JSP",
        "Servlet",
        "JDBC"
      ],
      sourceCode: "https://github.com/yourusername/learning-platform",
    },
    {
      title: "TextUtils - Text Manipulation Tool",
      description:
        "React SPA for live text manipulation with dark/light mode, clipboard support, and real-time statistics. Advanced text analysis features included.",
      image: "https://reactjsexample.com/content/images/2021/10/Screenshot--35-.png",
      technologies: ["React.js", "JavaScript", "CSS3", "Local Storage", "Clipboard API"],
      sourceCode: "https://github.com/yourusername/textutils",
    },
  ];

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

        /* Mobile scrolling animations - Fixed directions */
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

        /* Drawer animation */
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

        /* Hero image floating animation */
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

        /* Line clamp utilities */
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

        {/* Enhanced Mobile Drawer - EXACTLY LIKE SECOND IMAGE */}
        {open && (
          <div className="fixed inset-0 z-[100]">
            {/* Backdrop with blur */}
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            
            {/* Drawer Container - Wider like second image */}
            <div className={`absolute top-0 right-0 w-full max-w-md h-full bg-gray-950 border-l border-gray-800 shadow-2xl ${open ? 'animate-slideIn' : 'animate-slideOut'}`}>
              
              {/* Drawer Header - Like second image */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">Yash Jaiswal</h2>
                  <button
                    className="p-2 transition-colors duration-300 rounded-lg hover:bg-gray-800"
                    onClick={() => setOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-sm text-gray-400">Full Stack Developer</p>
              </div>

              {/* Navigation Menu - Exactly like second image */}
              <div className="flex flex-col p-6 overflow-y-auto h-[calc(100%-200px)]">
                {/* Main Navigation - Simple list like second image */}
                <div className="mb-8 space-y-1">
                  <a
                    href="#home"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-lg text-gray-300 transition-colors duration-300 rounded-lg hover:bg-gray-800 hover:text-blue-400"
                  >
                    <div className="flex items-center gap-3">
                      <Home size={20} className="text-blue-400" />
                      <span className="font-medium">Home</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-500" />
                  </a>
                  <a
                    href="#projects"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-lg text-gray-300 transition-colors duration-300 rounded-lg hover:bg-gray-800 hover:text-blue-400"
                  >
                    <div className="flex items-center gap-3">
                      <Briefcase size={20} className="text-blue-400" />
                      <span className="font-medium">Projects</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-500" />
                  </a>
                  <a
                    href="#skills"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-lg text-gray-300 transition-colors duration-300 rounded-lg hover:bg-gray-800 hover:text-blue-400"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen size={20} className="text-blue-400" />
                      <span className="font-medium">Skills</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-500" />
                  </a>
                  <a
                    href="#experience"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-lg text-gray-300 transition-colors duration-300 rounded-lg hover:bg-gray-800 hover:text-blue-400"
                  >
                    <div className="flex items-center gap-3">
                      <User size={20} className="text-blue-400" />
                      <span className="font-medium">Experience</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-500" />
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-lg text-gray-300 transition-colors duration-300 rounded-lg hover:bg-gray-800 hover:text-blue-400"
                  >
                    <div className="flex items-center gap-3">
                      <Mail size={20} className="text-blue-400" />
                      <span className="font-medium">Contact Me</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-500" />
                  </a>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-800"></div>

                {/* Client Testimonial Section - Exactly like second image */}
                <div className="p-4 bg-gray-900 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare size={18} className="text-blue-400" />
                    <h3 className="text-sm font-semibold text-gray-300 uppercase">what clients say</h3>
                  </div>
                  <p className="mb-3 text-xs text-gray-400">
                    Real feedback from clients and collaborators about their experience working with me
                  </p>
                  
                  <div className="relative p-4 rounded-lg bg-gray-950">
                    <div className="absolute -top-2 -left-2">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    </div>
                    <p className="text-sm italic text-gray-300">
                      "Yash designed our platform with incredible attention to detail and performance. Excellent full-stack development"
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Phone size={18} className="text-blue-400" />
                    <span className="text-sm text-gray-300">7549637198</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-blue-400" />
                    <span className="text-sm text-gray-300">architect4646@gmail.com</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition-colors duration-300 rounded-lg hover:bg-gray-800 hover:text-blue-400"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 transition-colors duration-300 rounded-lg hover:bg-gray-800 hover:text-blue-400"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center border-t border-gray-800">
                <p className="text-xs text-gray-500">© 2025 Yash Jaiswal</p>
              </div>
            </div>
          </div>
        )}
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
      <section id="skills" className="px-4 py-20 mx-auto overflow-x-hidden sm:px-6 max-w-7xl">
        <h3 className="px-2 mb-10 text-2xl font-semibold sm:text-3xl">Technical Skills</h3>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Render all skill sections */}
          {skillSections.map((section, index) => (
            <div key={index} className="p-4 overflow-hidden bg-gray-900 sm:p-6 rounded-xl">
              <h4 className="mb-4 text-sm font-semibold sm:text-base">{section.title}</h4>
              
              {/* Desktop View - Static Layout */}
              <DesktopSkills>
                {section.skills}
              </DesktopSkills>
              
              {/* Mobile View - Scrolling Animation */}
              <div className="w-full overflow-hidden md:hidden">
                <MobileScrollingSkills 
                  skills={section.skills} 
                  index={index}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ENHANCED PROJECTS SECTION ================= */}
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
      <section id="education" className="py-20 overflow-x-hidden">
        <div className="px-4 mx-auto sm:px-6 max-w-7xl">
          <h3 className="px-2 mb-6 text-2xl font-semibold sm:text-3xl">Education</h3>
          <div className="px-2 space-y-4 text-sm text-gray-400 sm:text-base">
            <p>
              <strong>RK University, Rajkot</strong> — B.Tech Computer
              Engineering (2022–2026) | CGPA: 7.16
            </p>
            <p>
              <strong>Anchit Sah Madh Vidhyalay (BSEB)</strong> — Intermediate
              (2019–2021) | Percentage: 70%
            </p>
            <p>
              <strong>Indian Public School (CBSE)</strong> — Matric (2018–2019)
              | Percentage: 70%
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 overflow-x-hidden bg-gray-900">
        <div className="px-4 mx-auto sm:px-6 max-w-7xl">
          <h3 className="px-2 mb-6 text-2xl font-semibold sm:text-3xl">Contact</h3>

          <div className="flex flex-wrap gap-4 px-2 text-sm text-gray-400 sm:gap-6 sm:text-base">
            <span className="flex items-center gap-2">
              <Phone size={16} /> 7549637198
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} /> architect4646@gmail.com
            </span>
            <a
              className="flex items-center gap-2 transition-transform duration-300 hover:scale-110"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} /> GitHub
            </a>

            <a
              className="flex items-center gap-2 transition-transform duration-300 hover:scale-110"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-6 overflow-x-hidden text-sm text-center text-gray-500 border-t border-gray-800 sm:text-base">
        © 2025 Yash Jaiswal. All rights reserved.
      </footer>
    </div>
  );
}