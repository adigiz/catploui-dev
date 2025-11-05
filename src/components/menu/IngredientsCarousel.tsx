"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

const IngredientsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const startTime = useRef<number>(0);

  const ingredients = [1, 2, 3, 4, 5, 6];
  const totalSlides = Math.ceil(ingredients.length / 2);

  const handleDotClick = useCallback((slideIndex: number) => {
    setCurrentIndex(slideIndex * 2);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    touchStartX.current = e.changedTouches[0].clientX;
    startTime.current = Date.now();
    setDragOffset(0);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;

      touchEndX.current = e.changedTouches[0].clientX;
      const deltaX = touchEndX.current - touchStartX.current;
      setDragOffset(deltaX);
    },
    [isDragging]
  );

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
    const baseTransform = 10 - slideIndex * 80;
    const dragTransform = isDragging
      ? (dragOffset / window.innerWidth) * 100
      : 0;
    return `translateX(calc(${baseTransform}% + ${dragTransform}px))`;
  }, [currentIndex, isDragging, dragOffset]);

  return (
    <div className="lg:hidden relative w-full max-w-md mx-auto">
      <div
        className="touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden px-4">
          <div
            className={`flex ${
              isDragging ? "" : "transition-transform duration-500 ease-out"
            }`}
            style={{
              transform: getTransform(),
              willChange: "transform",
            }}
          >
            {ingredients.map((num, index) => {
              const slideIndex = Math.floor(currentIndex / 2);
              const itemSlideIndex = Math.floor(index / 2);
              const isVisible = itemSlideIndex === slideIndex;

              return (
                <div key={num} className="w-2/5 flex-shrink-0 px-1 sm:px-2">
                  <div
                    className={`text-center transition-all duration-300 ${
                      isVisible
                        ? "opacity-100 scale-100"
                        : "opacity-50 scale-95"
                    }`}
                  >
                    <div className="rounded-2xl p-2 sm:p-3">
                      <div className="w-26 h-26 sm:w-26 sm:h-26 aspect-square overflow-hidden rounded-xl mx-auto">
                        <Image
                          src={`/images/menu/ingredients-${num}.webp`}
                          alt={`Quality ingredient ${num}`}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover"
                          priority={index <= 3}
                        />
                      </div>
                    </div>
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
              aria-label={`Go to ingredient pair ${slideIndex + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default IngredientsCarousel;
