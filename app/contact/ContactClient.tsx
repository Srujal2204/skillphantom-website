"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaCheckCircle } from "react-icons/fa";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default function ContactClient() {
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", subject: "General Inquiry" });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // API Call
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "Contact Inquiry" }),
      });
      
      setIsSubmitted(true);
      setForm({ name: "", email: "", message: "", subject: "General Inquiry" });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* ================= PREMIUM LOADER ================= */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
              <p className={`mt-6 ${outfit.className} text-white font-bold tracking-[0.5em] text-[10px] uppercase`}>
                Loading Help Desk
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`bg-[#030303] text-white min-h-screen ${inter.className} relative overflow-hidden pb-20`}>
        
        {/* BACKGROUND GLOWS */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full" />

        {/* ================= HEADER ================= */}
        <section className="relative z-10 pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-500 font-bold text-[10px] tracking-[0.3em] uppercase bg-blue-500/5 border border-blue-500/20 px-6 py-2 rounded-full">
              Get in Touch
            </span>
            <h1 className={`${outfit.className} text-5xl md:text-8xl font-black mt-8 tracking-tighter`}>
              Let's <span className="text-blue-500 italic text-outline">Talk.</span>
            </h1>
            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Have a question about our courses? Want to partner with us? Or just want to say hi? 
              Fill the form and we will reply very fast.
            </p>
          </motion.div>
        </section>

        {/* ================= MAIN CONTENT ================= */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          
          {/* LEFT SIDE: CONTACT INFO (4 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] backdrop-blur-sm">
              <h3 className={`${outfit.className} text-2xl font-bold mb-8 text-white`}>Contact Details</h3>
              
              <div className="space-y-8">
                <ContactInfoItem 
                  icon={<FaEnvelope className="text-blue-500" />} 
                  title="Email us at" 
                  detail="hello@skillphantom.com" 
                />
                <ContactInfoItem 
                  icon={<FaWhatsapp className="text-green-500" />} 
                  title="WhatsApp Support" 
                  detail="+91 00000 00000" 
                />
                <ContactInfoItem 
                  icon={<FaMapMarkerAlt className="text-red-500" />} 
                  title="Our Office" 
                  detail="Ahmedabad, Gujarat, India" 
                />
                <ContactInfoItem 
                  icon={<FaClock className="text-yellow-500" />} 
                  title="Working Hours" 
                  detail="Mon - Sat: 10 AM to 7 PM" 
                />
              </div>
            </div>

            {/* QUICK LINKS/FAQ MINI BOX */}
            <div className="p-8 bg-blue-600 rounded-[3rem] text-white overflow-hidden relative group">
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-2">Need Help Fast?</h4>
                <p className="text-sm opacity-80 mb-4">Check out our Student Support or visit the FAQ page for quick answers.</p>
                <button className="text-[10px] font-black uppercase tracking-widest bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all">
                  Visit Help Center
                </button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* RIGHT SIDE: THE FORM (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.03] border border-white/10 rounded-[4rem] p-8 md:p-12 shadow-2xl relative">
              
              {/* SUCCESS OVERLAY */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 bg-black/90 backdrop-blur-md rounded-[4rem] flex flex-col items-center justify-center text-center p-10"
                  >
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 10 }}>
                      <FaCheckCircle className="text-blue-500 text-7xl mb-6" />
                    </motion.div>
                    <h2 className={`${outfit.className} text-3xl font-bold mb-4 text-white`}>Message Sent!</h2>
                    <p className="text-gray-400">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-xs font-bold uppercase tracking-widest text-blue-500"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className={`${outfit.className} text-3xl font-bold mb-10`}>Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput 
                    label="Your Name" 
                    name="name" 
                    placeholder="Enter full name" 
                    value={form.name} 
                    onChange={handleChange} 
                  />
                  <FormInput 
                    label="Email Address" 
                    name="email" 
                    type="email" 
                    placeholder="Enter email" 
                    value={form.email} 
                    onChange={handleChange} 
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4">What are you looking for?</label>
                  <select 
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 text-gray-300 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option>General Inquiry</option>
                    <option>Student Admission</option>
                    <option>School Partnership</option>
                    <option>Job/Internship</option>
                    <option>Technical Support</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4">Your Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your message here in simple words..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-[2rem] p-5 text-white focus:border-blue-500 outline-none transition-all resize-none"
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-white text-black rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5"
                >
                  Send to SkillPhantom
                </motion.button>
              </form>
            </div>
          </div>
        </section>

        {/* ================= MAP PLACEHOLDER / DECORATION ================= */}
        <section className="mt-32 px-6 max-w-7xl mx-auto">
          <div className="w-full h-40 bg-white/[0.01] border border-dashed border-white/10 rounded-[3rem] flex items-center justify-center">
            <p className="text-gray-700 font-bold uppercase tracking-[0.8em] text-[10px] text-center">
              Ahmedabad • Gujarat • India
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

// Reusable Contact Item Component
function ContactInfoItem({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) {
  return (
    <div className="flex items-start gap-5 group">
      <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-500/10 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">{title}</h4>
        <p className="text-white font-medium mt-1">{detail}</p>
      </div>
    </div>
  );
}

// Reusable Input Component
function FormInput({ label, ...props }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4">{label}</label>
      <input 
        required
        {...props}
        className="w-full bg-black border border-white/10 rounded-2xl p-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-gray-700"
      />
    </div>
  );
}