import { motion, type Variants } from 'framer-motion';

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
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 relative z-10 pt-20"
      role="main"
      aria-label="ホームページ"
    >
      <div className="mb-2 overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="text-minimal-accent font-tech uppercase tracking-widest text-xs md:text-sm">
            // Welcome to my digital space
          </span>
        </motion.div>
      </div>

      <TypewriterText
        text="CREATIVE DEVELOPER"
        className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-minimal-text"
        delay={0.5}
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-sm md:text-lg text-minimal-gray tracking-[0.3em] uppercase mb-12 font-tech max-w-2xl"
      >
        Crafting immersive digital experiences
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-col md:flex-row gap-8 items-center"
      >
        <button
          onClick={() => scrollToSection('projects')}
          className="group relative px-8 py-3 bg-minimal-accent text-white hover:bg-blue-600 transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-minimal-accent focus:ring-offset-2"
          aria-label="プロジェクト一覧を見る"
        >
          <span className="relative z-10 text-sm tracking-widest uppercase font-tech">
            View Projects
          </span>
        </button>

        <button
          onClick={() => scrollToSection('about')}
          className="group relative px-8 py-3 border border-minimal-text/20 hover:border-minimal-accent hover:text-minimal-accent transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-minimal-accent/50"
          aria-label="お問い合わせページへ"
        >
          <span className="relative z-10 text-sm tracking-widest uppercase font-tech text-minimal-text group-hover:text-minimal-accent transition-colors">
            Contact Me
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
};
