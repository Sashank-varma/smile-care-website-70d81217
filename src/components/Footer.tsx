import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container mx-auto px-4 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div>
        <h4 className="text-lg font-display font-bold mb-3">🦷 Smile Care Dental Clinic</h4>
        <p className="text-sm opacity-70 leading-relaxed">
          Bringing bright smiles to life with exceptional dental care.
        </p>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm opacity-80">
          <Phone className="w-4 h-4" /> +1 (555) 123-4567
        </div>
        <div className="flex items-center gap-3 text-sm opacity-80">
          <Mail className="w-4 h-4" /> hello@smilecare.com
        </div>
        <div className="flex items-center gap-3 text-sm opacity-80">
          <MapPin className="w-4 h-4" /> 123 Dental Ave, Suite 100, NY
        </div>
      </div>
      <div>
        <h5 className="font-semibold mb-3 text-sm">Follow Us</h5>
        <div className="flex gap-4">
          {["Instagram", "Facebook", "Twitter"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 lg:px-8 mt-8 pt-6 border-t border-primary-foreground/10">
      <p className="text-xs opacity-50 text-center">
        © {new Date().getFullYear()} Smile Care Dental Clinic. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
