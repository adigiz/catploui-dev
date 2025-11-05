"use client";
import Image from "next/image";
import { useRef, useState, useCallback, useEffect } from "react";

interface Item {
  name: string;
  image: string;
}

interface ItemCarouselProps {
  items: Item[];
  title: string;
}

const ItemCarousel: React.FC<ItemCarouselProps> = ({ items, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [imageOrientations, setImageOrientations] = useState<{
    [key: string]: "portrait" | "landscape" | "square";
  }>({});
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const startTime = useRef<number>(0);

  const checkImageOrientation = useCallback(
    (imageSrc: string): Promise<"portrait" | "landscape" | "square"> => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.onload = () => {
          const { width, height } = img;
          if (width > height) {
            resolve("landscape");
          } else if (height > width) {
            resolve("portrait");
          } else {
            resolve("square");
          }
        };
        img.onerror = () => {
          resolve("landscape");
        };
        img.src = imageSrc;
      });
    },
    []
  );

  useEffect(() => {
    const loadOrientations = async () => {
      const orientations: {
        [key: string]: "portrait" | "landscape" | "square";
      } = {};

      await Promise.all(
        items.map(async (item) => {
          try {
            const orientation = await checkImageOrientation(item.image);
            orientations[item.image] = orientation;
          } catch (error) {
            console.log(error);
            orientations[item.image] = "landscape";
          }
        })
      );

      setImageOrientations(orientations);
    };

    if (items.length > 0) {
      loadOrientations();
    }
  }, [items, checkImageOrientation]);

  const getImageClass = useCallback(
    (imageSrc: string) => {
      const orientation = imageOrientations[imageSrc];
      if (!orientation) return "object-contain";

      return orientation === "portrait" ? "object-cover" : "object-contain";
    },
    [imageOrientations]
  );

  const handleDotClick = useCallback((index: number) => {
    setCurrentIndex(index);
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

    const threshold = velocity > 0.5 ? 30 : 80;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX < 0 && currentIndex < items.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (deltaX > 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    }

    setIsDragging(false);
    setDragOffset(0);
  }, [isDragging, currentIndex, items.length]);

  const getTransform = useCallback(() => {
    const baseTransform = 10 - currentIndex * 80;
    const dragTransform = isDragging
      ? (dragOffset / window.innerWidth) * 100
      : 0;
    return `translateX(calc(${baseTransform}% + ${dragTransform}px))`;
  }, [currentIndex, isDragging, dragOffset]);

  return (
    <div className="mb-8 sm:mb-12">
      {title !== "" && (
        <h3 className="text-xl sm:text-2xl font-bold text-primary text-center mb-6 sm:mb-8 px-4">
          {title}
        </h3>
      )}

      
      <div className="hidden md:grid grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
        {items.map((item) => (
          <div key={item.name}>
            <div className="rounded-lg mb-4">
              <div className="aspect-[6/4] mb-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={448}
                  className={`w-full h-full rounded-lg transition-all duration-300 ${getImageClass(
                    item.image
                  )}`}
                  quality={100}
                />
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-primary text-base uppercase">
                {item.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

      
      <div className="md:hidden">
        <div
          className="relative touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className={`flex ${
                isDragging ? "" : "transition-transform duration-500 ease-out"
              }`}
              style={{
                transform: getTransform(),
                willChange: "transform",
              }}
            >
              {items.map((item, index) => (
                <div
                  key={item.name}
                  className="w-4/5 flex-shrink-0 px-1 sm:px-2"
                >
                  <div
                    className={` rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-4 sm:mb-6 mx-1 sm:mx-2 transition-all duration-300 select-none ${
                      index === currentIndex
                        ? "opacity-100 scale-100"
                        : "opacity-50 scale-95"
                    }`}
                  >
                    <div className="aspect-square mb-3 sm:mb-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={500}
                        height={500}
                        className={`w-full h-full rounded-2xl object-cover pointer-events-none transition-all duration-300 ${getImageClass(
                          item.image
                        )}`}
                        priority={index <= 2}
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-primary text-base sm:text-lg">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-1 sm:space-x-2 mt-3 sm:mt-4">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to item ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCarousel;
