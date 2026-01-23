'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: "Field Inspector",
        company: "Engtec Consulting Inc.",
        period: "May 2024 – Present",
        location: "Ontario, Canada",
        achievements: [
            "Conducted field testing for 50+ ICI projects, ensuring 100% compliance with OBC standards",
            "Reduced testing time by 15% via optimized workflows",
            "Collaborated with engineers to resolve design conflicts for $30M+ infrastructure upgrades"
        ]
    },
    {
        id: 2,
        role: "Structural Detailing Engineer",
        company: "Rebar Enterprises Inc.",
        period: "Feb 2023 – Sept 2023",
        location: "North York, ON",
        achievements: [
            "Interpreted structural and architectural drawings for rebar placement",
            "Created shop drawings and bar lists using AutoCAD and Rebar CAD per CSA/ACI standards",
            "Developed detailed timetables to ensure construction proceeded without delays"
        ]
    },
    {
        id: 3,
        role: "Project Coordinator",
        company: "Tekken-AML-Abenikko JV",
        period: "Jun 2018 – Aug 2021",
        location: "Dhaka, Bangladesh",
        achievements: [
            "Managed MS Project schedules for 8 project milestones with 95% on-time delivery",
            "Monitored $163M USD budget and prepared cash flow forecasts",
            "Improved financial tracking accuracy by 20% and reduced cost discrepancies by 9%"
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-[var(--section-bg)]">
            <div className="container-custom mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="section-label">Education & Experience</span>
                    <h2 className="section-title">My Resume</h2>
                    <p className="section-desc mx-auto mt-4">
                        A proven track record of delivering complex infrastructure projects on time and within budget.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-[var(--border)] transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-[var(--primary)] border-4 border-white shadow-md transform md:-translate-x-1/2 z-10" />

                                {/* Content Card */}
                                <div className="w-full md:w-1/2">
                                    <div className={`bg-[var(--card-bg)] p-8 rounded-2xl shadow-lg border border-[var(--border)] relative ${index % 2 === 0 ? 'md:-ml-4' : 'md:ml-4 pl-12' /* Adjust margin for spacing */
                                        } hover:shadow-xl transition-shadow`}>
                                        <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold uppercase tracking-wider">
                                                <Calendar className="w-3 h-3" /> {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-[var(--muted)]">
                                                <MapPin className="w-3 h-3" /> {exp.location}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-lg font-medium text-[var(--primary)] mb-4">
                                            {exp.company}
                                        </h4>

                                        <ul className="space-y-3">
                                            {exp.achievements.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-[var(--muted)] text-sm leading-relaxed">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Empty side for spacing */}
                                <div className="w-full md:w-1/2 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
