"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Internship", path: "/internship" },
  { name: "School", path: "/school" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const BRAND_COLOR = "#3b82f6";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const [band, setBand] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  const [glow, setGlow] = useState({ x: 0, y: 0 });

  /* ---------- Focus Band (Desktop) ---------- */
  const moveBand = (el: HTMLElement | null) => {
    if (!el || !containerRef.current) return;

    const parent = containerRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();

    setBand({
      left: rect.left - parent.left,
      width: rect.width,
      visible: true,
    });
  };

  useEffect(() => {
    const activeEl = document.querySelector(
      `[data-path="${pathname}"]`
    ) as HTMLElement | null;

    moveBand(activeEl);
  }, [pathname]);

  /* ---------- Glow Effect ---------- */
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!navRef.current) return;
      const rect = navRef.current.getBoundingClientRect();

      setGlow({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    navRef.current?.addEventListener("mousemove", handleMove);
    return () =>
      navRef.current?.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10"
    >
      {/* 🔮 Ambient Glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(
            500px at ${glow.x}px ${glow.y}px,
            ${BRAND_COLOR}22,
            transparent 70%
          )`,
        }}
      />

      {/* MAIN BAR */}
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="SkillPhantom" width={48} height={48} />
          <span className="hidden lg:inline text-2xl font-bold text-white">
            Skill<span style={{ color: BRAND_COLOR }}>Phantom</span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div
          ref={containerRef}
          className="relative hidden lg:flex items-center gap-2"
        >
          <div
            className={`absolute top-1/2 -translate-y-1/2 h-9 rounded-xl transition-all duration-300 ${
              band.visible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: band.left,
              width: band.width,
              backgroundColor: BRAND_COLOR,
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
                className={`relative px-5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-black"
                    : "text-gray-300 hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-lg text-white hover:bg-white/10 transition"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Apply (Desktop) */}
          <Link
            href="/internship/apply"
            className="hidden lg:inline-block px-5 py-2 rounded-xl font-semibold text-black"
            style={{ backgroundColor: BRAND_COLOR }}
          >
            Apply
          </Link>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="flex flex-col px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/internship/apply"
              className="mt-2 text-center px-4 py-2 rounded-lg font-semibold text-black"
              style={{ backgroundColor: BRAND_COLOR }}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
