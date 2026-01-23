'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Send } from 'lucide-react';
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
        <section id="contact" className="py-24 bg-[var(--background)]">
            <div className="container-custom mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left - Info */}
                    <div className="space-y-8">
                        <div>
                            <span className="section-label">Contact With Me</span>
                            <h2 className="section-title">Let's Connect</h2>
                            <p className="section-desc mt-4">
                                Interested in collaborating or have a project in mind? Feel free to reach out to discuss your infrastructure needs.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: "Email", value: "nasiruddin320@gmail.com", href: "mailto:nasiruddin320@gmail.com" },
                                { icon: Linkedin, label: "LinkedIn", value: "in/nasiruddinmahmud", href: "https://www.linkedin.com/in/nasiruddinmahmud" },
                                { icon: MapPin, label: "Location", value: "Ontario, Canada", href: "#" }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="flex items-center gap-6 p-6 rounded-2xl hover:bg-[var(--section-bg)] transition-colors group border border-transparent hover:border-[var(--border)]"
                                >
                                    <div className="w-14 h-14 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[var(--muted)] uppercase tracking-wider mb-1">{item.label}</p>
                                        <p className="text-lg font-bold text-[var(--foreground)]">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="bg-[var(--card-bg)] p-8 md:p-10 rounded-3xl shadow-xl border border-[var(--border)]">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[var(--foreground)]">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)] border border-[var(--border)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-[var(--foreground)]">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)] border border-[var(--border)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[var(--foreground)]">Subject</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)] border border-[var(--border)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-[var(--foreground)]">Message</label>
                                <textarea
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)] border border-[var(--border)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full btn btn-primary py-4 text-white font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                            >
                                {status === 'loading' ? 'Sending Message...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-600 font-medium text-center bg-green-50 p-3 rounded-lg border border-green-200">
                                    Message sent successfully!
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-600 font-medium text-center bg-red-50 p-3 rounded-lg border border-red-200">
                                    Message failed to send. Please try again.
                                </p>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
