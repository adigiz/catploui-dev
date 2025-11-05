import Image from "next/image";

export default function ShopHeroSection() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-primary mb-8 sm:mb-10 md:mb-12 leading-tight">
        CAJUN SEASONING
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-1">
          <div className="relative">
            <Image
              src="/images/about/cajun-seasoning.png"
              alt="Cap't Loui Cajun Seasoning bottle"
              width={300}
              height={600}
              className="object-contain w-auto h-[400px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]"
              priority
            />
          </div>
        </div>

        <div className="w-full lg:w-1/3 text-center flex flex-col justify-center items-center order-2 lg:order-2 mt-6 lg:mt-0">
          <div className="hidden sm:block mb-3 sm:mb-4 md:mb-6">
            <Image
              src="/icon.png"
              alt="Cap't Loui Logo"
              width={100}
              height={100}
              className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
            />
          </div>

          <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6 text-gray-800">
            Our Signature
          </h2>

          <p className="px-4 sm:px-6 md:px-8 lg:px-0 font-medium text-gray-600 mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-md lg:max-w-lg leading-relaxed text-sm sm:text-base md:text-base">
            Create that famous Cap&apos;t Loui taste right in your own home with
            our new Cap&apos;t Loui Cajun Seasoning. You can shake it on
            anything from seafood to chicken to pasta! Mix it with some butter
            to make your own dipping sauce to bring a cajun-inspired flavor to
            all your favorite foods!
          </p>

          <a
            href="https://www.amazon.com/dp/B0CFM6TTYP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-primary text-white font-medium py-3 px-5 rounded-full border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary hover:cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg">
              ORDER NOW
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
