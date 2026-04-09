import { motion } from "framer-motion";
import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  FolderKanban,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundSVG from "../components/BackgroundSVG";
import GlowBlobs from "../components/GlowBlobs";
import projectsData from "../data/Projectdata";

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
      staggerChildren: 0.12,
    },
  },
};

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="glass-card flex items-start gap-4 p-6 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-colors hover:border-white/10 [transform:translateZ(0)]">
      <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-orange-500/80">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          {label}
        </p>
        <p className="mt-1.5 text-sm font-semibold text-white tracking-wide">
          {value}
        </p>
      </div>
    </div>
  );
}

function TechBadge({ label }) {
  return (
    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
      {label}
    </span>
  );
}

function SectionBlock({ eyebrow, title, children }) {
  return (
    <motion.section 
      variants={fadeUp} 
      className="glass-card relative overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-colors hover:border-white/10 md:p-10 [transform:translateZ(0)]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
      <div className="mt-6 text-base leading-relaxed text-slate-300 font-light">
        {children}
      </div>
    </motion.section>
  );
}

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = useMemo(() => projectsData.find((item) => item.slug === slug), [slug]);

//   const relatedProjects = useMemo(
//     () => projectsData.filter((item) => item.slug !== slug).slice(0, 2),
//     [slug]
//   );

  if (!project) {
    return (
      <div className="relative min-h-screen bg-[#020617] text-white">
        <BackgroundSVG />
        <GlowBlobs />
        <Navbar />
        <main className="relative z-10 section-main section-space pt-40">
          <div className="glass-card mx-auto max-w-2xl rounded-[32px] p-12 text-center border border-white/5 bg-white/[0.02] backdrop-blur-xl">
            <h1 className="text-3xl font-bold tracking-tight">Case Study Not Found</h1>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button onClick={() => navigate(-1)} className="rounded-full bg-white px-8 py-3 text-sm font-bold text-black hover:bg-orange-500 hover:text-white transition-all">Go Back</button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page-shell bg-[#020617] text-slate-50 min-h-screen">
      <BackgroundSVG />
      <GlowBlobs />
      <Navbar />

      <main className="page-main relative z-10 pt-12">
        <section className="section-wide pb-10">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            
            {/* Repositioned closer to top since main pt is reduced */}
            <Link
              to="/projects"
              className="absolute -top-6 left-0 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-orange-500 transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Projects
            </Link>

            <div className="order-2 lg:order-1 pt-4">
              <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500/80">
                {project.category}
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl leading-[1.1]">
                {project.title}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 font-light">
                {project.subtitle}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href={project.live} target="_blank" rel="noreferrer" className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black transition-all hover:bg-orange-500 hover:text-white">
                  Live Preview
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10">
                  Source Code
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="order-1 lg:order-2 relative group"
            >
              <div className="absolute -inset-4 bg-orange-500/5 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#020617] p-2 shadow-2xl">
                <img src={project.image} alt={project.title} className="rounded-[24px] w-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* META INFO */}
        <section className="section-wide pb-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <InfoCard icon={FolderKanban} label="Role" value={project.role} />
            <InfoCard icon={Calendar} label="Year" value={project.year} />
            <InfoCard icon={Layers3} label="Duration" value={project.duration} />
            <InfoCard icon={Sparkles} label="Focus" value={project.tech[0] + " + " + project.tech[1]} />
          </motion.div>
        </section>

        {/* CONTENT BLOCKS */}
        <section className="section-wide pb-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="space-y-8">
              <SectionBlock eyebrow="The Context" title="Project Overview">
                <p>{project.overview}</p>
              </SectionBlock>

              <SectionBlock eyebrow="The Goal" title="Challenge & Objectives">
                <p>{project.challenge}</p>
              </SectionBlock>

              <SectionBlock eyebrow="The Process" title="Approach & Solution">
                <p>{project.solution}</p>
              </SectionBlock>
            </div>

            <div className="space-y-8">
              <motion.section variants={fadeUp} className="glass-card rounded-[32px] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">Stack</p>
                <h2 className="mt-4 text-2xl font-bold text-white">Technologies</h2>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {project.tech.map((item) => <TechBadge key={item} label={item} />)}
                </div>
              </motion.section>

              <motion.section variants={fadeUp} className="glass-card rounded-[32px] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">Core Engine</p>
                <h2 className="mt-4 text-2xl font-bold text-white">Key Features</h2>
                <div className="mt-8 space-y-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="group rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm text-slate-300 transition-colors hover:bg-white/[0.05]">
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section variants={fadeUp} className="glass-card rounded-[32px] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">Metrics</p>
                <h2 className="mt-4 text-2xl font-bold text-white">Project Snapshot</h2>
                <div className="mt-8 grid gap-4">
                  {project.metrics.map((item) => (
                    <div key={item.label} className="rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 flex justify-between items-center">
                      <span className="text-xs uppercase font-bold tracking-widest text-slate-500">{item.label}</span>
                      <span className="text-sm font-bold text-white tracking-wide">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>
          </motion.div>
        </section>

        {/* CTA (EXACT SAME AS PREVIOUS SECTIONS) */}
        <section className="section-main pb-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            custom={0.2}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent px-8 py-16 text-center backdrop-blur-xl shadow-2xl [transform:translateZ(0)]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500/80">Let’s Work Together</p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Ready to build something <br className="hidden sm:block" /> exceptional?</h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400">
                Whether you need a scalable web application, AI integration, or a clean UI system, I'm available for freelance work and collaborations.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="group relative flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)]">
                  <span>Get in Touch</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link to="/projects" className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40">
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