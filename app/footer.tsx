

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-navy text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-space text-2xl font-bold mb-4">Ibrahim Olujide</h3>
            <p className="text-white/70">
              Full Stack Developer crafting beautiful web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="#about" className="text-white/70 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-white/70 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-white/70 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <Link 
                href="https://github.com/bamidelee" 
                target="_blank"
                className="text-white/70 hover:text-white transition-colors"
              >
                GitHub
              </Link>
              <Link 
                href="https://x.com/const_bamidele" 
                target="_blank"
                className="text-white/70 hover:text-white transition-colors"
              >
                Twitter
              </Link>
              <Link 
                href="https://www.linkedin.com/in/ibrahim-olujide-67194223b/" 
                target="_blank"
                className="text-white/70 hover:text-white transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>&copy; {currentYear} Ibrahim Olujide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}