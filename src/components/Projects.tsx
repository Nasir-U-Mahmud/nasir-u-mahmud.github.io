'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Dhaka Mass Rapid Transit Line 06",
        category: "Infrastructure",
        image: "/dmrt.png",
        description: "Coordinated $163M USD mass transit project with 95% on-time delivery. Managed 15+ subcontractors and 8 major milestones.",
        achievements: ["$163M Value", "Project Coordinator"]
    },
    {
        id: 2,
        title: "Pavement Rehabilitation Projects",
        category: "Civil Works",
        image: "/pavement.png",
        description: "Conducted field testing for 50+ ICI projects with optimized workflows reducing testing time by 15%.",
        achievements: ["50+ Projects", "Field Inspector"]
    },
    {
        id: 3,
        title: "Structural Detailing Portfolio",
        category: "Design",
        image: "/structural.png",
        description: "Created shop drawings and bar lists for Royal Bayview, Viva Leaside, and Stafford projects using AutoCAD and Rebar CAD.",
        achievements: ["Multiple Sites", "Structural Engineer"]
    }
];

const categories = ["All", "Infrastructure", "Civil Works", "Design"];

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter(project =>
        filter === "All" ? true : project.category === filter
    );

    return (
        <section id="projects" className="py-24 bg-[var(--background)]">
            <div className="container-custom mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="section-label">Creative Portfolios</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-desc mx-auto mt-4">
                        Highlights from my portfolio of infrastructure, transportation, and structural projects.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === cat
                                ? 'bg-[var(--primary)] text-white shadow-lg shadow-blue-500/30'
                                : 'bg-transparent text-[var(--muted)] hover:text-[var(--primary)] border border-[var(--border)]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group card p-0 overflow-hidden border-0 shadow-lg hover:shadow-2xl"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder if image missing */}
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <button className="bg-white text-[var(--primary)] px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                                            View Details <ExternalLink className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {project.category}
                                    </div>
                                </div>

                                <div className="p-6 bg-[var(--card-bg)]">
                                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-[var(--muted)] text-sm mb-6 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                                        {project.achievements.map((tag, i) => (
                                            <span key={i} className="text-xs font-medium text-[var(--muted)] bg-[var(--section-bg)] px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
