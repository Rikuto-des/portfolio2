import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import type { Project } from '../types';

interface ProjectDetailProps {
    project: Project;
    onClose: () => void;
}

export const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        },
        exit: {
            transition: {
                staggerChildren: 0.02,
                staggerDirection: -1
            }
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 40, filter: "blur(10px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: {
            opacity: 0,
            y: 20,
            filter: "blur(5px)",
            transition: { duration: 0.3, ease: "circIn" }
        },
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 200
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                pointerEvents: 'none',
                transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] }
            }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-0 sm:p-4 md:p-12 overflow-hidden"
        >
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                    opacity: 0,
                    pointerEvents: 'none',
                    transition: { duration: 0.4 }
                }}
                onClick={onClose}
                className="absolute inset-0 bg-white/40 backdrop-blur-[60px] cursor-pointer"
            />

            {/* Content Container */}
            <motion.div
                layoutId={`project-${project.title}`}
                exit={{
                    opacity: 0,
                    scale: 0.94,
                    y: 20,
                    filter: "blur(10px)",
                    transition: {
                        type: "spring",
                        damping: 30,
                        stiffness: 300,
                        opacity: { duration: 0.3 }
                    }
                }}
                transition={{
                    type: "spring",
                    damping: 28,
                    stiffness: 200
                }}
                className="relative w-full max-w-7xl h-[90vh] bg-white/90 backdrop-blur-md shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row border border-white/20 pointer-events-auto"
                style={{ perspective: 1000 }}
            >
                {/* Close Button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    onClick={onClose}
                    className="absolute top-6 right-6 lg:top-8 lg:right-8 z-50 w-12 h-12 lg:w-14 lg:h-14 bg-minimal-text/10 hover:bg-minimal-text/20 backdrop-blur-xl text-minimal-text rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 active:scale-95 shadow-sm group"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lg:w-6 lg:h-6 group-hover:rotate-90 transition-transform duration-500">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </motion.button>

                {/* Left: Interactive Image/Visual Section */}
                <div className="lg:w-3/5 min-h-[50vh] lg:h-full relative overflow-hidden bg-slate-50">
                    <motion.img
                        layoutId={`project-image-${project.title}`}
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    />
                    {/* Artistic Overlay */}
                    <div className={`absolute inset-0 opacity-20 mix-blend-multiply ${project.color} bg-gradient-to-t from-black/80 via-black/20 to-transparent`} />

                    {/* Text Overlay on Image */}
                    <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-end p-8 sm:p-12 lg:p-20 z-10">
                        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
                            <motion.div variants={fadeInUp} className="flex items-center gap-3">
                                <span className="h-px w-8 bg-white/50" />
                                <span className="text-white font-tech text-xs tracking-[0.5em] uppercase font-bold drop-shadow-lg">
                                    {project.category}
                                </span>
                            </motion.div>
                            <motion.h2
                                variants={fadeInUp}
                                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white font-display leading-[0.95] tracking-tighter drop-shadow-2xl"
                            >
                                {project.title.split('').map((char, i) => (
                                    <motion.span
                                        key={i}
                                        className="inline-block"
                                        initial={{ opacity: 0, y: 50, rotateX: 90 }}
                                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                        transition={{
                                            duration: 1 + Math.random(),
                                            delay: i * 0.01,
                                            ease: "easeOut"
                                        }}
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </motion.span>
                                ))}
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block py-2 px-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-tech text-[10px] tracking-[0.3em] uppercase mt-4"
                            >
                                Case Study // {project.year}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Right: Rich Content Section */}
                <div
                    className="lg:w-2/5 h-auto lg:h-full overflow-y-auto p-8 sm:p-12 lg:p-20 space-y-10 sm:space-y-16 custom-scrollbar bg-white overscroll-contain"
                    data-lenis-prevent
                >
                    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-8 sm:space-y-12">
                        {/* Title removed from here, now in left section */}


                        {/* Detailed Description */}
                        <motion.div variants={fadeInUp} className="space-y-8">
                            {project.content ? (
                                <div className="prose prose-slate max-w-none text-minimal-text font-sans text-lg leading-relaxed">
                                    <ReactMarkdown
                                        components={{
                                            h1: ({ children }) => <h1 className="text-3xl font-bold mb-6 font-display">{children}</h1>,
                                            h2: ({ children }) => <h2 className="text-2xl font-bold mt-10 mb-4 font-display">{children}</h2>,
                                            p: ({ children }) => <p className="mb-6 opacity-90">{children}</p>,
                                            ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 opacity-80">{children}</ul>,
                                            code: ({ children }) => (
                                                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-sm text-minimal-accent">
                                                    {children}
                                                </code>
                                            ),
                                            pre: ({ children }) => (
                                                <pre className="bg-slate-900 text-slate-100 p-6 rounded-2xl overflow-x-auto mb-8 shadow-inner">
                                                    {children}
                                                </pre>
                                            ),
                                            blockquote: ({ children }) => (
                                                <blockquote className="border-l-4 border-minimal-accent pl-6 italic opacity-70 my-8">
                                                    {children}
                                                </blockquote>
                                            ),
                                        }}
                                    >
                                        {project.content}
                                    </ReactMarkdown>
                                </div>
                            ) : (
                                <>
                                    <p className="text-minimal-text font-sans text-xl lg:text-2xl leading-relaxed font-medium">
                                        {project.desc}
                                    </p>

                                    {/* Info Blocks */}
                                    <div className="grid grid-cols-1 gap-12 pt-4">
                                        {project.details && (
                                            <>
                                                <div className="space-y-4">
                                                    <h4 className="font-tech text-xs tracking-[0.3em] text-minimal-accent uppercase font-bold flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-minimal-accent" />
                                                        Challenge
                                                    </h4>
                                                    <p className="text-minimal-gray font-sans text-base leading-relaxed opacity-90">
                                                        {project.details.challenge}
                                                    </p>
                                                </div>

                                                <div className="space-y-4">
                                                    <h4 className="font-tech text-xs tracking-[0.3em] text-minimal-accent uppercase font-bold flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-minimal-accent" />
                                                        Approach
                                                    </h4>
                                                    <p className="text-minimal-gray font-sans text-base leading-relaxed opacity-90 border-l-2 border-slate-100 pl-6">
                                                        {project.details.approach}
                                                    </p>
                                                </div>

                                                <div className="space-y-4">
                                                    <h4 className="font-tech text-xs tracking-[0.3em] text-minimal-accent uppercase font-bold flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-minimal-accent" />
                                                        Impact
                                                    </h4>
                                                    <p className="text-minimal-gray font-sans text-base leading-relaxed opacity-90">
                                                        {project.details.impact}
                                                    </p>
                                                </div>

                                                <div className="flex flex-wrap gap-2 pt-4">
                                                    {project.details.tags.map((tag) => (
                                                        <span key={tag} className="px-4 py-2 bg-slate-50 text-minimal-text border border-minimal-text/5 rounded-lg text-[9px] font-tech uppercase tracking-widest font-bold">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </>
                            )}
                        </motion.div>

                        {/* Call to Action */}
                        <motion.button
                            variants={fadeInUp}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative w-full py-8 bg-minimal-text text-white font-tech text-xs tracking-[0.5em] uppercase font-bold rounded-2xl overflow-hidden shadow-2xl transition-all duration-500"
                        >
                            <span className="relative z-10">Launch Project Experience</span>
                            <div className="absolute inset-0 bg-minimal-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};
