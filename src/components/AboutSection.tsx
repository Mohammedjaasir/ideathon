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
        AI Innovation Challenge
      </h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 text-sm md:text-base leading-relaxed">
        The Department of Artificial Intelligence & Data Science at SNS College of Engineering, Coimbatore presents an Inter-College Ideathon, inviting students to explore innovative solutions for real-world problems using Artificial Intelligence.
        <br /><br />
        This ideathon brings together students from different academic years and skill levels to think creatively and design impactful AI-driven solutions. Whether you are just beginning to explore AI concepts or already working with advanced technologies, this platform encourages you to collaborate, brainstorm, and innovate.
        <br /><br />
        Participants will analyze real-life challenges, develop AI-based approaches, and present their ideas before a panel of judges.
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
