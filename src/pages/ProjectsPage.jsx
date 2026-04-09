import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundSVG from "../components/BackgroundSVG";
import GlowBlobs from "../components/GlowBlobs";
import projectsData from "../data/projectsData";

const projects = projectsData;

const fadeUp = {
  hidden: { opacity: 0, y: 24, willChange: "transform, opacity" },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

function TechBadge({ label }) {
  return (
    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
      {label}
    </span>
  );
}

function ProjectActions({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-5">
      <Link
        to={`/projects/${project.slug}`}
        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black transition-all hover:bg-orange-500 hover:text-white"
      >
        Case Study
        <ArrowUpRight size={14} />
      </Link>

      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-white/10 hover:border-white/20"
      >
        Live Demo
        <ArrowUpRight size={14} />
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-white/10 hover:border-white/20"
      >
        Source Code
        <Code2 size={14} />
      </a>
    </div>
  );
}

function ProjectRow({ project, index }) {
  const isReversed = index % 2 !== 0;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.02] p-4 backdrop-blur-xl transition-colors hover:border-white/10 md:p-6 [transform:translateZ(0)]"
    >
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 ${isReversed ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
          }`}
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#020617]">
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#020617]/40 via-transparent to-transparent opacity-60" />
          <img
            src={project.image}
            alt={project.title}
            className="h-[280px] w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 md:h-[320px] lg:h-[360px]"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center py-4">
          <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500/80">
            Project {String(index + 1).padStart(2, "0")}
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            {project.title}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-400 font-light">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <TechBadge key={item} label={item} />
            ))}
          </div>

          <ProjectActions project={project} />
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="page-shell bg-[#020617] text-slate-50 min-h-screen">
      <BackgroundSVG />
      <GlowBlobs />
      <Navbar />

      <main className="page-main relative z-10 pt-12">
        <section className="section-main pb-10">
          <div className="section-head max-w-4xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500/80"
            >
              Projects
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="mt-6 text-5xl font-bold tracking-tight leading-[1.1] sm:text-6xl"
            >
              Real-world products{" "}
              <span className="bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                engineered with full-stack expertise.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg max-w-2xl"
            >
              A curated collection of high-performance applications, AI-driven tools, and
              scalable backend systems designed with performance and clarity.
            </motion.p>
          </div>
        </section>

        {/* PROJECT LIST */}
        <section className="section-wide pb-24 md:pb-32 px-4 md:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-12"
          >
            {projects.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </section>

        {/* CTA (EXACT SAME AS ABOUT SECTION) */}
        <section className="section-main pb-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            custom={0.2}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent px-8 py-16 text-center backdrop-blur-xl shadow-2xl [transform:translateZ(0)]"
          >
            {/* Subtle glow behind CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500/80">
                Let’s Work Together
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Ready to build something <br className="hidden sm:block" /> exceptional?
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400">
                Whether you need a scalable web application, AI integration, or a clean UI system, I'm available for freelance work and collaborations.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group relative flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)]"
                >
                  <span>Get in Touch</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                <Link
                  to="/projects"
                  className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </div>
  );
}