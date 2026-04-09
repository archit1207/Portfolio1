import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiSupabase,
  SiPostman,
  SiVercel,
  SiCplusplus,
  SiTypescript,
} from "react-icons/si";

const row1 = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const row2 = [
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  { name: "REST API", icon: SiPostman, color: "#FF6C37" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Deployment", icon: SiVercel, color: "#FFFFFF" },
];

const duplicatedRow1 = [...row1, ...row1];
const duplicatedRow2 = [...row2, ...row2];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function TechCard({ item }) {
  const Icon = item.icon;
  return (
    <div className="group flex min-w-fit items-center gap-3 whitespace-nowrap rounded-2xl border border-white/10 bg-[#020617] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:bg-white/5 will-change-transform [transform:translateZ(0)]">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#020617] text-lg transition-transform duration-300 group-hover:scale-110 shadow-sm">
        <Icon style={{ color: item.color }} />
      </div>
      <span className="text-slate-300 transition-colors duration-300 group-hover:text-white">
        {item.name}
      </span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="relative section-wide section-space overflow-hidden [transform:translateZ(0)]">
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="section-head mb-12"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-500/80">Core Technologies</p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Frameworks and tools I use to build scalable systems.
        </h2>
      </motion.div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#020617] to-transparent md:w-32" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#020617] to-transparent md:w-32" />

      {/* Row 1 - High Padding to prevent clipping */}
      <div className="group relative overflow-hidden py-8 [transform:translateZ(0)]">
        <motion.div
          className="flex w-max gap-4 will-change-transform group-hover:[animation-play-state:paused]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedRow1.map((item, i) => (
            <TechCard key={`row1-${item.name}-${i}`} item={item} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Reverse scroll */}
      <div className="group relative mt-2 overflow-hidden py-8 [transform:translateZ(0)]">
        <motion.div
          className="flex w-max gap-4 will-change-transform group-hover:[animation-play-state:paused]"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedRow2.map((item, i) => (
            <TechCard key={`row2-${item.name}-${i}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}