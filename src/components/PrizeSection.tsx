import { Trophy, Star, Sparkles, Medal } from "lucide-react";
import { motion } from "framer-motion";

const particles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: Math.random() * 5 + 3,
    x: Math.random() * 100,
    delay: (Math.random() * 6).toFixed(1),
    duration: (Math.random() * 5 + 6).toFixed(1),
}));

const PrizeSection = () => (
    <section id="prize" className="py-24 px-4 relative overflow-hidden">
        {/* Background glow */}
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                background:
                    "radial-gradient(ellipse at 50% 50%, hsl(45 80% 30% / 0.15) 0%, hsl(30 60% 15% / 0.1) 40%, transparent 70%)",
            }}
        />

        {/* CSS-only floating particles */}
        {particles.map((p) => (
            <div
                key={p.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: p.size,
                    height: p.size,
                    left: `${p.x}%`,
                    top: "-10px",
                    background: "radial-gradient(circle, hsl(45 90% 65%), hsl(35 80% 50%))",
                    boxShadow: "0 0 6px hsl(45 90% 60% / 0.7)",
                    animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
                }}
            />
        ))}

        <div className="max-w-4xl mx-auto relative z-10 text-center">
            {/* Section label */}
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-xs uppercase tracking-[0.3em] font-bold mb-4"
                style={{ color: "hsl(45 80% 60%)" }}
            >
                🏆 Total Prize Pool
            </motion.p>

            {/* Main prize card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.88, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring" }}
                className="relative rounded-3xl p-10 md:p-16 mx-auto max-w-2xl"
                style={{
                    background:
                        "linear-gradient(135deg, hsl(45 60% 10% / 0.9) 0%, hsl(30 50% 8% / 0.95) 50%, hsl(270 40% 10% / 0.9) 100%)",
                    border: "1.5px solid hsl(45 90% 55% / 0.5)",
                    boxShadow:
                        "0 0 60px hsl(45 90% 50% / 0.2), 0 0 120px hsl(45 80% 40% / 0.1), inset 0 1px 0 hsl(45 90% 70% / 0.15)",
                }}
            >
                {/* CSS shimmer overlay */}
                <div
                    className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
                    style={{ opacity: 0.07 }}
                >
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "linear-gradient(105deg, transparent 30%, hsl(45 90% 70%) 50%, transparent 70%)",
                            backgroundSize: "200% 100%",
                            animation: "shimmer 4s linear 1s infinite",
                        }}
                    />
                </div>

                {/* Corner sparkles (static, no animation) */}
                <Sparkles size={18} className="absolute top-5 left-6" style={{ color: "hsl(45 90% 60% / 0.55)" }} />
                <Sparkles size={14} className="absolute top-5 right-8" style={{ color: "hsl(45 90% 60% / 0.35)" }} />
                <Star size={12} className="absolute bottom-6 left-10" style={{ color: "hsl(45 90% 60% / 0.3)" }} fill="currentColor" />
                <Star size={16} className="absolute bottom-5 right-6" style={{ color: "hsl(45 90% 60% / 0.45)" }} fill="currentColor" />

                {/* Trophy icon — CSS float animation */}
                <div className="flex justify-center mb-6">
                    <div
                        className="w-24 h-24 rounded-full flex items-center justify-center"
                        style={{
                            background: "radial-gradient(circle, hsl(45 80% 20% / 0.8), hsl(30 60% 12% / 0.9))",
                            border: "2px solid hsl(45 90% 55% / 0.6)",
                            boxShadow: "0 0 30px hsl(45 90% 55% / 0.35), 0 0 60px hsl(45 80% 45% / 0.15)",
                            animation: "float 3s ease-in-out infinite",
                        }}
                    >
                        <Trophy
                            size={44}
                            style={{
                                color: "hsl(45 90% 62%)",
                                filter: "drop-shadow(0 0 12px hsl(45 90% 60% / 0.7))",
                            }}
                        />
                    </div>
                </div>

                {/* Prize amount */}
                <h2
                    className="font-display font-black leading-none mb-3"
                    style={{
                        fontSize: "clamp(3.5rem, 10vw, 6rem)",
                        background:
                            "linear-gradient(135deg, hsl(45 90% 80%) 0%, hsl(38 85% 60%) 40%, hsl(28 80% 55%) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter: "drop-shadow(0 0 24px hsl(45 80% 55% / 0.4))",
                    }}
                >
                    ₹10,000
                </h2>

                <p className="font-display font-semibold text-lg mb-2" style={{ color: "hsl(45 70% 65%)" }}>
                    Cash Prize
                </p>
                <p className="text-muted-foreground text-sm">Awarded to the winning team</p>

                {/* Bottom badges */}
                <div className="flex items-center justify-center gap-4 mt-8">
                    {["Total Prize", "Best Innovation"].map((label) => (
                        <div
                            key={label}
                            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold"
                            style={{
                                background: "hsl(45 80% 15% / 0.6)",
                                border: "1px solid hsl(45 90% 50% / 0.4)",
                                color: "hsl(45 80% 70%)",
                            }}
                        >
                            <Medal size={12} />
                            {label}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default PrizeSection;
