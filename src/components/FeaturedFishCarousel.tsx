"use client";

import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FishCard from "@/components/FishCard";
import { Fish } from "@/data/fishData";
import { Button } from "@/components/ui/button";

interface Props {
  fish: Fish[];
}

const CARD_WIDTH = 340; // card + gap

const FeaturedFishCarousel: React.FC<Props> = ({ fish }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const raf = useRef<number | null>(null);
  const speed = 0.35;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      offset.current += speed;

      if (offset.current >= track.scrollWidth / 2) {
        offset.current = 0;
      }

      track.style.transform = `translateX(-${offset.current}px)`;
      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    const stop = () => raf.current && cancelAnimationFrame(raf.current);
    const start = () => (raf.current = requestAnimationFrame(animate));

    track.addEventListener("mouseenter", stop);
    track.addEventListener("mouseleave", start);

    return () => {
      raf.current && cancelAnimationFrame(raf.current);
      track.removeEventListener("mouseenter", stop);
      track.removeEventListener("mouseleave", start);
    };
  }, []);

  const scrollLeft = () => {
    offset.current = Math.max(0, offset.current - CARD_WIDTH);
  };

  const scrollRight = () => {
    offset.current += CARD_WIDTH;
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Arrow */}
      <Button
        size="icon"
        variant="secondary"
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {/* Right Arrow */}
      <Button
        size="icon"
        variant="secondary"
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-md"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Track */}
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-6 w-max will-change-transform">
          {[...fish, ...fish].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="min-w-[280px] sm:min-w-[300px] lg:min-w-[320px]"
            >
              <FishCard fish={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedFishCarousel;
