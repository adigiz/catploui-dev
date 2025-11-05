"use client";
import Image from "next/image";
import { useRef, useState, useCallback } from "react";

interface SpiceLevelCarouselProps {
  spiceLevels: string[];
}

const SpiceLevelCarousel: React.FC<SpiceLevelCarouselProps> = ({ spiceLevels }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const startTime = useRef<number>(0);

  const totalSlides = Math.ceil(spiceLevels.length / 2);

  const handleDotClick = useCallback((slideIndex: number) => {
    setCurrentIndex(slideIndex * 2);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    touchStartX.current = e.changedTouches[0].clientX;
    startTime.current = Date.now();
    setDragOffset(0);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    
    touchEndX.current = e.changedTouches[0].clientX;
    const deltaX = touchEndX.current - touchStartX.current;
    setDragOffset(deltaX);
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    
    const deltaX = touchEndX.current - touchStartX.current;
    const deltaTime = Date.now() - startTime.current;
    const velocity = Math.abs(deltaX) / deltaTime;
    const currentSlide = Math.floor(currentIndex / 2);

    // More sensitive threshold for faster swipes
    const threshold = velocity > 0.5 ? 30 : 80;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX < 0 && currentSlide < totalSlides - 1) {
        setCurrentIndex((currentSlide + 1) * 2);
      } else if (deltaX > 0 && currentSlide > 0) {
        setCurrentIndex((currentSlide - 1) * 2);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
  }, [isDragging, currentIndex, totalSlides]);

  const getTransform = useCallback(() => {
    const slideIndex = Math.floor(currentIndex / 2);
    // Center 2 items: each item is 40% wide, so we need to show from 10% to 90%
    // For centering: move left by slideIndex * 80% (since we show 2 items at 40% each)
    const baseTransform = 10 - slideIndex * 80;
    const dragTransform = isDragging ? (dragOffset / window.innerWidth) * 100 : 0;
    return `translateX(calc(${baseTransform}% + ${dragTransform}px))`;
  }, [currentIndex, isDragging, dragOffset]);

  return (
    <div className="relative">
      <div
        className="touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden">
          <div 
            className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-out'}`}
            style={{ 
              transform: getTransform(),
              willChange: 'transform'
            }}
          >
            {spiceLevels.map((level, index) => {
              const slideIndex = Math.floor(currentIndex / 2);
              const itemSlideIndex = Math.floor(index / 2);
              const isVisible = itemSlideIndex === slideIndex;
              
              return (
                <div key={level} className="w-2/5 flex-shrink-0 px-1 sm:px-2">
                  <div className={`text-center transition-all duration-300 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                  }`}>
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-3 sm:mb-4 overflow-hidden mx-auto">
                      <Image
                        src={`/images/menu/spicylevel${index + 1}.jpg`}
                        alt={level}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        priority={index <= 3} // Preload first 4 images
                      />
                    </div>
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg">{level}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      
      <div className="flex justify-center space-x-1 sm:space-x-2 mt-4 sm:mt-6">
        {Array.from({ length: totalSlides }).map((_, slideIndex) => {
          const currentSlide = Math.floor(currentIndex / 2);
          return (
            <button
              key={slideIndex}
              onClick={() => handleDotClick(slideIndex)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                slideIndex === currentSlide 
                  ? "bg-primary scale-110" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to spice level pair ${slideIndex + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpiceLevelCarousel;