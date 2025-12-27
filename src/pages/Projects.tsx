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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
};

export const Projects = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="h-full flex flex-col justify-center px-8 max-w-7xl mx-auto pt-20"
    >
      <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
        <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tighter text-white mix-blend-difference">
          SELECTED WORKS
        </h2>
        <span className="text-cyan-400 font-tech text-sm hidden md:block">2023 — 2024</span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 overflow-y-auto pb-20 pr-4 custom-scrollbar"
        style={{ maxHeight: '70vh' }}
      >
        {[1, 2, 3].map((item) => (
          <motion.div key={item} variants={itemVariants} className="group cursor-pointer">
            <div className="aspect-[4/3] bg-neutral-900 mb-6 overflow-hidden relative border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              {/* Image Placeholder */}
              <div className="w-full h-full bg-neutral-800 group-hover:bg-neutral-800 transition-transform duration-700 group-hover:scale-105" />

              <div className="absolute bottom-4 left-4 z-20 overflow-hidden">
                <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="bg-white text-black text-xs font-bold px-2 py-1 uppercase tracking-wider font-tech">View Case</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium text-white mb-1 group-hover:text-cyan-300 transition-colors font-display">PROJECT {item.toString().padStart(2, '0')}</h3>
                <p className="text-xs text-gray-500 font-tech uppercase tracking-wider">UI/UX Design / Development</p>
              </div>
              <span className="text-xs text-gray-600 font-tech border border-gray-800 px-2 py-1 rounded-full group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-colors">2024</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
