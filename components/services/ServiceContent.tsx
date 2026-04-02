import * as Icons from "lucide-react";
import React from 'react';
import ChevronIcon from "./ChevronIcon";
import TeamGrid from "./TeamGrid";
import TestimonialCarousel from "./TestimonialCarousel";
import { Service } from "../../types/service";

interface ServiceContentProps {
  service: Service;
}

export default function ServiceContent({ service }: ServiceContentProps) {
  return (
    <div className="w-full flex-1" data-scroll-behavior="smooth">
      
      {/* 3a. SERVICE IMAGE */}
      <div className="w-full aspect-video bg-[#0E0E0E] rounded-xl flex items-center justify-center mb-10 overflow-hidden relative border border-[#222]">
        {service.image ? (
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{ backgroundImage: `url('${service.image}')` }}
          />
        ) : (
          <span className="text-[#444] font-bold tracking-widest uppercase text-xl md:text-2xl z-10 scale-100 hover:scale-105 transition-transform duration-500 cursor-default">
            {service.title}
          </span>
        )}
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#2e2e2e_1px,transparent_1px)] [background-size:12px_12px] opacity-10"></div>
      </div>

      {/* 3b. SERVICE TITLE & DESCRIPTION */}
      <h2 className="text-white font-black heading-font text-3xl mb-4 uppercase">
        {service.title}
      </h2>
      <div className="w-16 h-1 bg-[var(--color-primary)] mb-8"></div>

      <p className="text-[#999] text-base leading-relaxed mb-6 font-medium">
        {service.description}
      </p>

      {service.detailedDescription ? (
        service.detailedDescription.map((desc, i) => (
          <p key={i} className="text-[#999] text-base leading-relaxed mb-6">
            {desc}
          </p>
        ))
      ) : (
        <>
          <p className="text-[#999] text-base leading-relaxed mb-6">
            When you bring your vehicle to Luxury Xpress, you can rest easy knowing that your vehicle is in professional hands. We take every possible step to ensure that your experience with us is pleasant and efficient.
          </p>
          <p className="text-[#999] text-base leading-relaxed mb-12">
            Our mechanics are factory trained and highly experienced, ensuring every major or minor problem is successfully resolved using genuine parts and computer diagnostics protocols.
          </p>
        </>
      )}

      {/* 3c. TWO-COLUMN CHECKLIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-16">
        {(() => {
          const featuresList = service.features && service.features.length > 0 
            ? service.features 
            : [
                "Ceramic Coating Services", "Tire Disc Blade Changing", 
                "Battery Check & Repair", "Oil Change Services",
                "Advanced Diagnostics", "Mobile Callout Facility", 
                "Premium Parts Support", "Guest Pass & Bottled Water"
              ];
          const mid = Math.ceil(featuresList.length / 2);
          const col1 = featuresList.slice(0, mid);
          const col2 = featuresList.slice(mid);
          
          return (
            <>
              <div className="flex flex-col gap-4">
                {col1.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icons.Check className="text-[var(--color-primary)] w-4 h-4 flex-shrink-0" strokeWidth={3} />
                    <span className="text-[#CCC] text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {col2.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icons.Check className="text-[var(--color-primary)] w-4 h-4 flex-shrink-0" strokeWidth={3} />
                    <span className="text-[#CCC] text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </>
          );
        })()}
      </div>

      {/* 3d. SECTION SUBTITLE */}
      <div className="flex items-center gap-3 mb-4">
        <ChevronIcon className="w-8 h-3" />
        <h3 className="text-[var(--color-primary)] font-bold text-sm tracking-widest uppercase">
          List Of Services Included
        </h3>
      </div>
      <div className="h-[1px] w-full bg-[#222] mb-6"></div>

      {/* 3e. DESCRIPTION PARAGRAPH */}
      <p className="text-[#999] text-sm leading-relaxed mb-10">
        Luxury Xpress was established to help families secure dependable repair structures. As a standing RMI member, our network of trusted franchisees continually provides 100% genuine servicing protocols ensuring total life cycle management across millions of vehicle platforms globally.
      </p>

      {/* 3f. ICON BOXES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {(() => {
          const boxes = service.benefits && service.benefits.length > 0
            ? service.benefits
            : [
                { icon: "Activity", title: "Quality Check Facility", desc: "Luxury Xpress is a member of the RMI. As a member, our center abides by the Code of Conduct." },
                { icon: "Store", title: "Retail Motor Industry", desc: "We are proud members of the Retail Motor Industry Organisation (RMI), ensuring standard excellence." },
                { icon: "Settings", title: "Expert Servicing", desc: "Our staff is highly experienced so you can trust us with your machine's next maintenance phase." },
                { icon: "Cpu", title: "Modern Technology", desc: "Luxury Xpress uses modern technology and laser equipment for all repairs and diagnostics." },
                { icon: "Droplets", title: "Detailing Facility", desc: "High pressure cleaning systems combined with premium chemicals for internal and external detailing." },
                { icon: "Wrench", title: "Advanced Engineering", desc: "Precision engineering involving physical machines that handle extreme force and movement." },
              ];
              
          return boxes.map((box, idx) => {
            // Dynamically grab the lucide icon component or fallback to Check
            const IconComp = (Icons[box.icon as keyof typeof Icons] as React.ElementType) || Icons.Check;

            return (
              <div key={idx} className="flex items-start gap-5 bg-[#0E0E0E] p-6 rounded-xl border border-[#222] hover:border-[var(--color-primary)] transition-colors duration-300 group">
                <div className="w-[52px] h-[52px] flex items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex-shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <IconComp />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-white font-bold text-base mb-2">{box.title}</h4>
                  <p className="text-[#888] text-sm leading-relaxed">{box.desc}</p>
                </div>
              </div>
            );
          });
        })()}
      </div>

      {/* 3g. SECTION SUBTITLE */}
      <div className="flex items-center gap-3 mb-4">
        <ChevronIcon className="w-8 h-3" />
        <h3 className="text-[var(--color-primary)] font-bold text-sm tracking-widest uppercase">
          Service Mechanics
        </h3>
      </div>
      <div className="h-[1px] w-full bg-[#222] mb-6"></div>

      {/* 3h. DESCRIPTION PARAGRAPH */}
      <p className="text-[#999] text-sm leading-relaxed mb-0">
        Quality Assurance requires rigorous physical road testing of the vehicle right after our specialized service. We test drive them under various conditions so you can immediately feel the difference from our highly calculated, precise servicing techniques built around safety and longevity.
      </p>

      {/* 3i. TEAM GRID */}
      <TeamGrid />

      {/* 3j. SECTION SUBTITLE */}
      <div className="flex items-center gap-3 mb-4 mt-16">
        <ChevronIcon className="w-8 h-3" />
        <h3 className="text-[var(--color-primary)] font-bold text-sm tracking-widest uppercase">
          Client&apos;s Testimonial
        </h3>
      </div>
      <div className="h-[1px] w-full bg-[#222] mb-6"></div>

      {/* 3k. INTRO PARAGRAPH */}
      <p className="text-[#999] text-sm leading-relaxed mb-8">
        We&apos;ve helped over ten thousand satisfied vehicle owners since our launch. It brings us great pride knowing our repair mechanisms successfully bring cars back to pristine life.
      </p>

      {/* 3l. TESTIMONIAL CAROUSEL */}
      <TestimonialCarousel />

    </div>
  );
}

