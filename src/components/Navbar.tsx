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
      const scrollPosition = window.scrollY + 200;

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
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 bg-white/80 backdrop-blur-md" role="navigation" aria-label="メインナビゲーション">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold font-display tracking-widest text-minimal-text cursor-pointer hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-minimal-accent/50 focus:ring-offset-2 rounded"
          aria-label="ホームに戻る"
        >
          PORTFOLIO
        </button>

        <ul className="flex space-x-12" role="menubar">
          {navItems.map((item) => (
            <li key={item.id} role="none">
              <button
                onClick={() => scrollToSection(item.id)}
                className="relative group cursor-pointer font-tech focus:outline-none focus:ring-2 focus:ring-minimal-accent/50 rounded px-2 py-1"
                role="menuitem"
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <div className="flex items-center gap-1">
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-minimal-accent font-bold">[</span>
                  <span className={`text-sm tracking-widest uppercase transition-colors duration-300 ${activeSection === item.id ? 'text-minimal-text' : 'text-minimal-gray group-hover:text-minimal-text'
                    }`}>
                    {item.name}
                  </span>
                  <span className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-minimal-accent font-bold">]</span>
                </div>

                {activeSection === item.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 w-full h-px bg-minimal-text shadow-[0_0_10px_rgba(0,0,0,0.1)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
