import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import toothImg from "@/assets/tooth-hero.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Smile Care<br />
            <span className="text-primary">Dental Clinic</span>
          </h1>
          <p className="mt-3 text-lg font-medium text-primary/80">
            Bringing Bright Smiles to Life
          </p>
          <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
            Experience exceptional dental care in a comfortable modern environment.
            Our professionals are dedicated to your oral health and confident smile.
          </p>
          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button asChild size="lg" className="rounded-full px-8 text-base">
              <a href="#contact">Book Appointment</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src={toothImg}
            alt="Smiling tooth illustration"
            className="w-64 sm:w-80 lg:w-96 animate-float drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
