import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 }, 
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, 
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const highlights = [
  "Focus on clean code and reliable user experience",
  "Building responsive and scalable web applications",
  "Experienced with MERN stack and AI tool integration",
  "Open to freelance work and team collaborations",
];

export default function About() {
  return (
    <section id="about" className="relative section-main section-space overflow-hidden">
      <div className="grid items-center gap-10 lg:grid-cols-2 xl:gap-14">
        
        {/* Left visual card: Optimized for Performance */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          custom={0.1}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden p-4 [transform:translateZ(0)]"
        >
          {/* Solar Light Leak Effect */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -top-10 left-0 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
          </div>

          <div className="relative z-10 overflow-hidden rounded-[28px] border border-white/10 bg-[#020617] ring-1 ring-white/5 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
              alt="Archit Mishra Profile"
              className="h-[480px] md:h-[540px] w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Location Badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-8 rounded-2xl border border-orange-500/20 bg-black/60 px-5 py-3 text-white shadow-xl backdrop-blur-md"
          >
            <p className="text-[10px] uppercase tracking-widest text-orange-500 font-bold">Based in</p>
            <p className="mt-1 text-base font-medium">India</p>
          </motion.div>
        </motion.div>

        {/* Right content */}
        <div className="[transform:translateZ(0)]">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.15}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500/80"
          >
            About Me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.25}
            className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Building functional products with clean code.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.35}
            className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            I am Archit Mishra, a full stack developer focused on building websites and applications that are fast, useful, and easy to use.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.45}
            className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            My approach combines backend logic with frontend development to create products that solve problems and provide a good user experience.
          </motion.p>

          {/* Simple Highlight Grid */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.55}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/5 bg-white/5 px-5 py-5 text-sm leading-relaxed text-slate-300 transition-colors hover:border-orange-500/30"
              >
                {item}
              </div>
            ))}
          </motion.div>

          {/* Learn More Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.65}
            className="mt-8 flex"
          >
            {/* If using Next.js, replace <a> with <Link href="/about"> */}
            {/* If using React Router, replace <a> with <Link to="/about"> */}
            <a
              href="/about"
              className="group flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_20px_-3px_rgba(249,115,22,0.4)]"
            >
              <span>Learn More</span>
              <svg 
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="2" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}