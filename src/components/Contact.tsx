'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="relative px-4 md:px-8 lg:px-16 flex justify-center">
            <div className="w-full max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex flex-col items-center">
                        <h2 className="text-5xl md:text-6xl font-black mb-8 text-[var(--foreground)]">
                            Let's <span className="underline-accent">Connect</span>
                        </h2>
                        <div className="w-full flex justify-center">
                            <p className="text-base md:text-lg text-[var(--text-muted)] max-w-3xl text-center">
                                Interested in collaborating or have a project in mind? Feel free to reach out!
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--foreground)]">Get in Touch</h3>

                        <div className="space-y-4">
                            <a
                                href="mailto:nasiruddin320@gmail.com"
                                className="flex items-start gap-4 px-6 py-6 bg-white border border-[var(--border-color)] rounded-2xl hover:border-[var(--accent-blue)] hover:shadow-lg transition-all group"
                            >
                                <div className="w-12 h-12 bg-[var(--accent-blue)]/10 rounded-xl flex items-center justify-center group-hover:bg-[var(--accent-blue)] transition-colors flex-shrink-0">
                                    <Mail className="w-6 h-6 text-[var(--accent-blue)] group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-sm text-[var(--text-muted)] mb-1">Email</p>
                                    <p className="text-[var(--foreground)] font-semibold">nasiruddin320@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/nasiruddinmahmud"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 px-6 py-6 bg-white border border-[var(--border-color)] rounded-2xl hover:border-[var(--accent-blue)] hover:shadow-lg transition-all group"
                            >
                                <div className="w-12 h-12 bg-[var(--accent-blue)]/10 rounded-xl flex items-center justify-center group-hover:bg-[var(--accent-blue)] transition-colors flex-shrink-0">
                                    <Linkedin className="w-6 h-6 text-[var(--accent-blue)] group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-sm text-[var(--text-muted)] mb-1">LinkedIn</p>
                                    <p className="text-[var(--foreground)] font-semibold">linkedin.com/in/nasiruddinmahmud</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-[var(--border-color)] rounded-3xl px-8 py-8 shadow-lg"
                    >
                        <h3 className="text-xl md:text-2xl font-bold mb-6 text-[var(--foreground)] text-center">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)] mb-2 text-center">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-xl text-[var(--foreground)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors text-center"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)] mb-2 text-center">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-xl text-[var(--foreground)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors text-center"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)] mb-2 text-center">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-xl text-[var(--foreground)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors text-center"
                                    placeholder="Project inquiry"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[var(--foreground)] mb-2 text-center">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-xl text-[var(--foreground)] focus:border-[var(--accent-blue)] focus:outline-none transition-colors resize-none text-center"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-600 text-center text-sm">Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-600 text-center text-sm">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
