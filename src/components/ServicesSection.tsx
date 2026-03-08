import { motion } from "framer-motion";
import { Sparkles, SmilePlus, HeartPulse, ShieldCheck, Syringe, Baby } from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Dental Cleaning",
    description: "Professional cleaning and oral hygiene maintenance to keep your smile healthy.",
    gradient: "linear-gradient(135deg, hsl(174 72% 42%), hsl(190 85% 48%))",
    glow: "0 8px 30px hsl(174 72% 42% / 0.3)",
    glowHover: "0 12px 40px hsl(174 72% 42% / 0.45), 0 0 60px hsl(190 85% 48% / 0.15)",
  },
  {
    icon: SmilePlus,
    title: "Braces & Orthodontics",
    description: "Solutions to straighten teeth and improve smile alignment.",
    gradient: "linear-gradient(135deg, hsl(215 75% 55%), hsl(240 55% 62%))",
    glow: "0 8px 30px hsl(215 75% 55% / 0.3)",
    glowHover: "0 12px 40px hsl(215 75% 55% / 0.45), 0 0 60px hsl(240 55% 62% / 0.15)",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Advanced cosmetic treatments including whitening and veneers.",
    gradient: "linear-gradient(135deg, hsl(155 65% 42%), hsl(174 72% 42%))",
    glow: "0 8px 30px hsl(155 65% 42% / 0.3)",
    glowHover: "0 12px 40px hsl(155 65% 42% / 0.45), 0 0 60px hsl(174 72% 42% / 0.15)",
  },
  {
    icon: Syringe,
    title: "Root Canal Treatment",
    description: "Painless root canal therapy to save damaged teeth and relieve discomfort.",
    gradient: "linear-gradient(135deg, hsl(190 85% 48%), hsl(215 75% 55%))",
    glow: "0 8px 30px hsl(190 85% 48% / 0.3)",
    glowHover: "0 12px 40px hsl(190 85% 48% / 0.45), 0 0 60px hsl(215 75% 55% / 0.15)",
  },
  {
    icon: ShieldCheck,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look and feel natural.",
    gradient: "linear-gradient(135deg, hsl(240 55% 62%), hsl(280 50% 58%))",
    glow: "0 8px 30px hsl(240 55% 62% / 0.3)",
    glowHover: "0 12px 40px hsl(240 55% 62% / 0.45), 0 0 60px hsl(280 50% 58% / 0.15)",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Gentle and friendly dental care designed especially for children.",
    gradient: "linear-gradient(135deg, hsl(174 72% 42%), hsl(155 65% 42%))",
    glow: "0 8px 30px hsl(174 72% 42% / 0.3)",
    glowHover: "0 12px 40px hsl(174 72% 42% / 0.45), 0 0 60px hsl(155 65% 42% / 0.15)",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{ background: "var(--section-gradient)" }}>
      {/* Decorative blob */}
      <div className="blob w-[400px] h-[400px] top-20 -right-40" style={{ background: "hsl(174 80% 52% / 0.12)" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent text-accent-foreground mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Comprehensive dental care tailored to every smile
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group rounded-2xl p-8 transition-all duration-300 glass-card cursor-default"
              style={{ boxShadow: service.glow }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = service.glowHover;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = service.glow;
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: service.gradient }}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
