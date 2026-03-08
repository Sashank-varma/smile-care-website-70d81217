import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle2, ArrowDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email"),
  phone: z.string().trim().min(7, "Phone is required").max(20),
});

const WEBHOOK_URL = "https://dentpro.app.n8n.cloud/webhook/ad7b26c0-33fb-4968-bc2c-63068d0a4600";

const AppointmentSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      setShowSuccess(true);
      setForm({ name: "", email: "", phone: "" });
    } catch {
      setShowSuccess(true);
      setForm({ name: "", email: "", phone: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(200 40% 96%) 0%, hsl(210 30% 98%) 100%)" }}>
      {/* Decorative blobs */}
      <div className="blob w-[350px] h-[350px] -bottom-20 -left-20" style={{ background: "hsl(174 80% 52% / 0.12)" }} />
      <div className="blob w-[250px] h-[250px] top-10 right-10" style={{ background: "hsl(215 75% 55% / 0.1)" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent text-accent-foreground mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Book Your Appointment
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Reach us directly or use the form and we'll get back to you.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-xl font-semibold text-foreground">Contact Details</h3>
            <div className="space-y-5">
              {[
                { icon: Phone, label: "7780453994", gradient: "linear-gradient(135deg, hsl(174 72% 42%), hsl(190 85% 48%))" },
                { icon: Mail, label: "projectd431@gmail.com", gradient: "linear-gradient(135deg, hsl(215 75% 55%), hsl(240 55% 62%))" },
                { icon: MapPin, label: "Vizinagaram", gradient: "linear-gradient(135deg, hsl(155 65% 42%), hsl(174 72% 42%))" },
              ].map(({ icon: Icon, label, gradient }) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-4 glass-card rounded-xl p-4"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: gradient }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{label}</span>
                </motion.div>
              ))}
            </div>

            {/* Emergency & 24/7 info */}
            <div className="glass-card rounded-xl p-5 space-y-3">
              <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                🚨 In case of emergency, contact us immediately
              </p>
              <ArrowDown className="w-4 h-4 text-primary mx-auto animate-bounce" />
              <a href="tel:7780453994" className="block text-center text-primary font-bold text-lg hover:underline">
                7780453994
              </a>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-1">
                <Clock className="w-4 h-4 text-primary" />
                <span>We confirm appointments <strong className="text-foreground">24/7</strong></span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 space-y-5"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <p className="text-sm font-semibold bg-gradient-to-r from-foreground via-primary to-[hsl(190,85%,48%)] bg-clip-text text-transparent">
              Fill the form & you'll get a call from our AI assistant 🤖
            </p>
            <div>
              <Input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="rounded-xl bg-background/60"
              />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <Input
                placeholder="Email Address"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="rounded-xl bg-background/60"
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <Input
                placeholder="Phone Number"
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="rounded-xl bg-background/60"
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
            </div>
            <Button type="submit" className="w-full rounded-xl" size="lg" disabled={loading}>
              {loading ? "Sending..." : "Book Appointment"}
            </Button>
          </motion.form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-2xl p-8 max-w-md w-full text-center space-y-4"
              style={{ boxShadow: "var(--glow-primary)" }}
            >
              <div
                className="mx-auto w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, hsl(174 72% 42%), hsl(155 65% 42%))" }}
              >
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Appointment Request Received!
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Thank you for contacting Smile Care Dental Clinic. We have received your
                appointment request. Our team will call you shortly to confirm your appointment.
              </p>
              <Button onClick={() => setShowSuccess(false)} className="rounded-xl">
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AppointmentSection;
