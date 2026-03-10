import { Mic, Globe, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: Sparkles, title: "Emerging Field", desc: "Explore the cutting-edge and rapidly growing field of Agentic AI." },
  { icon: Users, title: "Collaboration", desc: "Work collaboratively with peers from different colleges and backgrounds." },
  { icon: Mic, title: "Expert Feedback", desc: "Present innovative ideas to expert judges and industry professionals." },
  { icon: Globe, title: "Real-World Impact", desc: "Gain hands-on experience in solving real-world problems with autonomous AI." },
];

const HighlightsSection = () => (
  <section id="highlights" className="py-24 px-4 relative">
    <div className="absolute inset-0 pointer-events-none" style={{
      background: "radial-gradient(ellipse at 50% 0%, hsl(280 50% 15% / 0.5) 0%, transparent 60%)",
    }} />
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text">
          Why Participate?
        </h2>
        <div className="glass inline-block px-6 py-2 rounded-full border-primary/20 mb-6">
          <p className="text-xs uppercase tracking-widest text-primary font-bold">Domain: Artificial Intelligence (Mixed AI Domain)</p>
        </div>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          The ideathon focuses on applying AI to solve real-world problems. Problem statements may range from basic to advanced levels, ensuring participants from different academic years can contribute meaningful ideas and solutions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 group transition-transform duration-300 hover:scale-[1.04] hover:-translate-y-1 h-full"
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-secondary/20 mb-4 group-hover:bg-secondary/30 transition-colors">
              <h.icon className="text-secondary" size={24} />
            </div>
            <h3 className="font-display font-semibold text-base mb-2 text-foreground">{h.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;

