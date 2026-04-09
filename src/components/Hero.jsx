import { motion } from "framer-motion";
import { fadeUp, floating } from "../utils/motion";

const Hero = () => {
  const technicalMetrics = [
    { label: "Core Stack", value: "MERN Stack" },
    { label: "Other Skills", value: "Python & C++" },
    { label: "Focus", value: "Full Stack Development" },
  ];

  return (
    <section 
      aria-label="Introduction"
      className="relative section-main flex min-h-[calc(100vh-88px)] flex-col items-center justify-center gap-16 overflow-x-hidden pb-20 pt-8 md:flex-row md:gap-14 lg:gap-20"
    >
      <div className="flex max-w-2xl flex-col items-center text-center md:items-start md:text-left">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="will-change-transform mt-6 max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Hi, I’m <span className="text-orange-500">Archit Mishra</span>. <br />
          I build <span className="text-slate-200">web applications</span> that work.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.35}
          className="will-change-[transform,opacity] mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          I am a Computer Science student and Full Stack Developer. I enjoy building clean, functional websites using React, Node.js, and MongoDB, and I have a strong interest in solving problems with Python and C++.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="mt-10 flex flex-wrap items-center justify-center gap-5 md:justify-start"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary flex items-center gap-2 bg-orange-600 px-8 py-4 font-semibold text-white transition-transform duration-200 shadow-[0_10px_40px_rgba(234,88,12,0.2)]"
          >
            See My Projects
          </motion.a>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary group flex items-center gap-2 border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-transform duration-200"
          >
            Contact Me
            <svg 
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-orange-500"
              xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M7 17 17 7" /><path d="M7 7h10v10" />
            </svg>
          </motion.a>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-10 border-t border-white/5 pt-8 md:justify-start">
          {technicalMetrics.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</span>
              <span className="text-sm font-medium text-white/90">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        // This ensures the container doesn't jitter during animation
        className="will-change-transform relative w-full max-w-[500px] [transform:translateZ(0)]"
      >
        <div className="relative overflow-hidden rounded-[32px] p-2 ring-1 ring-white/10 shadow-2xl bg-slate-950/50">
          <div className="relative overflow-hidden rounded-[26px] bg-[#020617]">
            {/* Overlay used instead of filters to save CPU */}
            <div className="absolute inset-0 z-10 bg-[#020617]/40 mix-blend-multiply pointer-events-none" />
            
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
              alt="Archit Mishra"
              loading="eager"
              // Removed grayscale class to reduce GPU load
              className="h-[460px] w-full object-cover opacity-60 transition-transform duration-700 hover:scale-105 will-change-transform"
            />
          </div>

          <motion.div
            variants={floating}
            animate="animate"
            className="absolute left-8 top-8 rounded-2xl border border-white/10 bg-black/80 px-5 py-3 text-white backdrop-blur-md will-change-transform"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500">Status</p>
            <p className="text-sm font-medium italic text-white/90">Available for Hire</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-8 rounded-2xl border border-white/5 bg-[#0B1120]/90 px-5 py-4 text-white backdrop-blur-md will-change-transform"
          >
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Latest Stack</p>
            <p className="mt-1 text-sm font-medium text-orange-100">React • Node • Express</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;