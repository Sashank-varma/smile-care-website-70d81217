import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { GripVertical } from "lucide-react";

import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";
import before4 from "@/assets/before-4.jpg";
import after4 from "@/assets/after-4.jpg";

const cases = [
  { before: before1, after: after1, title: "Teeth Whitening", description: "Professional whitening restored a bright, confident smile." },
  { before: before2, after: after2, title: "Braces Treatment", description: "Orthodontic alignment for a perfectly straight smile." },
  { before: before3, after: after3, title: "Dental Restoration", description: "Veneer restoration repaired and enhanced the natural look." },
  { before: before4, after: after4, title: "Dental Implants", description: "Seamless implant placement for a complete, natural-looking smile." },
];

const CompareSlider = ({ before, after }: { before: string; after: string }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => { dragging.current = true; };
  const handleMouseUp = () => { dragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square rounded-2xl overflow-hidden cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      style={{ boxShadow: "0 8px 30px hsl(220 30% 10% / 0.12)" }}
    >
      {/* After image (full background) */}
      <img src={after} alt="After treatment" className="absolute inset-0 w-full h-full object-cover" />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img src={before} alt="Before treatment" className="absolute inset-0 w-full h-full object-cover" style={{ width: containerRef.current?.offsetWidth || "100%", maxWidth: "none" }} />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 z-10 flex items-center"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-0.5 h-full" style={{ background: "linear-gradient(180deg, hsl(174 72% 42%), hsl(215 75% 55%))" }} />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
          style={{
            background: "linear-gradient(135deg, hsl(174 72% 42%), hsl(190 85% 48%))",
            boxShadow: "0 0 20px hsl(174 80% 52% / 0.4)",
          }}
        >
          <GripVertical className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-foreground/60 backdrop-blur-sm z-20">
        Before
      </span>
      <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white z-20" style={{ background: "hsl(174 72% 42% / 0.8)", backdropFilter: "blur(8px)" }}>
        After
      </span>
    </div>
  );
};

const BeforeAfterSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--section-gradient)" }}>
      <div className="blob w-[350px] h-[350px] top-20 -left-32" style={{ background: "hsl(215 75% 55% / 0.1)" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent text-accent-foreground mb-4">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Before & After
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Drag the slider to see the transformation — real cases, real smiles
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="space-y-4"
            >
              <CompareSlider before={c.before} after={c.after} />
              <div className="text-center">
                <h3 className="font-semibold text-foreground">{c.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
