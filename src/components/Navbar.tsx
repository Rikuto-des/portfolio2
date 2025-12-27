import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Magnetic } from './Magnetic';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'About', id: 'about' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      setIsScrolled(window.scrollY > 50);

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled || isOpen ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-minimal-text/5' : 'py-10 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Magnetic strength={0.2}>
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl md:text-2xl font-black font-display tracking-tighter text-minimal-text cursor-pointer hover:opacity-70 transition-opacity focus:outline-none z-50 relative"
          >
            PORTFOLIO<span className="text-minimal-accent">.</span>
          </button>
        </Magnetic>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-12">
          {navItems.map((item, idx) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="relative group cursor-pointer font-tech focus:outline-none px-2 py-1"
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <div className="flex items-center gap-1">
                  <span className={`text-xs tracking-[0.3em] uppercase transition-all duration-500 ${activeSection === item.id ? 'text-minimal-text font-bold' : 'text-minimal-gray group-hover:text-minimal-text'
                    }`}>
                    {item.name}
                  </span>
                </div>

                {activeSection === item.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-minimal-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 p-2 text-minimal-text focus:outline-none"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
            <span className={`w-full h-0.5 bg-current transition-transform duration-500 origin-left ${isOpen ? 'rotate-45 translate-x-1' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-500 ${isOpen ? 'translate-x-10 opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-transform duration-500 origin-left ${isOpen ? '-rotate-45 translate-x-1' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? '0%' : '-100%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-white z-[40] md:hidden flex flex-col items-center justify-center space-y-8"
        >
          {navItems.map((item, idx) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: isOpen ? 0.3 + idx * 0.1 : 0 }}
              onClick={() => scrollToSection(item.id)}
              className="text-4xl font-bold font-display tracking-tighter text-minimal-text"
            >
              {item.name.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

