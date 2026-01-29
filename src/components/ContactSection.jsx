import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 overflow-x-hidden bg-gray-900">
      <div className="px-4 mx-auto sm:px-6 max-w-7xl">
        <div className="flex items-center gap-3 px-2 mb-6">
          <Mail className="text-blue-400" size={28} />
          <h3 className="text-2xl font-semibold sm:text-3xl">Contact</h3>
        </div>
        
        <div className="grid gap-8 px-2 md:grid-cols-2">
          {/* Contact Information */}
          <div className="p-6 border border-gray-800 rounded-xl bg-gray-950">
            <h4 className="mb-6 text-xl font-semibold">Get In Touch</h4>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-900/30">
                  <Phone size={20} className="text-blue-400" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-300">Phone</h5>
                  <p className="text-gray-400">7549637198</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-900/30">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-300">Email</h5>
                  <p className="text-gray-400">architect4646@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue-900/30">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-300">Location</h5>
                  <p className="text-gray-400">Rajkot, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-6 border border-gray-800 rounded-xl bg-gray-950">
            <h4 className="mb-6 text-xl font-semibold">Connect With Me</h4>
            
            <div className="space-y-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 transition-all duration-300 border border-gray-800 rounded-lg hover:bg-gray-900 hover:border-blue-500/50 hover:translate-x-2"
              >
                <div className="p-2 bg-gray-900 rounded-lg">
                  <Github size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h5 className="font-medium">GitHub</h5>
                  <p className="text-sm text-gray-400">@yourusername</p>
                </div>
                <div className="p-2 rounded-lg bg-blue-900/30">
                  <span className="text-xs font-semibold text-blue-300">Follow</span>
                </div>
              </a>
              
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 transition-all duration-300 border border-gray-800 rounded-lg hover:bg-gray-900 hover:border-blue-500/50 hover:translate-x-2"
              >
                <div className="p-2 rounded-lg bg-blue-900/30">
                  <Linkedin size={24} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <h5 className="font-medium">LinkedIn</h5>
                  <p className="text-sm text-gray-400">Yash Jaiswal</p>
                </div>
                <div className="p-2 rounded-lg bg-blue-900/30">
                  <span className="text-xs font-semibold text-blue-300">Connect</span>
                </div>
              </a>
              
              <a
                href="mailto:architect4646@gmail.com"
                className="flex items-center gap-4 p-4 transition-all duration-300 border border-gray-800 rounded-lg hover:bg-gray-900 hover:border-blue-500/50 hover:translate-x-2"
              >
                <div className="p-2 rounded-lg bg-red-900/30">
                  <Mail size={24} className="text-red-400" />
                </div>
                <div className="flex-1">
                  <h5 className="font-medium">Email Direct</h5>
                  <p className="text-sm text-gray-400">Send me a message</p>
                </div>
                <div className="p-2 rounded-lg bg-blue-900/30">
                  <span className="text-xs font-semibold text-blue-300">Email</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Contact Form (Optional) */}
        <div className="px-2 mt-12">
          <div className="p-6 border border-gray-800 rounded-xl bg-gray-950">
            <h4 className="mb-4 text-xl font-semibold">Send a Message</h4>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 text-gray-300 transition-all duration-300 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 text-gray-300 transition-all duration-300 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 text-gray-300 transition-all duration-300 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <button className="w-full px-6 py-3 font-medium text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}