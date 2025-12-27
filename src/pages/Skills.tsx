import { motion, type Variants } from 'framer-motion';

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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center px-8 max-w-5xl mx-auto py-20"
    >
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-minimal-text">
          Technical Arsenal
        </h2>
        <p className="font-tech text-minimal-gray text-sm tracking-widest uppercase">// Technical Arsenal</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8"
      >
        {skills.map((skill) => (
          <motion.div key={skill.name} variants={itemVariants} className="relative group">
            <div className="flex justify-between mb-2 items-end">
              <span className="text-sm md:text-base font-bold text-minimal-text tracking-widest font-display uppercase group-hover:text-minimal-accent transition-colors">
                {skill.name}
              </span>
              <span className="text-xs font-mono text-minimal-accent font-tech">{skill.level}%</span>
            </div>

            <div className="h-1 bg-minimal-gray/20 w-full overflow-hidden relative rounded-full">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="h-full bg-minimal-text relative z-10 group-hover:bg-minimal-accent transition-colors duration-300"
              />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute inset-0 bg-minimal-accent blur-[4px] opacity-0 group-hover:opacity-70 transition-opacity duration-300"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
