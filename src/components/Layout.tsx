import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MinimalBackground } from './MinimalBackground';
import { CustomCursor } from './CustomCursor';
import { Navbar } from './Navbar';
import { SmoothScroll } from './SmoothScroll';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';
import { Skills } from '../pages/Skills';
import { About } from '../pages/About';
import { ProjectDetail } from './ProjectDetail';
import type { Project } from '../types';

export const Layout = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Define sections with prop passing for Projects
  const sections = [
    { id: 'home', component: <Home /> },
    { id: 'projects', component: <Projects onProjectSelect={setSelectedProject} selectedProjectId={selectedProject?.title} /> },
    { id: 'skills', component: <Skills /> },
    { id: 'about', component: <About /> },
  ];

  const handleClose = () => {
    setSelectedProject(null);
    window.lenis?.start();
  };

  return (
    <div className="relative w-full min-h-screen text-minimal-text font-sans selection:bg-minimal-accent selection:text-white bg-minimal-bg">
      <div className="noise-overlay" />
      <CustomCursor />
      <SmoothScroll isStopping={!!selectedProject} />
      <MinimalBackground />

      <motion.div
        animate={{
          opacity: selectedProject ? 0.4 : 1,
          scale: selectedProject ? 0.96 : 1,
          filter: selectedProject ? "blur(10px)" : "blur(0px)"
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200
        }}
        className="relative z-10 w-full"
      >
        <Navbar />

        <main className="w-full">
          {sections.map((section) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
              className="w-full relative overflow-hidden"
            >
              {section.component}
            </motion.section>
          ))}
        </main>
      </motion.div>

      {/* Global Modal Layer - Highest Z-Index */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            key={`modal-${selectedProject.title}`}
            project={selectedProject}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
