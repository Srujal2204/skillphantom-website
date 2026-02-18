"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- BLOG CARD COMPONENT (Expansion Logic ke saath) ---
const BlogCard = ({ blog, index }: { blog: any; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1, 
        type: "spring", 
        stiffness: 100,
        damping: 20 
      }}
      className={`group relative flex flex-col bg-zinc-900/30 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm transition-all duration-500 h-fit
        ${isExpanded ? "border-blue-600/50 shadow-[0_0_50px_rgba(37,99,235,0.15)]" : "hover:border-blue-600/30"}`}
    >
      {/* Image Container */}
      <motion.div layout className="relative aspect-[16/10] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-[9px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
            {blog.category || "Intelligence"}
          </span>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div layout className="p-8 flex flex-col flex-grow">
        <motion.div layout className="flex items-center gap-2 mb-4">
          <div className="h-[1px] w-8 bg-blue-600"></div>
          <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
            {new Date(blog.createdAt).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </span>
        </motion.div>
        
        <motion.h3 layout className="text-xl font-black uppercase leading-tight mb-4 group-hover:text-blue-500 transition-colors">
          {blog.title}
        </motion.h3>
        
        <motion.p 
          layout
          className={`text-zinc-400 text-sm leading-relaxed mb-6 font-medium whitespace-pre-line transition-all
            ${isExpanded ? "" : "line-clamp-3"}`}
        >
          {blog.description}
        </motion.p>

        <motion.button 
          layout
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 hover:text-white transition-all group/btn"
        >
          {isExpanded ? (
            <>Collapse Data <span className="text-lg group-hover:-translate-y-1 transition-transform">↑</span></>
          ) : (
            <>Decrypt Full Intel <span className="text-lg group-hover:translate-x-1 transition-transform">→</span></>
          )}
        </motion.button>
      </motion.div>
    </motion.article>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen text-white pb-20 selection:bg-blue-600/30">
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[45%] h-[45%] bg-blue-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-900/10 blur-[130px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-[0.4em] border border-blue-500/20 px-4 py-2 rounded-full bg-blue-500/5 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Live Intelligence Feed
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase italic">
            The <br /> <span className="text-blue-600 not-italic">Archive</span>
          </h1>
          <p className="max-w-xl mx-auto text-zinc-500 font-medium text-sm md:text-lg mt-8 uppercase tracking-[0.2em] leading-relaxed">
            Uncovering the matrix of technology and security.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="max-w-[1400px] mx-auto px-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-full bg-blue-600 shadow-[0_0_15px_#2563eb]"
              />
            </div>
            <p className="text-zinc-500 uppercase tracking-[0.5em] font-black text-[9px] mt-6 animate-pulse">
              Bypassing Firewall...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            <AnimatePresence mode="popLayout">
              {blogs.map((blog: any, index: number) => (
                <BlogCard key={blog._id} blog={blog} index={index} />
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Empty State */}
        {!loading && blogs.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="text-center py-32 border border-white/5 rounded-[4rem] bg-zinc-900/10 backdrop-blur-sm"
          >
            <h2 className="text-5xl font-black text-zinc-800 uppercase italic mb-4">Coming Soon...</h2>
            <p className="text-zinc-600 uppercase tracking-widest text-[10px] font-bold">Awaiting deployment from central command.</p>
          </motion.div>
        )}
      </section>
    </main>
  );
}
