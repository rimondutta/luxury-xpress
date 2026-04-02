"use client";

import { useState, useEffect } from "react";
import { Star, BadgeCheck, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Anna Striuk",
    date: "2 weeks ago",
    status: "Local Guide • 15 reviews",
    quote: "They responded and showed up incredibly fast, brought the exact tires I needed, and the price was amazing. The technician was super nice and sweet, explained everything, and finished the job so quickly. Such a smooth experience from start to finish. 10/10 — highly recommend!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjX7jx6X0NMHNLS8ZBRVcHfAhM61DHdBcydZoriKNIRl4_NsNB_H=w72-h72-p-rp-mo-ba2-br100"
  },
  {
    id: 2,
    name: "lee s.",
    date: "2 month ago",
    status: "Verified Customer",
    quote: "Amazing service and customer service! Richard was absolutely a life saver. Sent him a text message late at night and he immediately responded. Brought in the tire early the next day and changed my slashed tire in such a quick and professional manner! Amazing service and right at your location. Highly recommended!!!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUvoSCBHTS9KRPRKGBcOHPdloBVRbyKlNH8H_w4A1BxNw5Zq-w=w72-h72-p-rp-mo-br100"
  },
  {
    id: 3,
    name: "Michael Chen",
    date: "3 months ago",
    status: "Local Guide • 42 reviews",
    quote: "The only place I trust for my engine diagnostics. They don't just fix problems; they explain the 'why' and ensure everything is calibrated perfectly. Outstanding professionalism.",
    rating: 5,
    image: "/assets/asset 37.png"
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-[var(--color-bgDark)] py-20 md:py-28 overflow-hidden relative border-t border-neutral-900">

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(211,175,55,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Google Style Header Card */}
        <div className="max-w-5xl mx-auto mb-16 flex flex-col md:flex-row items-center justify-between bg-[#111111] border border-[#222] p-6 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-3 shadow-inner">
              <GoogleIcon />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-white font-bold text-xl md:text-2xl">Google Rating</h2>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FBBC04] fill-[#FBBC04]" />
                  ))}
                </div>
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium">
                Excellent <span className="text-white font-bold mx-1">5.0</span>
                <span className="opacity-50">based on 210 reviews</span>
              </p>
            </div>
          </div>
          <Link
            href="https://maps.app.goo.gl/neE2uGB5x3y2nXhz8"
            target="_blank"
            className="px-8 py-3 bg-[#1A1A1A] hover:bg-[#222] text-white border border-[#333] rounded-full font-bold text-sm tracking-wide transition-all uppercase flex items-center gap-2 group"
          >
            Review us on Google
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Main Testimonial Area */}
        <div className="max-w-4xl mx-auto relative group">

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#151515] hover:bg-[var(--color-primary)] text-white border border-[#222] rounded-full flex items-center justify-center z-20 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute -right-4 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#151515] hover:bg-[var(--color-primary)] text-white border border-[#222] rounded-full flex items-center justify-center z-20 transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Active Card Container */}
          <div className="relative min-h-[400px] md:min-h-[300px]">
            {testimonials.map((test, index) => {
              const isActive = index === current;
              return (
                <div
                  key={test.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${isActive ? "opacity-100 translate-y-0 scale-100 z-10" : "opacity-0 translate-y-10 scale-95 z-0 pointer-events-none"
                    }`}
                >
                  <div className="bg-[#151515] border border-[#222] p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">

                    {/* Google 'G' Watermark */}
                    <div className="absolute -top-10 -right-10 opacity-[0.03] rotate-12 scale-[3]">
                      <GoogleIcon />
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">

                      {/* Avatar */}
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-tr from-[#FBBC04] to-[#4285F4] flex-shrink-0">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#151515]">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={test.image} alt={test.name} className="w-full h-full object-cover grayscale-[0.2]" />
                        </div>
                      </div>

                      <div className="flex-1">
                        {/* Header Info */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h4 className="text-white text-xl md:text-2xl font-bold tracking-tight">
                            {test.name}
                          </h4>
                          <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border border-green-500/30 shadow-sm">
                            <BadgeCheck className="w-3.5 h-3.5 fill-blue-500 text-white" />
                            {test.status}
                          </div>
                        </div>

                        {/* Stars & Date */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex gap-1">
                            {[...Array(test.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#FBBC04] fill-[#FBBC04]" />
                            ))}
                          </div>
                          <span className="text-gray-500 text-sm font-medium">{test.date}</span>
                        </div>

                        {/* Quote */}
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium italic">
                          &quot;{test.quote}&quot;
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 ${index === current
                  ? "w-10 h-2 bg-[var(--color-primary)] rounded-full"
                  : "w-2 h-2 bg-gray-700 hover:bg-gray-500 rounded-full"
                  }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

