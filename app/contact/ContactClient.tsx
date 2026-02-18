"use client";

import React, { useState, useRef } from "react"; // useRef add kiya hai
import { motion, AnimatePresence } from "framer-motion";
import { Outfit, Inter } from "next/font/google";
import Link from "next/link";
import { 
  Mail, MessageSquare, CheckCircle2, 
  Send, ChevronRight, Sparkles, MapPin 
} from "lucide-react";

import emailjs from '@emailjs/browser';

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export default function ContactClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null); // Form reference ke liye
  const [formValues, setFormValues] = useState({ from_name: "", email: "", message: "", subject: "General Inquiry" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // EmailJS sendForm use kar rahe hain jo direct HTML form uthata hai
    emailjs.sendForm(
      'service_xwumk3v', 
      'template_9tolo8o', 
      formRef.current, // Reference use kiya yahan
      'Sq2JFWeFKrMmaeqGW'
    )
    .then(() => {
      setIsSubmitted(true);
      setFormValues({ from_name: "", email: "", message: "", subject: "General Inquiry" }); // Form clear
      setTimeout(() => setIsSubmitted(false), 5000);
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      alert("Error: Message nahi bhej paye. Internet ya Key check karein.");
    });
  };

  return (
    <main className={`min-h-screen transition-colors duration-500 bg-white dark:bg-[#020202] text-slate-900 dark:text-white ${inter.className} relative overflow-x-hidden pb-20`}>
      
      {/* Dynamic Background Blurs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-5%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-44 pb-12 px-6 text-center max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Sparkles size={12} /> Get in Touch
          </div>
          <h1 className={`${outfit.className} text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-6`}>
            Let's <br/> <span className="text-blue-600 italic">Connect</span>
          </h1>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 grid lg:grid-cols-12 gap-8 md:gap-12">
        
        {/* LEFT: INFO CARDS */}
        <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
          <div className="p-8 md:p-10 bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 rounded-[2.5rem] md:rounded-[3.5rem]">
            <h3 className={`${outfit.className} text-xl font-bold mb-8 uppercase tracking-widest text-blue-600`}>Contact info</h3>
            <div className="space-y-8">
              <InfoItem icon={<Mail size={20} />} label="Email" value="skillphantomtechnologies@gmail.com" />
              <InfoItem icon={<MessageSquare size={20} />} label="WhatsApp" value="+91 97278 13568" link="https://wa.me/919727813568" />
              <InfoItem icon={<MapPin size={20} />} label="Location" value="Ahmedabad, India" />
            </div>
          </div>
        </div>

        {/* RIGHT: THE FORM */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-6 sm:p-10 md:p-16 shadow-xl relative">
            
            <AnimatePresence>
              {isSubmitted && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-30 bg-white dark:bg-black rounded-[2.5rem] md:rounded-[4rem] flex flex-col items-center justify-center text-center p-6">
                  <CheckCircle2 className="text-blue-600 w-16 h-16 mb-4" />
                  <h2 className={`${outfit.className} text-3xl font-black`}>Message Sent!</h2>
                  <p className="text-slate-500 mt-2">Check your inbox for a welcome mail.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* FORM STARTS HERE */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                {/* NAME MUST BE 'from_name' to match EmailJS */}
                <ModernInput label="Full Name" name="from_name" type="text" placeholder="Your Name" value={formValues.from_name} onChange={handleChange} />
                <ModernInput label="Email" name="email" type="email" placeholder="john@example.com" value={formValues.email} onChange={handleChange} />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Subject</label>
                <select name="subject" value={formValues.subject} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-5 text-sm font-bold outline-none focus:border-blue-500 transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Internships</option>
                  <option>School Programs</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Message</label>
                <textarea name="message" required rows={4} placeholder="What's on your mind?" value={formValues.message} onChange={handleChange} className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 text-sm font-medium outline-none focus:border-blue-500 transition-all resize-none" />
              </div>

              <motion.button 
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 md:py-7 bg-blue-600 text-white rounded-[2rem] md:rounded-[3rem] font-black uppercase tracking-[0.4em] text-[11px] shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

// Sub-components
function InfoItem({ icon, label, value, link }: any) {
  const content = (
    <div className="flex items-center gap-5 group">
      <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <div className="overflow-hidden">
        <h5 className="text-[9px] font-black uppercase tracking-widest text-slate-400">{label}</h5>
        <p className="text-sm md:text-base font-bold truncate group-hover:text-blue-600 transition-colors">{value}</p>
      </div>
    </div>
  );
  return link ? <a href={link} target="_blank" className="block">{content}</a> : content;
}

function ModernInput({ label, ...props }: any) {
  return (
    <div className="space-y-3">
      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">{label}</label>
      <input 
        required {...props} 
        className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-5 text-sm font-bold outline-none focus:border-blue-500 transition-all"
      />
    </div>
  );
}