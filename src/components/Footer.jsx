import { Github, Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);

  // Continuous up/down animation for social icons
  const [iconPositions, setIconPositions] = useState([0, 0, 0, 0]);

  useEffect(() => {
    if (!isAnimating) return;

    const interval = setInterval(() => {
      setIconPositions(prev => prev.map(() => Math.random() * 8 - 4)); // Random between -4px to +4px
    }, 2000); // Change position every 2 seconds

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <footer className="py-8 overflow-x-hidden border-t border-gray-800 bg-gray-950">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Main Footer Content - Centered */}
        <div className="flex flex-col items-center justify-center gap-8 mb-8">
          {/* Follow Me / Hire Me Section - Centered */}
          <div className="text-center">
            <h3 className="mb-6 text-2xl font-semibold text-white">
              Follow Me / Hire Me
            </h3>

            {/* Social Icons with Continuous Up/Down Animation */}
            <div className="flex justify-center gap-6">
              {[
                {
                  icon: <Github size={24} />,
                  href: "https://github.com/yashjaiswal4646",
                  label: "GitHub",
                },
                {
                  icon: <Linkedin size={24} />,
                  href: "https://www.linkedin.com/in/yash-jaiswal-46a6402b7/",
                  label: "LinkedIn",
                },
                {
                  icon: <Instagram size={24} />,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
                {
                  icon: <Mail size={24} />,
                  href: "mailto:architect4646@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-gray-900 border border-gray-800 transition-all duration-1000 ease-in-out ${
                    hoveredIcon === index
                      ? "translate-y-[-8px] bg-blue-900/30 border-blue-500/50"
                      : ""
                  }`}
                  style={{
                    transform: hoveredIcon === index 
                      ? 'translateY(-8px)' 
                      : `translateY(${iconPositions[index]}px)`
                  }}
                  onMouseEnter={() => {
                    setHoveredIcon(index);
                    setIsAnimating(false);
                  }}
                  onMouseLeave={() => {
                    setHoveredIcon(null);
                    setIsAnimating(true);
                  }}
                  aria-label={social.label}
                >
                  <div
                    className={`transition-all duration-300 ${
                      hoveredIcon === index
                        ? "text-blue-400 scale-110"
                        : "text-gray-300"
                    }`}
                  >
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section - Centered */}
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-4 text-gray-400">
              © {currentYear} Yash Jaiswal. All rights reserved.
              <span className="text-gray-600">|</span>
              <a
                href="#privacy"
                className="text-gray-400 transition-colors hover:text-gray-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="#terms"
                className="text-gray-400 transition-colors hover:text-gray-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        
      </div>
    </footer>
  );
}