import { GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function EducationSection() {
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards sequentially when section is visible
            const timer1 = setTimeout(() => setVisibleCards([0]), 200);
            const timer2 = setTimeout(() => setVisibleCards([0, 1]), 400);
            const timer3 = setTimeout(() => setVisibleCards([0, 1, 2]), 600);
            
            return () => {
              clearTimeout(timer1);
              clearTimeout(timer2);
              clearTimeout(timer3);
            };
          } else {
            // Reset when section leaves viewport
            setVisibleCards([]);
          }
        });
      },
      {
        threshold: 0.2,
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

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-20 overflow-x-hidden"
    >
      <div className="px-4 mx-auto sm:px-6 max-w-7xl">
        {/* Section Header */}
        <div className={`flex items-center gap-3 px-2 mb-12 transition-all duration-1000 ${
          visibleCards.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <GraduationCap className="text-blue-400" size={32} />
          <h3 className="text-3xl font-bold text-white">Education</h3>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {/* First Card */}
          <div className={`p-6 transition-all duration-700 border border-gray-800 rounded-xl bg-gray-900/50 hover:bg-gray-900 hover:border-blue-500/30 ${
            visibleCards.includes(0) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">RK University, Rajkot</h4>
                <p className="text-gray-400">B.Tech Computer Engineering (2022–2026)</p>
              </div>
              <span className={`px-3 py-1 text-sm font-semibold text-blue-300 rounded-full bg-blue-900/30 transition-all duration-1000 ${
                visibleCards.includes(0) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}>
                CGPA: 7.16
              </span>
            </div>
            <p className={`mt-3 text-sm text-gray-400 transition-all duration-1000 delay-300 ${
              visibleCards.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Currently pursuing Bachelor's degree in Computer Engineering with focus on full-stack development, algorithms, and software engineering principles.
            </p>
          </div>

          {/* Second Card */}
          <div className={`p-6 transition-all duration-700 border border-gray-800 rounded-xl bg-gray-900/50 hover:bg-gray-900 hover:border-blue-500/30 ${
            visibleCards.includes(1) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">Anchit Sah Madh Vidhyalay (BSEB)</h4>
                <p className="text-gray-400">Intermediate - Science Stream (2019–2021)</p>
              </div>
              <span className={`px-3 py-1 text-sm font-semibold text-blue-300 rounded-full bg-blue-900/30 transition-all duration-1000 ${
                visibleCards.includes(1) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}>
                Percentage: 70%
              </span>
            </div>
            <p className={`mt-3 text-sm text-gray-400 transition-all duration-1000 delay-300 ${
              visibleCards.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Completed Higher Secondary Education with Physics, Chemistry, and Mathematics as main subjects.
            </p>
          </div>

          {/* Third Card */}
          <div className={`p-6 transition-all duration-700 border border-gray-800 rounded-xl bg-gray-900/50 hover:bg-gray-900 hover:border-blue-500/30 ${
            visibleCards.includes(2) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">Indian Public School (CBSE)</h4>
                <p className="text-gray-400">Matriculation (2018–2019)</p>
              </div>
              <span className={`px-3 py-1 text-sm font-semibold text-blue-300 rounded-full bg-blue-900/30 transition-all duration-1000 ${
                visibleCards.includes(2) ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}>
                Percentage: 70%
              </span>
            </div>
            <p className={`mt-3 text-sm text-gray-400 transition-all duration-1000 delay-300 ${
              visibleCards.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Completed secondary education with strong foundation in mathematics and science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}