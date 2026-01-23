'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CountUp = ({ to, prefix = '', suffix = '' }: { to: number, prefix?: string, suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const controls = {
            count: 0
        };
        const duration = 2; // seconds
        const frames = 60 * duration;
        const increment = to / frames;

        let currentCount = 0;
        const counter = setInterval(() => {
            currentCount += increment;
            if (currentCount >= to) {
                setCount(to);
                clearInterval(counter);
            } else {
                setCount(Math.floor(currentCount));
            }
        }, 1000 / 60);

        return () => clearInterval(counter);
    }, [to]);

    return (
        <span className="font-mono">{prefix}{count}{suffix}</span>
    );
};

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 pt-20 overflow-hidden isolate">
            {/* Structural Diagram Overlays */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-blue)]/20 to-transparent" />
                <div className="absolute top-[80%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-blue)]/20 to-transparent" />
                <div className="absolute left-[20%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--accent-blue)]/20 to-transparent" />
                <div className="absolute right-[20%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--accent-blue)]/20 to-transparent" />

                {/* Diagonal Beam */}
                <div className="absolute top-0 right-[-10%] w-[150%] h-[1px] bg-[var(--accent-blue)]/10 transform rotate-[35deg] origin-top-right" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Left - Content */}
                    <motion.div
                        className="lg:col-span-7 order-2 lg:order-1"
                        style={{ y: y1 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="font-technical text-[var(--accent-blue)] text-sm tracking-[0.2em] uppercase mb-4 block flex items-center gap-3">
                                <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse" />
                                Civil Engineer & Project Coordinator
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] text-white"
                        >
                            PRECISION <br />
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                                className="text-[var(--primary)] inline-block"
                            >
                                IN ACTION
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="border-l-2 border-[var(--primary)] pl-6 mb-10"
                        >
                            <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl font-light">
                                Managing complex infrastructure with engineering rigour. From <span className="text-white font-medium">multi-million dollar transit systems</span> to structural field oversight.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-wrap gap-6 items-center"
                        >
                            <a href="#contact" className="px-8 py-4 rounded-full bg-[var(--primary)] text-white font-bold text-lg shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
                                Contact Me
                            </a>
                            <a href="#projects" className="px-8 py-4 rounded-full bg-[#111029] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                Learn More
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right - Profile Image */}
                    <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
                        <motion.div
                            className="relative w-full max-w-md"
                            style={{ y: y2 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            {/* Blueprint Decorations */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[var(--accent-blue)] opacity-50" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[var(--primary)] opacity-50" />

                            {/* Image Container */}
                            <div className="relative aspect-[4/5] bg-[var(--card-bg)] p-2 border border-[var(--border-dim)] backdrop-blur-sm">
                                <div className="absolute inset-0 bg-[url('/blueprint-grid.svg')] opacity-20 z-0 pointer-events-none" />
                                <div className="relative w-full h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                                    <Image
                                        src="/profile_v2.png"
                                        alt="Nasir Uddin Mahmud"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-[var(--accent-blue)] mix-blend-overlay opacity-20 pointer-events-none" />
                                </div>

                                {/* Technical overlay markers */}
                                <div className="absolute top-4 left-4 text-[10px] font-mono text-[var(--primary)]">FIG. 001</div>
                                <div className="absolute bottom-4 right-4 text-[10px] font-mono text-[var(--accent-blue)]">SCALE: 1:1</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

