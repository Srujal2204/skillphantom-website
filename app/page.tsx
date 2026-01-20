"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Outfit, Inter } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [glow, setGlow] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setGlow({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* ================= PREMIUM LOADER ================= */}
      <AnimatePresence>
        {loading && (
          <motion.div
            exit={{ opacity: 0, filter: "blur(20px)" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
              <h1 className={`${outfit.className} text-white text-4xl font-bold tracking-[0.4em] uppercase mb-4`}>
                SkillPhantom
              </h1>
              <div className="w-64 h-[2px] bg-white/10 relative overflow-hidden">
                <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="absolute inset-0 bg-blue-600 w-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`relative bg-[#050505] text-white min-h-screen overflow-hidden ${inter.className}`}>
        
        {/* 🌌 DYNAMIC BACKGROUND */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-40 transition-opacity duration-500"
          style={{ background: `radial-gradient(800px circle at ${glow.x}px ${glow.y}px, rgba(37, 99, 235, 0.12), transparent 80%)` }}
        />

        {/* ================= 1. HERO SECTION ================= */}
        <header className="relative z-10 pt-44 pb-32 px-6 text-center max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase backdrop-blur-md">
            SkillPhantom Technologies • Global Excellence
          </motion.div>

          <h1 className={`${outfit.className} text-6xl md:text-9xl font-extrabold tracking-tighter mb-8 leading-[0.95]`}>
            Build Skills. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-indigo-500">
              Earn Proof.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Empowering <strong>Grade 6-12 students</strong> with tech foundations and <strong>College Graduates</strong> with industry-led internships. Globally trusted in 5+ countries.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#explore" className="px-12 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition shadow-[0_0_30px_rgba(255,255,255,0.15)]">Explore Programs</Link>
            <Link href="/contact" className="px-12 py-5 border border-white/20 rounded-full hover:bg-white/5 transition font-bold backdrop-blur-sm">Contact Experts</Link>
          </div>
        </header>

        {/* ================= 2. THE DUAL EDGE SECTION (SKILL + CERT) ================= */}
        <section className="relative z-10 py-24 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className={`${outfit.className} text-4xl md:text-5xl font-bold leading-tight`}>
                "Skill over Certificate" — <br/><span className="text-blue-500 italic">But why not both?</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                SkillPhantom par humara focus 100% practical knowledge pe hai. Hum maante hain ki kaagaz se zyada aapka code bolna chahiye. Isliye:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition hover:border-blue-500/50">
                   <span className="text-2xl">⚡</span>
                   <div>
                     <h4 className="font-bold text-white">Skill Mastery</h4>
                     <p className="text-sm text-gray-500">Master AI, Cyber Security, and Web Dev with real project deployment.</p>
                   </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-600/5 border border-blue-500/20 transition hover:border-blue-500/50">
                   <span className="text-2xl">📜</span>
                   <div>
                     <h4 className="font-bold text-white">Official Certification</h4>
                     <p className="text-sm text-gray-500">Get industry-recognized certificates as proof of your technical expertise.</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full" />
              {[
                { n: "300+", t: "Global Students" },
                { n: "5+", t: "Countries" },
                { n: "100%", t: "Mentor Led" },
                { n: "Live", t: "Project Sessions" }
              ].map((stat, i) => (
                <div key={i} className="relative p-10 bg-black border border-white/10 rounded-3xl text-center group hover:border-blue-500/50 transition-all">
                  <h3 className="text-4xl font-bold text-blue-500 mb-2">{stat.n}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{stat.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 3. PROGRAM DOMAINS (THE CORE) ================= */}
        <section id="explore" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className={`${outfit.className} text-5xl md:text-7xl font-bold`}>The Skill Models</h2>
            <p className="text-gray-500 mt-6 text-xl">High-demand tech domains delivered with practical clarity.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* SCHOOL MODEL */}
            <motion.div whileHover={{ y: -10 }} className="p-12 rounded-[3rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 flex flex-col justify-between">
              <div>
                <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-bold tracking-widest uppercase">Model 01: School</span>
                <h3 className={`${outfit.className} text-4xl font-bold mt-6 mb-6`}>Foundation of Future</h3>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">Students of Grade 6-12 learn Cyber Security, AI/ML, and Networking through logic-building sessions.</p>
                <div className="flex flex-wrap gap-3 mb-12">
                   {["Cyber Sec", "AI/ML", "Web Dev", "Logic"].map(s => (
                     <span key={s} className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs font-bold">{s}</span>
                   ))}
                </div>
              </div>
              <Link href="/school" className="w-full py-5 bg-white text-black font-extrabold rounded-2xl text-center hover:bg-blue-600 hover:text-white transition-all">Go to School Portal →</Link>
            </motion.div>

            {/* INTERNSHIP MODEL */}
            <motion.div whileHover={{ y: -10 }} className="p-12 rounded-[3rem] bg-gradient-to-b from-blue-600/10 to-transparent border border-blue-500/20 flex flex-col justify-between shadow-[0_30px_60px_rgba(37,99,235,0.05)]">
              <div>
                <span className="px-4 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-xs text-blue-400 font-bold tracking-widest uppercase">Model 02: Internship</span>
                <h3 className={`${outfit.className} text-4xl font-bold mt-6 mb-6 text-blue-400`}>Career Acceleration</h3>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">Practical oriented Offline & Online internships for college students. Direct mentor access via G-Meet globally.</p>
                <p className="text-[10px] text-gray-600 font-mono tracking-widest mb-8">GLOBAL REACH: OMAN • SA • CANADA • NEPAL • BANGLADESH</p>
              </div>
              <Link href="/internship" className="w-full py-5 bg-blue-600 text-white font-extrabold rounded-2xl text-center hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all">Go to Internship Portal →</Link>
            </motion.div>

          </div>
        </section>

        {/* ================= 4. GLOBAL MENTORSHIP BAR ================= */}
        <section className="relative z-10 py-20 px-6 text-center border-t border-white/5 bg-white/[0.01]">
          <h2 className={`${outfit.className} text-3xl font-bold mb-10 text-gray-500`}>Taught Globally Across</h2>
          <div className="flex flex-wrap justify-center gap-10 md:gap-24 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             {["OMAN", "CANADA", "NEPAL", "SAUDI ARABIA", "BANGLADESH"].map(c => (
               <span key={c} className="text-xl md:text-3xl font-black tracking-tighter">{c}</span>
             ))}
          </div>
        </section>

        {/* ================= 5. FINAL CALL TO ACTION ================= */}
        <footer className="relative z-10 pt-32 pb-48 px-6 text-center">
          <div className="absolute inset-0 z-0 bg-blue-600/10 blur-[150px] rounded-full max-w-2xl mx-auto h-96" />
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative z-10">
            <h2 className={`${outfit.className} text-6xl md:text-8xl font-black mb-12`}>Join the <br/><span className="text-blue-500">Phantom Cohort.</span></h2>
            <Link href="/contact" className="px-16 py-6 bg-blue-600 text-white font-black text-2xl rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-[0_10px_50px_rgba(37,99,235,0.4)]">
              Start Your Journey
            </Link>
            <div className="mt-20 flex justify-center gap-12 text-sm text-gray-500 font-bold uppercase tracking-widest">
               <Link href="/school" className="hover:text-blue-400">School Program</Link>
               <Link href="/internship" className="hover:text-blue-400">Internship Program</Link>
               <Link href="/contact" className="hover:text-blue-400">Contact Us</Link>
            </div>
            <p className="mt-12 text-[10px] text-gray-800 font-mono tracking-[0.5em]">SKILLPHANTOM TECHNOLOGIES • GLOBAL HUB • 2026</p>
          </motion.div>
        </footer>

      </main>
    </>
  );
}