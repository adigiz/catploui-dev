import Image from "next/image";

export default function RealDealSection() {
  const items = [
    {
      title: "BOLD CAJUN FLAVOR",
      description:
        "Crafted with our signature Louisiana spice blend, every boil is packed with mouthwatering heat and buttery depth.",
      image: "/images/about/realdeal1.webp",
    },
    {
      title: "TOP-TIER INGREDIENTS",
      description:
        "We source the freshest seafood and highest quality produce, because flavor starts with the best.",
      image: "/images/about/realdeal2.webp",
    },
    {
      title: "ENDLESS COMBINATIONS",
      description:
        "From spice level to seasoning style, you call the shots. One boil, endless ways to make it yours.",
      image: "/images/about/realdeal3.webp",
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-gray-900 leading-tight">
          WHAT MAKES CAP&apos;T LOUI THE REAL DEAL
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 bg-primary rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 relative overflow-hidden rounded-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, (max-width: 1024px) 176px, 192px"
                  />
                </div>
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium text-primary mb-3 sm:mb-4 md:mb-5 leading-tight px-2">
                {item.title}
              </h4>
              <p className="text-sm sm:text-base md:text-md lg:text-md text-[#666666] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg font-medium leading-relaxed px-2 sm:px-4 lg:px-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
