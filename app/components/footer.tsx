"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-[#000206] text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/logo1.png"
              alt="SkillPhantom Logo"
              width={60}
              height={60}
              className="rounded-xl shadow-md dark:shadow-none"
              priority
            />
            <h2 className="text-slate-900 dark:text-white font-bold text-xl tracking-tight">
              Skill<span className="text-blue-500">Phantom</span>
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Building future-ready skills through internships, school programs,
            and industry-aligned training in simple English.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-xl text-slate-400 dark:text-slate-500">
            <a href="https://www.instagram.com/skillphantomtechnologies" target="_blank" className="hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/skillphantom-technologies/" target="_blank" className="hover:text-blue-600 transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@SkillPhantomTechnologies" target="_blank" className="hover:text-red-600 transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-slate-900 dark:text-white font-bold mb-6">Explore</h3>
          <ul className=" flec flex-col columns-2 space-y-4 text-sm font-medium">
            <li><Link href="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
            <li><Link href="/internship" className="hover:text-blue-500 transition-colors">Internships</Link></li>
            <li><Link href="/school" className="hover:text-blue-500 transition-colors">School Programs</Link></li>
            <li><Link href="/faq" className="hover:text-blue-500 transition-colors">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
            <li><Link href="/gallery" className="hover:text-blue-500 transition-colors">Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-blue-500 transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-slate-900 dark:text-white font-bold mb-6">What We Teach</h3>
          <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
            <li className="hover:text-blue-500 cursor-default transition-colors">Web Development</li>
            <li className="hover:text-blue-500 cursor-default transition-colors">Cybersecurity</li>
            <li className="hover:text-blue-500 cursor-default transition-colors">Artificial Intelligence</li>
            <li className="hover:text-blue-500 cursor-default transition-colors">Networking</li>
            <li className="hover:text-blue-500 cursor-default transition-colors">Programming</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-slate-900 dark:text-white font-bold">Contact Us</h3>
          
          <div className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-blue-500 shrink-0" />
              Ahmedabad, Gujarat, India
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500 shrink-0" />
              +91 97278 13568 / +91 98981 28427
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500 shrink-0 text-base" />
              <span className="break-all">skillphantomtechnologies@gmail.com</span>
            </p>
          </div>

          <Link 
            href="/contact" 
            className="inline-block w-full text-center py-3 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            Send Message
          </Link>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      {/* <div className="border-t border-slate-200 dark:border-slate-800 py-8 px-6"> */}
        {/* <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600">
          <p>© {new Date().getFullYear()} SkillPhantom Technologies.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-blue-500">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-500">Terms of Use</Link>
          </div>
        </div>
      </div> */}
    </footer>
  );
}