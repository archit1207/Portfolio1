import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Modern Landing Pages",
    description:
      "Clean, high-converting landing pages built for startups, brands, and creators who want a premium online presence.",
  },
  {
    number: "02",
    title: "Full Stack Web Apps",
    description:
      "Scalable web applications with modern frontend architecture, responsive design, and solid backend functionality.",
  },
  {
    number: "03",
    title: "UI to Code",
    description:
      "Pixel-perfect implementation of Figma or design concepts into smooth, responsive, production-ready interfaces.",
  },
  {
    number: "04",
    title: "Performance Optimization",
    description:
      "Improving speed, responsiveness, and usability to create faster, smoother, and more polished web experiences.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 }, // Reduced y distance slightly for lag-free performance
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Snappier timing
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative section-main section-space overflow-hidden">
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
          Services
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
          className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          What I can build for modern brands and digital products.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.3}
          className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg max-w-2xl"
        >
          From premium landing pages to full stack web apps, I build polished digital experiences that combine performance, clean design, and real usability.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 [transform:translateZ(0)]">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.15 * i}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            // Replaced heavy glass-card with optimized solid background to prevent scroll lag
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#020617] p-7 transition-colors duration-300 hover:border-orange-500/30 md:p-8 will-change-transform"
          >
            {/* Solar Flare Hover Glow (Orange) */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute -top-10 left-0 h-40 w-40 rounded-full bg-orange-600/10 blur-[80px]" />
            </div>

            <div className="relative z-10">
              <p className="text-sm font-bold tracking-[0.18em] text-orange-500/50 transition-colors duration-300 group-hover:text-orange-500">
                {service.number}
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-orange-50">
                {service.title}
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                {service.description}
              </p>

              {/* <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors duration-300 group-hover:text-orange-500">
                <span>Learn more</span>
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