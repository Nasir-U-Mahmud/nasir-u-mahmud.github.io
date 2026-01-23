'use client';

import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Award } from 'lucide-react';

const education = [
    {
        id: 1,
        degree: "Master of Engineering (M.Eng)",
        field: "Civil Engineering",
        institution: "University of Windsor",
        location: "Windsor, ON, Canada",
        period: "Sep 2021 – Dec 2022",
        note: "Golden Key International Honour Society"
    },
    {
        id: 2,
        degree: "Bachelor of Science",
        field: "Civil Engineering",
        institution: "Ahsanullah University of Science and Technology (AUST)",
        location: "Dhaka, Bangladesh",
        period: "Apr 2014 – May 2018",
        note: ""
    }
];

const certifications = [
    "Project Management Competencies (PMC)",
    "WHMIS",
    "Working at Heights (2024)",
    "Radiation Safety & TDG – Portable Gauge User",
    "Engineering Intern (EIT) – PEO"
];

export default function Education() {
    return (
        <section id="education" className="py-24 bg-[var(--section-bg)]">
            <div className="container-custom mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Education Timeline */}
                    <div>
                        <div className="mb-10">
                            <span className="section-label">Academic Background</span>
                            <h2 className="section-title text-2xl">Education</h2>
                        </div>

                        <div className="space-y-8 border-l-2 border-[var(--border)] pl-8 ml-4">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <span className="absolute -left-[41px] top-1 w-5 h-5 bg-white border-4 border-[var(--primary)] rounded-full" />

                                    <div className="flex items-center gap-2 text-sm text-[var(--primary)] font-bold uppercase tracking-wider mb-2">
                                        <Calendar className="w-4 h-4" /> {edu.period}
                                    </div>

                                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-[var(--foreground)] font-medium mb-1">{edu.field}</p>
                                    <p className="text-[var(--muted)]">{edu.institution}</p>

                                    {edu.note && (
                                        <p className="mt-2 text-sm text-[var(--primary)] font-medium bg-[var(--primary)]/5 inline-block px-3 py-1 rounded-md">
                                            {edu.note}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications List */}
                    <div>
                        <div className="mb-10">
                            <span className="section-label">Professional Credentials</span>
                            <h2 className="section-title text-2xl">Certifications</h2>
                        </div>

                        <div className="bg-[var(--card-bg)] rounded-2xl p-8 shadow-lg border border-[var(--border)]">
                            <ul className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-[var(--section-bg)] transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                                            <Award className="w-5 h-5 text-[var(--primary)]" />
                                        </div>
                                        <span className="font-medium text-[var(--foreground)]">{cert}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
