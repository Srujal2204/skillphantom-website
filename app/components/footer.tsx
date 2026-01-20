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
    <footer className="bg-[#000206] text-slate-300">
         <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16">

        {/* Brand */}
        <div>
          <div className="flex flex-col items-center gap-4 mb-4">
            <Image
              src="/logo.jpg"
              alt="SkillPhantom Technologies Logo"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
            <h2 className="text-white font-semibold text-lg">
              SkillPhantom Technologies
            </h2>
          </div>

          <p className="text-sm leading-relaxed text-slate-400">
            Building future-ready skills through internships, school programs,
            and industry-aligned training.
          </p>

          <div className="flex gap-8 mt-4 text-lg text-slate-400">
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-white transition" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <FaYoutube className="hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold tracking-wide mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/" className="hover:text-sky-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-sky-400">About</Link></li>
            <li><Link href="/internship" className="hover:text-sky-400">Internship</Link></li>
            <li><Link href="/school" className="hover:text-sky-400">School</Link></li>
            <li><Link href="/contact" className="hover:text-sky-400">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-sky-400">FAQ</Link></li>
            <li>
              <Link href="/apply" className="px-4 py-2 text-sm rounded-md bg-sky-500 text-white hover:bg-sky-600 transition">
                Apply Now →
              </Link>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-white font-semibold tracking-wide mb-4">
            Our Programs
          </h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>Cybersecurity</li>
            <li>AI / ML</li>
            <li>Web Development</li>
            <li>Networking</li>
            <li>Programming</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold tracking-wide mb-4">
            Contact Us
          </h3>

          <p className="flex items-start gap-4 text-sm text-slate-400">
            <FaMapMarkerAlt className="mt-1" />
            Vadodara, Gujarat, India
          </p>

          <p className="flex items-center gap-4 mt-2 text-sm text-slate-400">
            <FaPhoneAlt />
            +91 97278 13568 / 9898128427
          </p>

          <p className="flex items-center gap-4 mt-2 text-sm text-slate-400">
            <FaEnvelope className="text-base shrink-0" />
            skillphantomtechnologies@gmail.com
          </p>
        </div>

        {/* App */}
        {/* <div>
          <h3 className="text-white font-semibold tracking-wide mb-4">
            Get the App
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            Access learning resources, updates, and programs from anywhere.
          </p>
          <button className="border border-slate-600 px-4 py-2 rounded-md text-sm hover:bg-slate-800 transition">
            Play Store (Coming Soon)
          </button>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SkillPhantom Technologies. All rights reserved.
      </div>
    </footer>
  );
}
