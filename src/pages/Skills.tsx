import { motion, type Variants } from 'framer-motion';

const pageTransition = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
};

const skills = [
  { name: 'Illustrator', level: 90 },
  { name: 'Figma', level: 95 },
  { name: 'Photoshop', level: 85 },
  { name: 'After Effects', level: 80 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'React', level: 85 },
  { name: 'TailwindCSS', level: 90 },
  { name: 'WebGL', level: 70 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 65 },
];

export const Skills = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="h-full flex flex-col justify-center px-8 max-w-5xl mx-auto pt-20"
    >
      <div className="mb-16">
        <h2 className="text-4xl md:text-7xl font-bold font-display tracking-tighter text-white mix-blend-difference mb-4">
          CAPABILITIES
        </h2>
        <p className="font-tech text-cyan-400 text-sm tracking-widest uppercase">// Technical Arsenal</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8"
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={itemVariants} className="relative group">
            <div className="flex justify-between mb-2 items-end">
              <span className="text-sm md:text-base font-bold text-white tracking-widest font-display uppercase group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </span>
              <span className="text-xs font-mono text-cyan-500/70 font-tech">{skill.level}%</span>
            </div>

            <div className="h-1 bg-white/10 w-full overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="h-full bg-white relative z-10 group-hover:bg-cyan-400 transition-colors duration-300"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute inset-0 bg-cyan-400 blur-[4px] opacity-0 group-hover:opacity-70 transition-opacity duration-300"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
