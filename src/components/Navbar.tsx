import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
  { name: 'About', id: 'about' },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

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
    }
  };

  return (
    <>
      {/* Logo Area - Top Left */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed top-6 left-6 md:top-8 md:left-8 z-50 mix-blend-difference text-white"
      >
        <button
          onClick={() => scrollToSection('home')}
          className="text-lg md:text-xl font-bold font-display tracking-widest cursor-pointer hover:opacity-70 transition-opacity focus:outline-none"
          aria-label="ホームに戻る"
        >
          PORTFOLIO
        </button>
      </motion.div>

      {/* Navigation Menu - Floating Island Top */}
      <nav className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 px-4 w-full md:w-auto flex justify-center pointer-events-none" role="navigation" aria-label="メインナビゲーション">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full px-2 py-2 pointer-events-auto flex items-center gap-1 md:gap-2"
        >
          <ul className="flex items-center gap-1 md:gap-2" role="menubar">
            {navItems.map((item) => (
              <li key={item.id} role="none">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative group cursor-pointer font-tech px-4 md:px-6 py-2 rounded-full transition-all duration-300 focus:outline-none flex items-center gap-2 overflow-hidden ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-minimal-gray hover:text-minimal-text hover:bg-black/5'
                  }`}
                  role="menuitem"
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {/* Active Background */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="navbar-active-bg"
                      className="absolute inset-0 bg-minimal-text"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      style={{ borderRadius: 9999 }}
                    />
                  )}

                  {/* Text Content */}
                  <span className={`relative z-10 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold transition-colors duration-200`}>
                    {item.name}
                  </span>
                  
                  {/* Active Dot */}
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="navbar-active-dot"
                      className="relative z-10 w-1 h-1 bg-minimal-accent rounded-full"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </>
  );
};
