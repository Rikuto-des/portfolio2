import { motion } from 'framer-motion';

const designSkills = [
  { name: 'UI/UX Design', tools: 'Figma, Adobe XD', desc: 'User-centered interfaces with a focus on usability.' },
  { name: 'Graphic Design', tools: 'Illustrator, Photoshop', desc: 'Brand identity and visual communication.' },
  { name: 'Motion Design', tools: 'After Effects, Lottie', desc: 'Bringing interfaces to life through motion.' },
  { name: 'Design Systems', tools: 'Foundation, Scaling', desc: 'Building consistent and scalable visual languages.' },
  { name: 'Prototyping', tools: 'Protopie, Framer', desc: 'High-fidelity interactive demonstrations.' },
];

export const Skills = () => {
  return (
    <div className="py-16 md:py-24 px-6 md:px-8 max-w-5xl mx-auto relative z-10">
      <header className="mb-10 md:mb-16 space-y-4">
        <div className="flex items-center gap-4">
          <span className="font-tech text-minimal-accent text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">// Expertise</span>
          <div className="h-px w-12 md:w-20 bg-minimal-accent/20" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-minimal-text font-display leading-[0.9]">
          DESIGN POWERS
        </h2>
        <div className="pt-4 md:pt-5 border-l-2 border-minimal-accent pl-4 md:pl-5">
          <p className="text-minimal-text font-sans text-base md:text-lg font-medium">感性と論理が織りなす、静かな調律。</p>
          <p className="text-minimal-gray font-tech text-[10px] md:text-xs tracking-widest uppercase opacity-60 mt-1">Elevating digital through aesthetic precision.</p>
        </div>
      </header>

      <div className="space-y-0">
        {designSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative border-b border-minimal-accent/20 py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 hover:bg-slate-50/50 transition-colors duration-500 px-4 -mx-4 rounded-3xl"
          >
            <div className="space-y-2 max-w-md">
              <span className="text-minimal-accent font-tech text-[10px] tracking-widest font-bold uppercase block">0{index + 1}</span>
              <h3 className="text-xl md:text-2xl font-bold text-minimal-text font-display group-hover:translate-x-2 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                {skill.name}
              </h3>
            </div>

            <div className="flex-1 md:max-w-xs space-y-1 md:space-y-2">
              <span className="text-minimal-gray font-tech text-[9px] md:text-[10px] tracking-[0.2em] uppercase block">Tools</span>
              <p className="text-minimal-text font-sans font-medium text-base md:text-lg leading-none">
                {skill.tools}
              </p>
            </div>

            <div className="md:max-w-sm">
              <p className="text-minimal-gray font-sans text-xs md:text-base leading-relaxed opacity-70 md:opacity-60 md:group-hover:opacity-100 transition-opacity">
                {skill.desc}
              </p>
            </div>

            {/* Hover Background Accent */}
            <div className="absolute left-0 bottom-0 w-0 h-px bg-minimal-accent group-hover:w-full transition-all duration-700 ease-in-out" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-12 text-center"
      >
        <p className="text-minimal-gray font-sans text-sm italic opacity-40">
          * Always evolving with new tools and philosophies.
        </p>
      </motion.div>
    </div>
  );
};
