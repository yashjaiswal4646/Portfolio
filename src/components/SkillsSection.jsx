import { useRef, useState, useEffect } from "react";
import { Cpu, Database } from "lucide-react";
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
function Skill({ icon, name, index }) {
  const skillRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

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

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  const animationClass = index % 2 === 0 
    ? (isVisible ? 'animate-slideInFromLeft' : 'animate-slideOutToLeft')
    : (isVisible ? 'animate-slideInFromRight' : 'animate-slideOutToRight');

  const resetClass = !isVisible && hasAnimated ? 'opacity-0' : '';

  return (
    <div 
      ref={skillRef}
      className={`flex flex-col items-center flex-shrink-0 gap-2 px-2 transition-all duration-500 hover:scale-110 ${animationClass} ${resetClass}`}
      style={{
        animationFillMode: 'forwards',
        animationDuration: '0.5s'
      }}
    >
      <div className="text-3xl transition-all duration-300 hover:text-blue-400">{icon}</div>
      <span className="text-xs text-center text-gray-400 transition-all duration-300 whitespace-nowrap hover:text-gray-300">{name}</span>
    </div>
  );
}

/* ===== MOBILE SCROLLING SKILLS CONTAINER ===== */
function MobileScrollingSkills({ skills, index }) {
  const animationName = index % 2 === 0 ? "scrollLeftToRight" : "scrollRightToLeft";
  const animationSpeed = "10s";

  return (
    <div className="relative w-full overflow-hidden md:hidden">
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

/* ===== DESKTOP STATIC SKILLS WITH ANIMATION ===== */
function DesktopSkills({ children, index }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animationClass = index % 2 === 0 
    ? (isVisible ? 'animate-slideInFromLeft' : 'animate-slideOutToLeft')
    : (isVisible ? 'animate-slideInFromRight' : 'animate-slideOutToRight');

  const resetClass = !isVisible && hasAnimated ? 'opacity-0' : '';

  return (
    <div 
      ref={sectionRef}
      className={`hidden md:flex md:flex-wrap md:gap-6 transition-all duration-500 ${animationClass} ${resetClass}`}
      style={{
        animationFillMode: 'forwards',
        animationDuration: '0.5s'
      }}
    >
      {children}
    </div>
  );
}

// Define skills data
export const skillSections = [
  {
    title: "Languages",
    skills: [
      { icon: <SiPython />, name: "Python" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <FaJava />, name: "Java" },
      { icon: <DiDotnet />, name: "C#" },
      { icon: <SiTypescript />, name: "TypeScript" },
    ]
  },
  {
    title: "Frontend",
    skills: [
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <SiCss3 />, name: "CSS" },
      { icon: <SiReact />, name: "React.js" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
      { icon: <Cpu />, name: "JSP" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiPhp />, name: "PHP" },
      { icon: <Cpu />, name: "Servlet" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <Database />, name: "Mongoose" },
    ]
  },
  {
    title: "App Development",
    skills: [
      { icon: <SiFlutter />, name: "Flutter" },
    ]
  },
  {
    title: "AI & Tools",
    skills: [
      { icon: <SiOpenai />, name: "OpenAI" },
      { icon: <SiGithubcopilot />, name: "GitHub Copilot" },
      { icon: <SiGoogle />, name: "Gemini" },
      { icon: <Cpu />, name: "Cursor" },
      { icon: <Cpu />, name: "Blackbox" },
      { icon: <Cpu />, name: "Llama 3" },
      { icon: <Cpu />, name: "DeepSeek" },
    ]
  },
];

// Skills Section Component
export default function SkillsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="px-4 py-20 mx-auto overflow-x-hidden sm:px-6 max-w-7xl">
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h3 className="px-2 mb-10 text-2xl font-semibold sm:text-3xl">Technical Skills</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {skillSections.map((section, index) => (
          <div 
            key={index} 
            className="p-4 overflow-hidden transition-all duration-500 bg-gray-900 sm:p-6 rounded-xl hover:bg-gray-800/50 hover:border-blue-500/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/10 border border-gray-800"
          >
            <h4 className="mb-4 text-sm font-semibold transition-all duration-300 sm:text-base hover:text-blue-300">
              {section.title}
            </h4>
            
            <DesktopSkills index={index}>
              {section.skills.map((skill, skillIndex) => (
                <Skill 
                  key={skillIndex} 
                  icon={skill.icon} 
                  name={skill.name} 
                  index={skillIndex}
                />
              ))}
            </DesktopSkills>
            
            <div className="w-full overflow-hidden md:hidden">
              <MobileScrollingSkills 
                skills={section.skills.map((skill, skillIndex) => (
                  <Skill 
                    key={skillIndex} 
                    icon={skill.icon} 
                    name={skill.name} 
                    index={skillIndex}
                  />
                ))} 
                index={index}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}