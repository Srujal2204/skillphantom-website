"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import { FaCheckCircle } from "react-icons/fa";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function ApplyClient() {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [timer, setTimer] = useState(3);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "", email: "", whatsapp: "", education: "",
    college: "", location: "", domain: "", duration: "",
    reason: "", resumeLink: "",
  });

  // Initial Loading Screen Timer
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  // Countdown logic for Success Popup
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showSuccess && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setShowSuccess(false);
      setTimer(3) // Reset for next time
    }
    return () => clearInterval(interval);
  }, [showSuccess, timer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    setSubmitting(true);

    
    try {
      const response = await fetch("https://sheetdb.io/api/v1/gqlcip3ttsla9", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [form] }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setForm({ // Form reset
          name: "", email: "", whatsapp: "", education: "",
          college: "", location: "", domain: "", duration: "",
          reason: "", resumeLink: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      setError("Something went wrong. Please check your internet and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-black transition-colors duration-500">
            <h2 className={`${outfit.className} text-slate-900 dark:text-white text-lg font-bold tracking-[0.3em] uppercase mb-4`}>Opening Portal</h2>
            <div className="w-40 h-[2px] bg-slate-100 dark:bg-white/10 relative overflow-hidden">
              <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="absolute inset-0 bg-blue-600 w-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`relative bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white min-h-screen transition-colors duration-500 overflow-hidden ${inter.className}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          <header className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full border border-blue-600/20 bg-blue-600/5 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">Internship Program 2026</div>
            <h1 className={`${outfit.className} text-5xl md:text-7xl font-black tracking-tighter mb-6`}>Apply for <span className="text-blue-600">Success.</span></h1>
            <p className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto text-lg font-medium">Selection is based on your interest and skills.</p>
          </header>

          <form onSubmit={handleSubmitForm} className={`space-y-10 transition-all duration-500 ${showSuccess ? "blur-md pointer-events-none" : ""}`}>
            {/* PERSONAL INFO */}
            <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 p-8 md:p-12 rounded-[3rem] shadow-sm">
              <div className="md:col-span-2 mb-4">
                <h3 className={`${outfit.className} text-2xl font-bold text-slate-900 dark:text-white`}>1. Personal Information</h3>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name *</label>
                <input name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" className="w-full p-4 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-2xl focus:border-blue-600 outline-none transition" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address *</label>
                <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="name@email.com" className="w-full p-4 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-2xl focus:border-blue-600 outline-none transition" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">WhatsApp Number *</label>
                <input
                  name="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="Write Number like xxxxxxxxxxx (+91)"
                  className="w-full p-4 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-2xl focus:border-blue-600 outline-none transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">City, State *</label>
                <input name="location" required value={form.location} onChange={handleChange} placeholder="e.g. Ahmedabad, Gujarat" className="w-full p-4 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-2xl focus:border-blue-600 outline-none transition" />
              </div>
            </div>

            {/* ACADEMIC INFO */}
            <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 p-8 md:p-12 rounded-[3rem] shadow-sm">
              <div className="md:col-span-2 mb-4">
                <h3 className={`${outfit.className} text-2xl font-bold text-slate-900 dark:text-white`}>2. Academic Details</h3>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Degree / Education *</label>
                <input name="education" required value={form.education} onChange={handleChange} placeholder="e.g. B.Tech CSE" className="w-full p-4 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-2xl focus:border-blue-600 outline-none transition" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">College Name *</label>
                <input name="college" required value={form.college} onChange={handleChange} placeholder="Full University Name" className="w-full p-4 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-2xl focus:border-blue-600 outline-none transition" />
              </div>
            </div>

            {/* PREFERENCE */}
            <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 p-8 md:p-12 rounded-[3rem] shadow-sm">
              <div className="md:col-span-2 mb-4">
                <h3 className={`${outfit.className} text-2xl font-bold text-slate-900 dark:text-white`}>3. Your Preference</h3>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Preferred Domain *</label>
                <select name="domain" required value={form.domain} onChange={handleChange} className="w-full p-4 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-2xl outline-none transition text-slate-900 dark:text-white">
                  <option value="">Select Field</option>
                  <option>Web Development</option>
                  <option>Cybersecurity</option>
                  <option>Programming</option>
                  <option>AI / ML</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Desired Duration *</label>
                <select name="duration" required value={form.duration} onChange={handleChange} className="w-full p-4 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-2xl outline-none transition text-slate-900 dark:text-white">
                  <option value="">Select Duration</option>
                  <option>1 Month</option>
                  <option>3 Months</option>
                  <option>6 Months</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Resume Link (Public Drive Link)</label>
                <input name="resumeLink" value={form.resumeLink} onChange={handleChange} placeholder="https://drive.google.com/..." className="w-full p-4 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-2xl focus:border-blue-600 outline-none transition" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Why should we select you?</label>
                <textarea name="reason" rows={4} value={form.reason} onChange={handleChange} placeholder="Tell us about your passion..." className="w-full p-4 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-2xl focus:border-blue-600 outline-none transition" />
              </div>
            </div>

            {error && <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-2xl text-center font-bold">⚠️ {error}</div>}

            <div className="flex flex-col items-center">
              <button type="submit" disabled={submitting} className={`w-full md:w-auto px-20 py-6 font-black text-xl rounded-full transition-all transform ${submitting ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-blue-600 text-white hover:scale-105 shadow-2xl shadow-blue-600/30"}`}>
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>

          {/* 🔥 SUCCESS POPUP MODAL */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] flex items-center justify-center px-4 bg-black/60 backdrop-blur-md">
                <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl border border-blue-500/20 max-w-sm w-full text-center">
                  <div className="w-24 h-24 bg-blue-100 dark:bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle className="text-blue-600 dark:text-blue-400 text-5xl animate-bounce" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase mb-2 tracking-tighter">Submitted!</h2>
                  <p className="text-slate-500 dark:text-gray-400 font-medium mb-8">Thank you! Aapki details save ho gayi hain.</p>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Resetting Form in</div>
                    <div className="text-4xl font-black text-blue-600">{timer}</div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}