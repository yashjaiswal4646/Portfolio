import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 overflow-x-hidden">
      <div className="px-4 mx-auto sm:px-6 max-w-7xl">
        <div className="flex items-center gap-3 px-2 mb-6">
          <GraduationCap className="text-blue-400" size={28} />
          <h3 className="text-2xl font-semibold sm:text-3xl">Education</h3>
        </div>
        <div className="px-2 space-y-6">
          <div className="p-6 transition-all duration-300 border border-gray-800 rounded-xl bg-gray-900/50 hover:bg-gray-900 hover:border-blue-500/30">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">RK University, Rajkot</h4>
                <p className="text-gray-400">B.Tech Computer Engineering (2022–2026)</p>
              </div>
              <span className="px-3 py-1 text-sm font-semibold text-blue-300 rounded-full bg-blue-900/30">
                CGPA: 7.16
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              Currently pursuing Bachelor's degree in Computer Engineering with focus on full-stack development, algorithms, and software engineering principles.
            </p>
          </div>

          <div className="p-6 transition-all duration-300 border border-gray-800 rounded-xl bg-gray-900/50 hover:bg-gray-900 hover:border-blue-500/30">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">Anchit Sah Madh Vidhyalay (BSEB)</h4>
                <p className="text-gray-400">Intermediate - Science Stream (2019–2021)</p>
              </div>
              <span className="px-3 py-1 text-sm font-semibold text-green-300 rounded-full bg-green-900/30">
                Percentage: 70%
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              Completed Higher Secondary Education with Physics, Chemistry, and Mathematics as main subjects.
            </p>
          </div>

          <div className="p-6 transition-all duration-300 border border-gray-800 rounded-xl bg-gray-900/50 hover:bg-gray-900 hover:border-blue-500/30">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold text-white">Indian Public School (CBSE)</h4>
                <p className="text-gray-400">Matriculation (2018–2019)</p>
              </div>
              <span className="px-3 py-1 text-sm font-semibold text-green-300 rounded-full bg-green-900/30">
                Percentage: 70%
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              Completed secondary education with strong foundation in mathematics and science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}