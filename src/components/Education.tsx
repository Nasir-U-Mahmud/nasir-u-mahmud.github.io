'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
    {
        degree: 'Master of Engineering',
        field: 'Civil Engineering',
        institution: 'University of Windsor',
        location: 'Windsor, ON, Canada',
        period: 'Sep 2021 – Dec 2022',
        gpa: '3.88/4.00',
        honors: ['Golden Key International Honour Society'],
    },
    {
        degree: 'Bachelor of Science',
        field: 'Civil Engineering',
        institution: 'Ahsanullah University of Science and Technology (AUST)',
        location: 'Dhaka, Bangladesh',
        period: 'Apr 2014 – May 2018',
        gpa: '3.13/4.00',
    },
];

const certifications = [
    'PMP (Pursuing)',
    'Project Management Competencies (PMC)',
    'WHMIS',
    'Working at Heights (2024)',
    'Radiation Safety & TDG – Portable Gauge User',
    'Engineering Intern (EIT) – PEO',
    'Member: OSPE, IEB',
];

export default function Education() {
    return (
        <section className="relative px-4 md:px-8 lg:px-16 flex justify-center">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-8 text-[var(--foreground)]">
                        Education & <span className="underline-accent">Certifications</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <GraduationCap className="w-8 h-8 text-[var(--accent-green)]" />
                            Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl px-6 py-6 hover:border-[var(--accent-purple)] transition-colors"
                                >
                                    <h4 className="text-xl font-bold text-[var(--foreground)] mb-2">{edu.degree}</h4>
                                    <p className="text-[var(--accent-green)] font-semibold mb-2">{edu.field}</p>
                                    <p className="text-[var(--text-muted)] mb-1">{edu.institution}</p>
                                    <p className="text-sm text-[var(--text-muted)] mb-2">{edu.location}</p>
                                    <p className="text-sm text-[var(--text-muted)] mb-2">{edu.period}</p>
                                    {edu.honors && (
                                        <div className="mt-3">
                                            {edu.honors.map((honor, i) => (
                                                <span key={i} className="inline-block text-xs px-3 py-1 bg-[var(--accent-green)]/10 text-[var(--accent-green)] rounded-full">
                                                    {honor}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Award className="w-8 h-8 text-[var(--accent-purple)]" />
                            Certifications & Affiliations
                        </h3>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl px-6 py-6"
                        >
                            <ul className="space-y-3">
                                {certifications.map((cert, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3 text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors"
                                    >
                                        <span className="text-[var(--accent-purple)] mt-1">✓</span>
                                        <span>{cert}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
