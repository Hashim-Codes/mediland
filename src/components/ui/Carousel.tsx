"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  autoplay?: boolean;
  loop?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  align?: 'start' | 'center' | 'end';
  itemClassName?: string;
}

export function Carousel<T>({
  items,
  renderItem,
  autoplay = false,
  loop = true,
  showDots = true,
  showArrows = true,
  align = 'start',
  itemClassName = "flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
}: CarouselProps<T>) {
  const plugins = autoplay ? [Autoplay({ delay: 5000, stopOnInteraction: true })] : [];
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align }, plugins);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (!items || items.length === 0) return null;

  return (
    <div className="relative group w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {items.map((item, index) => (
            <div key={index} className={`pl-4 min-w-0 ${itemClassName}`}>
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity z-10 disabled:opacity-0"
            disabled={!emblaApi?.canScrollPrev()}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity z-10 disabled:opacity-0"
            disabled={!emblaApi?.canScrollNext()}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {showDots && (
        <div className="flex justify-center gap-2 mt-8">
          {emblaApi?.scrollSnapList().map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-gray-900 w-6' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

