"use client";

import ChevronIcon from "./ChevronIcon";
import { Phone } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="w-full bg-[var(--color-primary)] py-12 lg:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Side */}
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-4 mb-4">
              <ChevronIcon color="white" className="w-12 h-4" />
              <span className="text-white text-xs uppercase tracking-[0.2em] font-semibold opacity-90">
                IF ANY CAR RELATED ISSUES ARE BOTHERING
              </span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide leading-none">
              GIVE A CALL TO<br />LUXURY XPRESS
            </h2>
          </div>

          {/* Right Side */}
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-12 w-full lg:w-auto">
            
            {/* Mechanic Illustration Placeholder */}
            <div className="hidden md:block w-32 lg:w-40 h-32 lg:h-40 bg-black/20 rounded-xl relative overflow-hidden">
               <div className="absolute inset-0 bg-white/5 flex items-center justify-center text-white/50 text-xs">Mechanic Silhouette</div>
            </div>

            {/* Phone Widget */}
            <div className="flex items-center gap-4 bg-black/20 pr-8 pl-4 py-4 rounded-full border border-white/20">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] shadow-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xs opacity-90 tracking-wider">
                  We are Available 24x7
                </span>
                <a href="tel:+17869881966" className="text-white font-bold text-lg md:text-xl md:whitespace-nowrap hover:text-black transition-colors">
                  +17869881966
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
