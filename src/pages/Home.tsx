import { motion, type Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const pageTransition = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

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
      transition: { staggerChildren: 0.05, delayChildren: delay }
    }
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className={`overflow-hidden flex flex-wrap justify-center ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
      className="h-full flex flex-col justify-center items-center text-center px-4 z-10 relative"
    >
      <div className="mb-2 overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="text-cyan-400 font-tech uppercase tracking-widest text-xs md:text-sm">
            // Welcome to my digital space
          </span>
        </motion.div>
      </div>

      <TypewriterText
        text="CREATIVE DEVELOPER"
        className="text-5xl md:text-8xl font-bold font-display tracking-tighter mb-4 text-white mix-blend-difference"
        delay={0.5}
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-sm md:text-lg text-gray-400 tracking-[0.3em] uppercase mb-12 font-tech max-w-2xl"
      >
        Crafting immersive digital experiences
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="flex flex-col md:flex-row gap-8 items-center"
      >
        <button
          onClick={() => navigate('/projects')}
          className="group relative px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
        >
          <span className="relative z-10 text-sm tracking-widest uppercase font-tech text-white group-hover:text-cyan-300 transition-colors">
            View Projects
          </span>
          <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </button>

        <button
          onClick={() => navigate('/about')}
          className="group relative px-8 py-3 overflow-hidden"
        >
          <span className="relative z-10 text-sm tracking-widest uppercase font-tech text-gray-400 group-hover:text-white transition-colors">
            Contact Me
          </span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-700 group-hover:bg-white transition-colors duration-300" />
        </button>
      </motion.div>
    </motion.div>
  );
};
