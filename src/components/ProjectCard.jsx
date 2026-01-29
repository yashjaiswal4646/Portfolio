import { useRef, useState, useEffect } from "react";
import { ExternalLink, Code, ArrowUpRight } from "lucide-react";

/* ===== ENHANCED PROJECT CARD COMPONENT ===== */
export default function ProjectCard({
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
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Track scroll direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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

  // Determine animation class based on index, visibility, and scroll direction
  let animationClass = '';
  
  if (isVisible) {
    if (index % 2 === 0) { // Even cards
      if (scrollDirection === 'down') {
        animationClass = 'animate-slideInFromLeftUp';
      } else {
        animationClass = 'animate-slideInFromLeftDown';
      }
    } else { // Odd cards
      if (scrollDirection === 'down') {
        animationClass = 'animate-slideInFromRightUp';
      } else {
        animationClass = 'animate-slideInFromRightDown';
      }
    }
  } else {
    if (index % 2 === 0) {
      animationClass = 'animate-slideOutToLeft';
    } else {
      animationClass = 'animate-slideOutToRight';
    }
  }

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