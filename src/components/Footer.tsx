import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220 30% 8%) 0%, hsl(220 25% 12%) 50%, hsl(174 30% 12%) 100%)" }}>
    <div className="py-12 text-white relative z-10">
      <div className="container mx-auto px-4 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-display font-bold mb-3 bg-gradient-to-r from-white via-[hsl(174,80%,70%)] to-white bg-clip-text text-transparent">
            🦷 Smile Care Dental Clinic
          </h4>
          <p className="text-sm opacity-70 leading-relaxed">
            Bringing bright smiles to life with exceptional dental care.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm opacity-80">
            <Phone className="w-4 h-4 text-[hsl(174,80%,60%)]" /> 7780453994
          </div>
          <div className="flex items-center gap-3 text-sm opacity-80">
            <Mail className="w-4 h-4 text-[hsl(190,85%,60%)]" /> projectd431@gmail.com
          </div>
          <div className="flex items-center gap-3 text-sm opacity-80">
            <MapPin className="w-4 h-4 text-[hsl(155,65%,55%)]" /> Vizinagaram
          </div>
        </div>
        <div>
          <h5 className="font-semibold mb-3 text-sm">Follow Us</h5>
          <div className="flex gap-4">
            {["Instagram", "Facebook", "Twitter"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-sm opacity-60 hover:opacity-100 hover:text-[hsl(174,80%,60%)] transition-all duration-300"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 mt-8 pt-6 border-t border-white/10">
        <p className="text-xs opacity-40 text-center">
          © {new Date().getFullYear()} Smile Care Dental Clinic. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
