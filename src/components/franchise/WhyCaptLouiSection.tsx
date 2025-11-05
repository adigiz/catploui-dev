"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Custom hook for counting animation with Framer Motion
const useCountUp = (end: number, duration: number = 2000) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return { count, ref };
};

const WhyCaptLouiSection: React.FC = () => {
  // Animation hooks for counting
  const auvCount = useCountUp(2090, 2500); // $2.09M in thousands
  const incomeCount = useCountUp(327, 2000); // $327k in thousands
  const storesCount = useCountUp(30, 1500); // 30 stores

  const formatCurrency = (count: number) => {
    if (count >= 1000) {
      const millions = (count / 1000).toFixed(2);
      return `$${millions}M`;
    }
    return `$${count}k`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="w-full py-8 px-10 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-3xl lg:text-4xl font-normal text-[#333333] mb-12 text-center"
        >
          OUR PERFORMANCE
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-center"
        >
          <motion.div
            variants={itemVariants}
            ref={auvCount.ref}
            className="bg-white p-4 sm:p-6 md:p-8 rounded-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary leading-tight">
              {formatCurrency(auvCount.count)}
              <sup className="text-3xl font-normal">*</sup>
            </h3>
            <p className="mt-2 sm:mt-3 md:mt-4 text-[#666666] font-semibold text-base sm:text-base md:text-lg lg:text-xl">
              Average Unit Volume
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            ref={incomeCount.ref}
            className="bg-white p-4 sm:p-6 md:p-8 rounded-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary leading-tight">
              {formatCurrency(incomeCount.count)}
              <sup className="text-3xl font-normal">**</sup>
            </h3>
            <p className="mt-2 sm:mt-3 md:mt-4 text-[#666666] font-semibold text-base sm:text-base md:text-lg lg:text-xl">
              Average Net Income <br /> &quot;Pre Royalties&quot;
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            ref={storesCount.ref}
            className="bg-white p-4 sm:p-6 md:p-8 rounded-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-primary leading-tight">
              {storesCount.count} Stores
              <sup className="text-3xl font-normal">***</sup>
            </h3>
            <p className="mt-2 sm:mt-3 md:mt-4 text-[#666666] font-semibold text-base sm:text-base md:text-lg lg:text-xl">
              Systemwide
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Disclaimer Section */}
      <div className="max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
          <div className="text-xs sm:text-sm text-gray-700 leading-relaxed space-y-2">
            <p>
              * This figure presented is based on the performance of 2
              affiliate-owned and 13 franchised restaurants in our system during
              the 2024 calendar year.
            </p>
            <p>
              ** This figure is calculated prior to the collection of royalty
              fees and is based on the 2 affiliate-owned and 12 franchised
              restaurants. These results do not include any Express model units
              which were discontinued as of 2025. All restaurants referenced
              were open and operating for the full 2024 calendar year. This
              information is disclosed in Item 19 of our Franchise Disclosure
              Document (FDD). Prospective franchisees should carefully review
              the FDD for detailed information. Please note that a new
              franchisee&apos;s results may differ. There is no guarantee of
              success, and you must accept the risk that your performance may
              vary.
            </p>
            <p>
              *** This figure represents 21 stores in operation and 7 stores
              under construction as of September 2025.
            </p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 mt-8 sm:mt-12 md:mt-16 lg:mt-20"
      >
        <motion.div
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/franchise/franchise-hero.webp"
              alt="Fresh crabs and seafood"
              width={400}
              height={400}
              className="w-full h-auto object-contain rounded-lg"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 text-center order-2 lg:order-2 mt-6 lg:mt-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h2
            className="text-3xl md:text-3xl lg:text-4xl font-normal text-[#333333] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            WHY CAP&apos;T LOUI
          </motion.h2>
          <motion.p
            className="text-[#4d4d4d] mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-md lg:text-md font-medium leading-relaxed px-2 sm:px-4 lg:px-0 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Since 2016, Cap&apos;t Loui has been serving up authentic Cajun
            seafood boils that keep guests coming back. With an average unit
            volume (AUV) of over $2 million and growing demand across the U.S.,
            we offer an exciting opportunity for passionate entrepreneurs ready
            to bring bold flavor and big business to their local communities.
          </motion.p>
          <motion.div
            className="mt-4 sm:mt-6 md:mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Link href="/about-us">
              <motion.button
                className="bg-primary text-white font-medium py-3 px-4 rounded-full border-2 border-transparent hover:bg-white hover:border-primary hover:text-primary hover:cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                LEARN MORE ABOUT US
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyCaptLouiSection;
