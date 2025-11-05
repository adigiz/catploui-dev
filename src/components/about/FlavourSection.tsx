import Image from "next/image";
import Link from "next/link";

export default function FlavorSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
        
        <div className="md:col-span-2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">
            THE FLAVOR THAT BUILT LOUI
          </h2>
        </div>

        
        <div className="md:col-span-1 flex flex-col items-center">
          <div className="min-w-[330px] lg:min-w-[440px]">
            <Image
              src="/images/about/cajun-seasoning.png" // Update with your path
              alt="Cajun Seasoning"
              width={500}
              height={700} // Adjust height as needed
              className="object-contain mb-6"
            />
          </div>
          <Link href="/shop">
            <button className="bg-primary text-white font-medium py-3 px-6 rounded-full border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary hover:cursor-pointer transition">
              SHOP THE FLAVOR
            </button>
          </Link>
        </div>

        
        <div className="md:col-span-2 text-center md:text-left">
          <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto md:mx-0 text-center">
            Every Cap’t Loui boil starts with our signature Cajun seasoning — a
            bold Louisiana-style blend that brings real flavor to every bite.
          </p>
        </div>
      </div>
    </section>
  );
}
