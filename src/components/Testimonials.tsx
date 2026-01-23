'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        text: "During the time spent with Nasir I have found him to be an exceptional Engineer, consistently demonstrating interest, enthusiasm, and a positive attitude focused on all aspects of the project. Nasir has excellent technical and management skills and has consistently proven his ability to perform to tight deadlines under the most stressful of environments.",
        author: "Mohammad Sarfaraz Uddin",
        role: "Chief Planning Engineer",
        project: "Dhaka Metro Rail Project | Aug 29, 2017"
    },
    {
        id: 2,
        text: "Nasir contributed immensely to keeping our project schedules on track. His attention to detail in tracking the $163M budget and his proactive coordination with subcontractors ensured we hit our milestones efficiently.",
        author: "Hossain Md Shovon",
        role: "Project Engineer",
        project: "Dhaka Mass Rapid Transit Line 06"
    }
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-24 bg-[var(--background)]">
            <div className="container-custom mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="section-label">Awesome Testimonials</span>
                    <h2 className="section-title">Hear From My Managers</h2>
                    <p className="section-desc mx-auto mt-4">
                        Feedback from supervisors and colleagues on my project coordination and engineering performance.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="bg-[var(--section-bg)] p-10 md:p-14 rounded-3xl relative min-h-[400px] flex items-center justify-center">
                        <Quote className="absolute top-10 left-10 w-12 h-12 text-[var(--primary)] opacity-20" />

                        <div className="relative z-10 text-center w-full">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={current}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <p className="text-xl md:text-2xl italic text-[var(--foreground)] leading-relaxed mb-8">
                                        "{testimonials[current].text}"
                                    </p>

                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg shadow-blue-500/30">
                                            {testimonials[current].author.charAt(0)}
                                        </div>
                                        <h4 className="text-lg font-bold text-[var(--foreground)]">
                                            {testimonials[current].author}
                                        </h4>
                                        <p className="text-[var(--primary)] font-medium">{testimonials[current].role}</p>
                                        <p className="text-[var(--muted)] text-sm mt-1">{testimonials[current].project}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 -ml-5 md:-ml-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 -mr-5 md:-mr-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Dots */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrent(index)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${current === index ? 'bg-[var(--primary)] w-6' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
