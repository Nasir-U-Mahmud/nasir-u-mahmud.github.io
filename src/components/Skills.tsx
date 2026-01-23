'use client';

import { motion } from 'framer-motion';

const skills = [
    { name: "MS Project", category: "Project Management" },
    { name: "Bluebeam Revu", category: "Documentation" },
    { name: "AutoCAD", category: "Design" },
    { name: "Rebar CAD", category: "Design" },
    { name: "Oracle Aconex", category: "Collaboration" },
    { name: "Excel", category: "Analysis" },
    { name: "CSA/ACI Standards", category: "Compliance" },
    { name: "Quality Control", category: "Inspection" }
];

export default function Skills() {
    return (
        <section className="py-20 bg-[var(--background)] border-t border-[var(--border)]">
            <div className="container-custom mx-auto">
                <div className="text-center mb-12">
                    <h2 className="section-title text-3xl">Technical Skills</h2>
                    <p className="section-desc mx-auto mt-2">
                        Proficient in industry-standard tools and methodologies for project management, design, and quality assurance.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="group bg-[var(--card-bg)] p-6 rounded-xl shadow-md border border-[var(--border)] text-center hover:shadow-lg hover:border-[var(--primary)] transition-all cursor-default"
                        >
                            <h3 className="text-lg font-bold text-[var(--foreground)] mb-1 group-hover:text-[var(--primary)] transition-colors">
                                {skill.name}
                            </h3>
                            <p className="text-sm text-[var(--primary)] font-medium">
                                {skill.category}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
