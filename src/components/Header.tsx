import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Programs', href: '#programs' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Meet Luke', href: '#about' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#5C6B4F] text-[#F7F3EC] shadow-md py-3' : 'bg-transparent text-[#22291F] py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="font-serif text-xl font-bold tracking-tight">
          GymHippie
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#C1714A] ${
                isScrolled ? 'text-[#F7F3EC]/90' : 'text-[#22291F]/80'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 ${
              isScrolled
                ? 'bg-[#F7F3EC] text-[#5C6B4F] hover:bg-white'
                : 'bg-[#5C6B4F] text-[#F7F3EC] hover:bg-[#4a563f]'
            }`}
          >
            Book Consultation
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#F7F3EC] text-[#22291F] shadow-lg py-4 px-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium py-2 border-b border-[#22291F]/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            className="mt-4 px-5 py-3 rounded-xl bg-[#5C6B4F] text-[#F7F3EC] text-center font-semibold text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Consultation
          </a>
        </motion.div>
      )}
    </header>
  );
}
