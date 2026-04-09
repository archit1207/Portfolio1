import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function PageNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="fixed left-1/2 top-4 md:top-5 z-[100] w-full max-w-7xl -translate-x-1/2 px-4 md:px-8 lg:px-12"
      >
        <div
          className={`mx-auto flex h-[72px] items-center justify-between rounded-2xl border px-5 md:px-6 transition-all duration-300 ${
            scrolled
              ? "border-white/12 bg-[#0B1120]/70 shadow-[0_12px_40px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
              : "border-white/10 bg-[#0B1120]/55 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm text-white/80">
            {navItems.map((item, i) => {
              const isActive = location.pathname === item.href;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.35 }}
                >
                  <Link
                    to={item.href}
                    className={`relative font-medium transition after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:transition-all ${
                      isActive
                        ? "text-white after:w-full after:bg-white"
                        : "text-white/80 hover:text-white after:w-0 after:bg-white/90 hover:after:w-full"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block"
          >
            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 lg:px-6 text-sm font-medium text-black transition-all duration-300 hover:bg-slate-200"
            >
              Contact me
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white active:scale-90 transition"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-[#050816]/95 text-lg text-white backdrop-blur-xl md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-slate-300 transition"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
            >
              Contact Me
            </Link>

            <button
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:bg-slate-200 active:scale-95"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}