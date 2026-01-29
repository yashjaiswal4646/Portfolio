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

/* ===== DESKTOP STATIC SKILLS ===== */
function DesktopSkills({ children }) {
  return (
    <div className="flex-wrap hidden gap-6 md:flex">
      {children}
    </div>
  );
}

// Define skills data
export const skillSections = [
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

// Skills Section Component
export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20 mx-auto overflow-x-hidden sm:px-6 max-w-7xl">
      <h3 className="px-2 mb-10 text-2xl font-semibold sm:text-3xl">Technical Skills</h3>

      <div className="grid gap-6 md:grid-cols-3">
        {skillSections.map((section, index) => (
          <div key={index} className="p-4 overflow-hidden bg-gray-900 sm:p-6 rounded-xl">
            <h4 className="mb-4 text-sm font-semibold sm:text-base">{section.title}</h4>
            
            <DesktopSkills>
              {section.skills}
            </DesktopSkills>
            
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
  );
}