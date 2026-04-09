import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "SaaS AI Tools App",
    description:
      "A full-featured AI SaaS platform offering content generation, image utilities, resume analysis, and a public community gallery with interactive engagement features.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Clerk",
    ],
    live: "#",
    github: "#",
  },
  {
    title: "E-Learning Platform",
    description:
      "A complete learning management platform with role-based access, course purchasing, lecture streaming, and a powerful admin dashboard for platform control and analytics.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    live: "#",
    github: "#",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered resume analysis tool that evaluates resumes for grammar, formatting, keywords, and ATS compatibility with a clean, focused user experience.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1400&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Vite", "CSS", "Puter"],
    live: "#",
    github: "#",
  },
  {
    title: "Restaurant Food APIs",
    description:
      "A backend-only food ordering system with multi-role authentication, restaurant management, order handling, and delivery workflow built for scalable food service operations.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1400&auto=format&fit=crop",
    tags: ["Node.js", "Express", "MongoDB", "REST API", "Backend"],
    live: "#",
    github: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 }, // Reduced y for lag-free entrance
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

export default function Projects() {
  const sliderRef = useRef(null);
  const currentIndexRef = useRef(0);

  const CARD_WIDTH = 378;
  const TOTAL_SLIDES = projects.length + 1;

  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;
    sliderRef.current.style.transform = `translateX(-${index * CARD_WIDTH}px)`;
  };

  const handleScroll = (direction) => {
    if (direction === "right") {
      currentIndexRef.current = Math.min(
        currentIndexRef.current + 1,
        TOTAL_SLIDES - 1
      );
    } else {
      currentIndexRef.current = Math.max(currentIndexRef.current - 1, 0);
    }

    scrollToIndex(currentIndexRef.current);
  };

  return (
    <section id="projects" className="relative section-wide section-space overflow-hidden">
      {/* Solar Flare Ambient Glow - pointer-events-none is crucial for performance */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible opacity-50">
        <div className="absolute left-[8%] top-20 h-64 w-64 rounded-full bg-orange-600/10 blur-[120px]" />
        <div className="absolute right-[10%] top-32 h-72 w-72 rounded-full bg-red-900/10 blur-[120px]" />
      </div>

      {/* Top Content */}
      <div className="section-head [transform:translateZ(0)]">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.05}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500/80"
        >
          Selected Work
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.12}
          className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Projects built for performance and real-world utility.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.18}
          className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg max-w-2xl"
        >
          A selection of full stack applications focused on clean architecture, scalable backends, and reliable user experiences.
        </motion.p>
      </div>

      {/* Controls */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.22}
        className="mt-14 flex items-center justify-end [transform:translateZ(0)]"
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll("left")}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 hover:border-orange-500/50 hover:text-orange-500 active:scale-95"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:-translate-x-0.5">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={() => handleScroll("right")}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 hover:border-orange-500/50 hover:text-orange-500 active:scale-95"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Slider */}
      <div className="relative mt-12 overflow-hidden py-8 [transform:translateZ(0)]">
        <div
          ref={sliderRef}
          // will-change-transform prevents stuttering when the slider moves
          className="flex gap-6 px-3 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              custom={0.08 * i}
              whileHover={{ y: -8, zIndex: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              // Removed transition-all and massive drop shadows for lag-free rendering
              className="group relative min-w-[320px] max-w-[348px] flex-shrink-0 overflow-hidden rounded-[30px] border border-white/10 bg-[#020617] ring-1 ring-white/5 transition-colors duration-300 hover:border-orange-500/30 will-change-transform"
            >
              {/* Subtle orange hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-12 right-0 h-36 w-36 rounded-full bg-orange-500/10 blur-[80px]" />
              </div>

              <div className="relative h-[220px] overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-10 bg-[#020617]/20 mix-blend-multiply pointer-events-none" />
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 grayscale-[0.3] transition-transform duration-700 group-hover:scale-105 will-change-transform"
                />
              </div>

              <div className="relative z-10 p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 transition-colors duration-300 group-hover:border-orange-500/20 group-hover:text-orange-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mt-5 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-orange-500">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <a href={project.live} className="flex items-center justify-center rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-orange-500">
                    Live Preview
                  </a>
                  <a href={project.github} className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-orange-500/40">
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Explore All Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            custom={0.38}
            whileHover={{ y: -8, zIndex: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group relative flex min-w-[320px] max-w-[340px] flex-shrink-0 items-center justify-center rounded-[30px] border border-dashed border-white/15 bg-[#020617] p-8 transition-colors duration-300 hover:border-orange-500/40 will-change-transform"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-orange-600/10 blur-[80px]" />
            </div>

            <div className="relative z-10 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500/80">
                More Work
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
                Explore All Projects
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Dive deeper into full stack apps, backend systems, and problem-solving architectures.
              </p>

              <Link to="/projects" className="mt-8 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-orange-500/40 hover:text-orange-400">
                View Repository
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}