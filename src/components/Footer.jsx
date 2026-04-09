import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 }, // Reduced y distance for a smoother, lag-free reveal
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6, // Snappier duration
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative section-main pb-10 pt-6 overflow-hidden">
      <div className="border-t border-white/10 pt-10 [transform:translateZ(0)]">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          
          {/* Left: Branding & Simple Copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.1}
            className="text-center md:text-left will-change-[transform,opacity]"
          >
            <h3 className="text-xl font-bold tracking-tight text-white">
              Archit Mishra<span className="text-orange-500">.</span>
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
              Computer Science student and Full Stack Developer focused on building clean, functional web applications.
            </p>
          </motion.div>

          {/* Middle: Navigation */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.2}
            className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-400 will-change-[transform,opacity]"
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                // Changed from hover:text-white to the premium orange accent
                className="transition-colors duration-200 hover:text-orange-500"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* Right: Socials */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0.3}
            className="flex items-center gap-6 text-sm font-medium will-change-[transform,opacity]"
          >
            <a
              href="https://github.com/archit1207"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition-colors duration-200 hover:text-orange-500"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/architmishra1207"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition-colors duration-200 hover:text-orange-500"
            >
              LinkedIn
            </a>
            <a
              href="mailto:architmishra1207@gmail.com"
              className="text-slate-400 transition-colors duration-200 hover:text-orange-500"
            >
              Email
            </a>
          </motion.div>
        </div>

        {/* Bottom: Copyright */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0.4}
          className="mt-12 text-center text-xs font-medium tracking-wide text-slate-600 will-change-[transform,opacity]"
        >
          © {new Date().getFullYear()} Archit Mishra. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}