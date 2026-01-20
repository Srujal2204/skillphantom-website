"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outfit, Inter } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"] });

export default function ApplyClient() {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    education: "",
    college: "",
    location: "",
    domain: "",
    duration: "",
    reason: "",
    resumeLink: "",
  });

  // Initial Page Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    // Simple Link Validation
    const isValidResumeLink = (link: string) => {
      return (
        link.includes("drive.google.com") ||
        link.includes("dropbox.com") ||
        link.includes("onedrive.live.com")
      );
    };

    if (!isValidResumeLink(form.resumeLink)) {
      setError("Please provide a valid Google Drive, Dropbox, or OneDrive link.");
      return;
    }

    setSubmitting(true);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) formData.append(key, value as string);
    });
    formData.append("type", "Internship Application");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to submit");

      if (typeof window !== "undefined") {
        (window as any).gtag?.("event", "internship_apply_submit");
        (window as any).fbq?.("track", "Lead");
      }

      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please check your internet and try again.");
    } finally {
      setSubmitting(false);
    }
  };

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
              <h2 className={`${outfit.className} text-white text-lg font-bold tracking-[0.3em] uppercase mb-4`}>
                Opening Application Form
              </h2>
              <div className="w-40 h-[2px] bg-white/10 relative overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }} 
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }} 
                  className="absolute inset-0 bg-blue-600 w-full shadow-[0_0_15px_#2563eb]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`relative bg-[#050505] text-white min-h-screen overflow-hidden ${inter.className}`}>
        
        {/* BACKGROUND DECORATION */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full opacity-50 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
          
          {/* ================= SUCCESS STATE ================= */}
          <AnimatePresence>
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="min-h-[70vh] flex flex-col items-center justify-center text-center"
              >
                <div className="w-24 h-24 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-4xl mb-8">
                  ✅
                </div>
                <h1 className={`${outfit.className} text-4xl md:text-6xl font-black mb-6`}>
                  Application <span className="text-green-500">Sent!</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                  Thank you for applying. Our team will review your profile. You'll hear from us soon via email or WhatsApp.
                </p>
                <div className="p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] w-full max-w-lg">
                  <h4 className="font-bold mb-4">Important: Join our Community</h4>
                  <p className="text-sm text-gray-500 mb-6">Receive all batch updates and selection lists here.</p>
                  <a
                    href="https://chat.whatsapp.com/FF7WZvvKCV79SwQNugQIfg"
                    target="_blank"
                    className="block w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl transition shadow-xl"
                  >
                    Join WhatsApp Community
                  </a>
                </div>
              </motion.div>
            ) : (
              /* ================= FORM STATE ================= */
              <div className="animate-in fade-in duration-1000">
                
                {/* HEADER */}
                <header className="text-center mb-16">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-4 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                    Step into your career
                  </motion.div>
                  <h1 className={`${outfit.className} text-5xl md:text-7xl font-extrabold tracking-tighter mb-6`}>
                    Apply for <span className="text-blue-500">Internship</span>
                  </h1>
                  <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Provide your correct details so we can reach out to you. 
                    Selection is based on your interest and skills.
                  </p>
                </header>

                {/* FORM CONTAINER */}
                <form onSubmit={handleSubmit} className="space-y-12">
                  
                  {/* SECTION 1: Personal Info */}
                  <div className="grid md:grid-cols-2 gap-8 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[3rem]">
                    <div className="md:col-span-2 mb-4">
                      <h3 className={`${outfit.className} text-2xl font-bold`}>1. Personal Information</h3>
                      <p className="text-gray-500 text-sm">How do we contact you?</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name <span className="text-red-500">*</span></label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder="John Doe" className="w-full p-4 bg-black border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address <span className="text-red-500">*</span></label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="name@email.com" className="w-full p-4 bg-black border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">WhatsApp Number (with country code) <span className="text-red-500">*</span></label>
                      <input name="whatsapp" required value={form.whatsapp} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="w-full p-4 bg-black border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Location (City, State) <span className="text-red-500">*</span></label>
                      <input name="location" required value={form.location} onChange={handleChange} placeholder="e.g. Vadodara, Gujarat" className="w-full p-4 bg-black border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition" />
                    </div>
                  </div>

                  {/* SECTION 2: Academic Info */}
                  <div className="grid md:grid-cols-2 gap-8 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[3rem]">
                    <div className="md:col-span-2 mb-4">
                      <h3 className={`${outfit.className} text-2xl font-bold`}>2. Academic Details</h3>
                      <p className="text-gray-500 text-sm">Tell us about your education.</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Degree / Education <span className="text-red-500">*</span></label>
                      <input name="education" required value={form.education} onChange={handleChange} placeholder="e.g. B.Tech CSE" className="w-full p-4 bg-black border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">College/University Name <span className="text-red-500">*</span></label>
                      <input name="college" required value={form.college} onChange={handleChange} placeholder="Full College Name" className="w-full p-4 bg-black border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition" />
                    </div>
                  </div>

                  {/* SECTION 3: Internship Preference */}
                  <div className="grid md:grid-cols-2 gap-8 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[3rem]">
                    <div className="md:col-span-2 mb-4">
                      <h3 className={`${outfit.className} text-2xl font-bold`}>3. Your Internship Goal</h3>
                      <p className="text-gray-500 text-sm">Choose what you want to learn.</p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Preferred Domain <span className="text-red-500">*</span></label>
                      <select name="domain" required value={form.domain} onChange={handleChange} className="w-full p-4 bg-black border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition text-gray-400">
                        <option value="">Select Field</option>
                        <option>Web Development</option>
                        <option>Cybersecurity</option>
                        <option>Programming (C++/Java/Python)</option>
                        <option>Artificial Intelligence</option>
                        <option>Networking</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Desired Duration <span className="text-red-500">*</span></label>
                      <select name="duration" required value={form.duration} onChange={handleChange} className="w-full p-4 bg-black border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition text-gray-400">
                        <option value="">Select Duration</option>
                        <option>1 Month</option>
                        <option>3 Months</option>
                        <option>6 Months</option>
                      </select>
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Resume Link (G-Drive / Dropbox) <span className="text-red-500">*</span></label>
                      <input name="resumeLink" required value={form.resumeLink} onChange={handleChange} placeholder="https://drive.google.com/..." className="w-full p-4 bg-black border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition" />
                      <p className="text-[10px] text-gray-600 uppercase tracking-widest ml-1 font-bold italic">Check if the link is public (Anyone with the link can view)</p>
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Why should we select you?</label>
                      <textarea name="reason" rows={4} value={form.reason} onChange={handleChange} placeholder="Briefly explain your interest" className="w-full p-4 bg-black border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition" />
                    </div>
                  </div>

                  {/* ERROR DISPLAY */}
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-2xl text-center font-bold">
                      ⚠️ {error}
                    </div>
                  )}

                  {/* SUBMIT BUTTON */}
                  <div className="flex flex-col items-center">
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`w-full md:w-auto px-20 py-6 font-black text-xl rounded-full transition-all duration-300 transform
                        ${submitting 
                          ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                          : "bg-white text-black hover:scale-105 shadow-[0_20px_60px_rgba(255,255,255,0.1)] hover:bg-blue-600 hover:text-white"
                        }`}
                    >
                      {submitting ? "Processing Application..." : "Submit Application"}
                    </button>
                    <p className="mt-6 text-gray-600 text-[10px] font-bold uppercase tracking-[0.3em]">SkillPhantom Technologies • Secure Portal</p>
                  </div>

                </form>
              </div>
            )}
          </AnimatePresence>

        </div>
      </main>
    </>
  );
}