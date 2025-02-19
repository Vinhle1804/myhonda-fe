'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import crs1 from '../assets/image/crs1.jpg';
import crs2 from '../assets/image/crs2.jpg';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: crs1, alt: 'Slide 1' },
    { src: crs2, alt: 'Slide 2' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Chuyển slide mỗi 5 giây
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel items */}
      <div
        className="carousel-track flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            className="carousel-slide flex-shrink-0 w-full hidden  sm:block md:h-[500px] lg:h-[600px]"
            key={index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1920}
              height={600}
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/75 hover:bg-white rounded-full p-2"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/75 hover:bg-white rounded-full p-2"
      >
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
