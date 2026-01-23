'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${isScrolled ? 'bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border-color)] py-4' : 'bg-transparent py-8'
                }`}
        >
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-[var(--accent-blue)] flex items-center justify-center font-technical font-bold text-white group-hover:bg-white group-hover:text-[var(--accent-blue)] transition-colors duration-300">
                            N
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black text-white uppercase leading-none">
                                Nasir <span className="text-[var(--accent-blue)]">Mahmud</span>
                            </span>
                            <span className="font-technical text-[8px] uppercase tracking-[0.3em] text-[var(--text-muted)]">
                                Project Coordinator
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-technical text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-white transition-colors relative group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--accent-blue)] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <a href="#contact" className="btn-primary py-2 px-6 text-[10px] leading-none">
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            className="fixed inset-0 z-40 bg-[var(--background)] lg:hidden flex flex-col items-center justify-center gap-8"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-8 right-8 text-white p-2"
                            >
                                <X size={32} />
                            </button>

                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-black uppercase text-white hover:text-[var(--accent-blue)] transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="btn-primary mt-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Hire Me
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}

