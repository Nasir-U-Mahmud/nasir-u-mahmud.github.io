'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, FileText, CheckCircle } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 bg-[var(--section-bg)]">
            <div className="container-custom mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="section-label">About Me</span>
                        <h2 className="section-title mb-6">
                            5+ Years of <br />
                            <span className="text-[var(--primary)]">Engineering Experience</span>
                        </h2>

                        <div className="space-y-6 text-[var(--muted)] text-lg leading-relaxed">
                            <p>
                                My experience includes managing a <strong className="text-[var(--foreground)]">$163M USD mass transit project</strong> and performing field inspections for commercial and industrial builds.
                            </p>
                            <p>
                                By coordinating multidisciplinary teams and streamlining documentation, I have maintained <strong className="text-[var(--foreground)]">95% schedule adherence</strong> and improved financial tracking accuracy by 20%.
                            </p>
                            <p>
                                I hold certifications in WHMIS, Working at Heights, and am actively pursuing the PMP designation to further elevate my project leadership capabilities.
                            </p>
                        </div>

                        <div className="mt-10 pt-8 border-t border-[var(--border)]">
                            <h3 className="text-xl font-bold mb-6 text-[var(--foreground)]">Connect With Me</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.linkedin.com/in/nasiruddinmahmud"
                                    target="_blank"
                                    className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="mailto:nasiruddin320@gmail.com"
                                    className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all"
                                >
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="card shadow-xl bg-white relative z-10 overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110" />

                            <h3 className="text-2xl font-bold mb-8">Key Achievements</h3>

                            <ul className="space-y-6">
                                {[
                                    { label: "Project Value Managed", value: "$163M USD" },
                                    { label: "Schedule Adherence", value: "95%" },
                                    { label: "Projects Completed", value: "50+" },
                                    { label: "Financial Tracking Improvement", value: "20%" },
                                    { label: "Testing Time Reduction", value: "15%" }
                                ].map((stat, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                            <CheckCircle className="w-4 h-4 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-[var(--foreground)]">{stat.value}</h4>
                                            <p className="text-sm text-[var(--muted)]">{stat.label}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Decorative Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--primary)]/5 rounded-full blur-3xl -z-10" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
