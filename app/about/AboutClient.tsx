"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Outfit, Inter } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default function AboutClient() {
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

  const founders = [
    { 
      name: "Dishant Makwana", 
      role: "Founder", 
      img: "/team/Dishant.jpeg", 
      bio: "Dishant started SkillPhantom because he believes that skills are more important than just school marks.", 
      portfolio: "https:/diishant-portfolio.vercel.app"
  
    },
    { 
      name: "Srujal Chauhan", 
      role: "Co-Founder", 
      img: "/team/Srujal.png", 
      bio: "Srujal makes sure that every student finds our lessons easy to understand and helpful for their career.", 
      portfolio: "https://srujal-portfolio-beige.vercel.app/" 
    }
  ];

  const team = [
    { name: "Janvi Raj", role: "Managing Director", img: "/team/Janvi.jpeg", portfolio: "/Janvi" },
    { name: "Aarti Kesariya", role: "Managing Director", img: "/team/Aarti.jpeg", portfolio: "/Aarti" },
    { name: "Mukesh Talpada", role: "Technical Lead", img: "/team/Mukesh.jpeg", portfolio: "/Mukesh" }
  ];

  const coreTeam = team;

  return (
    <>
      {/* ================= DARK LOADER ================= */}
      <AnimatePresence>
        {loading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
            <div className="flex flex-col items-center">
              <div className="w-10 h-[1px] bg-blue-600 animate-pulse mb-2" />
              <h2 className={`${outfit.className} text-white font-bold tracking-[0.4em] text-xs`}>SKILLPHANTOM</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white min-h-screen transition-colors duration-500">
        
        {/* BACKGROUND GLOW EFFECT */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-20"
          style={{ background: `radial-gradient(800px circle at ${glow.x}px ${glow.y}px, rgba(59, 130, 246, 0.15), transparent 80%)` }}
        />

        {/* ================= HERO ================= */}
        <section className="relative z-10 pt-40 pb-20 px-6 text-center max-w-5xl mx-auto">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-500 font-bold tracking-widest text-[10px] uppercase border border-blue-500/20 px-4 py-2 rounded-full bg-blue-500/5">
            Who We Are
          </motion.span>
          <h1 className={`${outfit.className} text-5xl md:text-8xl font-black mt-10 tracking-tighter leading-[0.9]`}>
            We Make Tech <br/><span className="text-blue-500 italic">Easy</span>
          </h1>
          <p className="mt-10 text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            SkillPhantom is a place where we help you learn real skills like coding and AI, so you can build a great future with confidence.
          </p>
        </section>

        {/* ================= MISSION & VISION (BOLD & SIMPLE) ================= */}
        <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-grey/5 p-10 rounded-[3rem]">
              <h2 className={`${outfit.className} text-4xl font-bold mb-6 text-blue-500`}>Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our mission is to help every student learn how to build things. We want to teach you how the digital world works in the simplest way possible.
              </p>
            </div>
            <div className="bg-blue-600 p-12 rounded-[4rem] shadow-2xl shadow-blue-600/20">
              <h2 className={`${outfit.className} text-4xl font-bold mb-6 text-white`}>Our Vision</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                We want to see a future where students are not confused about their careers. We want to be the best platform for practical learning in India.
              </p>
            </div>
          </div>
        </section>

 {/* ================= FOUNDERS (HIGHLIGHTED) ================= */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <h2 className={`${outfit.className} text-3xl font-bold mb-16 text-center text-gray-600 uppercase tracking-[0.5em]`}>The Leadership</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((f, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }} 
                className={`p-2 bg-gradient-to-b from-white/10 to-transparent rounded-[4rem] ${i === 1 ? 'md:mt-20' : ''}`}
              >
                <div className="bg-[#080808] rounded-[3.8rem] p-10 h-full border border-white/5">
                  <img src={f.img} className="w-full h-[500px] object-cover rounded-[3rem] mb-10 grayscale hover:grayscale-0 transition-all duration-700" alt={f.name} />
                  <h3 className={`${outfit.className} text-4xl font-bold text-white`}>{f.name}</h3>
                  <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mt-2 mb-6">{f.role}</p>
                  <p className="text-gray-500 text-lg mb-10 leading-relaxed">{f.bio}</p>
                  <Link href={f.portfolio} className="px-10 py-4 bg-white text-black font-black rounded-full hover:bg-blue-600 hover:text-white transition-all inline-block">
                    View Profile
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= CORE TEAM (EASY LIST) ================= */}
        <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <h3 className={`${outfit.className} text-4xl font-bold`}>Core Team.</h3>
            <p className="text-gray-500 text-sm max-w-xs text-right">The experts making everything happen behind the scenes.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <Link href={m.portfolio} key={i} className="group">
                <div className="p-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/4 rounded-[3rem] hover:border-blue-500 transition-all shadow-sm dark:shadow-none">
                  <img src={m.img} className="w-20 h-20 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" alt={m.name} />
                  <div>
                    <h4 className="font-bold text-lg group-hover:text-blue-500 transition-colors">{m.name}</h4>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{m.role}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

    

      </main>
    </>
  );
}
