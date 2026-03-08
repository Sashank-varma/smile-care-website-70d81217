import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import toothImg from "@/assets/tooth-hero.png";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 hero-animated-bg"
    >
      {/* Decorative blobs */}
      <div className="blob w-[500px] h-[500px] -top-40 -left-40" style={{ background: "hsl(174 80% 52% / 0.3)" }} />
      <div className="blob w-[400px] h-[400px] top-1/3 -right-32" style={{ background: "hsl(215 75% 55% / 0.2)" }} />
      <div className="blob w-[300px] h-[300px] bottom-10 left-1/4" style={{ background: "hsl(155 65% 42% / 0.15)" }} />

      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm font-medium text-primary"
          >
            <Star className="w-4 h-4 fill-current" />
            Trusted by 5,000+ Happy Patients
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Smile Care<br />
            <span className="bg-gradient-to-r from-primary via-[hsl(190,85%,48%)] to-[hsl(215,75%,55%)] bg-clip-text text-transparent">
              Dental Clinic
            </span>
          </h1>
          <p className="mt-3 text-lg font-semibold bg-gradient-to-r from-primary to-[hsl(190,85%,48%)] bg-clip-text text-transparent">
            Bringing Bright Smiles to Life ✨
          </p>
          <p className="mt-4 text-muted-foreground max-w-md leading-relaxed text-base">
            Experience exceptional dental care in a comfortable modern environment.
            Our professionals are dedicated to your oral health and confident smile.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="rounded-full px-8 text-base shadow-[0_0_25px_hsl(174,80%,52%,0.3)]">
                <a href="#contact">Book Appointment</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base border-primary/30 hover:border-primary/60">
                <a href="#services">Explore Services</a>
              </Button>
            </motion.div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 text-sm text-accent-foreground glass-card rounded-full px-4 py-2 icon-glow">
              ✨ Comfortable, modern care environment
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-accent-foreground glass-card rounded-full px-4 py-2">
              🩺 Caring dentists with advanced expertise
            </span>
          </div>
        </motion.div>

        {/* Floating illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center relative"
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full" style={{ background: "radial-gradient(circle, hsl(174 80% 52% / 0.15) 0%, transparent 70%)" }} />
          </div>
          <img
            src={toothImg}
            alt="Smiling tooth illustration"
            className="w-64 sm:w-80 lg:w-96 animate-float drop-shadow-2xl relative z-10"
          />
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V100H0V40Z" fill="hsl(210 30% 98%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
