import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const navItems = [
    {
      label: "Home",
      href: "/",
      isRoute: true,
    },
    {
      label: "Projects",
      href: isHome ? "#projects" : "/projects",
      isRoute: !isHome ? true : false,
    },
    {
      label: "About",
      href: isHome ? "#about" : "/about",
      isRoute: !isHome ? true : false,
    },
    {
      label: "Contact",
      href: isHome ? "#contact" : "/contact",
      isRoute: !isHome ? true : false,
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-50 section-main flex items-center justify-between py-6 [transform:translateZ(0)]"
      >
        <Link to="/" className="shrink-0 transition-transform duration-300 hover:scale-105">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          {navItems.map((item, i) =>
            item.isRoute ? (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                className="will-change-[transform,opacity]"
              >
                <Link
                  to={item.href}
                  // Premium Orange Hover + Underline Effect
                  className="relative transition-colors duration-300 hover:text-orange-500 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </Link>
              </motion.div>
            ) : (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                className="will-change-[transform,opacity] relative transition-colors duration-300 hover:text-orange-500 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </motion.a>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <motion.div
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:block will-change-transform"
        >
          <Link
            to="/contact"
            // Match the Solar Flare button style
            className="inline-flex h-11 items-center justify-center rounded-xl bg-orange-600 px-6 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(234,88,12,0.15)] transition-colors duration-300 hover:bg-orange-500"
          >
            Contact me
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white transition-colors duration-200 hover:text-orange-500 active:scale-90 md:hidden"
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            // Replaced heavy blur with a deeper solid color + slight blur for max mobile performance
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-[#020617]/98 text-lg font-medium text-white backdrop-blur-md md:hidden [transform:translateZ(0)] will-change-transform"
          >
            {navItems.map((item, i) =>
              item.isRoute ? (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="will-change-[transform,opacity]"
                >
                  <Link
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="transition-colors duration-200 hover:text-orange-500"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="will-change-[transform,opacity] transition-colors duration-200 hover:text-orange-500"
                >
                  {item.label}
                </motion.a>
              )
            )}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4"
            >
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                // Mobile CTA matching the theme
                className="rounded-xl bg-orange-600 px-8 py-4 text-base font-semibold text-white shadow-[0_10px_40px_rgba(234,88,12,0.2)] transition-colors duration-200 hover:bg-orange-500"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setMenuOpen(false)}
              // Refined close button: dark theme instead of harsh white
              className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-200 hover:border-orange-500/50 hover:text-orange-500 active:scale-95"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;