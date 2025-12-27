import { motion, type Variants } from 'framer-motion';

const pageTransition = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + (i * 0.1),
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  })
};

export const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="h-full flex flex-col justify-center px-8 max-w-4xl mx-auto z-10 relative"
    >
      <div className="overflow-hidden mb-8">
        <motion.h2
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl font-bold font-display tracking-tighter text-white mix-blend-difference"
        >
          ABOUT ME
        </motion.h2>
      </div>

      <div className="space-y-12 relative">
        {/* 装飾ライン */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 origin-top"
        />

        <div className="pl-6 md:pl-8 space-y-8">
          <motion.p
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-300 font-tech font-light leading-relaxed text-lg md:text-xl max-w-2xl"
          >
            I am a UI/UX Designer and Graphic Designer with a passion for creating immersive digital experiences.
            My work blends <span className="text-cyan-400">aesthetic purity</span> with functional design principles, striving for interfaces that are intuitive, engaging, and meaningful.
          </motion.p>

          <motion.p
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-300 font-tech font-light leading-relaxed text-lg md:text-xl max-w-2xl"
          >
            With a strong background in both design and development, I bridge the gap between creative vision and technical implementation.
            I specialize in building refined web applications using modern technologies like <span className="text-white">React, TailwindCSS, and WebGL</span>, focusing on performance and user delight.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-16 flex items-center gap-4 text-xs font-tech text-cyan-500/60 uppercase tracking-widest"
      >
        <span>// Based in Tokyo</span>
        <div className="w-12 h-px bg-cyan-500/20" />
        <span>Available for freelance</span>
      </motion.div>
    </motion.div>
  );
};
