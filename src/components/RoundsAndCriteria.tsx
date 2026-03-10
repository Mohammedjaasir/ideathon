import { motion } from "framer-motion";
import { ListChecks, Timer, Lightbulb } from "lucide-react";

const rounds = [
    {
        title: "Round Details",
        desc: "The ideathon will be conducted in a single combined round. At the beginning of the event, multiple real-world problem statements will be revealed on the spot. Participants must choose one of the given problems and work on designing an innovative AI-based solution. After the problem statements are announced, teams will be given dedicated time during the event to:",
        details: [
            "Understand and analyze the selected problem",
            "Brainstorm possible solution ideas",
            "Research and explore how AI technologies can be applied",
            "Design a solution approach or system workflow",
            "Prepare a short presentation explaining their idea",
        ],
        footer: "Participants are encouraged to think creatively and propose practical AI-driven solutions. Teams may present their approach using conceptual architectures, workflow diagrams, prototype ideas, or solution strategies.",
        icon: Timer
    },
    {
        title: "Final Idea Pitch",
        desc: "At the end of the ideation period, each team will deliver a short presentation pitch to the judges. During the pitch, teams should clearly explain:",
        details: [
            "The problem they selected",
            "Their proposed AI-based solution",
            "The approach or workflow of their system",
            "The potential impact of their idea in solving the real-world problem",
        ],
        icon: Lightbulb
    },
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
                                {'footer' in round && (
                                    <p className="text-muted-foreground text-sm mt-6 leading-relaxed">
                                        {round.footer}
                                    </p>
                                )}
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
                            Students from any discipline who are interested in Artificial Intelligence, innovation, and problem solving are encouraged to participate. The event welcomes participants from all academic years, providing an opportunity to collaborate, learn, and showcase creative ideas.
                            <br /><br />
                            Join us for an exciting ideathon where ideas meet innovation and AI is used to design solutions for real-world challenges.
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
