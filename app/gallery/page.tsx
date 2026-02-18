"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Workshops",
  "Internships",
  "Hackathons",
  "Certificates",
];

const images = [
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715740/photo1_cigava.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770713806/photo1_3_oq1uwe.webp",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770712979/photo1_4_u3b7ac.webp",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770713822/photo1_5_h2wwgi.webp",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770713062/photo1_6_sffnsb.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770712989/photo1_7_rfle6e.webp",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770712986/photo1_8_r0ys4r.webp",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715557/photo1_50_o49xj8.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770713097/photo1_10_shwdo5.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770713009/photo1_11_mfcvuk.webp",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770713170/photo1_12_n2bozm.webp",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770713080/photo1_13_hyftcj.webp",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770713198/photo1_14_b4hkas.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770713220/photo1_16_fx4zqb.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770714024/photo1_17_v0npg9.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770713198/photo1_18_uigsrx.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770713341/photo1_19_fnfv2k.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770714887/photo1_48_mr4pke.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770713330/photo1_21_cjpll7.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715556/photo1_64_ryrox4.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715560/photo1_35_kdyzrk.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715567/photo1_65_rtczif.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },

  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770714122/photo1_25_atnu6p.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770713409/photo1_26_amqy7i.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715553/photo1_30_syyr5r.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715077/photo1_31_hs5kep.jpg",
    title: "Cyber Security Workshop – Godhra",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715735/photo1_66_naczwd.jpg",
    title: "Cyber Security Workshop – Gandhinagar",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715733/photo1_69_fcw2u7.jpg",
    title: "Cyber Security Workshop – Gandhinagar",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715733/photo-101_zrwweq.jpg",
    title: "Cyber Security Workshop – Gandhinagar",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715734/photo-102_odmstx.jpg",
    title: "Cyber Security Workshop – Gandhinagar",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715734/photo-103_i4py9s.jpg",
    title: "Cyber Security Workshop – Gandhinagar",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715734/photo-104_i94o2o.jpg",
    title: "Cyber Security Workshop – Gandhinagar",
    category: "Workshops",
  },{
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715735/photo-105_xbfwb7.jpg",
    title: "Cyber Security Workshop – Gandhinagar",
    category: "Workshops",
  },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770715734/photo-106_lrynq8.jpg",
    title: "Cyber Security Workshop – Gandhinagar",
    category: "Workshops",
  },
  // {
  //   src: "/gallery/workshops/photo-107.jpg",
  //   title: "Cyber Security Workshop – Gandhinagar",
  //   category: "Workshops",
  // },
  {
    src: "https://res.cloudinary.com/dxk3bqhmo/image/upload/v1770999808/photo1_68_dnxtvn.jpg",
    title: "Cyber Security Workshop – Gandhinagar",
    category: "Workshops",
  },
  {
    src: "/gallery/internship/photo-1.jpeg",
    title: "Successfully conducted Cyber Security mini workshop",
    category: "Internships",
  },
    {
    src: "/gallery/internship/photo-2.jpeg",
    title: "Successfully conducted Cyber Security mini workshop",
    category: "Internships",
  },
    {
    src: "/gallery/internship/photo-3.jpeg",
    title: "Demo Lecture for Nigerian Learners",
    category: "Internships",
  },  
  {
    src: "/gallery/internship/photo-4.jpeg",
    title: "Demo Lecture for Nigerian Learners",
    category: "Internships",
  },
    {
    src: "/gallery/internship/photo-5.jpeg",
    title: "Demo Lecture for Nigerian Learners",
    category: "Internships",
  },
    {
    src: "/gallery/internship/photo-6.jpeg",
    title: "Demo Lecture for Nigerian Learners",
    category: "Internships",
  },
  // {
  //   src: "/gallery/hackathon-1.jpg",
  //   title: "24hr Hackathon Event",
  //   category: "Hackathons",
  // },
  {
    src: "/gallery/Certificate/photo-1 (1).jpg",
    title: "Internship Certificate Distribution",
    category: "Certificates",
  },
    {
    src: "/gallery/Certificate/photo-1 (2).jpg",
    title: "Internship Certificate Distribution",
    category: "Certificates",
  },
    {
    src: "/gallery/Certificate/photo-1 (3).jpg",
    title: "Internship Certificate Distribution",
    category: "Certificates",
  },
    {
    src: "/gallery/Certificate/photo-1 (4).jpg",
    title: "Internship Certificate Distribution",
    category: "Certificates",
  },
    {
    src: "/gallery/Certificate/photo-1 (5).jpg",
    title: "Internship Certificate Distribution",
    category: "Certificates",
  },
    {
    src: "/gallery/Certificate/photo-1 (6).jpg",
    title: "Internship Certificate Distribution",
    category: "Certificates",
  },
    {
    src: "/gallery/Certificate/photo-1 (7).jpg",
    title: "Internship Certificate Distribution",
    category: "Certificates",
  },
    {
    src: "/gallery/Certificate/photo-1 (8).jpg",
    title: "Internship Certificate Distribution",
    category: "Certificates",
  },
    {
    src: "/gallery/Certificate/photo-1 (9).jpg",
    title: "Internship Certificate Distribution",
    category: "Certificates",
  },
    {
    src: "/gallery/Certificate/photo-1 (10).jpg",
    title: "Internship Certificate Distribution",
    category: "Certificates",
  },
    {
    src: "/gallery/Certificate/photo-1 (11).jpg",
    title: "Internship Certificate Distribution",
    category: "Certificates",
  },
    {
    src: "/gallery/Certificate/photo-1 (12).jpg",
    title: "Internship Certificate Distribution",
    category: "Certificates",
  },
    {
    src: "/gallery/Certificate/photo-1 (13).jpg",
    title: "Internship Certificate Distribution",
    category: "Certificates",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <main className="bg-white dark:bg-[#020202] text-slate-900 dark:text-white min-h-screen pb-20 transition-colors duration-500">
      
      {/* BACKGROUND BLURS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 px-6 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
          <span className="text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] border border-blue-100 dark:border-white/10 px-3 py-1 rounded-full">
            The Archive 2026
          </span>
        </motion.div>
        
        {/* Mobile par text size thoda control kiya hai taki image_5b1938.png jaisa clutter na ho */}
        <h1 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-4 uppercase">
          CRAFTING <br/> 
          <span className="italic font-serif text-blue-600">MOMENTS</span>
        </h1>
        <p className="max-w-md mx-auto text-slate-500 dark:text-slate-400 font-medium text-sm md:text-lg">
          Bridging the gap between theory and execution.
        </p>
      </section>

      {/* ================= FIXED ADAPTIVE NAVIGATION ================= */}
    <nav className="sticky top-4 z-50 flex justify-center mb-12 px-6">
        <div className="grid grid-cols-2 md:flex md:flex-row gap-2 p-2 bg-slate-100/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[1.5rem] w-full max-w-2xl shadow-2xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300
                ${activeCategory === cat ? "text-white" : "text-slate-500 dark:text-slate-400 hover:bg-white/10"}`}
            >
              {activeCategory === cat && (
                <motion.div layoutId="activeTab" className="absolute inset-0 bg-blue-600 rounded-xl -z-10 shadow-lg shadow-blue-600/40" />
              )}
              {cat}
              {/* Hackathon par chota sa dot ya badge */}
              {cat === "Hackathons" && (
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
              )}
            </button>
          ))}
        </div>
      </nav>

   {/* BENTO GRID AREA */}
      <section className="max-w-[1400px] mx-auto px-4">
        {activeCategory === "Hackathons" ? (
          /* COMING SOON MESSAGE */
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-200 dark:border-white/10 rounded-[2rem]"
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-300 dark:text-white/20 uppercase italic">
              Coming Soon
            </h2>
            <p className="text-blue-600 font-bold tracking-widest uppercase text-xs mt-4">
              Get ready for the ultimate 24hr challenge
            </p>
          </motion.div>
        ) : (
          /* REGULAR GALLERY */
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, i) => (
                <motion.div 
                  key={img.src} 
                  layout 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedImage(img)}
                  className="..."
                >
                  <Image src={img.src} alt={img.title} width={600} height={800} className="..." />
                  {/* Overlay same rahega */}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden">
              <Image src={selectedImage.src} alt={selectedImage.title} fill className="object-contain" />
            </div>
            <button className="absolute top-6 right-6 text-white text-3xl">×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}