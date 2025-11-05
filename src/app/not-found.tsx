import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        
        <div className="mb-8">
          <Image
            src="/icon.png"
            alt="Cap't Loui Logo"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>

        
        <h1 className="text-8xl sm:text-9xl font-bold text-primary mb-4">
          404
        </h1>

        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-dancing text-primary mb-6 leading-tight">
          Oops! This catch got away!
        </h2>

        
        <p className="text-gray-600 text-lg sm:text-xl mb-8 max-w-xl mx-auto leading-relaxed">
          The page you&apos;re looking for seems to have swum away. But don&apos;t worry -
          there&apos;s plenty more delicious content to explore!
        </p>

        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/">
            <button className="w-full sm:w-auto bg-primary border-2 border-transparent hover:cursor-pointer text-white font-medium py-3 px-5 rounded-full text-md hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              GO HOME
            </button>
          </Link>
          <Link href="/locations">
            <button className="w-full sm:w-auto bg-white text-primary border-2 hover:cursor-pointer border-primary font-medium py-3 px-5 rounded-full hover:bg-primary hover:text-white transition-colors duration-200 text-md">
              FIND LOCATIONS
            </button>
          </Link>
        </div>


        
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Still can&apos;t find what you&apos;re looking for?{" "}
            <Link
              href="/contact-us"
              className="text-primary hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            and we&apos;ll help you out!
          </p>
        </div>
      </div>
    </div>
  );
}
