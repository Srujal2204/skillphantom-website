"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
 { name: "Home", path: "/" },
  { name: "Internship", path: "/internship" },
  { name: "School", path: "/school" },
  { name: "Gallery", path: "/gallery" }, 
  { name: "Blogs", path: "/blogs" },    
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/faq" },         
  { name: "Contact", path: "/contact" }
];

const BRAND_COLOR = "#3b82f6";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [band, setBand] = useState({ left: 0, width: 0, visible: false });
  const [glow, setGlow] = useState({ x: 0, y: 0 });

  useEffect(() => setMounted(true), []);

  // Fixed MoveBand Logic
  const moveBand = (el: HTMLElement | null) => {
    if (!el || !containerRef.current) return;
    const parentRect = containerRef.current.getBoundingClientRect();
    const targetRect = el.getBoundingClientRect();

    setBand({
      left: targetRect.left - parentRect.left,
      width: targetRect.width,
      visible: true,
    });
  };

  useEffect(() => {
    // Current path ke liye box position set karein
    const activeEl = document.querySelector(`[data-path="${pathname}"]`) as HTMLElement | null;
    if (activeEl) {
      setTimeout(() => moveBand(activeEl), 100); // Small delay for layout calculation
    } else {
      setBand(prev => ({ ...prev, visible: false }));
    }
  }, [pathname]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!navRef.current) return;
      const rect = navRef.current.getBoundingClientRect();
      setGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  if (!mounted) return null;

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      
      {/* 🔮 Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: theme === "dark" ? 0.12 : 0.04,
          background: `radial-gradient(400px at ${glow.x}px ${glow.y}px, ${BRAND_COLOR}, transparent 80%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-slate-200 dark:border-white/10">
            <Image src="/logo1.png" alt="SkillPhantom" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
          <span className="hidden sm:inline text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
            Skill<span style={{ color: BRAND_COLOR }}>Phantom</span>
          </span>
        </Link>

        {/* DESKTOP NAV - Updated container styling */}
        <div ref={containerRef} className="relative hidden lg:flex items-center bg-slate-100/50 dark:bg-white/5 p-1 rounded-2xl border border-slate-200 dark:border-white/5 overflow-hidden">
          
          {/* 🔥 THE FIXED BLUE BOX (Floating Band) */}
          <div
            className={`absolute top-1 bottom-1 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] z-0 ${band.visible ? "opacity-100" : "opacity-0"}`}
            style={{ 
              left: band.left, 
              width: band.width, 
              backgroundColor: BRAND_COLOR,
              boxShadow: `0 4px 15px ${BRAND_COLOR}40`
            }}
          />

          {navItems.map((item) => {
            const active = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                data-path={item.path}
                onMouseEnter={(e) => moveBand(e.currentTarget)}
                onMouseLeave={() => {
                   const activeEl = document.querySelector(`[data-path="${pathname}"]`) as HTMLElement | null;
                   if (activeEl) moveBand(activeEl);
                }}
                className={`relative z-10 px-5 py-2 text-[11px] font-black uppercase tracking-widest transition-colors duration-300 ${
                  active ? "text-white" : "text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-xl text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all active:scale-90 border border-transparent hover:border-slate-200 dark:hover:border-white/10"
          >
            {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-600" />}
          </button>

          {/* APPLY BUTTON */}
          <Link 
            href="/internship/apply"
            className="hidden md:block px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black text-[11px] font-black uppercase tracking-widest rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/10"
          >
            Apply Now
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2.5 rounded-xl text-slate-900 dark:text-white bg-slate-100 dark:bg-white/5">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full lg:hidden bg-white dark:bg-black border-b border-slate-200 dark:border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl overflow-hidden"
          >
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.path} 
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-black uppercase tracking-widest ${pathname === item.path ? "text-blue-600" : "text-slate-500 dark:text-gray-400"}`}
              >
                {item.name}
              </Link>
            ))}
            <hr className="border-slate-100 dark:border-white/5 my-2" />
            <Link 
              href="/internship/apply" 
              onClick={() => setMenuOpen(false)}
              className="w-full py-4 bg-blue-600 text-white text-center font-black rounded-2xl uppercase tracking-widest text-xs"
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}