'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, HardHat, Layout, MonitorCheck, Users } from 'lucide-react';

const specializations = [
    {
        title: "Project Coordination",
        icon: ClipboardCheck,
        code: "SPC-01",
        desc: "End-to-end management of infrastructure timelines, resources, and deliverables using MS Project."
    },
    {
        title: "Quality Control",
        icon: MonitorCheck,
        code: "SPC-02",
        desc: "Rigorous QA/QC protocols, field testing supervision, and adherence to ACI/ASTM standards."
    },
    {
        title: "Structural Detailing",
        icon: Layout,
        code: "SPC-03",
        desc: "Precise drafting and detailing using AutoCAD, ensuring structural integrity and code compliance."
    },
    {
        title: "Budget Monitoring",
        icon: FileText,
        code: "SPC-04",
        desc: "Cost estimation, tracking, and variance analysis to keep multi-million dollar projects on budget."
    },
    {
        title: "Stakeholder Liaison",
        icon: Users,
        code: "SPC-05",
        desc: "Bridging communication between engineers, architects, clients, and on-site construction teams."
    },
    {
        title: "Field Inspection",
        icon: HardHat,
        code: "SPC-06",
        desc: "On-site supervision of concrete pouring, rebar placement, and structural installations."
    }
];

export default function Services() {
    return (
        <section id="services" className="relative py-24 px-4 md:px-8 lg:px-16 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:flex justify-between items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="font-technical text-[var(--primary)] text-sm tracking-[0.2em] uppercase mb-4 block">
                            Core Competencies
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white">
                            TECHNICAL <br />
                            <span className="text-[var(--accent-blue)]">SPECIALIZATIONS</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specializations.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-8 bg-[var(--card-bg)] blueprint-border hover-lift"
                        >
                            {/* Technical Code */}
                            <span className="absolute top-4 right-4 font-mono text-xs text-[var(--border-dim)] group-hover:text-[var(--primary)] transition-colors">
                                {spec.code}
                            </span>

                            <div className="w-12 h-12 bg-[var(--accent-blue)]/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-[var(--accent-blue)] transition-colors duration-300">
                                <spec.icon className="w-6 h-6 text-[var(--accent-blue)] group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--accent-blue)] transition-colors">
                                {spec.title}
                            </h3>

                            <p className="text-[var(--text-muted)] text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                                {spec.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
