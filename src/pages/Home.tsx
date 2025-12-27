import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { Magnetic } from '../components/Magnetic';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText = ({ text, delay = 0, className = "" }: TypewriterTextProps) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay }
    }
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
    hidden: {
      opacity: 0,
      y: 80,
      rotateX: 45,
      scale: 0.8,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  };

  return (
    <motion.div
      className={`overflow-hidden flex flex-wrap justify-center perspective-1000 py-4 ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block transform-gpu origin-bottom"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden flex flex-col justify-center items-center">
      <motion.div
        style={{ y: y1, opacity, scale }}
        className="text-center px-4 relative z-10 pt-20"
        role="main"
        aria-label="ホームページ"
      >
        <div className="mb-6 overflow-hidden flex items-center justify-center gap-4">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="h-px w-8 md:w-16 bg-minimal-accent/20" 
          />
          <motion.div
            initial={{ opacity: 0, letterSpacing: "1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1 }}
          >
            <span className="text-minimal-accent font-tech uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">
              // RE-DEFINING DIGITAL AESTHETICS
            </span>
          </motion.div>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="h-px w-8 md:w-16 bg-minimal-accent/20" 
          />
        </div>

        <TypewriterText
          text="CREATIVE"
          className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[11rem] font-bold tracking-tighter leading-[0.75] text-minimal-text mb-2 md:mb-4"
          delay={1.2}
        />
        <TypewriterText
          text="DEVELOPER"
          className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[11rem] font-bold tracking-tighter leading-[0.75] text-minimal-text mb-8 md:mb-12"
          delay={1.4}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-2xl mx-auto border-l-2 border-minimal-accent/20 pl-6 md:pl-8 text-left mb-12 md:mb-16"
        >
          <p className="text-base sm:text-lg md:text-2xl text-minimal-text font-sans font-medium leading-tight">
            デジタルと感性が交差する、<br className="md:hidden" />新しい体験の形を構築する。
          </p>
          <p className="text-[10px] md:text-sm text-minimal-gray tracking-[0.2em] uppercase font-tech">
            Crafting high-end digital experiences <br className="hidden md:block" /> with focus on motion and performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 md:gap-12 items-center justify-center pt-4"
        >
          <Magnetic strength={0.3}>
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto group relative px-10 md:px-12 py-4 md:py-5 bg-minimal-accent text-white hover:bg-indigo-700 transition-all duration-500 rounded-2xl focus:outline-none overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"
              />
              <span className="relative z-10 text-xs md:text-sm tracking-[0.3em] uppercase font-tech font-bold">
                See My Work
              </span>
            </button>
          </Magnetic>

          <Magnetic strength={0.3}>
            <button
              onClick={() => scrollToSection('about')}
              className="w-full sm:w-auto group relative px-10 md:px-12 py-4 md:py-5 border border-minimal-text/10 hover:border-minimal-text transition-all duration-500 rounded-2xl focus:outline-none"
            >
              <span className="relative z-10 text-xs md:text-sm tracking-[0.3em] uppercase font-tech text-minimal-text group-hover:text-minimal-accent transition-colors">
                Contact
              </span>
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Infinite Marquee */}
      <div className="absolute bottom-12 left-0 w-full overflow-hidden opacity-20 whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="inline-block text-[10vw] font-black tracking-tighter text-minimal-text py-4"
        >
          EXPERIENCE DESIGN — CREATIVE TECH — UI ARCHITECTURE — EXPERIENCE DESIGN — CREATIVE TECH — UI ARCHITECTURE —
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-minimal-accent to-transparent opacity-20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-minimal-accent to-transparent opacity-20" />
      </div>
    </div>
  );
};



