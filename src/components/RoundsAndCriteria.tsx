import { motion } from "framer-motion";
import { ListChecks, Timer, Workflow, Lightbulb } from "lucide-react";

const rounds = [
    {
        title: "Round 1 – Problem Reveal & Idea Pitch",
        desc: "The problem statements will be revealed on the spot. Teams brainstorm and present a short pitch.",
        details: [
            "Problem statement revealed during the event",
            "Quick brainstorming for innovative solutions",
            "Pitch: Problem context, Proposed solution, Agentic AI execution"
        ],
        icon: Timer
    },
    {
        title: "Round 2 – Innovation Sprint",
        desc: "Shortlisted teams research and refine their solutions into conceptual prototypes or workflows.",
        details: [
            "Architecture diagrams & system workflows",
            "UI/UX mockups & conceptual prototypes",
            "Technical implementation strategies & real-world impact"
        ],
        icon: Workflow
    }
];

const criteria = [
    "Problem Understanding",
    "Innovation & Creativity",
    "Feasibility of the Idea",
    "Practical Impact",
    "Clarity of Presentation"
];

const RoundsAndCriteria = () => (
    <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Rounds Section */}
                <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 gradient-text">
                        Round Structure
                    </h2>
                    <div className="space-y-8">
                        {rounds.map((round, idx) => (
                            <motion.div
                                key={round.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className="glass rounded-2xl p-8 relative"
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center border-4 border-background shadow-lg">
                                    <round.icon className="text-primary-foreground" size={24} />
                                </div>
                                <h3 className="font-display font-bold text-xl mb-3 text-foreground mt-2">{round.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{round.desc}</p>
                                <ul className="space-y-3">
                                    {round.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-3 text-xs text-foreground/80">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Criteria & Participation Section */}
                <div className="space-y-12 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glass rounded-2xl p-8 border-primary/20"
                    >
                        <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
                            <div className="p-3 rounded-lg bg-secondary/20 items-center justify-center">
                                <ListChecks className="text-secondary" size={32} />
                            </div>
                            <h2 className="font-display text-3xl font-bold gradient-text">Evaluation Criteria</h2>
                        </div>
                        <div className="grid sm:grid-cols-1 gap-4">
                            {criteria.map((item, idx) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <span className="font-display text-secondary font-bold">0{idx + 1}</span>
                                    <p className="text-sm font-medium">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Participant Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="glass rounded-2xl p-8 border-accent/20"
                    >
                        <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                            <div className="p-3 rounded-lg bg-accent/20">
                                <Lightbulb className="text-accent" size={32} />
                            </div>
                            <h2 className="font-display text-3xl font-bold gradient-text">Who Can Participate?</h2>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Students from any discipline who are passionate about innovation, technology, and problem-solving
                            are encouraged to participate. Bring your creativity and innovative mindset to the stage!
                        </p>
                        <div className="inline-block px-6 py-2 rounded-full bg-accent/10 border border-accent/20">
                            <p className="text-xs font-bold text-accent tracking-widest uppercase">Any discipline • Tech Enthusiasts • Thinkers</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
);

export default RoundsAndCriteria;
