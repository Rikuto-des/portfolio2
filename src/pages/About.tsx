import { motion } from 'framer-motion';

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center px-6 md:px-8 max-w-4xl mx-auto z-10 relative py-16 md:py-24"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="overflow-hidden mb-10 md:mb-12 space-y-4"
      >
        <div className="flex items-center gap-4">
          <span className="font-tech text-minimal-accent text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">// Narrative</span>
          <div className="h-px w-12 md:w-20 bg-minimal-accent/20" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-minimal-text font-display">
          ABOUT EXPERIENCE
        </h2>
      </motion.div>

      <div className="space-y-12 relative">
        <div className="pl-5 md:pl-10 space-y-10 md:space-y-12 border-l-2 border-minimal-accent/20">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-3 md:space-y-4"
          >
            <p className="text-minimal-text font-sans font-medium text-lg md:text-3xl leading-snug tracking-tight max-w-3xl">
              美学と機能性が交差する場所に、新しい価値を創造する。
            </p>
            <p className="text-minimal-gray font-sans font-light leading-relaxed text-sm md:text-lg max-w-2xl">
              UI/UXおよびグラフィックデザイナーとして、私はデジタル体験に「魂」を吹き込むことを使命としています。<br className="hidden md:block" />
              不要なものを削ぎ落とした<span className="text-minimal-accent font-medium">純粋な美</span>と、直感的に理解できる機能性を融合させ、人々の心に深く刻まれるインターフェースを追求しています。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-3 md:space-y-4"
          >
            <p className="text-minimal-text font-sans font-medium text-lg md:text-3xl leading-snug tracking-tight max-w-3xl">
              デザインとエンジニアリングの境界を曖昧に。
            </p>
            <p className="text-minimal-gray font-sans font-light leading-relaxed text-sm md:text-lg max-w-2xl">
              クリエイティブなビジョンと技術的な実装を繋ぐ架け橋として、先進的なテクノロジーを駆使した表現を得意としています。<br className="hidden md:block" />
              <span className="text-minimal-text font-medium underline underline-offset-8 decoration-minimal-accent/30">React, TailwindCSS, WebGL</span>を活用し、単なるツールを超えた、官能的で心地よいパフォーマンスを実現します。
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-16 md:mt-24 flex flex-wrap items-center gap-6 md:gap-8 text-[9px] md:text-[10px] font-tech text-minimal-accent uppercase tracking-[0.3em] font-bold"
      >
        <span>// Based in Tokyo, Japan</span>
        <div className="hidden md:block w-12 h-px bg-minimal-accent/30" />
        <span>Available for collaboration</span>
      </motion.div>

      {/* Contact Section */}
      <section className="mt-16 md:mt-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">

          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-tech text-minimal-accent text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">
                  // Get in Touch
                </span>
                <div className="h-px w-12 md:w-20 bg-minimal-accent/20" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-minimal-text font-display leading-none">
                CONTACT SYSTEM
              </h2>
              <p className="text-minimal-gray leading-relaxed text-sm md:text-base max-w-sm pt-2">
                新しいプロジェクトの相談、コラボレーション、または単なる挨拶でも、お気軽にご連絡ください。通常24時間以内に返信いたします。
              </p>
            </div>

            <div className="space-y-8">
              <div className="group cursor-pointer inline-block">
                <span className="font-tech text-[9px] uppercase tracking-widest text-minimal-gray/60 block mb-2">Direct Channel</span>
                <a
                  href="mailto:ricton513@gmail.com"
                  className="text-xl md:text-3xl font-medium text-minimal-text hover:text-minimal-accent transition-colors duration-300 flex items-center gap-4"
                >
                  ricton513@gmail.com
                  <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all -translate-x-3 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="pt-8 flex flex-col gap-4">
                <span className="font-tech text-[9px] uppercase tracking-widest text-minimal-gray/60 block">Network</span>
                <div className="flex gap-6">
                  {['Instagram', 'X (Twitter)', 'LinkedIn'].map((social) => (
                    <a key={social} href="#" className="text-[10px] font-bold font-tech uppercase tracking-widest hover:text-minimal-accent transition-colors">{social}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 p-8 md:p-12 bg-white/40 backdrop-blur-2xl rounded-3xl border border-minimal-accent/10 shadow-2xl relative overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Form Scanline animation */}
            <div className="scanline opacity-[0.05]" />

            <div className="space-y-2">
              <label className="font-tech text-[9px] uppercase tracking-widest text-minimal-gray/60 ml-1">お名前 / Full Name</label>
              <input
                type="text"
                placeholder="YOUR NAME"
                className="w-full bg-transparent border-b border-minimal-text/10 py-4 px-1 focus:border-minimal-accent focus:outline-none transition-colors text-minimal-text placeholder:text-minimal-gray/20 font-sans"
              />
            </div>

            <div className="space-y-2">
              <label className="font-tech text-[9px] uppercase tracking-widest text-minimal-gray/60 ml-1">メールアドレス / Email</label>
              <input
                type="email"
                placeholder="HELLO@EXAMPLE.COM"
                className="w-full bg-transparent border-b border-minimal-text/10 py-4 px-1 focus:border-minimal-accent focus:outline-none transition-colors text-minimal-text placeholder:text-minimal-gray/20 font-sans"
              />
            </div>

            <div className="space-y-2">
              <label className="font-tech text-[9px] uppercase tracking-widest text-minimal-gray/60 ml-1">メッセージ / Message</label>
              <textarea
                rows={4}
                placeholder="DESCRIBE YOUR PROJECT OR VISION..."
                className="w-full bg-transparent border-b border-minimal-text/10 py-4 px-1 focus:border-minimal-accent focus:outline-none transition-colors text-minimal-text placeholder:text-minimal-gray/20 font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full group relative overflow-hidden h-16 bg-minimal-text text-minimal-bg font-tech text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:tracking-[0.5em] rounded-2xl"
            >
              <span className="relative z-10">Initialize Transmission // 送信</span>
              <div className="absolute inset-0 bg-minimal-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </motion.form>

        </div>
      </section>

      {/* Footer Branding */}
      <footer className="mt-20 pt-12 pb-10 text-center border-t border-minimal-text/5 w-screen -mx-[calc((100vw-100%)/2)]">
        <p className="font-tech text-[9px] text-minimal-gray/30 tracking-[0.6em] uppercase">
          © 2024 DESIGN ARCHIVE ARCHETYPE // CODED IN TOKYO
        </p>
      </footer>
    </motion.div>
  );
};
