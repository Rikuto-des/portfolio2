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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
};

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center px-8 max-w-7xl mx-auto py-20"
    >
      <div className="flex justify-between items-end mb-12 border-b border-minimal-text/10 pb-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-minimal-text">
          SELECTED WORKS
        </h2>
        <span className="text-minimal-accent font-tech text-sm hidden md:block">2023 — 2024</span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 pb-10"
      >
        {[1, 2, 3].map((item) => (
          <motion.div key={item} variants={itemVariants} className="group cursor-pointer">
            <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden relative border border-minimal-text/5">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              {/* Image Placeholder */}
              <div className="w-full h-full bg-gray-200 group-hover:bg-gray-200 transition-transform duration-700 group-hover:scale-105" />

              <div className="absolute bottom-4 left-4 z-20 overflow-hidden">
                <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="bg-white text-black text-xs font-bold px-2 py-1 uppercase tracking-wider font-tech">View Case</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium text-minimal-text mb-1 group-hover:text-minimal-accent transition-colors font-display">PROJECT {item.toString().padStart(2, '0')}</h3>
                <p className="text-sm text-minimal-gray font-light">UI/UX Design / Development</p>
              </div>
              <span className="text-xs text-minimal-gray font-tech border border-minimal-gray/30 px-2 py-1 rounded-full group-hover:border-minimal-accent group-hover:text-minimal-accent transition-colors">2024</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
