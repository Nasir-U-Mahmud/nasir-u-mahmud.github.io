'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
    {
        name: "Mohammad Sarfaraz Uddin",
        title: "Chief Planning Engineer",
        company: "Dhaka Metro Rail Project",
        date: "Aug 29, 2017",
        rating: 5,
        text: "Been working with appscera for a number of years now with a variety of different apps. They have my recommendation. They are a great team.",
        fullText: "During the time spent with Nasir I have found him to be an exceptional Engineer, consistently demonstrating interest, enthusiasm, and a positive attitude focused on all aspects of the project. Nasir has excellent technical and management skills and has consistently proven his ability to perform to tight deadlines under the most stressful of environments.",
        initials: "MS"
    },
    {
        name: "Hossain Md Shovon",
        title: "Project Manager",
        company: "Tekken-AML-Abenikko JV",
        date: "Aug 25, 2017",
        rating: 5,
        text: "Been working with appscera for a number of years now with a variety of different apps. They have my recommendation. They are a great team.",
        fullText: "I have seen Nasir at the Tekken-AML-Abenikko JV show skill, agility, and initiative, which is impressive for someone so young. It's great that he's willing to go above and beyond what's expected to help the team win. I've worked with him on many projects and business goals, and I could always count on him to do his best, even when he was under a lot of pressure.",
        initials: "HS"
    }
];


export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="relative px-4 md:px-8 lg:px-16 overflow-hidden flex justify-center">
            {/* Decorative Background Circle */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--accent-blue)] rounded-full -translate-x-1/2 opacity-20 blur-3xl"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex flex-col items-center">
                        <h2 className="text-5xl md:text-6xl font-black mb-8 text-[var(--foreground)]">
                            Manager <span className="underline-accent">Reviews</span>
                        </h2>
                    </div>
                </motion.div>

                <div className="bg-white rounded-3xl shadow-2xl px-8 md:px-12 py-8 md:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Left Sidebar - Avatar List */}
                        <div className="md:col-span-1 space-y-4">
                            {testimonials.map((testimonial, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full text-left transition-all ${index === currentIndex ? 'opacity-100' : 'opacity-40'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Avatar */}
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 transition-all ${index === currentIndex
                                            ? 'bg-[var(--accent-blue)] ring-4 ring-[var(--accent-blue)]/20'
                                            : 'bg-gray-400'
                                            }`}>
                                            {testimonial.initials}
                                        </div>

                                        {/* Name and Date (visible on larger screens) */}
                                        <div className="hidden md:block">
                                            <p className={`text-sm font-semibold ${index === currentIndex ? 'text-[var(--foreground)]' : 'text-[var(--text-muted)]'
                                                }`}>
                                                {testimonial.name.split(' ')[0]}
                                            </p>
                                            {index === currentIndex && (
                                                <div className="flex items-center gap-1 mt-1">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        {/* Right Content Area */}
                        <div className="md:col-span-3">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Quote Icon */}
                                    <div className="text-6xl text-[var(--accent-blue)]/20 font-serif mb-4">"</div>

                                    {/* Testimonial Text */}
                                    <p className="text-base md:text-lg text-[var(--foreground)] leading-relaxed mb-6 italic">
                                        {testimonials[currentIndex].fullText}
                                    </p>

                                    {/* Author Info */}
                                    <div className="border-t border-[var(--border-color)] pt-6">
                                        <p className="font-bold text-[var(--foreground)] text-lg">
                                            {testimonials[currentIndex].name}
                                        </p>
                                        <p className="text-sm text-[var(--text-muted)] mt-1">
                                            {testimonials[currentIndex].title}
                                        </p>
                                        <p className="text-xs text-[var(--accent-blue)] font-medium mt-1">
                                            {testimonials[currentIndex].company} • {testimonials[currentIndex].date}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
