import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  GitBranch,
  Sparkles,
  Terminal,
  Cpu,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import { useRef } from "react";

const Skills = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const categories = [
    {
      icon: Code2,
      id: "01",
      title: "Frontend Engineering",
      description: "Interfaces pixel-perfect, fluides et centrées sur l'expérience utilisateur.",
      color: "from-blue-500/20 to-cyan-400/20",
      glowColor: "rgba(34, 211, 238, 0.15)",
      skills: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 75 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      icon: Server,
      id: "02",
      title: "Backend Architecture",
      description: "Conception de systèmes robustes, de bases de données et d'APIs scalables.",
      color: "from-purple-500/20 to-pink-500/20",
      glowColor: "rgba(168, 85, 247, 0.15)",
      skills: [
        { name: "Django", level: 90 },
        { name: "Django REST Framework", level: 85 },
        { name: "Laravel", level: 70 },
        { name: "Spring Boot", level: 55 },
      ],
    },
    {
      icon: Database,
      id: "03",
      title: "Database Management",
      description: "Modélisation de schémas, optimisation de requêtes et gestion du stockage.",
      color: "from-emerald-500/20 to-green-400/20",
      glowColor: "rgba(16, 185, 129, 0.15)",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 90 },
        { name: "PL/SQL", level: 50 },
      ],
    },
    {
      icon: Wrench,
      id: "04",
      title: "DevOps & Workflows",
      description: "Conteneurisation, automatisation et outils de productivité modernes.",
      color: "from-orange-500/20 to-yellow-400/20",
      glowColor: "rgba(249, 115, 22, 0.15)",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 55 },
        { name: "Figma", level: 70 },
        { name: "Agile / Scrum", level: 75 },
      ],
    },
  ];

  const corePrinciples = [
    { name: "Clean Code", desc: "Architecture lisible et maintenable" },
    { name: "Git Flow", desc: "Gestion rigoureuse du versioning" },
    { name: "RESTful API", desc: "Endpoints standardisés et sécurisés" },
    { name: "Performance Opt.", desc: "Temps de réponse minimisés" },
  ];

  return (
    <section
      ref={containerRef}
      id="competences"
      className="relative min-h-screen py-32 px-6 lg:px-16 bg-[#0A0A0B] overflow-hidden"
    >
      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle Background Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-purple-500/[0.03] blur-[130px] pointer-events-none" />

      {/* Grid structure */}
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 90%)",
        }}
      />

      <div className="relative max-w-[1600px] mx-auto z-10">
        {/* HEADER */}
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
              (02) — Stack Technique
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <h2
              className="lg:col-span-8 font-[900] text-white leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              The tools behind{" "}
              <span className="italic font-[300] bg-gradient-to-r from-[#60A5FA] via-[#22D3EE] to-[#A78BFA] bg-clip-text text-transparent">
                the solutions.
              </span>
            </h2>

            <p className="lg:col-span-4 text-white/60 text-lg leading-relaxed font-light lg:pb-4">
              Une sélection rigoureuse de technologies modernes pour construire des applications
              performantes, robustes et hautement maintenables.
            </p>
          </div>
        </motion.div>

        {/* BENTO GRID COMPÉTENCES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-[32px] border border-white/[0.08] bg-[#121214]/40 backdrop-blur-xl p-10 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Custom inner ambient shadow */}
                <div
                  className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                  style={{ backgroundColor: category.glowColor }}
                />

                {/* Grid minimaliste interne */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />

                {/* Card Header */}
                <div className="relative flex items-start justify-between mb-10">
                  <div className="flex gap-6 items-center">
                    {/* Icone minimaliste avec hover dynamique */}
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} border border-white/5 flex items-center justify-center text-white/90 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-sm text-white/40 font-light mt-1 max-w-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-white/20 tracking-wider">
                    {category.id}
                  </span>
                </div>

                {/* Skills progress (Style minimaliste 1px) */}
                <div className="relative space-y-6">
                  {category.skills.map((skill, sIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-baseline">
                        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-white/30">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Bar (Style ultra-fin 2px) */}
                      <div className="h-[2px] w-full bg-white/[0.04] rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: skill.level / 100 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 + sIndex * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#60A5FA] via-[#22D3EE] to-[#A78BFA] origin-left"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* WORKFLOW BLUEPRINT SECTION */}
        <motion.div
          style={{ y }}
          className="mt-20 relative rounded-[32px] border border-white/[0.08] bg-[#121214]/20 backdrop-blur-xl p-10 overflow-hidden"
        >
          {/* Decorative corner borders */}
          <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-white/20" />
          <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-white/20" />
          <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-white/20" />
          <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-white/20" />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Blueprint header */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3 text-cyan-400">
                <Workflow className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-medium">
                  Workflow Guidelines
                </span>
              </div>
              <h3 className="text-3xl font-[900] text-white tracking-tight leading-none">
                Engineering <br />
                <span className="italic font-light text-white/50">Standards.</span>
              </h3>
              <p className="text-xs text-white/40 leading-relaxed font-light">
                Chaque projet est structuré selon des standards industriels stricts pour garantir durabilité et maintenabilité.
              </p>
            </div>

            {/* Right Blueprint specs */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {corePrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] transition-all group/spec"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 group-hover/spec:text-cyan-400 group-hover/spec:border-cyan-500/20 transition-all duration-300">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white/80 group-hover/spec:text-white transition-colors">
                      {principle.name}
                    </h4>
                    <p className="text-xs text-white/40 mt-1 font-light">
                      {principle.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;