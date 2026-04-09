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
      href: isHome ? "#" : "/",
      isRoute: !isHome,
    },
    {
      label: "Projects",
      href: isHome ? "#projects" : "/#projects",
      isRoute: false,
    },
    {
      label: "About",
      href: isHome ? "#about" : "/#about",
      isRoute: false,
    },
    {
      label: "Contact",
      href: "/contact",
      isRoute: true,
    },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-14"
      >
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/85">
          {navItems.map((item, i) =>
            item.isRoute ? (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
              >
                <Link
                  to={item.href}
                  className="relative transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
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
                className="relative transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                {item.label}
              </motion.a>
            )
          )}
        </div>

        {/* CTA */}
        <motion.div
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:block"
        >
          <Link
            to="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition-all duration-300 hover:bg-slate-200 shadow-[0_10px_30px_rgba(255,255,255,0.08)]"
          >
            Contact me
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white active:scale-90 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
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
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-black/80 text-lg text-white backdrop-blur-xl md:hidden"
          >
            {navItems.map((item, i) =>
              item.isRoute ? (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-slate-300 transition"
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
                  transition={{ delay: i * 0.08 }}
                  className="hover:text-slate-300 transition"
                >
                  {item.label}
                </motion.a>
              )
            )}

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
};

export default Navbar;