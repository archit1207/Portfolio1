import { motion } from "framer-motion";

const expertise = [
  {
    number: "01",
    title: "Full Stack Architecture",
    description:
      "End-to-end web application development using the MERN stack. Built for scalability, secure data handling, and robust backend functionality.",
  },
  {
    number: "02",
    title: "Frontend Engineering",
    description:
      "Translating complex Figma designs into pixel-perfect, responsive React interfaces with fluid interactions and component-driven architecture.",
  },
  {
    number: "03",
    title: "AI Integration & APIs",
    description:
      "Connecting modern LLMs, external APIs, and custom Python microservices to add intelligent features and automation to web products.",
  },
  {
    number: "04",
    title: "Performance Optimization",
    description:
      "Refactoring codebases, optimizing asset delivery, and improving Core Web Vitals to ensure applications run at 60fps and load instantly.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
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

export default function Expertise() {
  return (
    <section id="expertise" className="relative section-main section-space overflow-hidden">
      {/* Section Header */}
      <div className="section-head [transform:translateZ(0)]">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.1}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500/80"
        >
          Core Competencies
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
          className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Technical capabilities and engineering focus.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.3}
          className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg max-w-2xl"
        >
          Specializing in robust architectures, responsive interfaces, and scalable backend systems to bring complex ideas to production.
        </motion.p>
      </div>

      {/* Expertise Grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 [transform:translateZ(0)]">
        {expertise.map((item, i) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.15 * i}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#020617] p-8 transition-colors duration-300 hover:border-orange-500/30 will-change-transform"
          >
            {/* Solar Flare Hover Glow */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -top-12 left-0 h-40 w-40 rounded-full bg-orange-600/10 blur-[80px]" />
            </div>

            <div className="relative z-10">
              <p className="text-sm font-bold tracking-[0.18em] text-orange-500/50 transition-colors duration-300 group-hover:text-orange-500">
                {item.number}
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-orange-50">
                {item.title}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                {item.description}
              </p>

              {/* Interaction Link */}
              {/* <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors duration-300 group-hover:text-orange-500">
                <span>View Details</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}