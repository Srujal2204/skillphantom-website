"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Outfit, Inter } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function InternshipPage() {
  const [loading, setLoading] = useState(true);
  const [glow, setGlow] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setGlow({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const curriculum = [
    { title: "Week 1-2: Foundations", desc: "Building strong logic and understanding how the industry actually works." },
    { title: "Week 3-5: Deep Dive", desc: "Moving into core technical domains with guided practical exercises." },
    { title: "Week 6-8: Real Projects", desc: "Applying everything you learned to build a live industry-standard project." },
    { title: "Week 9: Certification", desc: "Final review, project submission, and receiving your official certificate." },
  ];

  const testimonials = [
    {
      name: "Jugal Bhatt",
      country: "India",
      video: "/testimonials/Jugal.mp4",
      text: "The practical knowledge I gained here helped me crack my first job interview."
    },
    {
      name: "Raymond",
      country: "Nigeria",
      video: "/testimonials/African.mp4",
      text: "Even though I was in Nigeria, the online sessions felt like a real classroom."
    },
    {
      name: "Rohit Rauniyar",
      country: "Nepal",
      video: "/testimonials/Sofia.mp4",
      text: "The internship gave me the confidence to work on real projects and land my dream job."
    },
  ];


  const faqs = [
    { q: "Is this internship for beginners?", a: "Yes! We start from the basics and guide you step-by-step to an advanced level." },
    { q: "Will I get a certificate?", a: "Absolutely. Upon successful completion and project submission, you get a verified certificate." },
  ];

  return (
    <>
      {/* ================= LOADING SCREEN ================= */}
      <AnimatePresence>
        {loading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#050505] transition-colors duration-500">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-6" />
            <h2 className={`${outfit.className} text-slate-900 dark:text-white text-xl font-bold tracking-[0.4em] uppercase`}>SkillPhantom</h2>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`relative transition-colors duration-500 bg-white dark:bg-[#050505] text-slate-900 dark:text-white min-h-screen overflow-hidden ${inter.className}`}>

        {/* DYNAMIC BACKGROUND GLOW */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.05] dark:opacity-20 transition-opacity"
          style={{ background: `radial-gradient(1000px circle at ${glow.x}px ${glow.y}px, #2563eb, transparent 80%)` }}
        />

        {/* ================= HERO SECTION ================= */}
        <header className="relative z-10 pt-44 pb-32 px-6 text-center max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1 rounded-full border border-blue-600/20 bg-blue-600/5 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            Global Internship Program 2026
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className={`${outfit.className} text-6xl md:text-9xl font-extrabold mb-10 tracking-tighter leading-[0.9]`}>
            Don't Just Learn <br />
            <span className="text-blue-600">Practice</span>
          </motion.h1>
          <p className="text-slate-500 dark:text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
            Bridge the gap between your degree and the industry. Our internship is built on
            <strong> real-world tasks</strong>, not just watching videos.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/internship/apply" className="px-14 py-6 bg-blue-600 text-white dark:bg-white dark:text-black font-extrabold rounded-full hover:scale-105 transition shadow-xl shadow-blue-500/20">
              Apply Now
            </Link>
            <Link href="#testimonials" className="px-14 py-6 border border-slate-200 dark:border-white/10 rounded-full hover:bg-slate-50 dark:hover:bg-white/5 transition font-bold text-slate-600 dark:text-white">
              Watch Success Stories
            </Link>
          </div>
        </header>

        {/* ================= CORE HIGHLIGHTS ================= */}
        <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Mentor Led", d: "Interact directly with industry experts in live sessions.", i: "🎯" },
              { t: "Global Reach", d: "Join a network of students from 5+ different countries.", i: "🌎" },
              { t: "Live Projects", d: "Work on production-grade projects that look great on resumes.", i: "⚡" }
            ].map((f, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{f.i}</div>
                <h3 className={`${outfit.className} text-2xl font-bold mb-4 text-slate-900 dark:text-white`}>{f.t}</h3>
                <p className="text-slate-500 dark:text-gray-500 leading-relaxed font-medium">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= VIDEO TESTIMONIALS ================= */}
        <section id="testimonials" className="relative z-10 py-32 px-6 bg-slate-100 dark:bg-white/[0.01] border-y border-slate-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className={`${outfit.className} text-5xl md:text-7xl font-bold mb-6`}>Student Stories</h2>
              <p className="text-slate-500 dark:text-gray-500 text-xl font-medium">Real videos from our global intern community.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {testimonials.map((t, i) => (
                <motion.div key={i} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.9 }} className="bg-white dark:bg-black border border-slate-200 dark:border-white/10 rounded-[3rem] overflow-hidden group shadow-lg dark:shadow-none">
                  <div className="aspect-video bg-slate-200 dark:bg-neutral-900 relative">
                    <video controls className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity">
                      <source src={t.video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="p-10">
                    <p className="text-slate-600 dark:text-gray-400 italic mb-8 text-lg font-medium">"{t.text}"</p>
                    <div className="flex justify-between items-end">
                      <div>
                        <h4 className="font-bold text-2xl text-slate-900 dark:text-white">{t.name}</h4>
                        <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mt-2">{t.country}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROGRAM JOURNEY ================= */}
        <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`${outfit.className} text-5xl font-bold mb-6`}>How it Works</h2>
            <p className="text-slate-500 dark:text-gray-500 font-medium">Your 9-week roadmap to technical mastery.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {curriculum.map((step, i) => (
              <div key={i} className="p-8 bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-3xl relative overflow-hidden group">
                <div className="text-6xl font-black text-slate-200 dark:text-white/[0.02] absolute -bottom-4 -right-4 group-hover:text-blue-500/10 transition-colors">0{i + 1}</div>
                <h4 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">{step.title}</h4>
                <p className="text-slate-500 dark:text-gray-500 text-sm leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="relative z-10 py-32 px-6 max-w-4xl mx-auto">
          <h2 className={`${outfit.className} text-5xl font-bold text-center mb-20`}>Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-white/[0.01]">
                <button onClick={() => setActiveTab(activeTab === i ? -1 : i)} className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  <span className="font-bold text-lg text-slate-800 dark:text-white">{faq.q}</span>
                  <span className="text-blue-600 font-bold">{activeTab === i ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {activeTab === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <p className="p-6 pt-0 text-slate-500 dark:text-gray-500 border-t border-slate-100 dark:border-white/5 leading-relaxed font-medium">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <footer className="relative z-10 py-48 px-6 text-center border-t border-slate-100 dark:border-white/5">
          <div className="absolute inset-0 z-0 bg-blue-600/[0.03] dark:bg-blue-600/10 blur-[180px] rounded-full max-w-2xl mx-auto h-96" />
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative z-10">
            <h2 className={`${outfit.className} text-6xl md:text-9xl font-black mb-12`}>Join the <br /><span className="text-blue-600">Cohort.</span></h2>
            <Link href="/internship/apply" className="px-20 py-8 bg-blue-600 text-white font-black text-2xl rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-2xl shadow-blue-500/40 inline-block">
              Apply Now
            </Link>
          </motion.div>
        </footer>
      </main>
    </>
  );
}