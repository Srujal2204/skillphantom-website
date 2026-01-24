"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaCheckCircle, FaChevronDown } from "react-icons/fa";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default function ContactClient() {
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", subject: "General Inquiry" });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // API call placeholder
      setIsSubmitted(true);
      setForm({ name: "", email: "", message: "", subject: "General Inquiry" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`min-h-screen transition-colors duration-500 bg-slate-50 dark:bg-[#030303] text-slate-900 dark:text-white ${inter.className} relative overflow-hidden pb-20`}>
        
        {/* BACKGROUND GLOWS - Hidden in light mode for a cleaner look */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] rounded-full" />

        <section className="relative z-10 pt-32 pb-16 px-6 text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-blue-600 dark:text-blue-500 font-bold text-[10px] tracking-[0.3em] uppercase bg-blue-500/10 border border-blue-500/20 px-6 py-2 rounded-full">
              Get in Touch
            </span>
            <h1 className={`${outfit.className} text-5xl md:text-8xl font-black mt-8 tracking-tighter`}>
              Let's <span className="text-blue-600 italic">Talk</span>
            </h1>
            <p className="mt-8 text-lg text-slate-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
              Have a question about our courses? Want to partner with us? 
              Fill the form and we will reply very fast.
            </p>
          </motion.div>
        </section>

        <section className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          
          {/* LEFT SIDE: INFO */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-10 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[3rem] shadow-sm dark:shadow-none">
              <h3 className={`${outfit.className} text-2xl font-bold mb-8`}>Contact Details</h3>
              
              <div className="space-y-8">
                <ContactInfoItem icon={<FaEnvelope className="text-blue-500" />} title="Email us" detail="skillphantomtechonolies@gmail.com" />
                <ContactInfoItem icon={<FaWhatsapp className="text-green-500" />} title="WhatsApp Support" detail="+91 97278 13568 / 9898128427" isLink="https://wa.me/919727813568" />
                <ContactInfoItem icon={<FaMapMarkerAlt className="text-red-500" />} title="Our Office" detail="Ahemdabad, Gujarat, India" />
                {/* <ContactInfoItem icon={<FaClock className="text-yellow-500" />} title="Working Hours" detail="Mon - Sat: 10 AM to 7 PM" /> */}
              </div>
            </div>

            {/* BLUE BOX - WhatsApp Integration */}
            <div className="p-10 bg-blue-600 rounded-[3rem] text-white relative overflow-hidden group shadow-xl shadow-blue-500/20">
              <div className="relative z-10">
                <h4 className="font-bold text-xl mb-3 font-outfit">Need Help Fast?</h4>
                <p className="text-sm text-blue-100 mb-6">Chat with us on WhatsApp or visit our FAQ page.</p>
                <Link 
                  href="/faq" 
                  className="inline-block text-[10px] font-black uppercase tracking-widest bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all shadow-lg"
                >
                  Visit FAQ Center
                </Link>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
            </div>
          </div>

          {/* RIGHT SIDE: THE FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[4rem] p-8 md:p-12 shadow-xl dark:shadow-2xl relative">
              
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20 bg-white dark:bg-black rounded-[4rem] flex flex-col items-center justify-center text-center p-10">
                    <FaCheckCircle className="text-blue-500 text-7xl mb-6" />
                    <h2 className={`${outfit.className} text-3xl font-bold mb-4`}>Message Sent!</h2>
                    <p className="text-slate-500 dark:text-gray-400 font-medium">Our team will contact you within 24 hours.</p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-8 text-xs font-bold uppercase tracking-widest text-blue-500 hover:text-blue-700">Send Another</button>
                  </motion.div>
                )}
              </AnimatePresence>

              <h3 className={`${outfit.className} text-3xl font-bold mb-10`}>Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput label="Full Name" name="name" placeholder="E.g. John Doe" value={form.name} onChange={handleChange} />
                  <FormInput label="Email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Subject</label>
                  <div className="relative">
                    <select name="subject" value={form.subject} onChange={handleChange} className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-slate-700 dark:text-gray-300 focus:border-blue-500 outline-none appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Internship Question</option>
                      <option>School Program</option>
                      <option>Other</option>
                    </select>
                    <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xs" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">Message</label>
                  <textarea name="message" required rows={4} placeholder="How can we help you?" value={form.message} onChange={handleChange} className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-[2rem] p-5 text-slate-900 dark:text-white focus:border-blue-500 outline-none resize-none" />
                </div>

                <motion.button whileTap={{ scale: 0.98 }} type="submit" className="w-full py-5 bg-blue-600 text-white dark:bg-white dark:text-black rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-black hover:text-white dark:hover:bg-blue-600 transition-all shadow-lg">
                  Submit Now
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ContactInfoItem({ icon, title, detail, isLink }: any) {
  const content = (
    <div className="flex items-start gap-5 group">
      <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 flex items-center justify-center text-xl shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">{title}</h4>
        <p className="text-slate-900 dark:text-white font-semibold mt-1 transition-colors group-hover:text-blue-500">{detail}</p>
      </div>
    </div>
  );

  return isLink ? <a href={isLink} target="_blank" className="block">{content}</a> : content;
}

function FormInput({ label, ...props }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-4">{label}</label>
      <input required {...props} className="w-full bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 rounded-2xl p-4 text-slate-900 dark:text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-gray-700" />
    </div>
  );
}