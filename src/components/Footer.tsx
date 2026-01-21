'use client';

import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <section className="relative py-20 px-4 md:px-8 lg:px-16 flex justify-center bg-[var(--background)]">
            <div className="w-full max-w-6xl mx-auto">
                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-t border-[var(--border-color)] pt-12 text-center"
                >
                    <p className="text-sm text-[var(--text-muted)]">
                        © {new Date().getFullYear()} Nasir Uddin Mahmud. All rights reserved.
                    </p>
                </motion.footer>
            </div>
        </section>
    );
}
