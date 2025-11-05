import Image from "next/image";
import Link from "next/link";

export default function OurLocationsSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-normal text-gray-800 mb-4">
            OUR LOCATIONS
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0">
            Cap’t Loui has multiple locations across the United States. Visit
            our Locations page to find the restaurant nearest you.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="/locations">
              <button className="bg-primary text-white font-medium py-3 px-6 rounded-full border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary hover:cursor-pointer transition">
                FIND A LOCATION
              </button>
            </Link>
          </div>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/contact/location.webp"
            alt="Restaurant Interior"
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
