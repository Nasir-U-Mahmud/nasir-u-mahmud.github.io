'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        title: 'Field Inspector',
        company: 'Engtec Consulting Inc.',
        location: 'Mississauga, ON, Canada',
        period: 'May 2024 – Present',
        projects: ['Hurontario LRT', 'Pavement Rehabilitation – BGO Retails', 'Pavement Rehabilitation – QuadReal IND'],
        achievements: [
            'Conducted field testing for 50+ ICI projects, ensuring 100% compliance with OBC standards',
            'Reduced testing time by 15% via optimized workflows',
            'Collaborated with engineers to resolve design conflicts for $30M+ infrastructure upgrades',
            'Identified 20+ discrepancies and implemented corrective actions',
            'Improved team accessibility to critical project data by 15%',
        ],
    },
    {
        title: 'Structural Detailing Engineer',
        company: 'Rebar Enterprises Inc.',
        location: 'North York, ON, Canada',
        period: 'Feb 2023 – Sept 2023',
        projects: ['Royal Bayview', 'Viva Leaside', 'Stafford 181 Sheppard Ave E'],
        achievements: [
            'Interpreted structural and architectural drawings for rebar placement',
            'Created shop drawings and bar lists using AutoCAD and Rebar CAD per CSA/ACI standards',
            'Developed detailed timetables to ensure construction proceeded without delays',
            'Conducted site visits to assist with placement and fabrication challenges',
        ],
    },
    {
        title: 'Project Coordinator',
        company: 'Tekken-AML-Abenikko JV',
        location: 'Dhaka, Bangladesh',
        period: 'Jun 2018 – Aug 2021',
        projects: ['Dhaka Mass Rapid Transit (DMRT) Line – 06, CP-05 ($163M USD)'],
        achievements: [
            'Managed MS Project schedules for 8 project milestones with 95% on-time delivery',
            'Monitored $163M USD budget and prepared cash flow forecasts',
            'Improved financial tracking accuracy by 20%',
            'Coordinated 15+ subcontractors, engineers, and clients',
            'Reduced cost discrepancies by 9% through effective site meetings',
            'Maintained 95% on-time invoicing and procurement compliance',
            'Executed quantity takeoffs for 40+ bid items with 98% accuracy',
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative px-4 md:px-8 lg:px-16 flex justify-center">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex flex-col items-center">
                        <h2 className="text-5xl md:text-6xl font-black mb-8 text-[var(--foreground)]">
                            Work <span className="underline-accent">Experience</span>
                        </h2>
                        <div className="w-full flex justify-center">
                            <p className="text-lg text-[var(--text-muted)] max-w-3xl text-center">
                                A proven track record of delivering complex infrastructure projects on time and within budget
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border-color)]"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative mb-16 md:mb-24 md:pl-1/2 md:ml-auto"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 bg-[var(--accent-green)] rounded-full transform -translate-x-1/2 border-4 border-[var(--background)] z-10"></div>

                            {/* Content Card */}
                            <div className="ml-16 md:ml-0 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl px-8 py-8 hover:border-[var(--accent-purple)] transition-colors duration-300">
                                {/* Header */}
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">{exp.title}</h3>
                                    <p className="text-lg text-[var(--accent-green)] font-semibold mb-2">{exp.company}</p>

                                    <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)]">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Projects */}
                                {exp.projects.length > 0 && (
                                    <div className="mb-4">
                                        <p className="text-sm font-semibold text-[var(--accent-purple)] mb-2">Projects:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.projects.map((project, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs px-3 py-1 bg-[var(--background)] border border-[var(--border-color)] rounded-full text-[var(--text-muted)]"
                                                >
                                                    {project}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Achievements */}
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="flex items-start gap-2 text-[var(--text-muted)]">
                                            <span className="text-[var(--accent-green)] mt-1">▸</span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
