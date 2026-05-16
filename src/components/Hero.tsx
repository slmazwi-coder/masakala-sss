import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Play, Pause } from 'lucide-react';

const slides = [
  { 
    url: '/assets/hero/mshero1.png', 
    title: 'Reach for the Sky',
    subtitle: 'Masakala Senior Secondary School',
    btn: 'Apply Now',
    link: '/admissions'
  },
  { 
    url: '/assets/hero/mshero2.png', 
    title: 'Quality Education',
    subtitle: 'CAPS Curriculum Grade 8-12',
    btn: 'View Subjects',
    link: '/subjects'
  },
  { 
    url: '/assets/hero/mshero3.png', 
    title: 'Dedicated Educators',
    subtitle: 'Committed to Excellence',
    btn: 'Meet Our Staff',
    link: '/staff'
  },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentIndex];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={slide.url} alt={slide.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[#0D3B14]/80" />
        </div>

        <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#FED219] max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{slide.title}</h1>
            <p className="text-xl md:text-2xl text-[#FED219]/80 mb-6">{slide.subtitle}</p>
            <a href={slide.link} className="inline-flex items-center gap-2 bg-[#FED219] text-[#0D3B14] px-6 py-3 rounded-lg font-bold hover:bg-[#D4B517] transition">
              {slide.btn}
            </a>
          </motion.div>
        </div>

        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#FED219]/20 text-[#FED219] hover:bg-[#FED219]/40 transition">
          <ChevronLeft size={28} />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#FED219]/20 text-[#FED219] hover:bg-[#FED219]/40 transition">
          <ChevronRight size={28} />
        </button>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentIndex(i)} className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-[#FED219] w-6' : 'bg-[#FED219]/40'}`} />
          ))}
        </div>
      </div>

      {/* Logo overlapping */}
      <div className="relative -mt-10 flex justify-center z-10">
        <div className="relative">
          <div className="absolute -inset-3 bg-[#FED219] rounded-xl opacity-40 blur-lg"></div>
          <img 
            src="/assets/logo/mslogo.png" 
            alt="Logo" 
            className="relative w-18 h-18 rounded-lg border-4 border-[#FED219] shadow-xl bg-white"
          />
        </div>
      </div>
    </div>
  );
};
