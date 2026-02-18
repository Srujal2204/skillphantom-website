"use client";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    category: "Workshops",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Apna password yahan replace kar lena
    if (password === "SJ@1510") { 
      setIsAdmin(true);
    } else {
      alert("Unauthorized Access! ❌");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.image) return alert("Bhai, image upload karna zaroori hai!");

    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("🚀 Blog Live Ho Gaya!");
      setFormData({ title: "", description: "", image: "", category: "Workshops" });
    }
  };

  if (!isAdmin) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#050505] text-white px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-8 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 backdrop-blur-3xl shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-2xl bg-blue-600/10 border border-blue-600/20 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-2xl shadow-[0_0_20px_rgba(37,99,235,0.4)]">SJ</div>
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tighter italic">Terminal Access</h1>
            <p className="text-zinc-500 text-sm mt-1 uppercase tracking-widest font-bold">Admin Verification Required</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Enter Access Key"
              className="w-full p-5 bg-black/40 border border-white/10 rounded-2xl outline-none focus:border-blue-600 transition-all text-center tracking-[0.5em] text-xl"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="w-full p-5 bg-blue-600 text-white font-black rounded-2xl uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
              Unlock Portal
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] border border-blue-600/20 px-3 py-1 rounded-full bg-blue-600/5">Admin Panel</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mt-4 uppercase italic">Draft <br/><span className="text-blue-600">Content</span></h1>
          </div>
          <button 
            onClick={() => setIsAdmin(false)} 
            className="w-fit px-6 py-3 bg-zinc-900 hover:bg-red-600/10 hover:text-red-500 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all"
          >
            Terminal Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* FORM AREA */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="group">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 block ml-2 group-focus-within:text-blue-600 transition-colors">Blog Headline</label>
              <input 
                type="text" placeholder="The Future of Cyber Security..." 
                className="w-full p-5 bg-zinc-900/50 border border-white/5 rounded-[1.5rem] outline-none focus:border-blue-600/50 focus:bg-zinc-900 transition-all font-bold text-lg"
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                value={formData.title} required
              />
            </div>

            <div className="group">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 block ml-2 group-focus-within:text-blue-600 transition-colors">Content Narrative</label>
              <textarea 
                placeholder="Start typing the story..." rows={8}
                className="w-full p-5 bg-zinc-900/50 border border-white/5 rounded-[1.5rem] outline-none focus:border-blue-600/50 focus:bg-zinc-900 transition-all font-medium resize-none"
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                value={formData.description} required
              />
            </div>

            <button type="submit" className="w-full p-6 bg-white text-black font-black rounded-[1.5rem] uppercase text-xl tracking-tighter hover:bg-blue-600 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-3">
              Deploy to Production 🚀
            </button>
          </form>

          {/* ASIDE / MEDIA AREA */}
          <div className="space-y-6">
            <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-[2rem] backdrop-blur-xl">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4 block">Visual Media</label>
              
              <CldUploadWidget 
                uploadPreset="skillphantom_preset"
                onSuccess={(result: any) => {
                  setFormData(prev => ({...prev, image: result.info.secure_url}));
                }}
              >
                {({ open }) => (
                  <button 
                    type="button" onClick={() => open()}
                    className={`w-full aspect-square rounded-[1.5rem] border-2 border-dashed flex flex-col items-center justify-center gap-4 transition-all overflow-hidden relative
                      ${formData.image ? "border-green-500/50 bg-green-500/5" : "border-white/10 bg-black/20 hover:border-blue-600/50 hover:bg-blue-600/5"}`}
                  >
                    {formData.image ? (
                      <>
                        <img src={formData.image} className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Preview" />
                        <div className="relative z-10 bg-black/50 px-4 py-2 rounded-full text-[10px] font-black uppercase backdrop-blur-md">Change Media</div>
                      </>
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-2xl">📸</div>
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-50 text-center px-4">Drag image or <br/>click to upload</span>
                      </>
                    )}
                  </button>
                )}
              </CldUploadWidget>
            </div>

            <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-[2rem]">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-4 block">Classification</label>
              <select 
                className="w-full p-4 bg-black/40 border border-white/10 rounded-2xl outline-none font-bold text-xs uppercase tracking-widest"
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                value={formData.category}
              >
                <option value="Workshops">Workshops</option>
                <option value="Internships">Internships</option>
                <option value="Hackathons">Hackathons</option>
                <option value="Tech News">Tech News</option>
              </select>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}