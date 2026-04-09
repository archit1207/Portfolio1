import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 }, // Reduced distance from 40 to 20 for smoother, lag-free entry
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Slightly faster for a snappier, premium feel
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="relative section-main section-space overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        // Added translateZ(0) to force GPU rendering and eliminate scroll lag
        className="glass-card relative overflow-hidden px-8 py-16 text-center md:px-12 md:py-20 [transform:translateZ(0)]"
      >
        {/* Solar Flare Theme Background Glows - Added pointer-events-none to save CPU */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute -top-16 left-1/3 h-72 w-72 rounded-full bg-orange-600/10 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-red-900/10 blur-[100px]" />
        </div>

        <div className="relative z-10">
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            // Added will-change to prep the browser for animation
            className="will-change-[transform,opacity] text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Let’s build something sharp together.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="will-change-[transform,opacity] mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Open to freelance projects, collaborations, and full stack development work.
            If you have an idea or project in mind, let’s make it real.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="will-change-[transform,opacity] mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link 
              to="/contact" 
              // Overrode default classes with the Solar Flare premium button styles
              className="btn-primary rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white shadow-[0_10px_40px_rgba(234,88,12,0.15)] transition-colors duration-200 hover:bg-orange-500"
            >
              Contact Me
            </Link>

            <Link 
              to="/projects" 
              // Changed to a subtle border that glows orange on hover
              className="btn-secondary rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-colors duration-200 hover:border-orange-500/40"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={0.4}
            className="will-change-[transform,opacity] mt-10 text-sm font-medium uppercase tracking-widest text-slate-500"
          >
            Or reach out directly at
          </motion.p>

          <motion.a
            href="mailto:architmishra1207@gmail.com"
            variants={fadeUp}
            custom={0.5}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            // transition-colors instead of transition-all prevents layout thrashing (lag)
            className="will-change-transform mt-4 inline-flex h-12 items-center justify-center rounded-xl bg-white px-7 text-sm font-bold tracking-tight text-black shadow-xl transition-colors duration-200 hover:bg-orange-100"
          >
            architmishra1207@gmail.com
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}