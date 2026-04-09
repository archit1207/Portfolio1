import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BackgroundSVG from "../components/BackgroundSVG";
import GlowBlobs from "../components/GlowBlobs";
import Footer from "../components/Footer";

// Smooth, lag-free animation settings with hardware acceleration
const fadeUp = {
  hidden: { opacity: 0, y: 24, transition: { duration: 0 } },
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

const skills = [
  "MongoDB, Express, React, Node.js",
  "Python & Machine Learning",
  "C++ & Data Structures",
  "RESTful APIs & System Design",
  "Git, CI/CD & Cloud Deployment",
];

export default function AboutPage() {
  return (
    <div className="page-shell bg-[#020617] text-slate-50 min-h-screen">
      <BackgroundSVG />
      <GlowBlobs />
      <Navbar />

      {/* Reduced pt-20 to pt-12 for a tighter fit */}
      <main className="page-main relative z-10 pt-12">
        {/* Removed py-10 entirely to pull content up */}
        <section className="section-main">
          <div className="section-head max-w-4xl">
             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0.1} className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500/80">
                Professional Background
             </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="mt-6 text-5xl font-bold tracking-tight leading-[1.1] sm:text-6xl"
            >
              Hi, I'm Archit. I engineer scalable applications that{" "}
              <span className="bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                solve real business problems.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="mt-6 text-base leading-relaxed text-slate-400 sm:text-xl max-w-2xl"
            >
              I am a Computer Science student and a Full Stack Intern. I specialize in the MERN stack and AI integrations, focusing on writing clean, maintainable code for modern engineering teams.
            </motion.p>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="section-main section-space-sm pb-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">

            {/* Left Column: Experience & Mindset */}
            <div className="space-y-8">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                custom={0.1}
                className="glass-card relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-colors hover:border-white/10 md:p-10 [transform:translateZ(0)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">My Experience</p>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Built on a strong foundation of logic and architecture.
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-300/90 font-light">
                  <p>
                    My technical foundation is rooted in C++ and complex data structures, giving me a strong grasp of performance and logical problem-solving. I understand how systems work under the hood.
                  </p>
                  <p>
                    As a Full Stack Developer, I build end-to-end applications using MongoDB, Express, React, and Node.js. From architecting secure databases to crafting responsive user interfaces, I take full ownership of the products I work on.
                  </p>
                  <p>
                    I am actively integrating Python, Machine Learning, and AI agents into my workflows, exploring how smart data processing can create more valuable tools for users.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                custom={0.2}
                className="glass-card relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-colors hover:border-white/10 md:p-10 [transform:translateZ(0)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Engineering Mindset</p>
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">Why work with me?</h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-300/90 font-light">
                  <p>
                    <strong>I build for the long term.</strong> I focus on modular architecture, predictable state management, and clear API design so the codebase can scale without accumulating technical debt.
                  </p>
                  <p>
                    <strong>I focus on business value.</strong> I prioritize user experience, performance optimization, and reliable deployment strategies to ensure the final product hits its goals.
                  </p>
                  <p>
                    <strong>I am a team player.</strong> I thrive in collaborative environments, communicating technical concepts clearly and adapting quickly to new team workflows.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Snapshot & Arsenal */}
            <div className="space-y-8 sticky top-24">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                custom={0.3}
                className="glass-card rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl md:p-10 [transform:translateZ(0)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Quick Snapshot</p>
                <div className="mt-6 space-y-3 text-sm text-slate-300">
                  <div className="group rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 flex items-center justify-between">
                    <span className="text-slate-400">Current Role</span>
                    <span className="font-medium text-white">Full Stack Intern</span>
                  </div>
                  <div className="group rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 flex items-center justify-between">
                    <span className="text-slate-400">Engineering Focus</span>
                    <span className="font-medium text-white">Scalable Systems</span>
                  </div>
                  <div className="group rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 flex items-center justify-between">
                    <span className="text-slate-400">Availability</span>
                    <span className="font-medium text-emerald-400 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Actively Interviewing
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                custom={0.4}
                className="glass-card rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl md:p-10 [transform:translateZ(0)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Technical Arsenal</p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {skills.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 transition-colors hover:border-orange-500/40 hover:bg-white/10 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-main pb-32 pt-10">
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
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500/80">Let’s Connect</p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">Looking for a dedicated engineer?</h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400">
                I am actively seeking new opportunities to contribute to an innovative team. Let's discuss how my skills in full-stack development and AI can add value to your company.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/ArchitMishra_FSD.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)]"
                >
                  <span>View Resume</span>
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <Link
                  to="/contact"
                  className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                >
                  Contact Me
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