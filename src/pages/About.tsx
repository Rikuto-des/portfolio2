import { motion } from 'framer-motion';

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center px-8 max-w-4xl mx-auto z-10 relative py-20"
    >
      <div className="overflow-hidden mb-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12 text-minimal-text">
          About Me
        </h2>
      </div>

      <div className="space-y-12 relative">
        {/* 装飾ライン */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-minimal-accent/0 via-minimal-accent/30 to-minimal-accent/0 origin-top"
        />

        <div className="pl-6 md:pl-8 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-minimal-gray font-tech font-light leading-relaxed text-lg md:text-xl max-w-2xl"
          >
            I am a UI/UX Designer and Graphic Designer with a passion for creating immersive digital experiences.
            My work blends <span className="text-minimal-accent font-medium">aesthetic purity</span> with functional design principles, striving for interfaces that are intuitive, engaging, and meaningful.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-minimal-gray font-tech font-light leading-relaxed text-lg md:text-xl max-w-2xl"
          >
            With a strong background in both design and development, I bridge the gap between creative vision and technical implementation.
            I specialize in building refined web applications using modern technologies like <span className="text-minimal-text font-medium">React, TailwindCSS, and WebGL</span>, focusing on performance and user delight.
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-16 flex items-center gap-4 text-xs font-tech text-minimal-accent uppercase tracking-widest"
      >
        <span>// Based in Tokyo</span>
        <div className="w-12 h-px bg-minimal-accent/30" />
        <span>Available for freelance</span>
      </motion.div>
    </motion.div>
  );
};
