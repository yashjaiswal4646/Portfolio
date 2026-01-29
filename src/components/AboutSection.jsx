import { useEffect } from "react";

export default function AboutSection() {
  // Scroll effect for mobile About section
  useEffect(() => {
    const aboutSection = document.getElementById('about-section');
    const aboutText = document.getElementById('mobile-about-text');
    
    if (!aboutSection || !aboutText) return;
    
    const handleScroll = () => {
      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // When about section enters viewport (from bottom)
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
        
        // Apply smooth opacity and translateY based on scroll progress
        aboutText.style.opacity = progress;
        aboutText.style.transform = `translateY(${8 * (1 - progress)}px)`;
      } else {
        aboutText.style.opacity = '0';
        aboutText.style.transform = 'translateY(8px)';
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about-section" className="py-20 overflow-x-hidden bg-gray-900">
      <div className="px-4 mx-auto sm:px-6 max-w-7xl">
        <h3 className="px-2 mb-10 text-2xl font-semibold sm:text-3xl">About Me</h3>
        
        {/* Computer view - Starts crooked, straightens on hover */}
        <div className="hidden md:block">
          <div className="max-w-3xl mx-auto">
            <div className="relative group perspective-1000">
              {/* Main text container - Starts tilted/crooked */}
              <div className="p-10 transition-all duration-700 transform border border-gray-800 rounded-2xl bg-gray-950 
                            rotate-[-2deg] translate-y-4 translate-x-2
                            group-hover:rotate-0 group-hover:translate-y-0 group-hover:translate-x-0 
                            group-hover:scale-[1.02] group-hover:border-blue-500/30 
                            group-hover:shadow-2xl group-hover:shadow-blue-900/20">
                
                {/* Title with subtle highlight */}
                <div className="relative inline-block mb-8">
                  <h4 className="text-2xl font-bold text-white">About Me</h4>
                  <div className="absolute left-0 w-1/2 h-1 rounded-full -bottom-2 bg-gradient-to-r from-blue-500 to-transparent"></div>
                </div>
                
                <div className="space-y-5">
                  <p className="text-lg leading-relaxed text-gray-300 transition-all duration-500 group-hover:text-gray-200">
                    Hi! I'm <span className="font-bold text-blue-400">Yash Jaiswal</span>, a passionate Full Stack Developer from Rajkot, India.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-300 transition-all duration-500 delay-75 group-hover:text-gray-200">
                    I build responsive and interactive web applications using modern tools like React, Node.js, Express, and MongoDB.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-300 transition-all duration-500 delay-100 group-hover:text-gray-200">
                    I enjoy creating practical software solutions such as management systems, learning platforms, and mobile apps, focusing on clean code and smooth user experiences.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-300 transition-all duration-500 delay-150 group-hover:text-gray-200">
                    Outside of coding, I explore modern UI/UX trends and continuously improve my designs to make them more appealing and engaging.
                  </p>
                </div>
                
                {/* Corner accents that appear on hover */}
                <div className="absolute w-4 h-4 transition-all duration-500 border-t-2 border-r-2 border-blue-500 opacity-0 top-6 right-6 group-hover:opacity-100 group-hover:top-4 group-hover:right-4"></div>
                <div className="absolute w-4 h-4 transition-all duration-500 border-t-2 border-l-2 border-blue-500 opacity-0 top-6 left-6 group-hover:opacity-100 group-hover:top-4 group-hover:left-4"></div>
                <div className="absolute w-4 h-4 transition-all duration-500 border-b-2 border-r-2 border-blue-500 opacity-0 bottom-6 right-6 group-hover:opacity-100 group-hover:bottom-4 group-hover:right-4"></div>
                <div className="absolute w-4 h-4 transition-all duration-500 border-b-2 border-l-2 border-blue-500 opacity-0 bottom-6 left-6 group-hover:opacity-100 group-hover:bottom-4 group-hover:left-4"></div>
              </div>
              
              {/* Background elements that move on hover */}
              <div className="absolute top-0 left-0 w-full h-full -z-10 transition-all duration-700 rounded-2xl bg-gradient-to-br from-blue-900/10 to-purple-900/10 
                            rotate-[-1deg] translate-y-2 translate-x-3
                            group-hover:rotate-0 group-hover:translate-y-0 group-hover:translate-x-0 
                            group-hover:from-blue-900/20 group-hover:to-purple-900/20"></div>
              
              {/* Floating dots that move into position on hover */}
              <div className="absolute w-6 h-6 transition-all duration-700 translate-x-4 translate-y-2 rounded-full -top-3 -right-3 opacity-70 bg-gradient-to-br from-blue-500 to-purple-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-blue-500/30"></div>
              <div className="absolute w-8 h-8 transition-all duration-700 -translate-x-4 -translate-y-2 rounded-full -bottom-3 -left-3 opacity-70 bg-gradient-to-br from-purple-500 to-blue-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-purple-500/30"></div>
            </div>
          </div>
        </div>

        {/* Mobile view with scroll reveal effect */}
        <div className="md:hidden">
          <div className="relative">
            {/* Animated text container with scroll effect */}
            <div className="p-6 transition-all duration-500 transform translate-y-8 border border-gray-800 opacity-0 rounded-xl bg-gray-950" 
                 id="mobile-about-text">
              <p className="text-sm leading-relaxed text-gray-300">
                Hi! I'm <span className="font-bold text-blue-400">Yash Jaiswal</span>, a passionate Full Stack Developer from Rajkot, India.<br/><br/>
                I build responsive and interactive web applications using modern tools like React, Node.js, Express, and MongoDB.<br/><br/>
                I enjoy creating practical software solutions such as management systems, learning platforms, and mobile apps, focusing on clean code and smooth user experiences.<br/><br/>
                Outside of coding, I explore modern UI/UX trends and continuously improve my designs to make them more appealing and engaging.
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute w-4 h-4 rounded-full -top-2 -right-2 bg-blue-500/30 animate-pulse"></div>
            <div className="absolute w-6 h-6 delay-300 rounded-full -bottom-2 -left-2 bg-purple-500/20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}