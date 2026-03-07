import { Calendar, MapPin, Users, Clock } from "lucide-react";

const details = [
  { icon: Calendar, label: "Date", value: "13 March 2026", sub: "Day 2 of TEXPERIA" },
  { icon: MapPin, label: "Mode", value: "Offline", sub: "On-Campus (DT Playhouse)" },
  { icon: Users, label: "Team Size", value: "2 – 4 Members", sub: "Per team" },
  { icon: Clock, label: "Time", value: "10:00 AM – 4:00 PM", sub: "Full day event" },
];

const DetailsSection = () => (
  <section id="details" className="py-24 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
        Event Details
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {details.map((d) => (
          <div key={d.label} className="glass rounded-2xl p-6 text-center hover:scale-[1.03] transition-transform">
            <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-accent/20">
              <d.icon className="text-accent" size={26} />
            </div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{d.label}</p>
            <p className="font-display font-bold text-lg text-foreground">{d.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{d.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DetailsSection;
