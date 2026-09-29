import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Sparkles,
  ArrowUpRight,
  Copy,
  Check,
  Clock,
  MessageSquare,
  CheckCircle2,
  Loader2,
  ChevronUp,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Opportunité de recrutement",
    message: "",
  });

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [localTime, setLocalTime] = useState<string>("");

  // Horloge locale dynamique (Maroc - GMT+1)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Casablanca",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat("fr-FR", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const projectTypes = [
    "Offre de recrutement / Stage",
    "Mission Freelance / Projet",
    "Collaboration Open Source",
    "Autre échange",
  ];

  const contactChannels = [
    {
      id: "email",
      icon: Mail,
      label: "Courriel direct",
      value: "salah.lekhbioui@gmail.com",
      actionLabel: "Copier l'adresse",
      href: "mailto:salah.lekhbioui@gmail.com",
    },
    {
      id: "phone",
      icon: Phone,
      label: "Ligne directe",
      value: "+212 6 89 88 82 41",
      actionLabel: "Copier le numéro",
      href: "tel:+212689888241",
    },
    {
      id: "location",
      icon: MapPin,
      label: "Localisation",
      value: "Bouznika / Tanger, Maroc",
      actionLabel: "Disponible sur site & remote",
      href: "#",
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      handle: "/in/salah-eddine-lekhbioui",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      handle: "@salah-lekhbioui",
      href: "https://github.com",
      icon: Github,
    },
  ];

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    toast({
      title: "Copié dans le presse-papier",
      description: text,
    });
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs avant d'envoyer.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulation d'envoi API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message transmis avec succès",
        description: "Je reviendrai vers vous dans un délai de 24h.",
      });

      setFormData({
        name: "",
        email: "",
        subject: projectTypes[0],
        message: "",
      });
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen pt-32 pb-16 px-6 lg:px-16 bg-[#0A0A0B] overflow-hidden text-white"
    >
      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambiance Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-blue-500/[0.04] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-cyan-500/[0.03] blur-[140px] pointer-events-none" />

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
              (05) — Contact & Collaboration
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <h2
              className="lg:col-span-8 font-[900] leading-[0.9] tracking-[-0.04em]"
              style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
            >
              Let's create the{" "}
              <span className="italic font-[300] bg-gradient-to-r from-[#60A5FA] via-[#22D3EE] to-[#A78BFA] bg-clip-text text-transparent">
                next chapter.
              </span>
            </h2>

            <p className="lg:col-span-4 text-white/60 text-lg leading-relaxed font-light lg:pb-4">
              Vous avez un projet innovant, un poste à pourvoir ou souhaitez simplement
              échanger sur des sujets d'architecture logicielle ? Parlons-en.
            </p>
          </div>
        </motion.div>

        {/* MAIN CONTACT GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Dossier & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Status & Availability Card */}
            <div className="relative rounded-3xl border border-white/[0.08] bg-[#121214]/40 backdrop-blur-xl p-8 overflow-hidden">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-white/20" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-white/20" />

              <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      Disponible immédiatement
                    </h3>
                    <p className="text-xs font-mono text-white/40">
                      CDI • Stage • Missions Full-Stack
                    </p>
                  </div>
                </div>

                {/* Local time badge */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-white/60">
                  <Clock className="w-3.5 h-3.5 text-cyan-300" />
                  <span>{localTime || "GMT+1"}</span>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="mt-6 space-y-3">
                {contactChannels.map((channel) => {
                  const Icon = channel.icon;
                  const isCopied = copiedKey === channel.id;

                  return (
                    <div
                      key={channel.id}
                      className="group p-4 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-cyan-300 flex-shrink-0 group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 block">
                            {channel.label}
                          </span>
                          <a
                            href={channel.href}
                            className="text-sm font-medium text-white/90 hover:text-cyan-300 transition-colors truncate block"
                          >
                            {channel.value}
                          </a>
                        </div>
                      </div>

                      {channel.id !== "location" && (
                        <button
                          onClick={() => handleCopy(channel.value, channel.id)}
                          data-cursor="pointer"
                          className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.08] hover:text-white text-white/40 transition-all flex-shrink-0"
                          title={channel.actionLabel}
                        >
                          {isCopied ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Network Access */}
            <div className="grid grid-cols-2 gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="pointer"
                    className="group p-5 rounded-2xl border border-white/[0.08] bg-[#121214]/40 hover:bg-[#121214]/80 hover:border-white/20 transition-all flex items-center justify-between"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-white/40 group-hover:text-cyan-300 transition-colors" />
                        <span className="text-sm font-semibold text-white">
                          {social.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-white/30 block">
                        {social.handle}
                      </span>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white group-hover:rotate-45 transition-all" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT: Studio Message Dispatcher */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-[32px] border border-white/[0.08] bg-[#121214]/50 backdrop-blur-xl p-8 lg:p-10 overflow-hidden">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-white/20" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-white/20" />

              {/* Terminal-like form header */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Transmission directe
                    </h3>
                    <p className="text-xs font-mono text-white/40">
                      Message sécurisé via interface web
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest hidden sm:inline">
                  SECURE_COMMS // V2.5
                </span>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Message transmis avec succès
                  </h4>
                  <p className="text-sm text-white/60 max-w-md mx-auto font-light">
                    Merci pour votre message. Je prendrai connaissance de votre demande
                    et vous répondrai dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    data-cursor="pointer"
                    className="mt-6 px-6 py-2.5 rounded-full border border-white/10 text-xs font-mono text-white/80 hover:bg-white/5 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Project intent pills */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-white/40 block">
                      Objet de la prise de contact
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, subject: type })}
                          data-cursor="pointer"
                          className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                            formData.subject === type
                              ? "bg-white text-black font-semibold shadow-sm"
                              : "bg-white/[0.02] border border-white/[0.06] text-white/60 hover:text-white hover:border-white/20"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email in grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-white/40 block">
                        Votre nom / Organisation
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="ex. Jean Dupont"
                        className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/[0.08] text-white text-sm placeholder:text-white/20 outline-none focus:border-cyan-400 transition-colors font-light"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-white/40 block">
                        Adresse e-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean.dupont@entreprise.com"
                        className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/[0.08] text-white text-sm placeholder:text-white/20 outline-none focus:border-cyan-400 transition-colors font-light"
                      />
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-white/40 block">
                      Description de votre demande
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Détaillez votre projet, vos objectifs techniques, vos délais prévus ou la fiche de poste..."
                      className="w-full px-5 py-4 rounded-2xl bg-black/40 border border-white/[0.08] text-white text-sm placeholder:text-white/20 outline-none focus:border-cyan-400 transition-colors resize-none font-light leading-relaxed"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="pointer"
                    className="w-full py-4 px-8 rounded-full bg-white text-black font-semibold text-xs font-mono uppercase tracking-widest hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg shadow-white/5"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmission en cours...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmettre le message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* INTEGRATED FOOTER */}
        <footer className="mt-32 pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-bold text-white tracking-tight">
              SalahEddine Lekhbioui
            </div>
            <p className="text-xs font-mono text-white/40">
              © {new Date().getFullYear()} — Conçu et développé avec passion & précision.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs font-mono text-white/30">
              Built with React • Tailwind • Motion
            </span>

            <button
              onClick={scrollToTop}
              data-cursor="pointer"
              className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white text-white/40 transition-all group"
              title="Retour en haut"
            >
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;