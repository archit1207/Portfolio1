import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundSVG from "../components/BackgroundSVG";
import GlowBlobs from "../components/GlowBlobs";

const fadeUp = {
  hidden: { opacity: 0, y: 20, willChange: "transform, opacity" },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ContactPage() {
  const [status, setStatus] = useState(""); 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");

    const data = new FormData(form);
    
    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_LINK, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="page-shell bg-[#020617] text-slate-50 min-h-screen">
      <BackgroundSVG />
      <GlowBlobs />
      <Navbar />

      <main className="page-main relative z-10 pt-12">
        {/* Content starts immediately with no section-level padding */}
        <section className="section-main pb-10">
          <div className="section-head max-w-3xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
              className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500/80"
            >
              Contact
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
              className="mt-6 text-5xl font-bold tracking-tight leading-[1.1] sm:text-6xl"
            >
              Let’s build something{" "}
              <span className="bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
                sharp together.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
              className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              I'm always open to discussing new projects, full-stack opportunities, 
              or how I can help your team integrate intelligent AI solutions.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.4}
              className="glass-card relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-colors hover:border-white/10 md:p-10 [transform:translateZ(0)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <h2 className="text-2xl font-semibold text-white">Send a message</h2>
              <p className="mt-2 text-sm text-slate-400">I'll get back to you within 24 hours.</p>

              {status === "success" ? (
                <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center text-emerald-400">
                  <p className="font-bold text-lg">Message sent!</p>
                  <p className="mt-2 text-sm opacity-80">Thanks for reaching out. I'll be in touch soon.</p>
                  <button onClick={() => setStatus("")} className="mt-6 text-xs underline uppercase tracking-widest hover:text-white transition-colors">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full rounded-xl border border-white/5 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:border-orange-500/50 focus:outline-none focus:ring-1 focus:ring-orange-500/50 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address</label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="Your@email.com"
                        className="w-full rounded-xl border border-white/5 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:border-orange-500/50 focus:outline-none focus:ring-1 focus:ring-orange-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Subject</label>
                    <input
                      required
                      name="subject"
                      type="text"
                      placeholder="Project Inquiry / Hiring"
                      className="w-full rounded-xl border border-white/5 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:border-orange-500/50 focus:outline-none focus:ring-1 focus:ring-orange-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Your Message</label>
                    <textarea
                      required
                      name="message"
                      rows="5"
                      placeholder="Briefly describe your project or goal..."
                      className="w-full rounded-xl border border-white/5 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:border-orange-500/50 focus:outline-none focus:ring-1 focus:ring-orange-500/50 transition-all resize-none"
                    />
                  </div>

                  <button 
                    disabled={status === "sending"}
                    type="submit" 
                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-4 text-sm font-bold text-white transition-all hover:bg-orange-400 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_25px_-5px_rgba(249,115,22,0.4)]"
                  >
                    <span>{status === "sending" ? "Sending..." : "Send Inquiry"}</span>
                    {status !== "sending" && (
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </button>
                  
                  {status === "error" && (
                    <p className="text-center text-xs text-red-400 mt-2">Submission failed. Please try again.</p>
                  )}
                </form>
              )}
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  label: "Email",
                  value: "architmishra1207@gmail.com",
                  href: "mailto:architmishra1207@gmail.com",
                  desc: "Best for project inquiries and hiring opportunities."
                },
                {
                  label: "GitHub",
                  value: "github.com/archit1207",
                  href: "https://github.com/archit1207",
                  desc: "Explore source code and engineering documentation."
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/architmishra1207",
                  href: "https://linkedin.com/in/architmishra1207",
                  desc: "Professional networking and formal updates."
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={0.5 + index * 0.1}
                  className="glass-card group rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-xl transition-all hover:border-orange-500/20 [transform:translateZ(0)]"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-orange-500/80 transition-colors">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target={item.label !== "Email" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="mt-3 block text-xl font-semibold text-white group-hover:text-orange-100 transition-colors"
                  >
                    {item.value}
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}