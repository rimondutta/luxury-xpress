"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Helen Jordan",
    location: "Chicago",
    quote: "Great service! A good workshop with modern equipment and amazing car mechanics. They have done car detailing of my Ferrari. Highly recommended."
  },
  {
    id: 2,
    name: "MUCH SATISFIED",
    location: "Chicago",
    quote: "Great service! A good workshop with modern equipment and amazing car mechanics. They have done car detailing of my Ferrari. Highly recommended."
  },
  {
    id: 3,
    name: "TOM KRISTENSEN",
    location: "New York",
    quote: "Great service! A good workshop with modern equipment and amazing car mechanics. They have done car detailing of my Ferrari. Highly recommended."
  }
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div className="mt-8 bg-[#0E0E0E] border border-[#222] rounded-xl p-8 relative overflow-hidden">
      
      {/* Background quote mark watermark */}
      <div className="absolute -right-8 -top-8 text-[var(--color-primary)] opacity-5 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
        
        {/* Left Avatar & Setup */}
        <div className="flex flex-col items-center flex-shrink-0 gap-4">
          <div className="w-20 h-20 rounded-full bg-[#333] border-4 border-[var(--color-primary)] overflow-hidden"></div>
          {/* Large Quote Mark Underneath Avatar */}
          <div className="text-[var(--color-primary)]">
             <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
               <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
             </svg>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col flex-1">
          {/* 5 Stars */}
          <div className="flex items-center gap-1 mb-6 text-yellow-500">
             {"★★★★★".split("").map((star, i) => (
                <span key={i} className="text-xl">{star}</span>
             ))}
          </div>

          <p className="text-[#999] text-base md:text-lg italic leading-relaxed mb-8">
            &quot;{activeTestimonial.quote}&quot;
          </p>

          <div className="flex flex-col">
             <span className="text-white font-bold text-lg uppercase tracking-wider mb-1">
               {activeTestimonial.name}
             </span>
             <span className="text-[#666] text-sm font-semibold tracking-widest uppercase">
               {activeTestimonial.location}
             </span>
          </div>

        </div>

      </div>

      {/* Internal Navigation Dots */}
      <div className="flex justify-center items-center gap-2 mt-10 relative z-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === index 
                ? "w-8 h-2 bg-[var(--color-primary)]" 
                : "w-2 h-2 bg-[#444] hover:bg-[#666]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}
