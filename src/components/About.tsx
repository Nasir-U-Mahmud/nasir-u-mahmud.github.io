'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="relative px-4 md:px-8 lg:px-16 flex justify-center">
            <div className="w-full max-w-6xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl px-8 md:px-12 py-8 md:py-12 shadow-lg border border-[var(--border-color)]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-5xl md:text-6xl font-black mb-8 text-[var(--foreground)]">
                            About <span className="underline-accent">Me</span>
                        </h2>
                    </motion.div>

                    {/* Flex container with equal spacing - mobile: column, desktop: row */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
                        {/* Left spacer - 80px distance from container edge to circle */}
                        <div className="hidden lg:block lg:w-20 flex-shrink-0"></div>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex-shrink-0 flex items-center"
                        >
                            <div className="relative w-48 h-48">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue)] to-[var(--accent-blue-dark)] rounded-full flex items-center justify-center text-center p-8 shadow-xl">
                                    <div>
                                        <p className="text-5xl font-black text-white mb-2">5+</p>
                                        <p className="text-sm font-semibold text-white/90">Years of Experience</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Middle spacer - 80px distance from circle to text (equal to left spacer) */}
                        <div className="hidden lg:block lg:w-20 flex-shrink-0"></div>

                        {/* Bio */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 flex items-center"
                        >
                            <div>
                                <p className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed mb-6">
                                    My experience includes managing a $163M USD mass transit project and performing field inspections for commercial and industrial builds. By coordinating multidisciplinary teams and streamlining documentation, I have maintained 95% schedule adherence and improved financial tracking accuracy by 20%. I hold certifications in WHMIS, Working at Heights, and am actively pursuing the PMP.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
