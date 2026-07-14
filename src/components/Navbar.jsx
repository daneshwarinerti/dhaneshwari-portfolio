import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Training', href: '#training' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-[100]">
        <div 
          className="h-full bg-gradient-to-r from-awsOrange to-azureBlue transition-all duration-100" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-deepNavy/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/20' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Branding */}
          <a href="#" className="flex items-center gap-2 font-heading text-xl font-extrabold text-white tracking-tight">
            <motion.div
              initial={{ rotate: -15 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Terminal className="text-awsOrange w-5 h-5" />
            </motion.div>
            <span>
              DN<span className="text-azureBlue">.</span>
            </span>
          </a>

          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium font-heading">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-lightGray hover:text-awsOrange transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href={portfolioData.personalInfo.resumeUrl}
                download
                className="inline-flex items-center px-4 py-2 text-xs font-semibold rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-200"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger toggle button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white hover:text-awsOrange transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 w-72 h-screen bg-deepNavy/95 backdrop-blur-lg border-l border-white/5 z-40 pt-24 px-8 pb-10 flex flex-col justify-between shadow-2xl"
          >
            <ul className="flex flex-col gap-6 text-lg font-semibold font-heading">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-awsOrange transition-colors block py-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={portfolioData.personalInfo.resumeUrl}
              download
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-awsOrange to-azureBlue hover:from-awsOrange/90 hover:to-azureBlue/90 text-white font-semibold font-heading transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
