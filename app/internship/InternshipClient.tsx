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
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const testimonials = [
    { name: "Rahul Sharma", country: "India", video: "/videos/test1.mp4", text: "The practical knowledge I gained here helped me crack my first job interview. The mentors explain everything very simply." },
    { name: "Sami Al-Said", country: "Oman", video: "/videos/test2.mp4", text: "Even though I was in Oman, the online sessions via Google Meet felt like a real classroom. Great experience!" },
    { name: "Jessica Miller", country: "Canada", video: "/videos/test3.mp4", text: "SkillPhantom focuses on building logic. I now feel confident in solving complex coding problems independently." },
    { name: "Arif Hussain", country: "Bangladesh", video: "/videos/test4.mp4", text: "The best part is the certification. It's not just a paper; it's proof of the hard work I put into the projects." },
  ];

  const curriculum = [
    { title: "Week 1-2: Foundations", desc: "Building strong logic and understanding how the industry actually works." },
    { title: "Week 3-5: Deep Dive", desc: "Moving into core technical domains with guided practical exercises." },
    { title: "Week 6-8: Real Projects", desc: "Applying everything you learned to build a live industry-standard project." },
    { title: "Week 9: Certification", desc: "Final review, project submission, and receiving your official certificate." },
  ];

  const faqs = [
    { q: "Is this internship for beginners?", a: "Yes! We start from the basics and guide you step-by-step to an advanced level." },
    { q: "Will I get a certificate?", a: "Absolutely. Upon successful completion and project submission, you get a verified certificate." },
    { q: "How are classes conducted?", a: "For online batches, we use Google Meet for live, interactive mentor-led sessions." },
    { q: "Can I join if my college doesn't have a tie-up?", a: "Yes, you can join our Global Online batch from anywhere in the world." },
  ];

  return (
    <>
      {/* ================= LOADING SCREEN ================= */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
          >
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-6" />
              <h2 className={`${outfit.className} text-white text-xl font-bold tracking-[0.4em] uppercase`}>
                SkillPhantom
              </h2>
              <p className="text-gray-500 text-xs mt-2 font-mono uppercase tracking-widest">Entering Portal...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`relative bg-[#050505] text-white min-h-screen overflow-hidden ${inter.className}`}>
        
        {/* DYNAMIC BACKGROUND GLOW */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-20 transition-opacity duration-500"
          style={{ background: `radial-gradient(1000px circle at ${glow.x}px ${glow.y}px, #2563eb, transparent 80%)` }}
        />

        {/* ================= HERO SECTION ================= */}
        <header className="relative z-10 pt-44 pb-32 px-6 text-center max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            Global Internship Program 2026
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${outfit.className} text-6xl md:text-9xl font-extrabold mb-10 tracking-tighter leading-[0.9]`}
          >
            Don't Just Learn. <br />
            <span className="text-blue-500">Practice.</span>
          </motion.h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed">
            Bridge the gap between your degree and the industry. Our internship is built on 
            <strong> real-world tasks</strong>, not just watching videos.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/internship/apply" className="px-14 py-6 bg-white text-black font-extrabold rounded-full hover:scale-105 transition shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              Apply Now
            </Link>
            <Link href="#testimonials" className="px-14 py-6 border border-white/10 rounded-full hover:bg-white/5 transition font-bold">
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
              <div key={i} className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{f.i}</div>
                <h3 className={`${outfit.className} text-2xl font-bold mb-4`}>{f.t}</h3>
                <p className="text-gray-500 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= VIDEO TESTIMONIALS ================= */}
        <section id="testimonials" className="relative z-10 py-32 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className={`${outfit.className} text-5xl md:text-7xl font-bold mb-6`}>Student Stories</h2>
              <p className="text-gray-500 text-xl">Real videos from our global intern community.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {testimonials.map((t, i) => (
                <motion.div key={i} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.9 }} className="bg-black border border-white/10 rounded-[3rem] overflow-hidden group">
                  <div className="aspect-video bg-neutral-900 relative">
                    <video controls className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" poster={`/thumb${i+1}.jpg`}>
                      <source src={t.video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="p-10">
                    <p className="text-gray-400 italic mb-8 text-lg">"{t.text}"</p>
                    <div className="flex justify-between items-end">
                      <div>
                        <h4 className="font-bold text-2xl">{t.name}</h4>
                        <p className="text-blue-500 font-bold uppercase tracking-widest text-xs mt-2">{t.country}</p>
                      </div>
                      <div className="text-4xl opacity-20 font-black italic">PHANTOM</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROGRAM JOURNEY (CURRICULUM) ================= */}
        <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={`${outfit.className} text-5xl font-bold mb-6`}>How it Works</h2>
            <p className="text-gray-500">Your 9-week roadmap to technical mastery.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {curriculum.map((step, i) => (
              <div key={i} className="p-8 bg-white/[0.03] border border-white/5 rounded-3xl relative overflow-hidden group">
                <div className="text-6xl font-black text-white/[0.02] absolute -bottom-4 -right-4 group-hover:text-blue-500/10 transition-colors">0{i+1}</div>
                <h4 className="text-xl font-bold mb-4 text-blue-400">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="relative z-10 py-32 px-6 max-w-4xl mx-auto">
          <h2 className={`${outfit.className} text-5xl font-bold text-center mb-20`}>Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.01]">
                <button 
                  onClick={() => setActiveTab(activeTab === i ? -1 : i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  <span className="text-blue-500">{activeTab === i ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {activeTab === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                      <p className="p-6 pt-0 text-gray-500 border-t border-white/5 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <footer className="relative z-10 py-48 px-6 text-center border-t border-white/5">
          <div className="absolute inset-0 z-0 bg-blue-600/10 blur-[180px] rounded-full max-w-2xl mx-auto h-96" />
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative z-10">
            <h2 className={`${outfit.className} text-6xl md:text-9xl font-black mb-12`}>Join the <br/><span className="text-blue-500">Cohort.</span></h2>
            <Link href="/internship/apply" className="px-20 py-8 bg-blue-600 text-white font-black text-2xl rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-[0_20px_60px_rgba(37,99,235,0.4)]">
              Apply Now
            </Link>
            <div className="mt-20 flex justify-center gap-10 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
               <span>SkillPhantom 2026</span>
               <span>•</span>
               <span>Global Tech Internship</span>
               <span>•</span>
               <span>Practical Oriented</span>
            </div>
          </motion.div>
        </footer>

      </main>
    </>
  );
}