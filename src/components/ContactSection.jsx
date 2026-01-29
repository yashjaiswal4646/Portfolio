import { useState, useEffect, useRef } from "react";
import { Mail, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  
  const hireMeRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll for big text reveal
  useEffect(() => {
    const handleScroll = () => {
      if (!hireMeRef.current) return;
      
      const element = hireMeRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is in the viewport
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate scroll progress (0 to 1)
      let progress = 0;
      if (elementTop < windowHeight) {
        const visibleHeight = Math.min(windowHeight - elementTop, elementHeight);
        progress = Math.min(1, visibleHeight / (elementHeight * 0.8));
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Replace these with your EmailJS credentials
      const serviceID = 'service_1rztyrj';
      const templateID = 'template_cnhseoi';
      const publicKey = '5bu-PvY2yK6IRnv9z';

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Yash Jaiswal'
        },
        publicKey
      );

      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('EmailJS Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 overflow-x-hidden bg-gray-900">
      <div className="px-4 mx-auto sm:px-6 max-w-7xl">
        <div className="flex items-center gap-3 px-2 mb-4">
          <Mail className="text-blue-400" size={28} />
          <h3 className="text-2xl font-semibold sm:text-3xl">Contact</h3>
        </div>
        
        {/* Big Text Hire Me Section - Reduced height */}
        <div 
          ref={hireMeRef}
          className="relative min-h-[50vh] flex items-center justify-center mb-6 overflow-hidden"
        >
          {/* Background overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900"
            style={{ opacity: scrollProgress * 0.5 }}
          ></div>
          
          {/* Big Text Container */}
          <div className="relative z-10 w-full text-center">
            {/* HIRE ME - Big text that fades in */}
            <div 
              className="transition-all duration-1000"
              style={{ 
                opacity: Math.min(1, scrollProgress * 2),
                transform: `translateY(${10 * (1 - scrollProgress)}px)`
              }}
            >
              <h2 className="text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                <span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                  style={{ 
                    backgroundSize: '200% auto',
                    backgroundPosition: `${scrollProgress * 100}% center`
                  }}
                >
                  HIRE <span className="text-gray-300 ">ME</span>
                </span>
              </h2>
            </div>
            
            {/* Subtitle that appears after main text */}
            <div 
              className="max-w-2xl mx-auto mt-3 transition-all duration-1000 delay-200"
              style={{ 
                opacity: Math.max(0, (scrollProgress - 0.2) * 2),
                transform: `translateY(${15 * (1 - Math.max(0, scrollProgress - 0.2))}px)`
              }}
            >
              <p className="text-base font-light leading-relaxed text-gray-300 sm:text-lg md:text-xl">
                Looking for a dedicated developer to bring your ideas to life?<br/>
                Let's collaborate and build something amazing!
              </p>
            </div>
            
            {/* Scroll indicator - Only show on large screens */}
            <div 
              className="absolute hidden transition-opacity duration-500 transform -translate-x-1/2 bottom-2 left-1/2 sm:block"
              style={{ opacity: 1 - scrollProgress }}
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs tracking-wider text-gray-500 uppercase">Scroll</span>
                <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500 to-transparent rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
          
          {/* Floating elements - Smaller and fewer */}
          <div className="absolute w-24 h-24 rounded-full top-1/4 left-1/4 bg-blue-500/5 blur-2xl animate-pulse"></div>
          <div className="absolute w-32 h-32 delay-1000 rounded-full bottom-1/4 right-1/4 bg-purple-500/5 blur-2xl animate-pulse"></div>
        </div>

        {/* Working Contact Form - Reduced top margin */}
        <div className="px-2 mt-8">
          <div className="max-w-2xl mx-auto p-6 border border-gray-800 rounded-xl bg-gray-950 group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500">
            <h4 className="mb-4 text-lg font-semibold text-center transition-colors duration-300 group-hover:text-blue-300 sm:text-xl">
              Send Me a Message
            </h4>
            
            {isSent && (
              <div className="p-3 mb-4 text-sm text-green-400 border border-green-800 rounded-lg bg-green-900/30 sm:text-base">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {error && (
              <div className="p-3 mb-4 text-sm text-red-400 border border-red-800 rounded-lg bg-red-900/30 sm:text-base">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="group/input">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 text-gray-300 transition-all duration-500 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 group-hover/input:scale-[1.03] group-hover/input:-translate-y-1 group-hover/input:shadow-xl group-hover/input:shadow-blue-900/10 group-hover/input:border-blue-500/50"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 group-hover/input:w-full"></div>
                </div>
                <div className="group/input">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 text-gray-300 transition-all duration-500 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 group-hover/input:scale-[1.03] group-hover/input:-translate-y-1 group-hover/input:shadow-xl group-hover/input:shadow-blue-900/10 group-hover/input:border-blue-500/50"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 group-hover/input:w-full"></div>
                </div>
              </div>
              <div className="group/input">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 text-gray-300 transition-all duration-500 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 group-hover/input:scale-[1.03] group-hover/input:-translate-y-1 group-hover/input:shadow-xl group-hover/input:shadow-blue-900/10 group-hover/input:border-blue-500/50"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 group-hover/input:w-full"></div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-white transition-all duration-500 bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0 group"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="transition-transform duration-300 group-hover:rotate-12" />
                    Send Message
                  </>
                )}
              </button>
            </form>
            
            <p className="mt-4 text-xs text-center text-gray-500 transition-colors duration-300 group-hover:text-gray-400 sm:text-sm">
              I'll respond to your message within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}