'use client';

import { motion } from 'framer-motion';
import { Calendar, FileSearch, PenTool, Ruler, Database, Table, BookOpen, ClipboardCheck } from 'lucide-react';

const skills = [
    { name: 'MS Project', category: 'Project Management', icon: Calendar },
    { name: 'Bluebeam', category: 'Documentation', icon: FileSearch },
    { name: 'AutoCAD', category: 'Design', icon: PenTool },
    { name: 'Rebar CAD', category: 'Design', icon: Ruler },
    { name: 'Oracle Aconex', category: 'Collaboration', icon: Database },
    { name: 'Excel', category: 'Analysis', icon: Table },
    { name: 'CSA/ACI Standards', category: 'Compliance', icon: BookOpen },
    { name: 'Quality Control', category: 'Inspection', icon: ClipboardCheck },
];

export default function Skills() {
    return (
        <section className="relative px-4 md:px-8 lg:px-16 bg-[var(--card-bg)]/30 flex justify-center">
            <div className="w-full max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex flex-col items-center">
                        <h2 className="text-5xl md:text-6xl font-black mb-8 text-[var(--foreground)]">
                            Technical <span className="underline-accent">Skills</span>
                        </h2>
                        <div className="w-full flex justify-center">
                            <p className="text-lg text-[var(--text-muted)] max-w-3xl text-center">
                                Proficient in industry-standard tools and methodologies for project management,
                                design, and quality assurance
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Skills Grid */}
                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-stretch">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl p-6 flex flex-col items-center hover:border-[var(--accent-green)] transition-all duration-300 cursor-pointer group w-full"
                            >
                                <div className="w-12 h-12 bg-[var(--accent-purple)]/10 rounded-lg mb-4 flex items-center justify-center group-hover:bg-[var(--accent-blue)] transition-colors duration-300">
                                    <Icon className="w-6 h-6 text-[var(--accent-purple)] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="font-bold text-[var(--foreground)] group-hover:text-[var(--accent-blue)] mb-1 text-center transition-colors duration-300">{skill.name}</h3>
                                <p className="text-xs text-[var(--text-muted)] group-hover:text-[var(--accent-blue)] text-center transition-colors duration-300">{skill.category}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
