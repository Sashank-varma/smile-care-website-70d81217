import { motion } from "framer-motion";
import { Sparkles, SmilePlus, HeartPulse, ShieldCheck, Syringe, Baby } from "lucide-react";

const neonGradients = [
  "linear-gradient(135deg, hsl(174 62% 95%), hsl(190 70% 92%))",
  "linear-gradient(135deg, hsl(200 60% 94%), hsl(220 55% 92%))",
  "linear-gradient(135deg, hsl(152 50% 94%), hsl(174 45% 92%))",
  "linear-gradient(135deg, hsl(260 50% 95%), hsl(200 60% 93%))",
  "linear-gradient(135deg, hsl(174 45% 93%), hsl(152 55% 91%))",
  "linear-gradient(135deg, hsl(190 60% 93%), hsl(260 40% 94%))",
];

const neonShadows = [
  "0 0 20px hsl(174 62% 50% / 0.15), 0 4px 20px hsl(174 62% 40% / 0.10)",
  "0 0 20px hsl(200 60% 50% / 0.15), 0 4px 20px hsl(200 60% 40% / 0.10)",
  "0 0 20px hsl(152 50% 50% / 0.15), 0 4px 20px hsl(152 50% 40% / 0.10)",
  "0 0 20px hsl(260 50% 55% / 0.15), 0 4px 20px hsl(260 50% 45% / 0.10)",
  "0 0 20px hsl(174 45% 50% / 0.15), 0 4px 20px hsl(174 45% 40% / 0.10)",
  "0 0 20px hsl(190 60% 50% / 0.15), 0 4px 20px hsl(190 60% 40% / 0.10)",
];

const neonShadowsHover = [
  "0 0 35px hsl(174 62% 50% / 0.35), 0 8px 30px hsl(174 62% 40% / 0.20)",
  "0 0 35px hsl(200 60% 50% / 0.35), 0 8px 30px hsl(200 60% 40% / 0.20)",
  "0 0 35px hsl(152 50% 50% / 0.35), 0 8px 30px hsl(152 50% 40% / 0.20)",
  "0 0 35px hsl(260 50% 55% / 0.35), 0 8px 30px hsl(260 50% 45% / 0.20)",
  "0 0 35px hsl(174 45% 50% / 0.35), 0 8px 30px hsl(174 45% 40% / 0.20)",
  "0 0 35px hsl(190 60% 50% / 0.35), 0 8px 30px hsl(190 60% 40% / 0.20)",
];

const services = [
  {
    icon: HeartPulse,
    title: "Dental Cleaning",
    description: "Professional cleaning and oral hygiene maintenance to keep your smile healthy.",
  },
  {
    icon: SmilePlus,
    title: "Braces & Orthodontics",
    description: "Solutions to straighten teeth and improve smile alignment.",
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Advanced cosmetic treatments including whitening and veneers.",
  },
  {
    icon: Syringe,
    title: "Root Canal Treatment",
    description: "Painless root canal therapy to save damaged teeth and relieve discomfort.",
  },
  {
    icon: ShieldCheck,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look and feel natural.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Gentle and friendly dental care designed especially for children.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-foreground"
        >
          Our Services
        </motion.h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl p-8 transition-all duration-300 bg-white border border-accent/60"
              style={{
                boxShadow: "0 4px 24px -4px hsl(174 62% 40% / 0.10), 0 1px 3px hsl(174 45% 50% / 0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 12px 36px -8px hsl(174 62% 40% / 0.22), 0 2px 8px hsl(174 45% 50% / 0.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 24px -4px hsl(174 62% 40% / 0.10), 0 1px 3px hsl(174 45% 50% / 0.06)";
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
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
