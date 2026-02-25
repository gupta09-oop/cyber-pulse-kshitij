import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";

const navLinks = [
  { label: "about", href: "about" },
  { label: "skills", href: "skills" },
  { label: "projects", href: "projects" },
  { label: "blog", href: "blog" },
  { label: "certs", href: "certifications" },
  { label: "achievements", href: "achievements" },
  { label: "exp", href: "experience" },
  { label: "contact", href: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => document.getElementById(l.href));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(navLinks[i].href);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-sm border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 group">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs text-primary group-hover:text-glow-green transition-all">
              root@kshitij<span className="cursor-blink text-secondary">_</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative px-3 py-1.5 text-xs font-mono transition-colors duration-300 ${
                  active === link.href
                    ? "text-primary text-glow-green"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {active === link.href && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-primary/5 border border-primary/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  <span className="text-secondary/50">/</span>{link.label}
                </span>
              </button>
            ))}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-primary">
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-sm border-b border-primary/10"
          >
            <div className="px-4 py-3 space-y-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`block w-full text-left px-3 py-2 font-mono text-xs transition-colors ${
                    active === link.href
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  <span className="text-secondary/50">./</span>{link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};