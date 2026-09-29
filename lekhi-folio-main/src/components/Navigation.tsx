import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Menu,
  X,
  Download,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  index: string;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navigationItems: NavItem[] = [
    { id: "accueil", label: "Accueil", index: "00" },
    { id: "apropos", label: "À propos", index: "01" },
    { id: "competences", label: "Stack", index: "02" },
    { id: "education", label: "Parcours", index: "03" },
    { id: "projets", label: "Projets", index: "04" },
    { id: "contact", label: "Contact", index: "05" },
  ];

  // ScrollSpy précis
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = navigationItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navigationItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 transition-all duration-500 pointer-events-none ${
          isScrolled ? "pt-3 sm:pt-4" : "pt-6 sm:pt-8"
        }`}
      >
        <nav
          className={`pointer-events-auto relative w-full max-w-6xl mx-auto rounded-full border border-white/[0.08] bg-[#0A0A0B]/70 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500 ${
            isScrolled ? "py-2 px-3 sm:px-5" : "py-3 px-4 sm:px-6"
          }`}
        >
          {/* Top subtle light trace */}
          <div className="absolute top-0 left-1/4 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

          <div className="flex items-center justify-between">
            {/* BRAND LOGO */}
            <button
              onClick={() => scrollToSection("accueil")}
              data-cursor="pointer"
              className="flex items-center gap-3 group text-left"
            >
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/15 flex items-center justify-center text-white font-mono text-xs font-bold group-hover:border-cyan-400/40 transition-colors">
                <span>SL</span>
                {/* Live ping */}
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
              </div>

              <div className="hidden sm:block">
                <div className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
                  <span>SalahEddine</span>
                  <span className="text-white/40 font-mono font-normal text-xs">
                    .dev
                  </span>
                </div>
                <div className="text-[10px] font-mono text-cyan-300/80 uppercase tracking-widest flex items-center gap-1">
                  <span>Full-Stack</span>
                </div>
              </div>
            </button>

            {/* DESKTOP MENU PILL */}
            <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.02] border border-white/[0.05]">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    data-cursor="pointer"
                    className="relative px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300"
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10 backdrop-blur-md shadow-sm"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA & MOBILE TOGGLE */}
            <div className="flex items-center gap-3">
              {/* CV Download button */}
              <a
                href="#"
                data-cursor="pointer"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-mono text-xs font-semibold hover:bg-slate-200 transition-all group"
              >
                <span>CV</span>
                <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* Mobile Burger Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                data-cursor="pointer"
                aria-label="Toggle navigation menu"
                className="lg:hidden w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 text-white flex items-center justify-center hover:bg-white/[0.08] transition-colors"
              >
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* FULLSCREEN STUDIO MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0B]/95 backdrop-blur-3xl lg:hidden flex flex-col justify-between p-8 sm:p-12 overflow-y-auto"
          >
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-widest">
                <Terminal className="w-3.5 h-3.5 text-cyan-300" />
                <span>Navigation Menu</span>
              </div>
              <div className="text-[10px] font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Available for work
              </div>
            </div>

            {/* Nav links stack */}
            <div className="my-auto space-y-4 py-8">
              {navigationItems.map((item, index) => {
                const isActive = activeSection === item.id;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="group flex items-baseline justify-between w-full text-left py-2 border-b border-white/[0.04]"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-white/20 group-hover:text-cyan-400 transition-colors">
                          /{item.index}
                        </span>
                        <span
                          className={`text-3xl sm:text-4xl font-black tracking-tight transition-colors ${
                            isActive
                              ? "text-white italic"
                              : "text-white/60 group-hover:text-white"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>

                      <ArrowUpRight
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isActive
                            ? "text-cyan-300 rotate-45"
                            : "text-white/20 group-hover:text-white group-hover:rotate-45"
                        }`}
                      />
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* Drawer Bottom Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="pt-6 border-t border-white/[0.08] space-y-6"
            >
              {/* CV Button on Mobile */}
              <a
                href="#"
                className="w-full py-4 rounded-2xl bg-white text-black font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors"
              >
                <span>Télécharger mon Curriculum Vitae</span>
                <Download className="w-4 h-4" />
              </a>

              {/* Direct channels & social */}
              <div className="flex items-center justify-between text-xs font-mono text-white/40">
                <span>salah.lekhbioui@gmail.com</span>

                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;