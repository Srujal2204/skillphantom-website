"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import Link from "next/link";
import { ShieldCheck, GraduationCap, Building2, MessageCircle, Plus, Minus, ArrowRight } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const faqs = [
    {
        category: "General",
        id: "gen",
        icon: <ShieldCheck className="w-5 h-5" />,
        questions: [
            { q: "What is SkillPhantom Technologies?", a: "SkillPhantom Technologies is an MSME-registered, youth-focused skill development organization working on Cyber Security, AI awareness, Programming, Networking, and Industry-ready internships. We focus on practical skills, real exposure, and ethical learning, not just certificates." },
            { q: "Is SkillPhantom a registered and legitimate organization?", a: "Yes. MSME Registered (Government of India), Listed on the National Career Service (NCS) Portal. All certificates and offer letters are verifiable." },
            { q: "Is this aligned with NEP 2020?", a: "Yes. Our programs support skill-based education, experiential learning, and critical thinking—all core pillars of NEP 2020." },
            { q: "Where is SkillPhantom Technologies based?", a: "We are based in Gujarat, India, with students and learners from multiple regions and countries." }
        ]
    },
    {
        category: "Internships",
        id: "int",
        icon: <GraduationCap className="w-5 h-5" />,
        questions: [
            { q: "What makes SkillPhantom different?", a: "Most platforms focus only on certificates. At SkillPhantom: 1. Learning is practical + mentor-led. 2. Students work on real projects. 3. Programs are aligned with future skill needs." },
            { q: "Are the internships real or only certificate-based?", a: "Skill-based, not letter-based. Students work on live tools, case studies, and hands-on tasks. Certificates are issued only after completion of milestones." },
            { q: "Does SkillPhantom guarantee placement?", a: "We focus on making students industry-ready and building strong portfolios. We provide career guidance, referrals, and mentorship instead of fake guarantees." }
        ]
    },
    {
        category: "School Programs",
        id: "sch",
        icon: <Building2 className="w-5 h-5" />,
        questions: [
            { q: "Is this only for college students?", a: "No. We have a School Skill Model (Grade 6–12) for digital safety and AI awareness, and an Internship Model for college students/graduates." },
            { q: "Is cyber security safe to teach at school level?", a: "Yes. Our school programs are ethical, defensive, and awareness-based. No hacking or illegal activities—only responsible digital behavior." }
        ]
    }
];

export default function FaqClient() {
    const [activeIndex, setActiveIndex] = useState<string | null>(null);

    return (
        <main className={`bg-white dark:bg-[#020202] text-slate-900 dark:text-white min-h-screen pb-32 transition-colors duration-500 ${inter.className}`}>
            
            {/* ================= HERO SECTION ================= */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 max-w-4xl mx-auto text-center"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/5 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                        Support Center
                    </span>
                    <h1 className={`${outfit.className} text-5xl md:text-8xl font-black tracking-tighter leading-none mb-6 uppercase`}>
                        Got <span className="text-blue-600 italic">Answers?</span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                        Everything you need to know about SkillPhantom, our MSME-certified internships, and school skill programs.
                    </p>
                </motion.div>
            </section>

            {/* ================= CONTENT GRID ================= */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* LEFT: DESKTOP NAVIGATION (Hidden on Mobile) */}
                    <div className="hidden lg:block lg:w-72 shrink-0">
                        <div className="sticky top-32 p-6 rounded-[2rem] bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/10 backdrop-blur-md">
                            <h3 className={`${outfit.className} text-sm font-black uppercase tracking-widest text-slate-400 mb-6`}>Jump to</h3>
                            <div className="space-y-2">
                                {faqs.map((cat) => (
                                    <a key={cat.id} href={`#${cat.id}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-all group">
                                        <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            {cat.icon}
                                        </div>
                                        <span className="text-sm font-bold text-slate-500 group-hover:text-blue-600 uppercase tracking-tight">{cat.category}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* MIDDLE: QUESTIONS (Order-1 on Mobile - Pehle dikhega) */}
                    <div className="flex-1 order-1 lg:order-2 space-y-12">
                        {faqs.map((category) => (
                            <div key={category.id} id={category.id} className="scroll-mt-32">
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em] whitespace-nowrap">{category.category}</span>
                                    <div className="w-full h-[1px] bg-slate-100 dark:bg-white/10" />
                                </div>

                                <div className="space-y-4">
                                    {category.questions.map((item, idx) => {
                                        const id = `${category.id}-${idx}`;
                                        const isOpen = activeIndex === id;
                                        return (
                                            <motion.div key={id} layout className={`rounded-[1.5rem] border transition-all duration-300 ${isOpen ? 'bg-slate-50 dark:bg-white/[0.05] border-blue-500/50 shadow-xl shadow-blue-500/5' : 'bg-white dark:bg-transparent border-slate-100 dark:border-white/5'}`}>
                                                <button onClick={() => setActiveIndex(isOpen ? null : id)} className="w-full flex justify-between items-center p-6 text-left">
                                                    <span className={`${outfit.className} text-lg font-bold pr-4 leading-snug ${isOpen ? 'text-blue-600' : 'text-slate-800 dark:text-slate-200'}`}>{item.q}</span>
                                                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 dark:bg-white/5 text-slate-400'}`}>
                                                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                                                    </div>
                                                </button>
                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                                                            <div className="px-6 pb-6 text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                                                                <div className="w-full h-[1px] bg-slate-200/50 dark:bg-white/5 mb-4" />
                                                                {item.a}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: CONTACT CARD (Order-2 on Mobile - Niche dikhega) */}
                    <div className="w-full lg:w-80 order-2 lg:order-3">
                        <div className="sticky top-32 p-8 rounded-[2.5rem] bg-blue-600 text-white shadow-2xl shadow-blue-600/20">
                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                <MessageCircle size={24} />
                            </div>
                            <h4 className={`${outfit.className} font-bold text-2xl mb-2`}>Still Confused?</h4>
                            <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                                Our experts are available on WhatsApp to guide your career path.
                            </p>
                            <Link href="https://wa.me/919727813568" className="flex items-center justify-center gap-2 w-full py-4 bg-white text-blue-600 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                                Chat Now <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* FINAL CTA */}
            <section className="mt-40 px-6">
                <div className="max-w-5xl mx-auto text-center border-t border-slate-100 dark:border-white/10 pt-20">
                    <h2 className={`${outfit.className} text-3xl md:text-5xl font-black mb-6`}>Didn't find what you need?</h2>
                    <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-black uppercase text-[11px] tracking-widest hover:scale-105 transition-all">
                        Contact Us <MessageCircle size={16} />
                    </Link>
                </div>
            </section>
        </main>
    );
}