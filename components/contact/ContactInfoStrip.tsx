"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin } from "lucide-react";

interface InfoBoxProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  href?: string;
  delay?: number;
  showDivider?: boolean;
}

function InfoBox({ icon, label, value, sub, href, delay = 0, showDivider = false }: InfoBoxProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex-1 py-10 px-8 flex items-center gap-6 border-[#2e2e2e] transition-all duration-700 ${
        showDivider ? "md:border-r" : ""
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="text-[#D3AF37] w-12 h-12 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[#999] text-[10px] font-black uppercase tracking-[0.2em] mb-1 heading-font">
          {label}
        </span>
        {href ? (
          <a href={href} className="text-white text-lg font-bold hover:text-[#D3AF37] transition-colors duration-300">
            {value}
          </a>
        ) : (
          <span className="text-white text-lg font-bold">
            {value}
          </span>
        )}
        <span className="text-[#666] text-sm mt-1">
          {sub}
        </span>
      </div>
    </div>
  );
}

export default function ContactInfoStrip() {
  return (
    <section className="w-full bg-[#0E0E0E] border-y border-[#2e2e2e]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          
          <InfoBox 
            icon={<Phone className="w-8 h-8" />}
            label="CALL US ANYTIME"
            value="+17869881966"
            sub="Monâ€“Sat 9:00am â€“ 7:00pm"
            href="tel:+17869881966"
            delay={0}
            showDivider={true}
          />

          <InfoBox 
            icon={<Mail className="w-8 h-8" />}
            label="SEND US AN EMAIL"
            value="info@autofixpro.com"
            sub="We reply within 24 hours"
            href="mailto:info@autofixpro.com"
            delay={100}
            showDivider={true}
          />

          <InfoBox 
            icon={<MapPin className="w-8 h-8" />}
            label="VISIT OUR LOCATION"
            value="3205 NW 5th Ave, Miami, FL 33127, United States"
            sub="Renton, WA 98058-5055"
            delay={200}
            showDivider={false}
          />

        </div>
      </div>
    </section>
  );
}
