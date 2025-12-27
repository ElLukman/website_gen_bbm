'use client';

import { Carousel } from "flowbite-react";
import Image from "next/image";
import { GenEvent } from "@/types/event"; 

interface EventCarouselProps {
  slides: GenEvent[]; 
  autoPlay?: boolean;
}

export function EventCarousel({ slides, autoPlay = true }: EventCarouselProps) {
  if (!slides || slides.length === 0) {
    return <div className="text-center p-10 text-red-500 font-poppins">Data Slide Kosong</div>;
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-6 lg:px-8 py-8">
      <div className="h-64 sm:h-80 md:h-96 lg:h-125 rounded-2xl overflow-hidden shadow-2xl border-3 border-radix-blue">
        <Carousel
          slideInterval={5000}
          pauseOnHover
          slide={autoPlay}
          indicators={true}
          theme={{
            indicators: {
              active: {
                off: "bg-transparent border border-white hover:bg-white/30",
                on: "bg-secondary-6 border border-secondary-6"
              },
              base: "h-3 w-3 rounded-full shadow-sm transition-all duration-300",
              wrapper: "absolute bottom-6 flex -translate-x-1/2 space-x-3"
            }
          }}
          leftControl={
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-all sm:h-12 sm:w-12">
              <svg className="h-6 w-6 text-secondary-10 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
            </span>
          }
          rightControl={
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm transition-all sm:h-12 sm:w-12">
              <svg className="h-6 w-6 text-secondary-10 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
            </span>
          }
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-full w-full bg-gray-900 group">
              
              <Image
                src={slide.thumbnail} 
                alt={slide.title}
                fill
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                priority
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:py-14 md:px-18">
                <h3 className="text-xl md:text-4xl font-bold text-white font-poppins mb-2 drop-shadow-lg">
                  {slide.title}
                </h3>
                <p className="hidden sm:block text-gray-200 text-sm md:text-lg line-clamp-2 max-w-4xl drop-shadow-md">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}