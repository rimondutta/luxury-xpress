"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Clock, MapPin, ShoppingCart, Phone, Menu, X, Rss } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "./SocialIcons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PAGES", href: "#" },
    { name: "SERVICES", href: "/services" },
    { name: "BLOG", href: "/#blog" },
    { name: "SHOP", href: "#" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ROW 1: TOP BAR */}
      <div className="hidden md:flex bg-[#111111] border-b border-gray-800 h-[40px] items-center justify-between px-8">

        {/* Left Info Items */}
        <div className="flex items-center gap-6 text-xs text-gray-300">

          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#D3AF37] fill-current" />
            <span>info@luxuryxpress.com</span>
          </div>

          <span className="w-px h-4 bg-gray-600 mx-1" />

          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#D3AF37]" />
            <span>8.00am - 10.00pm</span>
          </div>

          <span className="w-px h-4 bg-gray-600 mx-1" />

          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#D3AF37] fill-current" />
            <span>3205 NW 5th Ave, Miami, FL 33127, United States</span>
          </div>

        </div>

        {/* Right Social Icons */}
        <div className="flex items-center gap-4 text-gray-300">
          <Link href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></Link>
          <Link href="#" className="hover:text-white transition-colors"><Twitter className="w-4 h-4" /></Link>
          <Link href="#" className="hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></Link>
          <Link href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></Link>
          <Link href="#" className="hover:text-white transition-colors"><Rss className="w-4 h-4" /></Link>
        </div>

      </div>

      {/* ROW 2: MAIN NAVIGATION BAR */}
      <nav className={`bg-[#0A0A0A] flex items-center justify-between px-8 h-[70px] transition-all duration-300 ${scrolled ? "shadow-xl shadow-black/60" : ""}`}>

        {/* LEFT SIDE: LOGO */}
        <Link href="/" className="flex items-center gap-1 md:gap-2">
          <Image src="/assets/logo.png" alt="Luxury Xpress Logo" width={200} height={60} className="h-10 w-auto" />
        </Link>

        {/* CENTER: NAV LINKS */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`flex items-center transition-colors duration-200 ${isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"
                  }`}
              >
                {isActive && <span className="inline-block w-7 h-0.5 bg-[#D3AF37] mr-2 align-middle" />}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT SIDE: ACTIONS */}
        <div className="flex items-center h-full">

          {/* Cart Icon */}
          <div className="relative cursor-pointer mr-4 md:mr-6 hover:text-[#D3AF37] transition-colors text-white">
            <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
            <span className="absolute -top-1.5 -right-1.5 bg-[#D3AF37] text-white text-[10px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-8 bg-gray-700 hidden md:block" />

          {/* Phone CTA Widget */}
          <div className="hidden md:flex items-center gap-3 ml-6 mr-4">
            <div className="w-10 h-10 bg-[#D3AF37] rounded-full flex items-center justify-center ring-2 ring-[#7a0004] ring-offset-1 ring-offset-black">
              <Phone className="text-white w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-gray-400 text-xs font-medium">Need Help</span>
              <a href="tel:+17869881966" className="text-white text-base font-black tracking-wide hover:text-[#D3AF37] transition-colors">
                +17869881966
              </a>
            </div>
          </div>

          {/* Hamburger / Menu Button */}
          <button
            className="bg-[#D3AF37] p-4 h-full w-[60px] md:w-[70px] lg:hidden flex items-center justify-center hover:bg-[#b00005] transition-colors ml-2 md:ml-4"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="text-white w-6 h-6 md:w-8 md:h-8" /> : <Menu className="text-white w-6 h-6 md:w-8 md:h-8" />}
          </button>

        </div>

      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 z-50 py-6 px-8 flex flex-col gap-4 border-t border-[#222]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name);
                setMobileOpen(false);
              }}
              className={`text-lg uppercase border-b border-gray-800 pb-3 transition-colors ${activeLink === link.name ? "text-[#D3AF37] font-bold" : "text-white"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

    </header>
  );
}
