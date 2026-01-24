"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const faqs = [
    {
        q: "What is SkillPhantom?",
        a: "SkillPhantom is a platform where we help students learn real-world skills through practical training and internship programs."
    },
    {
        q: "Who can join the internship?",
        a: "Any college student or fresher who wants to learn can join. You don't need any prior experience to start."
    },
    {
        q: "Do I get paid for the internship?",
        a: "Our main focus is on teaching you skills. Stipends or future jobs depend on how well you perform during the program."
    },
    {
        q: "What will I learn here?",
        a: "We teach many things like Web Development, Cybersecurity, AI, and basic Programming."
    },
    {
        q: "How long is the program?",
        a: "It usually takes 1 to 3 months, depending on how fast you learn and which program you choose."
    },
    {
        q: "Will I get a certificate?",
        a: "Yes, once you finish the internship and pass the small test, you will get a SkillPhantom Certificate."
    },
    {
        q: "What is the School Program?",
        a: "It is a special program for students in Class 6 to 12. We teach them about AI and Internet safety in a very simple way."
    },
    {
        q: "How can my school join?",
        a: "Schools can just send us a message through the Contact page, and our team will explain everything."
    }
];

export default function FaqClient() {
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* ================= LOADER (Adaptive) ================= */}
            <AnimatePresence>
                {loading && (
                    <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black transition-colors duration-500">
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                            <p className="mt-4 text-[10px] font-bold tracking-[0.5em] uppercase text-slate-400 dark:text-slate-600">SkillPhantom Help</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Background: Adaptive */}
            <main className={`bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white min-h-screen transition-colors duration-500 ${inter.className} pb-20`}>

                {/* ================= HERO ================= */}
                <section className="pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-500 text-[10px] font-black uppercase tracking-widest mb-6">
                            FAQ Center
                        </span>
                        
                        <h1 className={`${outfit.className} text-5xl md:text-7xl font-black tracking-tighter mb-8`}>
                            Common <span className="text-blue-600 italic">Questions.</span>
                        </h1>

                        <p className="mt-8 text-slate-500 dark:text-gray-400 text-lg leading-relaxed font-medium">
                            Everything you need to know about our internships and school programs.
                            Still confused? Our team is just a message away.
                        </p>
                    </motion.div>
                </section>

                {/* ================= FAQ LIST (Adaptive) ================= */}
                <section className="max-w-3xl mx-auto px-6 space-y-4">
                    {faqs.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                className={`transition-all duration-300 rounded-[2rem] overflow-hidden border ${
                                    isOpen 
                                    ? 'border-blue-500 bg-white dark:bg-white/[0.05] shadow-xl shadow-blue-500/5' 
                                    : 'border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02]'
                                }`}
                            >
                                <button
                                    onClick={() => setActiveIndex(isOpen ? null : index)}
                                    className="w-full flex justify-between items-center p-6 md:p-8 text-left group"
                                >
                                    <span className={`${outfit.className} text-lg md:text-xl font-bold pr-8 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-800 dark:text-white'}`}>
                                        {item.q}
                                    </span>
                                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-gray-500'}`}>
                                        {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-8 pb-8 text-slate-600 dark:text-gray-400 leading-relaxed text-md border-t border-slate-100 dark:border-white/5 pt-6 font-medium">
                                                {item.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </section>

                {/* ================= CTA BOX (WhatsApp Integrated) ================= */}
                <section className="mt-32 px-6 text-center">
                    <div className="max-w-3xl mx-auto p-12 bg-blue-600 rounded-[3rem] relative overflow-hidden group shadow-2xl shadow-blue-500/20">
                        <div className="relative z-10">
                            <h3 className={`${outfit.className} text-3xl font-bold mb-4 text-white`}>Still have a question?</h3>
                            <p className="text-blue-100 mb-8 font-medium">Don't worry, just chat with us on WhatsApp. We reply very fast!</p>
                            
                            <Link
                                href="https://wa.me/919727813568?text=Hi%20SkillPhantom,%20I%20have%20a%20question..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-blue-600 px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all shadow-xl inline-block"
                            >
                                Contact on WhatsApp
                            </Link>
                        </div>
                        {/* Decoration */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                    </div>
                </section>

            </main>
        </>
    );
}