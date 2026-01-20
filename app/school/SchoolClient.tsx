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
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  // Yaha tum apni photos ka path change kar sakte ho (public folder se)
  const workshopPhotos = [
    { id: 1, src: "/workshop/photo1.jpg", title: "Live Coding Session", size: "large" },
    { id: 2, src: "/workshop/photo2.jpg", title: "Student Interaction", size: "small" },
    { id: 3, src: "/workshop/photo3.jpg", title: "Project Showcase", size: "small" },
    { id: 4, src: "/workshop/photo4.jpg", title: "Award Distribution", size: "medium" },
    { id: 5, src: "/workshop/photo5.jpg", title: "Group Discussion", size: "medium" },
  ];

  const domains = [
    {
      title: "Making Websites",
      desc: "We teach kids how the internet works and how they can create their own simple pages. It's like digital art!",
      icon: "🎨"
    },
    {
      title: "Smart Machines (AI)",
      desc: "We explain how computers 'think' and help kids understand how to use AI tools safely and smartly.",
      icon: "🤖"
    },
    {
      title: "Internet Safety",
      desc: "The most important part—teaching kids how to stay safe online, keep secrets (passwords) safe, and talk to others nicely.",
      icon: "🛡️"
    },
    {
      title: "Brain Games & Logic",
      desc: "We use simple puzzles and coding games to help kids think step-by-step. This helps them in Math and Science too!",
      icon: "🧩"
    }
  ];

  const benefits = [
    { for: "Students", points: ["Learn new things easily", "Build confidence in computers", "Become smart digital citizens", "Think better and faster"] },
    { for: "Schools", points: ["Modern classes for students", "Stay ahead of other schools", "Trained experts as teachers", "Zero extra pressure on teachers"] }
  ];

  return (
    <>
      {/* ================= PREMIUM LOADER ================= */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
              <h2 className={`${outfit.className} text-white text-lg font-bold tracking-[0.3em] uppercase mb-4 text-center px-6`}>
                Loading School Program Details
              </h2>
              <div className="w-40 h-[2px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }} 
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} 
                  className="absolute inset-0 bg-blue-500 w-full shadow-[0_0_15px_#3b82f6]"
                />
              </div>
              <p className="text-gray-500 text-[10px] mt-4 uppercase tracking-[0.2em]">Building Future Leaders</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`relative bg-[#050505] text-white min-h-screen overflow-hidden ${inter.className}`}>
        
        {/* LIGHT EFFECT */}
        <div className="pointer-events-none fixed inset-0 z-0 opacity-10"
          style={{ background: `radial-gradient(1000px circle at ${glow.x}px ${glow.y}px, #3b82f6, transparent 80%)` }}
        />

        {/* ================= HERO SECTION ================= */}
        <header className="relative z-10 pt-40 pb-24 px-6 text-center max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-6 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold uppercase tracking-widest"
          >
            Empowering the Next Generation
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${outfit.className} text-5xl md:text-8xl font-extrabold mb-10 tracking-tighter`}
          >
            Teach Your Kids <br />
            <span className="text-blue-500">Skills of 2026.</span>
          </motion.h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto mb-14 leading-relaxed">
            School is for books, but SkillPhantom is for the <strong>real world</strong>. We help students learn technology in a way that is fun, easy, and useful.
          </p>
          <Link href="/contact" className="px-12 py-5 bg-white text-black font-extrabold rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5">
            Partner with Us
          </Link>
        </header>

        {/* ================= CONDUCTED WORKSHOPS (GALLERY) ================= */}
        <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <h2 className={`${outfit.className} text-4xl md:text-6xl font-bold mb-6`}>
                Conducted <span className="text-blue-500 italic">Workshops.</span>
              </h2>
              <p className="text-gray-500 text-lg">
                We believe in learning by doing. Here is a glimpse of our latest workshops where students turned their ideas into reality.
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex items-center gap-4 text-blue-400 font-bold text-xs uppercase tracking-[0.2em] bg-blue-500/5 border border-blue-500/10 px-6 py-3 rounded-2xl">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Recent Activities
            </div>
          </div>

          {/* BENTO GRID GALLERY */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[1200px] md:h-[700px]">
            {/* Big Feature Image */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-[3rem] border border-white/5 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />
              <img src="/workshop/photo1.jpg" alt="Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-10 left-10 z-20">
                <span className="px-4 py-1 bg-blue-600 rounded-full text-[10px] font-bold uppercase mb-3 inline-block">Main Event</span>
                <h4 className="text-2xl font-bold">Interactive Tech Workshop</h4>
              </div>
            </motion.div>

            {/* Small Images */}
            <motion.div whileHover={{ scale: 0.98 }} className="relative overflow-hidden rounded-[3rem] border border-white/5 group">
               <img src="/workshop/photo2.jpg" alt="Workshop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold">In Action</div>
            </motion.div>

            <motion.div whileHover={{ scale: 0.98 }} className="relative overflow-hidden rounded-[3rem] border border-white/5 group">
               <img src="/workshop/photo3.jpg" alt="Workshop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold">Team Work</div>
            </motion.div>

            {/* Medium Wide Image */}
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="md:col-span-2 relative overflow-hidden rounded-[3rem] border border-white/5 group"
            >
               <img src="/workshop/photo4.jpg" alt="Workshop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute bottom-8 left-8 z-20">
                <h4 className="text-xl font-bold">Project Demos</h4>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= TOPICS WE COVER ================= */}
        <section className="relative z-10 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className={`${outfit.className} text-4xl md:text-6xl font-bold mb-6`}>What will they learn?</h2>
              <p className="text-gray-500 text-lg">Simple topics explained in a way kids love.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {domains.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-10 bg-white/[0.03] border border-white/5 rounded-[3rem] group hover:border-blue-500/30 transition-all"
                >
                  <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className={`${outfit.className} text-2xl font-bold mb-4`}>{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS (STEPS) ================= */}
        <section className="relative z-10 py-32 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className={`${outfit.className} text-4xl md:text-6xl font-bold text-center mb-20`}>Easy for Schools.</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { s: "Step 1", t: "Planning", d: "We sit with the school and pick the best time for classes." },
                { s: "Step 2", t: "Live Classes", d: "Our experts teach students using simple, fun activities." },
                { s: "Step 3", t: "Celebration", d: "Kids get certificates and show off the cool things they built." }
              ].map((step, i) => (
                <div key={i} className="text-center group">
                  <div className="text-blue-500 font-black text-xs uppercase tracking-widest mb-4 group-hover:scale-110 transition-transform">{step.s}</div>
                  <h4 className="text-2xl font-bold mb-4">{step.t}</h4>
                  <p className="text-gray-500 leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BENEFITS ================= */}
        <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {benefits.map((b, i) => (
              <div key={i} className="p-12 rounded-[4rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                <h3 className={`${outfit.className} text-3xl font-bold mb-8 text-blue-500`}>For {b.for}</h3>
                <ul className="space-y-6">
                  {b.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-gray-400">
                      <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CALL TO ACTION / FOOTER ================= */}
        <footer className="relative z-10 py-44 px-6 text-center">
          <div className="absolute inset-0 bg-blue-600/5 blur-[150px] -z-10" />
          <h2 className={`${outfit.className} text-5xl md:text-8xl font-black mb-12 tracking-tight`}>
            Ready to <span className="text-blue-500 underline decoration-white/10 underline-offset-8">Start?</span>
          </h2>
          <Link href="/contact" className="px-20 py-8 bg-blue-600 text-white font-black text-2xl rounded-full hover:bg-white hover:text-black transition transform hover:scale-105 shadow-2xl shadow-blue-600/20">
            Talk to Our Team
          </Link>
          
          <div className="mt-32 pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-left text-gray-500 text-xs font-bold uppercase tracking-widest">
              Built for Schools by SkillPhantom
            </div>
            <div className="text-center text-gray-700 text-[10px] font-bold uppercase tracking-[0.5em]">
              SkillPhantom Technologies • 2026
            </div>
            <div className="text-right text-gray-500 text-xs font-bold uppercase tracking-widest">
              Educating Tomorrow, Today.
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}