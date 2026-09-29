import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Database,
  Layers,
  Coffee,
  MapPin,
  Calendar,
  Zap,
} from "lucide-react";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const stats = [
    { number: "03", label: "Années\nd'expérience", suffix: "+" },
    { number: "20", label: "Projets\ncomplétés", suffix: "+" },
    { number: "15", label: "Technologies\nmaîtrisées", suffix: "+" },
    { number: "100", label: "Café\nconsommés", suffix: "%" },
  ];

  const services = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Interfaces modernes et interactives avec React, TypeScript et Tailwind CSS.",
      tags: ["React", "TypeScript", "Next.js"],
    },
    {
      icon: Database,
      title: "Backend Engineering",
      description:
        "APIs robustes et bases de données optimisées avec Django et PostgreSQL.",
      tags: ["Django", "PostgreSQL", "REST"],
    },
    {
      icon: Layers,
      title: "Full-Stack Solutions",
      description:
        "Applications complètes de la conception au déploiement en production.",
      tags: ["Docker", "CI/CD", "AWS"],
    },
  ];

  const timeline = [
    { year: "2024", event: "Stage Full-Stack chez PREMO" },
    { year: "2023", event: "Licence Génie Logiciel" },
    { year: "2022", event: "Premier projet React déployé" },
    { year: "2021", event: "Début du développement web" },
  ];

  return (
    <section
      ref={sectionRef}
      id="apropos"
      className="relative min-h-screen py-32 px-6 lg:px-16 bg-[#0A0A0B] overflow-hidden"
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient gradient */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/[0.06] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/[0.05] blur-[130px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      <div className="relative max-w-[1600px] mx-auto z-10">
        {/* SECTION HEADER - Style éditorial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-white/30" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium">
              (01) — About Me
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <h2
              className="lg:col-span-8 font-[900] text-white leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              A curious mind{" "}
              <span className="italic font-[300] bg-gradient-to-r from-[#60A5FA] via-[#22D3EE] to-[#A78BFA] bg-clip-text text-transparent">
                crafting
              </span>
              <br />
              digital experiences.
            </h2>

            <p className="lg:col-span-4 text-white/60 text-lg leading-relaxed font-light lg:pb-4">
              Développeur Full-Stack passionné, je transforme des idées complexes
              en solutions élégantes et performantes.
            </p>
          </div>
        </motion.div>

        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-12 mb-32">
          {/* LEFT - Profile Card */}
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Corner decorations */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-white/20 z-20" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-white/20 z-20" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-white/20 z-20" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-white/20 z-20" />

            <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden group">
              {/* Ambient glow inside */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full" />

              {/* Top bar - like a window */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 border-b border-white/5 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-mono">
                  profile.tsx
                </span>
              </div>

              {/* Avatar section */}
              <div className="relative pt-24 flex flex-col items-center px-8">
                {/* Avatar with border */}
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #60A5FA, #22D3EE, #A78BFA, #60A5FA)",
                      padding: "3px",
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-[#0A0A0B]" />
                  </motion.div>

                  <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 flex items-center justify-center overflow-hidden">
                    <span className="text-6xl font-[900] text-white tracking-tight">
                      SL
                    </span>
                  </div>

                  {/* Status badge */}
                  <div className="absolute bottom-2 right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500 border-2 border-[#0A0A0B]">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-8 text-center space-y-1">
                  <h3 className="text-2xl font-bold text-white">
                    SalahEddine Lekhbioui
                  </h3>
                  <p className="text-sm text-white/50 font-light italic">
                    Full-Stack Developer
                  </p>
                </div>

                {/* Location & meta */}
                <div className="mt-6 flex items-center gap-4 text-xs text-white/40">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    <span>Morocco</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    <span>2024</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <Coffee className="w-3 h-3" />
                    <span>∞ cups</span>
                  </div>
                </div>
              </div>

              {/* Skills at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                {[
                  { label: "Frontend", value: 95 },
                  { label: "Backend", value: 88 },
                  { label: "DevOps", value: 75 },
                ].map((skill, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-white/60 font-medium uppercase tracking-wider">
                        {skill.label}
                      </span>
                      <span className="text-white/40 font-mono">
                        {skill.value}%
                      </span>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge - available */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-4 top-16 px-4 py-3 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-2xl shadow-blue-500/20 border border-white/20"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                <span className="text-xs font-semibold">Available</span>
              </div>
            </motion.div>

            {/* Floating badge - tech */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute -left-4 bottom-32 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-white/80">React 18</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT - Content */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-12"
          >
            {/* Story */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-medium">
                  My Story
                </span>
              </div>

              <div className="space-y-6 text-white/70 text-lg leading-[1.8] font-light">
                <p>
                  Actuellement <span className="text-white font-normal italic">stagiaire chez PREMO</span>,
                  je conçois et développe des solutions métiers avec Django pour
                  optimiser les processus internes de l'entreprise.
                </p>
                <p>
                  Ma passion ?{" "}
                  <span className="text-white font-normal">
                    Créer des expériences web performantes
                  </span>{" "}
                  qui allient design élégant et code robuste. Je crois profondément
                  que la meilleure interface est celle qui devient invisible.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-white/30" />
                <span className="text-xs uppercase tracking-[0.3em] text-white/50 font-medium">
                  What I Do
                </span>
              </div>

              <div className="space-y-3">
                {services.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden"
                      data-cursor="pointer"
                    >
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/[0.03] to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative flex items-start gap-5">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <Icon className="w-5 h-5 text-cyan-300" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {service.title}
                            </h4>
                            <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
                          </div>

                          <p className="text-sm text-white/50 leading-relaxed mb-3">
                            {service.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag, j) => (
                              <span
                                key={j}
                                className="text-[10px] uppercase tracking-wider text-white/40 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* STATS SECTION - Style éditorial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-y border-white/[0.08] py-16 mb-32"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="flex items-baseline gap-1 mb-3">
                  <span
                    className="font-[900] text-white tracking-[-0.04em] group-hover:text-cyan-300 transition-colors duration-500"
                    style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                  >
                    {stat.number}
                  </span>
                  <span className="text-2xl text-cyan-400 font-light">
                    {stat.suffix}
                  </span>
                </div>
                <div className="w-full h-px bg-white/10 mb-3 relative overflow-hidden">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                  />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40 leading-relaxed whitespace-pre-line">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* TIMELINE - Journey */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-white/30" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium">
              (02) — Journey
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3
                className="font-[900] text-white leading-[0.9] tracking-[-0.03em] mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Every line of code{" "}
                <span className="italic font-[300] text-white/40">tells a story.</span>
              </h3>
              <p className="text-white/50 text-base leading-relaxed font-light">
                Un parcours qui reflète ma passion continue pour la création
                et l'innovation technologique.
              </p>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-white/20 to-transparent" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative pl-8 group cursor-pointer"
                    data-cursor="pointer"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/20 border-2 border-[#0A0A0B] group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300" />

                    <div className="flex items-baseline gap-6">
                      <span className="text-2xl font-[900] text-white/20 group-hover:text-cyan-400 transition-colors duration-300 tracking-tight">
                        {item.year}
                      </span>
                      <div className="flex-1 flex items-baseline justify-between gap-4 pb-4 border-b border-white/5 group-hover:border-white/20 transition-colors">
                        <span className="text-white/70 group-hover:text-white transition-colors">
                          {item.event}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;