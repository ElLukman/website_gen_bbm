'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  content: string;
  image?: string;
}

interface ClientProps {
  items: TestimonialItem[];
}

export default function GenCarouselClient({ items }: ClientProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 15000);
  }, [items.length]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  }, [startTimer]);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
    resetTimer();
  }, [items.length, resetTimer]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    resetTimer();
  }, [items.length, resetTimer]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const getCardStyle = (index: number) => {
    const len = items.length;
    const distance = (index - activeIndex + len) % len;

    if (distance === 0) {
      return "z-20 scale-100 opacity-100 translate-x-0 blur-none grayscale-0";
    }
    
    if (distance === 1) {
      return "z-10 scale-90 opacity-60 translate-x-[100%] md:translate-x-[60%] blur-[2px] grayscale-[50%]";
    }

    if (distance === len - 1) {
      return "z-10 scale-90 opacity-60 -translate-x-[100%] md:-translate-x-[60%] blur-[2px] grayscale-[50%]";
    }

    return "z-0 opacity-0 scale-75 blur-md pointer-events-none absolute";
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden font-poppins">
      
      {/* Container Utama dipertinggi (h-[600px]) biar kartu h-[500px] muat lega */}
      <div className="relative flex h-150 w-full max-w-5xl items-center justify-center py-10">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute w-72 md:w-80 transition-all duration-500 ease-out flex flex-col items-center ${getCardStyle(index)}`}
          >
            <div className="flex w-full h-125 flex-col overflow-hidden rounded-[40px] shadow-xl bg-white">
              
              <div className="relative h-[60%] w-full bg-primary-12 flex items-center justify-center shrink-0 overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="text-primary-8/40">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                )}
              </div>

              <div className="flex h-[40%] flex-col bg-primary-4 px-8 py-6 text-center text-white">
                <div className="mb-3 shrink-0">
                  <h3 className="text-xl font-bold mb-1 line-clamp-1">{item.name}</h3>
                  <span className="text-[10px] font-light text-white/70 tracking-widest uppercase block line-clamp-1">{item.role}</span>
                </div>
                
                <div className="flex-1 flex items-start justify-center overflow-hidden">
                   <p className="text-sm font-light leading-relaxed opacity-90 line-clamp-5">
                     "{item.content}"
                   </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-6 mt-2 z-30">
        <button onClick={prevSlide} className="px-8 py-2 rounded-full border border-secondary-6 text-secondary-6 cursor-pointer hover:bg-secondary-6 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 bg-white">
           Prev 
        </button>
        <button onClick={nextSlide} className="px-8 py-2 rounded-full border border-secondary-6 text-secondary-6 cursor-pointer hover:bg-secondary-6 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 bg-white">
           Next 
        </button>
      </div>
    </div>
  );
}