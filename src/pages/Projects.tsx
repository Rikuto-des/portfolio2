import { motion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../types';

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
  selectedProjectId?: string;
}

export const Projects = ({ onProjectSelect, selectedProjectId }: ProjectsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen py-24 md:py-40 relative z-10 bg-transparent overflow-hidden">
      {/* Background Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 relative z-10">
        <header className="space-y-4">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-tech text-minimal-accent text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold block"
          >
            // Digital Archive .0{projects.length}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-bold tracking-tighter text-minimal-text font-display leading-[0.8]"
          >
            PROJECT<br />GRID
          </motion.h2>
        </header>
      </div>

      {/* Optimized Background Display (No AnimatePresence for hover to avoid lag) */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
        <div
          className="flex flex-col items-center select-none transition-all duration-1000 ease-out"
          style={{
            opacity: hoveredIndex !== null ? 0.03 : 0,
            transform: `scale(${hoveredIndex !== null ? 1 : 1.1})`,
            filter: `blur(${hoveredIndex !== null ? 0 : 20}px)`
          }}
        >
          <h2 className="text-[18vw] font-black font-display whitespace-nowrap uppercase tracking-tighter leading-none opacity-50">
            {hoveredIndex !== null ? projects[hoveredIndex].title : ''}
          </h2>
        </div>
      </div>

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => onProjectSelect(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: (index % 5) * 0.05,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -10 }}
              className={`group relative aspect-square bg-slate-100 rounded-3xl overflow-hidden cursor-pointer ${selectedProjectId === project.title ? 'ring-2 ring-minimal-accent ring-offset-4 ring-offset-minimal-bg' : ''
                }`}
            >
              {/* Scanline Effect Overlay */}
              <div className="scanline opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Square Image with Grayscale Filter */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-[0.16,1,0.3,1]"
                  whileHover={{ scale: 1.05 }}
                />

                {/* Fixed Title Label (Always Visible) */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      y: hoveredIndex === index ? -5 : 0
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="origin-bottom-left"
                  >
                    <span className="font-tech text-[7px] md:text-[8px] tracking-[0.3em] uppercase text-white/50 block mb-1">
                      {project.year}
                    </span>
                    <h3 className="text-white text-[9px] md:text-[11px] font-bold font-display uppercase tracking-tight leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>

                {/* Inner Decorative Dot (Moved inside for better balance) */}
                <div className={`absolute top-4 left-4 w-1.5 h-1.5 rounded-full ${project.color} border border-white/20 shadow-lg group-hover:scale-150 transition-transform`} />

                {/* Floating ID (Top Right) */}
                <div className="absolute top-4 right-5 font-tech text-[8px] text-white/40 group-hover:text-white/80 transition-colors italic">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
              </div>

              {/* Subtle CRT Flicker on Hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:animate-pulse pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Selection Progress Footer */}
      <div className="mt-32 text-center relative z-20">
        <p className="font-tech text-minimal-gray text-[9px] tracking-[0.6em] uppercase opacity-30 select-none">
          Digital Archive Transmission Complete
        </p>
      </div>
    </section>
  );
};
