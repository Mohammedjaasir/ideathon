import { Phone, User } from "lucide-react";

const coordinators = [
  {
    role: "Faculty Coordinator",
    name: "Ms. N. Ramyadevi",
    phone: "+91 87558 81203",
    tel: "+918755881203",
  },
  {
    role: "Student Coordinator",
    name: "Swetha S – III AIDS",
    phone: "+91 73391 24126",
    tel: "+917339124126",
  },
];

const ContactSection = () => (
  <section id="contact" className="py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
        Contact Us
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {coordinators.map((c) => (
          <div key={c.name} className="glass rounded-2xl p-8 text-center hover:scale-[1.02] transition-transform">
            <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-primary/20">
              <User className="text-primary" size={26} />
            </div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{c.role}</p>
            <h3 className="font-display font-semibold text-lg text-foreground mb-3">{c.name}</h3>
            <a
              href={`tel:${c.tel}`}
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium"
            >
              <Phone size={16} />
              {c.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
