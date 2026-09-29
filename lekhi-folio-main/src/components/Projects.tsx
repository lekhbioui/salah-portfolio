import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Building2,
  ShoppingBag,
  Car,
  Users,
  Layers,
  Code2,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Terminal,
  Activity,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: "all" | "enterprise" | "fullstack" | "tools";
  categoryLabel: string;
  status: "En Production" | "Terminé" | "En Évolution";
  clientOrContext: string;
  year: string;
  icon: typeof Building2;
  description: string;
  metrics?: { label: string; value: string }[];
  technologies: string[];
  highlights: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>("matrice");

  const categories = [
    { id: "all", label: "Tous les projets" },
    { id: "enterprise", label: "Entreprise & RH" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "tools", label: "Automatisation & PFE" },
  ];

  const projects: Project[] = [
    {
      id: "matrice",
      title: "Matrice de Formation & Compétences",
      subtitle: "Système de gouvernance RH & Gestion des qualifications",
      image: "/projects/matrice.png",
      category: "enterprise",
      categoryLabel: "Application Entreprise",
      status: "En Production",
      clientOrContext: "PREMO Group",
      year: "2024 - 2025",
      icon: Building2,
      description:
        "Plateforme métier stratégique permettant de cartographier, évaluer et piloter en temps réel la matrice des compétences industrielles de centaines d'opérateurs et cadres.",
      metrics: [
        { label: "Utilisateurs actifs", value: "300+" },
        { label: "Gain de temps RH", value: "65%" },
        { label: "Disponibilité", value: "99.9%" },
      ],
      technologies: ["Django", "Python", "PostgreSQL", "JavaScript ES6+", "REST API", "Tailwind CSS"],
      highlights: [
        "Architecture RBAC multi-niveaux (Opérateur, Superviseur, Responsable RH, Admin)",
        "Calcul automatique des écarts de compétences et génération de plans de formation",
        "Tableau de bord décisionnel avec visualisations analytiques en temps réel",
        "Export et synchronisation automatisée des données RH",
      ],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      id: "transport",
      title: "Planning Transport & Shifts",
      subtitle: "Optimisation de la logistique du personnel",
      image: "/projects/transport.png",
      category: "enterprise",
      categoryLabel: "Logistique & RH",
      status: "En Production",
      clientOrContext: "PREMO Group",
      year: "2024",
      icon: Layers,
      description:
        "Solution sur-mesure pour planifier les rotations d'équipes (3x8), gérer les navettes de transport et réduire les conflits d'affectation hebdomadaires.",
      metrics: [
        { label: "Gestion des shifts", value: "24/7" },
        { label: "Taux d'erreur", value: "≈ 0%" },
      ],
      technologies: ["Django", "Python", "PostgreSQL", "Pandas", "Bootstrap 5"],
      highlights: [
        "Affectation intelligente des lignes de bus en fonction des adresses employés",
        "Moteur de transfert d'équipe instantané avec détection de doublons",
        "Exportation des feuilles de route journalières au format Excel / PDF",
      ],
      links: {
        github: "#",
      },
    },
    {
      id: "ecommerce",
      title: "Plateforme E-Commerce Modulaire",
      subtitle: "Architecture découplée React & Django REST",
      image: "/projects/ecommerce.png",
      category: "fullstack",
      categoryLabel: "Full-Stack Web App",
      status: "Terminé",
      clientOrContext: "Projet Personnel",
      year: "2024",
      icon: ShoppingBag,
      description:
        "Application e-commerce moderne à haute performance dotée d'une gestion d'inventaire en direct, d'un panier persistant et d'une sécurité JWT renforcée.",
      metrics: [
        { label: "Lighthouse Score", value: "98/100" },
        { label: "Temps de réponse API", value: "< 80ms" },
      ],
      technologies: ["React.js", "TypeScript", "Django REST", "PostgreSQL", "Tailwind CSS", "JWT"],
      highlights: [
        "Authentification sécurisée avec rafraîchissement silencieux de token JWT",
        "Filtrage multi-critères instantané et recherche textuelle optimisée",
        "Back-office administrateur complet avec gestion des stocks et commandes",
      ],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      id: "employes",
      title: "Automatisation RH & Cérémonial",
      subtitle: "Générateur dynamique de présentations",
      image: "/projects/employes.png",
      category: "tools",
      categoryLabel: "Tooling & Automation",
      status: "Terminé",
      clientOrContext: "PREMO Group",
      year: "2024",
      icon: Users,
      description:
        "Outil d'automatisation interne qui parse les données RH, traite les photos de profil et génère en un clic les diaporamas PowerPoint pour les événements d'entreprise.",
      technologies: ["Django", "Python", "python-pptx", "Pillow", "OpenPyXL"],
      highlights: [
        "Parsing et validation automatique de feuilles de calcul Excel complexes",
        "Recadrage et optimisation automatique des photos employés",
        "Génération de présentations .PPTX prêtes pour les écrans d'accueil",
      ],
      links: {
        github: "#",
      },
    },
    {
      id: "covoiturage",
      title: "Plateforme de Covoiturage Urbain",
      subtitle: "Projet de Fin d'Études",
      image: "/projects/covoiturage.png",
      category: "tools",
      categoryLabel: "PFE & Académique",
      status: "Terminé",
      clientOrContext: "OFPPT ISTA",
      year: "2024",
      icon: Car,
      description:
        "Système de mise en relation de conducteurs et passagers pour les trajets quotidiens avec calcul de coûts partagés et notation des profils.",
      technologies: ["React.js", "Spring Boot", "MySQL", "REST API", "Leaflet Maps"],
      highlights: [
        "Calcul d'itinéraires et points de rencontre dynamiques",
        "Système d'avis et de réputation pour sécuriser les trajets",
        "Architecture micro-services découplée pour le backend",
      ],
      links: {
        github: "#",
      },
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projets"
      className="relative min-h-screen py-32 px-6 lg:px-16 bg-[#0A0A0B] overflow-hidden text-white"
    >
      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambiance Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.04] blur-[140px] pointer-events-none" />

      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
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
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-white/30" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/60 font-medium">
              (04) — Selected Works
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <h2
              className="lg:col-span-8 font-[900] leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              Crafting real-world{" "}
              <span className="italic font-[300] bg-gradient-to-r from-[#60A5FA] via-[#22D3EE] to-[#A78BFA] bg-clip-text text-transparent">
                digital products.
              </span>
            </h2>

            <p className="lg:col-span-4 text-white/60 text-lg leading-relaxed font-light lg:pb-4">
              Des applications industrielles en production aux architectures Full-Stack complexes,
              chaque projet répond à un problème concret.
            </p>
          </div>

          {/* FILTER PILLS */}
          <div className="mt-12 flex flex-wrap items-center gap-3 pt-8 border-t border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                data-cursor="pointer"
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                  activeFilter === cat.id
                    ? "bg-white text-black font-semibold shadow-lg shadow-white/10 scale-105"
                    : "bg-white/[0.03] text-white/60 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              const isExpanded = expandedProjectId === project.id;
              const isHeroCard = index === 0 && activeFilter === "all";

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative rounded-[32px] border border-white/[0.08] bg-[#121214]/40 backdrop-blur-xl hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                    isHeroCard ? "lg:col-span-12" : "lg:col-span-6"
                  }`}
                >
                  {/* Subtle inner corner guides */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-white/20 z-20 pointer-events-none" />
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-white/20 z-20 pointer-events-none" />

                  {/* TOP: Browser / Viewport Window */}
                  <div>
                    {/* Window Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-white/[0.01]">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <span className="ml-2 text-[10px] font-mono text-white/30 truncate max-w-[200px]">
                          app://{project.id}.production.premo
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono uppercase text-white/40 tracking-wider">
                          {project.year}
                        </span>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {project.status}
                        </div>
                      </div>
                    </div>

                    {/* Media Showcase container */}
                    <div className="relative overflow-hidden bg-black/40 border-b border-white/[0.06] group/image">
                      <div
                        className={`relative w-full overflow-hidden ${
                          isHeroCard ? "h-72 sm:h-96" : "h-64 sm:h-72"
                        }`}
                      >
                        {/* Fallback stylized artwork if image is missing */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#121214] to-cyan-900/10 flex items-center justify-center">
                          <Icon className="w-20 h-20 text-white/10 group-hover/image:scale-110 transition-transform duration-700" />
                        </div>

                        {/* Real image if present */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                          onError={(e) => {
                            // Fallback gracefully to background art
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />

                        {/* Ambient gradient fade over image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-80" />

                        {/* Context Badge overlay */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-white/80">
                          <Icon className="w-3.5 h-3.5 text-cyan-300" />
                          <span>{project.clientOrContext}</span>
                        </div>
                      </div>
                    </div>

                    {/* CARD BODY CONTENT */}
                    <div className="p-8 space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">
                            {project.categoryLabel}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-xs font-mono text-white/40">
                          // {project.subtitle}
                        </p>
                      </div>

                      <p className="text-white/60 text-sm leading-relaxed font-light">
                        {project.description}
                      </p>

                      {/* Performance Metrics (If Available) */}
                      {project.metrics && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-4 border-y border-white/[0.06]">
                          {project.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="space-y-0.5">
                              <div className="text-lg font-bold text-white font-mono tracking-tight">
                                {m.value}
                              </div>
                              <div className="text-[10px] uppercase font-mono tracking-wider text-white/40">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-white/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM ACCORDION / DRAWER */}
                  <div className="px-8 pb-8 pt-0">
                    <button
                      onClick={() =>
                        setExpandedProjectId(isExpanded ? null : project.id)
                      }
                      data-cursor="pointer"
                      className="w-full py-3.5 px-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 flex items-center justify-between text-xs font-mono tracking-wider text-white/80 group/btn"
                    >
                      <span className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                        {isExpanded ? "Masquer les détails techniques" : "Inspecter les spécifications"}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-white/40 transition-transform duration-300 ${
                          isExpanded ? "rotate-180 text-cyan-300" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-6 space-y-6">
                            <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.05] space-y-3">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300/80 block">
                                Livrables & Architecture
                              </span>
                              <div className="space-y-2">
                                {project.highlights.map((item, hIdx) => (
                                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-white/70 font-light leading-relaxed">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Direct External Links */}
                            <div className="flex items-center gap-3">
                              {project.links.github && (
                                <a
                                  href={project.links.github}
                                  target="_blank"
                                  rel="noreferrer"
                                  data-cursor="pointer"
                                  className="flex-1 py-3 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-xs font-mono flex items-center justify-center gap-2 text-white"
                                >
                                  <Github className="w-4 h-4" />
                                  <span>Repository</span>
                                </a>
                              )}
                              {project.links.demo && (
                                <a
                                  href={project.links.demo}
                                  target="_blank"
                                  rel="noreferrer"
                                  data-cursor="pointer"
                                  className="flex-1 py-3 rounded-xl bg-white text-black font-semibold hover:bg-slate-200 transition-all text-xs font-mono flex items-center justify-center gap-2"
                                >
                                  <span>Live Demo</span>
                                  <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM GITHUB ARCHIVE CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            data-cursor="pointer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/30 transition-all duration-300 text-sm font-mono text-white/80 group"
          >
            <Github className="w-4 h-4 text-cyan-300" />
            <span>Voir plus de dépôts et prototypes sur GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:rotate-45 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;