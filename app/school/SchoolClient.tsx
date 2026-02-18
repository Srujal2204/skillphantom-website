"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Outfit, Inter } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function SchoolClient() {
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

  const domains = [
    { title: "Making Websites", desc: "We teach kids how the internet works and how they can create their own simple pages. It's like digital art!", icon: "🎨" },
    { title: "Smart Machines (AI)", desc: "We explain how computers 'think' and help kids understand how to use AI tools safely and smartly.", icon: "🤖" },
    { title: "Internet Safety", desc: "The most important part—teaching kids how to stay safe online and talk to others nicely.", icon: "🛡️" },
    { title: "Brain Games & Logic", desc: "We use simple puzzles and coding games to help kids think step-by-step. Helps in Math & Science too!", icon: "🧩" }
  ];

  const benefits = [
    { for: "Students", points: ["Learn new things easily", "Build confidence in computers", "Become smart digital citizens", "Think better and faster"] },
    { for: "Schools", points: ["Modern classes for students", "Stay ahead of competition", "Trained experts as teachers", "Zero extra pressure on teachers"] }
  ];

  return (
    <>
      {/* ================= ADAPTIVE LOADER ================= */}
      <AnimatePresence>
        {loading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-black transition-colors duration-500">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
              <h2 className={`${outfit.className} text-slate-900 dark:text-white text-lg font-bold tracking-[0.3em] uppercase mb-4 text-center px-6`}>
                Loading School Program
              </h2>
              <div className="w-40 h-[2px] bg-slate-100 dark:bg-white/10 relative overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }} 
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} 
                  className="absolute inset-0 bg-blue-600 w-full shadow-[0_0_15px_#2563eb]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`relative bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white min-h-screen transition-colors duration-500 overflow-hidden ${inter.className}`}>
        
        {/* ADAPTIVE GLOW EFFECT */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.05] dark:opacity-10 transition-opacity"
          style={{ background: `radial-gradient(1000px circle at ${glow.x}px ${glow.y}px, #3b82f6, transparent 80%)` }}
        />

        {/* ================= HERO SECTION ================= */}
        <header className="relative z-10 pt-44 pb-24 px-6 text-center max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block mb-8 px-6 py-2 rounded-full border border-blue-600/20 bg-blue-600/5 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
            Empowering the Next Generation
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className={`${outfit.className} text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-tight`}>
            Teach Your Kids <br />
            <span className="text-blue-600">Skills of Future</span>
          </motion.h1>
          <p className="text-slate-500 dark:text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto mb-14 leading-relaxed font-medium">
            School is for books, but SkillPhantom is for the <strong>real world</strong>. We help students learn technology in a way that is fun, easy, and useful.
          </p>
          <Link href="/contact" className="px-12 py-5 bg-blue-600 text-white dark:bg-white dark:text-black font-extrabold rounded-full hover:scale-105 transition-all shadow-xl shadow-blue-500/20">
            Partner with Us
          </Link>
        </header>

        {/* ================= BENTO GRID GALLERY ================= */}
        <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className={`${outfit.className} text-4xl md:text-6xl font-black mb-6`}>
                Conducted <span className="text-blue-600 italic">Workshops.</span>
              </h2>
              <p className="text-slate-500 dark:text-gray-500 text-lg font-medium">Glimpse of our latest sessions where students turned ideas into reality.</p>
            </div>
            <div className="mt-8 md:mt-0 flex items-center gap-4 text-blue-600 dark:text-blue-400 font-bold text-xs bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 px-6 py-3 rounded-2xl shadow-sm">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              Live Activities
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[700px]">
            {/* Feature Image */}
            <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-2 md:row-span-2 relative h-[400px] md:h-auto overflow-hidden rounded-[3rem] border border-slate-200 dark:border-white/5 group bg-slate-200">
              <img src="/workshop/photo1.jpg" alt="Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <div className="absolute bottom-10 left-10 z-20">
                <span className="px-4 py-1 bg-blue-600 text-white rounded-full text-[10px] font-bold uppercase mb-3 inline-block">Main Event</span>
                <h4 className="text-2xl font-bold text-white tracking-tight">Interactive Tech Workshop</h4>
              </div>
            </motion.div>

            {/* Small Images */}
            <motion.div whileHover={{ scale: 0.98 }} className="relative h-[250px] md:h-auto overflow-hidden rounded-[3rem] border border-slate-200 dark:border-white/5 group bg-slate-200">
               <img src="/workshop/photo2.jpg" alt="Workshop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>

            <motion.div whileHover={{ scale: 0.98 }} className="relative h-[250px] md:h-auto overflow-hidden rounded-[3rem] border border-slate-200 dark:border-white/5 group bg-slate-200">
               <img src="/workshop/photo3.jpg" alt="Workshop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>

            {/* Medium Image */}
            <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-2 relative h-[250px] md:h-auto overflow-hidden rounded-[3rem] border border-slate-200 dark:border-white/5 group bg-slate-200">
               <img src="/workshop/photo4.jpeg" alt="Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </motion.div>
             <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-2 relative h-[250px] md:h-auto overflow-hidden rounded-[3rem] border border-slate-200 dark:border-white/5 group bg-slate-200">
               <img src="/workshop/photo5.jpeg" alt="Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </motion.div>
            <motion.div whileHover={{ scale: 0.98 }} className="relative h-[250px] md:h-auto overflow-hidden rounded-[3rem] border border-slate-200 dark:border-white/5 group bg-slate-200">
               <img src="/workshop/photo6.jpeg" alt="Workshop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>

            <motion.div whileHover={{ scale: 0.98 }} className="relative h-[250px] md:h-auto overflow-hidden rounded-[3rem] border border-slate-200 dark:border-white/5 group bg-slate-200">
               <img src="/workshop/photo7.jpeg" alt="Workshop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/gallery" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black transition transform hover:scale-105 shadow-lg shadow-blue-500/20 inline-block">
              View Full Gallery
            </Link>
          </div>
        </section>

        {/* ================= DOMAINS ================= */}
        <section className="relative z-10 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className={`${outfit.className} text-4xl md:text-6xl font-black mb-6`}>What they learn?</h2>
              <p className="text-slate-500 dark:text-gray-500 font-medium">Simple topics explained in a way kids love.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {domains.map((item, i) => (
                <motion.div key={i} whileHover={{ y: -10 }} className="p-10 bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 rounded-[3rem] group hover:border-blue-500 shadow-sm hover:shadow-xl transition-all">
                  <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className={`${outfit.className} text-2xl font-bold mb-4 text-slate-900 dark:text-white`}>{item.title}</h3>
                  <p className="text-slate-500 dark:text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= STEPS ================= */}
        <section className="relative z-10 py-32 px-6 bg-slate-100/50 dark:bg-white/[0.01] border-y border-slate-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className={`${outfit.className} text-4xl md:text-6xl font-black text-center mb-24`}>Easy for Schools.</h2>
            <div className="grid md:grid-cols-3 gap-16">
              {[
                { s: "Step 1", t: "Planning", d: "We sit with the school and pick the best time for classes." },
                { s: "Step 2", t: "Live Classes", d: "Our experts teach students using simple, fun activities." },
                { s: "Step 3", t: "Celebration", d: "Kids get certificates and show off the cool things they built." }
              ].map((step, i) => (
                <div key={i} className="text-center group relative">
                  <div className="text-blue-600 font-black text-xs uppercase tracking-widest mb-6 block">{step.s}</div>
                  <h4 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white tracking-tight">{step.t}</h4>
                  <p className="text-slate-500 dark:text-gray-500 leading-relaxed font-medium">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BENEFITS ================= */}
        <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {benefits.map((b, i) => (
              <div key={i} className="p-12 rounded-[4rem] bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:shadow-2xl transition-all shadow-blue-500/5">
                <h3 className={`${outfit.className} text-4xl font-black mb-10 text-blue-600`}>For {b.for}</h3>
                <ul className="space-y-6">
                  {b.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-slate-600 dark:text-gray-400 font-medium">
                      <span className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <footer className="relative z-10 py-48 px-6 text-center">
          <div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-600/10 blur-[150px] -z-10" />
          <h2 className={`${outfit.className} text-6xl md:text-9xl font-black mb-12 tracking-tight`}>
            Ready to <span className="text-blue-600 underline decoration-slate-200 dark:decoration-white/10 underline-offset-8">Start?</span>
          </h2>
          <Link href="/contact" className="px-20 py-8 bg-blue-600 text-white font-black text-2xl rounded-full hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black transition transform hover:scale-105 shadow-2xl shadow-blue-600/30 inline-block">
            Talk to Our Team
          </Link>
        </footer>
      </main>
    </>
  );
}