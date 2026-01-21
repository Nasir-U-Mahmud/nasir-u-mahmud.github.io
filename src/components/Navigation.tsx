'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[var(--border-color)] shadow-sm flex justify-center"
        >
            <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#home" className="text-2xl font-black">
                        <span className="gradient-text">NUM</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors font-medium"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-[var(--foreground)]"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden py-4 border-t border-[var(--border-color)]"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-3 text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block py-3 text-[var(--text-muted)] hover:text-[var(--accent-blue)] transition-colors"
                        >
                            Hire Me
                        </a>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}
