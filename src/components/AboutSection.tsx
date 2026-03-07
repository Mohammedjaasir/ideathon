import { Brain, Lightbulb, Rocket } from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "Think Bold",
    desc: "Challenge conventional thinking and explore groundbreaking ideas that push the boundaries of technology.",
  },
  {
    icon: Lightbulb,
    title: "Innovate",
    desc: "Transform raw concepts into viable solutions addressing real-world problems across industries.",
  },
  {
    icon: Rocket,
    title: "Launch Ideas",
    desc: "Pitch your vision to expert panels and gain mentorship to turn your ideas into impactful projects.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-4 relative">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
        Agentic AI Innovation Challenge
      </h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 text-sm md:text-base leading-relaxed">
        The Agentic AI Ideathon is an inter-college innovation challenge designed to bring together creative thinkers,
        problem solvers, and technology enthusiasts to design impactful solutions using the concept of Agentic AI.
        <br /><br />
        Agentic AI refers to intelligent systems capable of making decisions, planning tasks, and executing actions
        autonomously to achieve a defined goal. Participants will apply this concept to solve real-world problems
        through innovative and practical ideas.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="glass rounded-2xl p-8 text-center hover:scale-[1.02] transition-transform"
          >
            <div className="w-14 h-14 rounded-xl mx-auto mb-5 flex items-center justify-center bg-primary/20">
              <item.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-3 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
