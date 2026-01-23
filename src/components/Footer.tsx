'use client';

import { Linkedin, Mail, Twitter, Github } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#111827] text-white py-16 border-t border-gray-800">
            <div className="container-custom mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center font-bold text-xl">N</span>
                            <span className="font-bold text-2xl tracking-tight">Nasir.</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Project Coordinator and Field Inspector specializing in infrastructure and structural engineering projects.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com/in/nasiruddinmahmud" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:nasiruddin320@gmail.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--primary)] transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-[var(--primary)] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Services</h4>
                        <ul className="space-y-3">
                            {['Project Coordination', 'Quality Control', 'Structural Detailing', 'Budget Monitoring'].map((item) => (
                                <li key={item}>
                                    <span className="text-gray-400 cursor-default">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <p className="text-white font-semibold mb-1">Email</p>
                                nastiruddin320@gmail.com
                            </li>
                            <li>
                                <p className="text-white font-semibold mb-1">Location</p>
                                Ontario, Canada
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Nasir Uddin Mahmud. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
