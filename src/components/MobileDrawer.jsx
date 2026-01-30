import React from 'react';
import { Home, User, Code, Folder, GraduationCap, Mail } from 'lucide-react';  // Import icons

const MobileDrawer = ({ open, setOpen }) => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[60] h-full w-64 bg-gray-950 border-l border-gray-800 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <img
              src="/profile.jpg"
              alt="Yash Jaiswal"
              className="object-cover w-8 h-8 border rounded-full border-blue-500/50"
            />
            <h2 className="text-lg font-bold text-blue-400">Yash Jaiswal</h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          <button
            onClick={() => {
              scrollToTop();
              setOpen(false);
            }}
            className="flex items-center space-x-3 text-left text-gray-100 transition-colors duration-300 hover:text-blue-400"
          >
            <Home size={20} />
            <span>Home</span>
          </button>
          <a
            href="#about"
            className="flex items-center space-x-3 text-gray-100 transition-colors duration-300 hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            <User size={20} />
            <span>About</span>
          </a>
          <a
            href="#skills"
            className="flex items-center space-x-3 text-gray-100 transition-colors duration-300 hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            <Code size={20} />
            <span>Skills</span>
          </a>
          <a
            href="#projects"
            className="flex items-center space-x-3 text-gray-100 transition-colors duration-300 hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            <Folder size={20} />
            <span>Projects</span>
          </a>
          <a
            href="#education"
            className="flex items-center space-x-3 text-gray-100 transition-colors duration-300 hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            <GraduationCap size={20} />
            <span>Education</span>
          </a>
          <a
            href="#contact"
            className="flex items-center space-x-3 text-gray-100 transition-colors duration-300 hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            <Mail size={20} />
            <span>Contact</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default MobileDrawer;