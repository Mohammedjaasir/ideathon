import { Mic, Globe, Sparkles, Users, Trophy, Award } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const TiltCard = ({ h }: { h: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      <div
        className="glass rounded-2xl p-6 group transition-all duration-300 h-full"
        style={{
          animation: "pulse-glow 4s ease-in-out infinite",
          animationDelay: `${Math.random() * 2}s`,
          transform: "translateZ(20px)",
        }}
      >
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center bg-secondary/20 mb-4 group-hover:bg-secondary/30 transition-colors"
          style={{ transform: "translateZ(50px)" }}
        >
          <h.icon className="text-secondary" size={24} />
        </div>
        <h3
          className="font-display font-semibold text-base mb-2 text-foreground"
          style={{ transform: "translateZ(40px)" }}
        >
          {h.title}
        </h3>
        <p
          className="text-muted-foreground text-sm leading-relaxed"
          style={{ transform: "translateZ(30px)" }}
        >
          {h.desc}
        </p>
      </div>
    </motion.div>
  );
};

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
      perspective: "1000px"
    }} />
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text">
          Why Participate?
        </h2>
        <div className="glass inline-block px-6 py-2 rounded-full border-primary/20 mb-6">
          <p className="text-xs uppercase tracking-widest text-primary font-bold">Domain: Agentic AI</p>
        </div>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm">
          Bring your creativity and building solutions that shape the future of autonomous systems.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
        {highlights.map((h) => (
          <TiltCard key={h.title} h={h} />
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
