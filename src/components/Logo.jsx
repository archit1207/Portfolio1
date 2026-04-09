import { motion } from "framer-motion";

const Logo = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    // group class allows us to trigger hover effects on child elements simultaneously
    className="group flex items-center gap-3 [transform:translateZ(0)] will-change-transform"
  >
    {/* The Monogram Block */}
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.2 }}
      // Replaced standard shadow with a transition to an orange glow on hover
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors duration-300 group-hover:border-orange-500/40 group-hover:bg-orange-500/10"
    >
      <span className="text-base font-bold text-white transition-colors duration-300 group-hover:text-orange-400">
        AM
      </span>
    </motion.div>

    {/* The Typography */}
    <div className="leading-tight">
      <p className="text-lg font-bold tracking-tight text-white">
        Archit Mishra<span className="text-orange-500 transition-colors duration-300 group-hover:text-orange-400">.</span>
      </p>
      {/* Changed "Full Stack Developer" to the uppercase tracking style used in other sections */}
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
        Software Engineer
      </p>
    </div>
  </motion.div>
);

export default Logo;