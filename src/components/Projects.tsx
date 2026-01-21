'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: "Dhaka Mass Rapid Transit Line 06",
        category: "Infrastructure",
        description: "Coordinated $163M USD mass transit project with 95% on-time delivery. Managed 15+ subcontractors and 8 major milestones.",
        value: "$163M USD",
        role: "Project Coordinator",
        image: "/dmrt.png",
    },
    {
        title: "Pavement Rehabilitation Projects",
        category: "Civil Works",
        description: "Conducted field testing for 50+ ICI projects with optimized workflows reducing testing time by 15%.",
        value: "50+ Projects",
        role: "Field Inspector",
        image: "/pavement.png",
    },
    {
        title: "Structural Detailing Portfolio",
        category: "Design",
        description: "Created shop drawings and bar lists for Royal Bayview, Viva Leaside, and Stafford projects using AutoCAD and Rebar CAD.",
        value: "Multiple Sites",
        role: "Structural Detailing Engineer",
        image: "/structural.png",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative px-4 md:px-8 lg:px-16 flex justify-center">
            <div className="w-full max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex flex-col items-center">
                        <h2 className="text-5xl md:text-6xl font-black mb-8 text-[var(--foreground)]">
                            Featured <span className="underline-accent">Projects</span>
                        </h2>
                        <div className="w-full flex justify-center">
                            <p className="text-base md:text-lg text-[var(--text-muted)] max-w-3xl text-center">
                                Highlights from my portfolio of infrastructure, transportation, and structural projects
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 bg-[var(--accent-blue)] text-white text-xs font-semibold rounded-full shadow-lg">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-6 py-6 flex flex-col items-center text-center">
                                <div className="w-full flex flex-col items-center mb-4">
                                    <div className="w-12 h-12 bg-[var(--accent-blue)]/10 rounded-full flex items-center justify-center group-hover:bg-[var(--accent-blue)] transition-colors mb-4">
                                        <ExternalLink className="w-6 h-6 text-[var(--accent-blue)] group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent-blue)] transition-colors leading-tight">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="w-full grid grid-cols-2 gap-4 pt-4 border-t border-[var(--border-color)]">
                                    <div className="text-center">
                                        <p className="text-xs text-[var(--text-muted)] mb-1">Project Value</p>
                                        <p className="text-base font-bold text-[var(--accent-blue)]">{project.value}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs text-[var(--text-muted)] mb-1">Role</p>
                                        <p className="text-sm font-semibold text-[var(--foreground)]">{project.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
