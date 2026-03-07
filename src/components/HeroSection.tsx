import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const Stars = () => {
  const starsArray = Array.from({ length: 80 }).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: Math.random() * 100,
    left: Math.random() * 100,
    depth: Math.random() * 100, // Z-depth simulation
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 3,
  }));

  const { scrollY } = useScroll();
  const yRange = useTransform(scrollY, [0, 800], [0, -300]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: "1000px" }}>
      {starsArray.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-foreground/80"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            top: star.top + "%",
            left: star.left + "%",
            z: star.depth,
            opacity: useTransform(scrollY, [0, 500], [0.8, 0]),
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, hsl(280 60% 20%) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, hsl(320 50% 18%) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, hsl(340 40% 15%) 0%, transparent 50%), hsl(270 50% 8%)",
        perspective: "1200px",
      }}
    >
      <Stars />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px]"
        style={{ x: useTransform(mouseX, [-0.5, 0.5], [-50, 50]), y: useTransform(mouseY, [-0.5, 0.5], [-50, 50]) }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[120px]"
        style={{ x: useTransform(mouseX, [-0.5, 0.5], [50, -50]), y: useTransform(mouseY, [-0.5, 0.5], [50, -50]) }}
      />

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium"
        >
          Ideathon
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base md:text-lg text-muted-foreground mb-2"
        >
          Agentic AI Innovation Challenge
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base font-display tracking-widest text-secondary mb-6"
        >
          TEXPERIA' 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-glow gradient-text mb-6 leading-none pointer-events-none"
          style={{
            translateZ: "50px",
            filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5))"
          }}
        >
          THINK. ACT. BUILD
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl font-light text-foreground/90 mb-8 text-glow-sm max-w-2xl mx-auto leading-relaxed"
          style={{ translateZ: "30px" }}
        >
          Are you ready to explore how intelligent systems can think, plan, and act autonomously?
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-muted-foreground mb-10 text-sm md:text-base"
        >
          13 March &bull; 10:00 AM – 4:00 PM &bull; SNS College of Technology
        </motion.p>

        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfcuXcn7lFSqHfIY47O9ZfjRrbsYwM6vajyVHl9AEXDKWGyeg/formResponse"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, translateZ: "60px" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-primary-foreground transition-all"
          style={{
            background: "linear-gradient(135deg, hsl(280 80% 55%), hsl(320 70% 50%), hsl(340 80% 50%))",
            boxShadow: "0 10px 30px -10px hsl(280 80% 55%)",
            translateZ: "40px"
          }}
        >
          Register Now
        </motion.a>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
