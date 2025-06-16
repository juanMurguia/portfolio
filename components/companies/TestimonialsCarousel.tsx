"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/data/testimonials";
import useLocale from "@/lib/context/useLocale";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialsCarouselProps {
  primaryColor: string;
  secondaryColor: string;
}

export function TestimonialsCarousel({
  primaryColor,
  secondaryColor,
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLocale();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out  rounded-3xl"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 p-8 rounded-3xl"
              style={{
                border: `1px solid #${secondaryColor}`,
              }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <blockquote
                  className="text-lg italic mb-4"
                  style={{ color: `#${secondaryColor}` }}
                >
                  "{t(testimonial.testimonialKey)}"
                </blockquote>
                <div>
                  <h4
                    className="font-bold text-lg"
                    style={{ color: `#${secondaryColor}` }}
                  >
                    {testimonial.name}
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: `#${secondaryColor}90` }}
                  >
                    {testimonial.position} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 p-2 rounded-full"
        style={{ backgroundColor: `#${primaryColor}80` }}
      >
        <ChevronLeft style={{ color: `#${secondaryColor}` }} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 p-2 rounded-full"
        style={{ backgroundColor: `#${primaryColor}80` }}
      >
        <ChevronRight style={{ color: `#${secondaryColor}` }} />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className="w-2 h-2 rounded-full transition-colors"
            style={{
              backgroundColor:
                idx === currentIndex
                  ? `#${secondaryColor}`
                  : `#${secondaryColor}40`,
            }}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
