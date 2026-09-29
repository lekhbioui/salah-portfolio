import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useRef } from "react";
import InteractiveParticles from "@/components/InteractiveParticles";
import LaptopScene from "@/components/LaptopScene";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToProjects = () => {
    document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-[#0A0A0B] text-white"
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Particles */}
      <InteractiveParticles />

      {/* Ambient gradients - subtle & elegant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full bg-[#3B82F6]/[0.08] blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[10%] w-[700px] h-[700px] rounded-full bg-[#8B5CF6]/[0.06] blur-[150px]"
        />

        {/* Grid subtile */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
      </div>

      {/* Top navigation bar minimaliste */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-0 right-0 z-20 px-8 lg:px-16 flex justify-between items-center"
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs uppercase tracking-[0.2em] text-white/60 font-medium">
            Available for work
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40">
          <span>Portfolio</span>
          <span>/</span>
          <span className="text-white/80">2025</span>
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex items-center px-8 lg:px-16 py-32"
      >
        <div className="max-w-[1600px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT - Typography focused */}
          <div className="lg:col-span-7 space-y-10">
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-px bg-white/30" />
              <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium">
                Full-Stack Developer
              </span>
            </motion.div>

            {/* Massive Typography */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-[900] leading-[0.85] tracking-[-0.05em]"
                style={{ fontSize: "clamp(3.5rem, 9vw, 8.5rem)" }}
              >
                <span className="block text-white/95">SalahEddine</span>
                <span className="block relative">
                  <span className="bg-gradient-to-r from-[#60A5FA] via-[#22D3EE] to-[#A78BFA] bg-clip-text text-transparent italic font-[300]">
                    Lekhbioui
                  </span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#60A5FA] to-transparent origin-left"
                  />
                </span>
              </motion.h1>
            </div>

            {/* Description avec typographie éditoriale */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-xl"
            >
              <p className="text-lg text-white/60 leading-[1.7] font-light">
                Je conçois des expériences web{" "}
                <span className="text-white font-normal italic">modernes</span> et{" "}
                <span className="text-white font-normal italic">performantes</span>, à la
                croisée du design et de l'ingénierie. Spécialisé en{" "}
                <span className="text-white font-normal">React</span>,{" "}
                <span className="text-white font-normal">Django</span> et{" "}
                <span className="text-white font-normal">PostgreSQL</span>.
              </p>
            </motion.div>

            {/* Stats row - style éditorial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center gap-8 py-6 border-y border-white/[0.08]"
            >
              {[
                { value: "3+", label: "Années\nd'expérience" },
                { value: "20+", label: "Projets\nlivrés" },
                { value: "10+", label: "Technologies\nmaîtrisées" },
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-3">
                  <span className="text-3xl font-[300] text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/40 uppercase tracking-wider leading-tight whitespace-pre-line">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons - Style minimaliste premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToProjects}
                data-cursor="pointer"
                className="group relative overflow-hidden px-8 py-4 bg-white text-black rounded-full font-medium text-sm inline-flex items-center gap-3 transition-all duration-500 hover:pl-10 hover:pr-6"
              >
                <span className="relative z-10">Explorer mes projets</span>
                <span className="relative z-10 w-8 h-8 -mr-2 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white to-white/80" />
              </button>

              <button
                onClick={scrollToContact}
                data-cursor="pointer"
                className="group px-8 py-4 border border-white/20 rounded-full text-sm font-medium hover:bg-white/5 hover:border-white/40 transition-all duration-300 inline-flex items-center gap-3"
              >
                <Mail className="w-4 h-4" />
                <span>Discutons</span>
              </button>

              <a
                href="#"
                data-cursor="pointer"
                className="group p-4 border border-white/20 rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                title="Télécharger CV"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Social - vertical minimaliste */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex items-center gap-6 pt-4"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                Follow —
              </span>
              {[
                { icon: Github, label: "GitHub", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  data-cursor="pointer"
                  className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="relative">
                    {social.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT - 3D Scene avec design premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl" />

            {/* Card container */}
            <div className="relative">
              {/* Corner decorations */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-white/20 z-20" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-white/20 z-20" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-white/20 z-20" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-white/20 z-20" />

              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl overflow-hidden">
                {/* Top bar - macOS style */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs text-white/30 font-mono">
                    ~/portfolio/showcase.tsx
                  </span>
                </div>

                <LaptopScene />

                {/* Info footer */}
                <div className="px-6 py-5 border-t border-white/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-white/40">
                      Featured Projects
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-white/60" />
                      <div className="w-1 h-1 rounded-full bg-white/30" />
                      <div className="w-1 h-1 rounded-full bg-white/30" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[
                      { name: "Matrice de Formation", tag: "OFPPT" },
                      { name: "Planning Transport", tag: "SaaS" },
                      { name: "E-commerce Platform", tag: "Full-Stack" },
                    ].map((project, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.15 }}
                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.03] transition-all cursor-pointer"
                        data-cursor="pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
                          <span className="text-sm text-white/80 group-hover:text-white transition-colors">
                            {project.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase tracking-wider text-white/30 px-2 py-1 rounded-full border border-white/10">
                            {project.tag}
                          </span>
                          <ArrowUpRight className="w-3 h-3 text-white/30 group-hover:text-white group-hover:rotate-45 transition-all" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-4 top-20 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-mono text-white/70"
            >
              React 18
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute -left-4 bottom-32 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs font-mono text-white/70"
            >
              TypeScript
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Marquee - Tech stack scrolling */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.06] bg-black/20 backdrop-blur-sm overflow-hidden py-5">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...Array(2)].map((_, dupIndex) => (
            <div key={dupIndex} className="flex gap-16 items-center">
              {[
                "React",
                "TypeScript",
                "Django",
                "PostgreSQL",
                "Tailwind CSS",
                "Node.js",
                "REST API",
                "Framer Motion",
                "Three.js",
                "Git",
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-16">
                  <span className="text-sm uppercase tracking-[0.3em] text-white/40 font-medium">
                    {tech}
                  </span>
                  <span className="text-white/20">✦</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-20 right-8 lg:right-16 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 [writing-mode:vertical-rl] rotate-180">
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;