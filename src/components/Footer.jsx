export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 overflow-x-hidden text-sm text-center text-gray-500 border-t border-gray-800 sm:text-base">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-gray-400">
            © {currentYear} Yash Jaiswal. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="transition-colors hover:text-gray-300"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="transition-colors hover:text-gray-300"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="transition-colors hover:text-gray-300"
            >
              Cookie Policy
            </a>
          </div>
          <div className="text-gray-400">
            Made with ❤️ using React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}