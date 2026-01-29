import {
  Home,
  Briefcase,
  BookOpen,
  User,
  Mail,
  Phone,
  Github,
  Linkedin,
  X,
  ChevronRight,
  MessageSquare,
  Star,
} from "lucide-react";

export default function MobileDrawer({ open, setOpen }) {
  if (!open) return null;

  return (
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
  );
}