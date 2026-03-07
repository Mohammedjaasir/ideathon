import { ExternalLink } from "lucide-react";

const RegisterSection = () => (
  <section id="register" className="py-24 px-4 relative">
    <div className="absolute inset-0 pointer-events-none" style={{
      background: "radial-gradient(ellipse at 50% 100%, hsl(320 50% 15% / 0.4) 0%, transparent 60%)",
    }} />

    <div className="max-w-3xl mx-auto relative z-10 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 gradient-text">
        Register Now
      </h2>
      <p className="text-muted-foreground mb-10 text-sm md:text-base">
        Secure your spot in IDEATHON. Click the button below to register your team.
      </p>

      <div className="block">
        <p className="text-muted-foreground text-sm mb-6">
          Registration Fee: <span className="font-display font-bold text-foreground">₹200</span> per head
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSezDufiSg5Lj8v-4IS-vQyR-8M7qK7H70Rb-cCE4h9_I_5wUQ/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-display font-bold text-primary-foreground text-lg transition-all hover:scale-105"
          style={{
            background: "linear-gradient(135deg, hsl(280 80% 55%), hsl(320 70% 50%), hsl(340 80% 50%))",
            animation: "pulse-glow 3s ease-in-out infinite",
          }}
        >
          Register Now <ExternalLink size={20} />
        </a>
      </div>
    </div>
  </section>
);

export default RegisterSection;
