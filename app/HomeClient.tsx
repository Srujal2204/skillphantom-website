"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Outfit, Inter } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function HomeClient() {
    const [loading, setLoading] = useState(true);
    const [glow, setGlow] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => setGlow({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMouseMove);
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {/* ================= ADAPTIVE LOADER ================= */}
            <AnimatePresence>
                {loading && (
                    <motion.div
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-black transition-colors duration-500"
                    >
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
                            <h1 className={`${outfit.className} text-slate-900 dark:text-white text-4xl font-black tracking-[0.4em] uppercase mb-6`}>
                                SkillPhantom
                            </h1>
                            <div className="w-48 h-[2px] bg-slate-100 dark:bg-white/10 relative overflow-hidden">
                                <motion.div
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-blue-600 w-full"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className={`relative bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white min-h-screen transition-colors duration-500 overflow-hidden ${inter.className}`}>

                {/* 🌌 DYNAMIC MOUSE GLOW */}
                <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] dark:opacity-20 transition-opacity duration-700"
                    style={{ background: `radial-gradient(800px circle at ${glow.x}px ${glow.y}px, #3b82f6, transparent 80%)` }}
                />

                {/* ================= 1. HERO SECTION ================= */}
                <header className="relative z-10 pt-48 pb-32 px-6 text-center max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 mb-10 px-6 py-2 rounded-full bg-blue-600/5 dark:bg-blue-500/10 border border-blue-600/10 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase backdrop-blur-md">
                        SkillPhantom Technologies • Global Excellence
                    </motion.div>

                    <h1 className={`${outfit.className} text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.9] text-slate-900 dark:text-white`}>
                        Build Skills <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-white dark:to-indigo-500">
                            Earn Proof
                        </span>
                    </h1>

                    <p className="text-slate-500 dark:text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
                        Empowering <strong>Grade 6-12 students</strong> with tech foundations and <strong>College Graduates</strong> with industry-led internships. Globally trusted in 5+ countries.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="#explore" className="px-12 py-5 bg-blue-600 text-white dark:bg-white dark:text-black font-black rounded-full hover:scale-105 transition shadow-2xl shadow-blue-500/20">
                            Explore Programs
                        </Link>
                        <Link href="/contact" className="px-12 py-5 border border-slate-200 dark:border-white/20 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition font-black backdrop-blur-sm text-slate-900 dark:text-white">
                            Contact Experts
                        </Link>
                    </div>
                </header>

                {/* ================= 2. THE DUAL EDGE SECTION ================= */}
                <section className="relative z-10 py-32 px-6 bg-white dark:bg-white/[0.01] border-y border-slate-200 dark:border-white/5 transition-colors">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <h2 className={`${outfit.className} text-4xl md:text-6xl font-black leading-tight text-slate-900 dark:text-white`}>
                                Skill over Degree <br /><span className="text-blue-600 italic">But why not both?</span>
                            </h2>
                            <p className="text-slate-500 dark:text-gray-400 text-xl leading-relaxed font-medium">
                                At SkillPhantom, our focus is 100% on practical knowledge. We believe your code should speak louder than your paperwork.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: "⚡", h: "Skill Mastery", p: "Master AI, Cyber Security, and Web Dev with real project deployment." },
                                    { icon: "📜", h: "Official Proof", p: "Get industry-recognized certificates as proof of your technical expertise." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6 p-6 rounded-[2rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 group hover:border-blue-500 transition-all shadow-sm">
                                        <span className="text-3xl">{item.icon}</span>
                                        <div>
                                            <h4 className="font-black text-slate-900 dark:text-white text-lg">{item.h}</h4>
                                            <p className="text-sm text-slate-500 dark:text-gray-500 font-medium mt-1">{item.p}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* grid-cols-1 mobile ke liye, grid-cols-2 desktop ke liye */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative">
                            {[
                                { n: "300+", t: "Students" },
                                { n: "5+", t: "Countries" },
                                { n: "100%", t: "Live Mentor" },
                                { n: "Project", t: "Based Learning" }
                            ].map((stat, i) => (
                                <div key={i} className="relative p-6 md:p-12 bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-[2rem] md:rounded-[2.5rem] text-center shadow-sm transition-all group overflow-hidden">
                                    {/* text size mobile par chota rakho (text-3xl) aur desktop par bada (md:text-5xl) */}
                                    <h3 className="text-3xl md:text-5xl font-black text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                                        {stat.n}
                                    </h3>
                                    <p className="text-[9px] md:text-[10px] text-slate-400 dark:text-gray-500 font-black uppercase tracking-[0.1em] md:tracking-[0.2em] break-words">
                                        {stat.t}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= 3. MODELS ================= */}
                <section id="explore" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className={`${outfit.className} text-5xl md:text-8xl font-black text-slate-900 dark:text-white`}>The Skill Models.</h2>
                        <p className="text-slate-500 dark:text-gray-500 mt-6 text-xl font-medium uppercase tracking-widest">Bridging foundations to careers.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* SCHOOL MODEL */}
                        <motion.div whileHover={{ y: -10 }} className="p-12 rounded-[4rem] bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all">
                            <div>
                                <span className="px-5 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] text-slate-500 dark:text-gray-400 font-black tracking-widest uppercase">Model 01: Foundations</span>
                                <h3 className={`${outfit.className} text-4xl md:text-5xl font-black mt-8 mb-6 text-slate-900 dark:text-white`}>School Program</h3>
                                <p className="text-slate-500 dark:text-gray-400 text-lg mb-10 leading-relaxed font-medium">Students of Grade 6-12 learn Cyber Security, AI, and Networking through logic-building sessions.</p>
                                <div className="flex flex-wrap gap-3 mb-12">
                                    {["Cyber Sec", "AI/ML", "Web", "Logic"].map(s => (
                                        <span key={s} className="px-4 py-1.5 bg-blue-600/5 text-blue-600 border border-blue-600/10 rounded-xl text-xs font-black uppercase tracking-tight">{s}</span>
                                    ))}
                                </div>
                            </div>
                            <Link href="/school" className="w-full py-6 bg-slate-900 dark:bg-white text-white dark:text-black font-black rounded-[2rem] text-center hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-lg">View School Portal →</Link>
                        </motion.div>

                        {/* INTERNSHIP MODEL */}
                        <motion.div whileHover={{ y: -10 }} className="p-12 rounded-[4rem] bg-blue-600 text-white flex flex-col justify-between shadow-2xl shadow-blue-600/20">
                            <div>
                                <span className="px-5 py-2 rounded-full bg-white/20 border border-white/20 text-[10px] text-white font-black tracking-widest uppercase">Model 02: Career</span>
                                <h3 className={`${outfit.className} text-4xl md:text-5xl font-black mt-8 mb-6`}>Internships</h3>
                                <p className="text-blue-100 text-lg mb-10 leading-relaxed font-medium">Practical Offline & Online internships for college graduates. Industry deployment and direct mentor access.</p>
                                <div className="p-6 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 mb-8">
                                    <p className="text-[10px] font-black tracking-[0.3em] uppercase opacity-80 mb-4">International Cohorts</p>
                                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                                        {["OMAN", "CANADA", "NEPAL", "SA", "BD"].map(c => <span key={c} className="text-sm font-black tracking-tighter">{c}</span>)}
                                    </div>
                                </div>
                            </div>
                            <Link href="/internship" className="w-full py-6 bg-white text-blue-600 font-black rounded-[2rem] text-center hover:bg-slate-900 hover:text-white transition-all shadow-xl">Launch Career →</Link>
                        </motion.div>
                    </div>
                </section>
                {/* ================= 4. FINAL CTA ================= */}
                <footer className="relative z-10 pt-32 pb-48 px-6 text-center">
                    <div className="absolute inset-0 z-0 bg-blue-600/5 dark:bg-blue-600/10 blur-[150px] rounded-full max-w-4xl mx-auto h-[500px]" />
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative z-10">
                        <h2 className={`${outfit.className} text-6xl md:text-9xl font-black mb-14 tracking-tighter text-slate-900 dark:text-white`}>Join the <br /><span className="text-blue-600 underline decoration-blue-500/20 underline-offset-[12px]">Phantom Cohort.</span></h2>
                        <Link href="/contact" className="px-20 py-8 bg-blue-600 text-white font-black text-2xl rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black transition transform hover:scale-105 shadow-2xl shadow-blue-600/40">
                            Start Journey
                        </Link>

                    </motion.div>
                </footer>

            </main>
        </>
    );
}