'use client';

import { motion } from 'framer-motion';
import { Briefcase, ClipboardCheck, FileText, Users, DollarSign, Ruler } from 'lucide-react';

const services = [
    {
        icon: Briefcase,
        title: 'Project Coordination',
        description: 'Expert MS Project management for multidisciplinary timelines and deliverables with 95% on-time milestone delivery.',
    },
    {
        icon: DollarSign,
        title: 'Budget Monitoring',
        description: 'Track project finances, identify variances, and maintain schedule adherence and cost efficiency.',
    },
    {
        icon: ClipboardCheck,
        title: 'Quality Control',
        description: 'Comprehensive field testing ensuring 100% compliance with OBC standards and safety protocols.',
    },
    {
        icon: Users,
        title: 'Stakeholder Liaison',
        description: 'Proven coordination between engineers, subcontractors, and clients to streamline communications.',
    },
    {
        icon: FileText,
        title: 'Documentation',
        description: 'Preparation of project documentation, budgets, and progress reports with meticulous accuracy.',
    },
    {
        icon: Ruler,
        title: 'Structural Detailing',
        description: 'AutoCAD and Rebar CAD expertise for shop drawings and structural takeoffs per CSA/ACI standards.',
    },
];

export default function Services() {
    return (
        <section id="services" className="relative px-4 md:px-8 lg:px-16 flex justify-center">
            <div className="w-full max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex flex-col items-center">
                        <h2 className="text-5xl md:text-6xl font-black mb-8 text-[var(--foreground)]">
                            My <span className="underline-accent">Specializations</span>
                        </h2>
                        <div className="w-full flex justify-center">
                            <p className="text-base md:text-lg text-[var(--text-muted)] max-w-3xl text-center">
                                Core competencies developed through 5+ years of hands-on experience in civil engineering
                                and infrastructure project management.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="group relative bg-white rounded-3xl px-8 py-8 hover:shadow-2xl transition-all duration-300 border border-[var(--border-color)] flex flex-col items-center text-center"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-[var(--accent-blue)]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--accent-blue)] transition-colors duration-300 mx-auto">
                                    <Icon className="w-8 h-8 text-[var(--accent-blue)] group-hover:text-white transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-4 text-[var(--foreground)] group-hover:text-[var(--accent-blue)] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[var(--text-muted)] leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none"></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
