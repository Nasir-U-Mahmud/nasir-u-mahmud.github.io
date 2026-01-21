'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 md:py-24">
            <div className="relative z-10 w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left order-2 lg:order-1"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight text-[var(--foreground)]"
                        >
                            Hello there!
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight"
                        >
                            I am <span className="text-[var(--foreground)]">Nasir Uddin Mahmud</span>
                            <br />
                            and I <span className="text-[var(--accent-blue)]">coordinate</span> and
                            <br />
                            <span className="text-[var(--accent-blue)]">inspect</span>{' '}
                            <span className="italic text-[var(--text-muted)]">Construction Projects</span>.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed mb-8 max-w-2xl"
                        >
                            Project Coordinator and Field Inspector with an M.Eng in Civil Engineering and EIT certification, currently applying rigorous quality control and project oversight to Ontario infrastructure projects. I specialize in turning complex plans into on‑time, on‑budget realities using tools like MS Project, because precision builds trust.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a href="#projects" className="btn-primary">View Projects</a>
                            <a href="#contact" className="btn-secondary">Contact Me</a>
                        </motion.div>
                    </motion.div>

                    {/* Right - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        <div className="relative w-full max-w-md aspect-[3/4]">
                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-[3rem] overflow-hidden bg-[var(--card-bg)] shadow-2xl border-4 border-white">
                                <Image
                                    src="/profile_v2.png"
                                    alt="Nasir Uddin Mahmud"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
