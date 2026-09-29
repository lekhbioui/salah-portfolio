import { motion, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Download,
  Building2,
} from "lucide-react";
import { useRef } from "react";

interface JourneyItem {
  id: string;
  index: string;
  role: string;
  institution: string;
  period: string;
  location: string;
  category: "Experience" | "Education";
  typeLabel: string;
  description: string;
  highlights: string[];
  skills: string[];
  current: boolean;
}

const Education = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  const journey: JourneyItem[] = [
    {
      id: "premo",
      index: "01",
      role: "Développeur Full-Stack",
      institution: "PREMO Group",
      period: "2024 — Aujourd'hui",
      location: "Tanger, Maroc",
      category: "Experience",
      typeLabel: "Stage Professionnel",
      description:
        "Conception et déploiement d'outils métiers sur-mesure pour automatiser la gestion des compétences et le suivi des équipes industrielles.",
      highlights: [
        "Architecture backend robuste sous Django REST Framework",
        "Modélisation avancée et optimisation SQL sur PostgreSQL",
        "Implémentation d'un système de permissions & rôles multi-niveaux",
      ],
      skills: ["Django", "Python", "PostgreSQL", "REST API", "RBAC", "Docker"],
      current: true,
    },
    {
      id: "licence",
      index: "02",
      role: "Licence en Génie Logiciel",
      institution: "Université Ibn Tofail",
      period: "2024 — 2025",
      location: "Kénitra, Maroc",
      category: "Education",
      typeLabel: "Formation Universitaire",
      description:
        "Spécialisation avancée en ingénierie logicielle : patrons de conception, cycles de vie agiles et architectures de systèmes distribués.",
      highlights: [
        "Conception orientée objet & patterns de conception (GoF)",
        "Modélisation de systèmes complexes avec UML",
        "Méthodologies Agiles / Scrum & gestion de sprint",
      ],
      skills: ["Software Architecture", "UML", "Agile / Scrum", "Web Engineering"],
      current: false,
    },
    {
      id: "ofppt",
      index: "03",
      role: "Développement Digital (Full-Stack)",
      institution: "OFPPT ISTA",
      period: "2022 — 2024",
      location: "Bouznika, Maroc",
      category: "Education",
      typeLabel: "Diplôme Spécialisé",
      description:
        "Formation technique intensive axée sur la pratique, la création d'APIs et le développement d'applications d'entreprise complètes.",
      highlights: [
        "Développement d'interfaces modernes avec React.js",
        "Création d'architectures MVC sous Django & Laravel",
        "Gestion et normalisation de bases de données relationnelles",
      ],
      skills: ["React.js", "Django", "Laravel", "MySQL", "JavaScript ES6+"],
      current: false,
    },
    {
      id: "bac",
      index: "04",
      role: "Baccalauréat Sciences Physiques",
      institution: "Lycée Public",
      period: "2021 — 2022",
      location: "Maroc",
      category: "Education",
      typeLabel: "Diplôme d'État",
      description:
        "Formation scientifique rigoureuse axée sur la logique mathématique, l'analyse systémique et la résolution de problèmes.",
      highlights: [
        "Raisonnement algorithmique et pensée logique",
        "Analyse mathématique appliquée",
      ],
      skills: ["Mathématiques", "Physique", "Résolution de problèmes"],
      current: false,
    },
  ];

  return (
    <section
      ref={containerRef}
      id="education"
      className="relative min-h-screen py-32 px-6 lg:px-16 bg-[#0A0A0B] overflow-hidden"
    >
      {/* Texture Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambiance lumineuse */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.03] blur-[140px] pointer-events-none" />

      {/* Grid Décorative */}
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
        {/* SECTION HEADER */}
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
              (03) — Carrière & Formation
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <h2
              className="lg:col-span-8 font-[900] text-white leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              The journey of{" "}
              <span className="italic font-[300] bg-gradient-to-r from-[#60A5FA] via-[#22D3EE] to-[#A78BFA] bg-clip-text text-transparent">
                growth.
              </span>
            </h2>

            <div className="lg:col-span-4 lg:pb-4 space-y-4">
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Une progression constante mêlant rigueur académique, immersion
                industrielle et passion pour les architectures modernes.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  data-cursor="pointer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300 hover:text-white transition-colors group"
                >
                  <span>Télécharger le CV complet</span>
                  <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* TIMELINE ARCHITECTURE */}
        <div className="relative">
          {/* Main vertical track line */}
          <div className="hidden lg:block absolute left-[280px] top-4 bottom-4 w-px bg-white/[0.06]">
            <motion.div
              style={{ height: pathHeight }}
              className="w-full bg-gradient-to-b from-[#60A5FA] via-[#22D3EE] to-[#A78BFA] origin-top"
            />
          </div>

          <div className="space-y-12">
            {journey.map((item, index) => {
              const isWork = item.category === "Experience";
              const CategoryIcon = isWork ? Briefcase : GraduationCap;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid lg:grid-cols-12 gap-8 items-start group"
                >
                  {/* LEFT COLUMN: Date & Meta (Desktop) */}
                  <div className="lg:col-span-3 lg:pr-10 lg:text-right space-y-2 pt-2">
                    <div className="font-mono text-2xl font-bold text-white/90 group-hover:text-cyan-300 transition-colors tracking-tight">
                      {item.period}
                    </div>

                    <div className="flex lg:justify-end items-center gap-2 text-xs text-white/40 font-light">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>

                    <div className="inline-block font-mono text-[10px] text-white/20 tracking-widest uppercase">
                      REF // {item.index}
                    </div>
                  </div>

                  {/* CENTER NODE: Floating indicator */}
                  <div className="hidden lg:flex lg:col-span-1 justify-center relative pt-2">
                    <div
                      className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${
                        item.current
                          ? "bg-[#0A0A0B] border-cyan-400 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                          : "bg-[#0A0A0B] border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white"
                      }`}
                    >
                      <CategoryIcon className="w-4 h-4" />
                      {item.current && (
                        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Interactive Dossier Card */}
                  <div className="lg:col-span-8">
                    <div
                      className={`relative rounded-3xl border backdrop-blur-xl p-8 lg:p-10 transition-all duration-500 overflow-hidden ${
                        item.current
                          ? "border-cyan-500/30 bg-[#121214]/60 shadow-[0_20px_80px_rgba(14,165,233,0.08)]"
                          : "border-white/[0.08] bg-[#121214]/30 hover:border-white/20 hover:bg-[#121214]/50"
                      }`}
                    >
                      {/* Corner subtle border accents */}
                      <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-white/20" />
                      <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-white/20" />

                      {/* Header bar within the card */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                        <div className="flex items-center gap-3">
                          <span
                            className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider border ${
                              isWork
                                ? "bg-cyan-400/10 border-cyan-400/20 text-cyan-300"
                                : "bg-purple-400/10 border-purple-400/20 text-purple-300"
                            }`}
                          >
                            {item.typeLabel}
                          </span>

                          {item.current && (
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Poste actuel
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-white/30 text-xs font-mono">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{item.institution}</span>
                        </div>
                      </div>

                      {/* Role & Core Description */}
                      <div className="mt-6 space-y-3">
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                            {item.role}
                          </h3>
                        </div>

                        <p className="text-white/60 text-base leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>

                      {/* Key highlights / bullets */}
                      <div className="mt-6 pt-6 border-t border-white/[0.04] space-y-2.5">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 block mb-3">
                          Key Deliverables & Learnings
                        </span>
                        {item.highlights.map((point, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400/80 mt-1 flex-shrink-0" />
                            <span className="text-xs text-white/70 font-light leading-normal">
                              {point}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags Footer */}
                      <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 rounded-xl bg-white/[0.02] border border-white/[0.08] text-xs font-mono text-white/60 hover:text-white hover:border-white/20 transition-colors"
                          >
                            {skill}
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

        {/* BOTTOM METRIC SUMMARY BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 p-8 rounded-3xl border border-white/[0.08] bg-[#121214]/20 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">
                Ouvert à de nouveaux défis
              </h4>
              <p className="text-xs text-white/40 font-light mt-0.5">
                Disponible pour des missions stimulantes en CDI, Freelance ou projets d'envergure.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            data-cursor="pointer"
            className="group px-6 py-3.5 rounded-full bg-white text-black font-medium text-xs tracking-wider uppercase inline-flex items-center gap-3 hover:bg-slate-200 transition-colors"
          >
            <span>Initier une collaboration</span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;