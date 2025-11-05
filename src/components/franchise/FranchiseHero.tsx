"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import FranchiseHeroForm from "./FranchiseHeroForm";

const FranchiseHero: React.FC = () => {
  return (
    <section className="relative w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-1 flex flex-col h-full"
          >
            <div className="text-center lg:text-left flex flex-col h-full justify-between">
              <div>
                <motion.h1
                  className="text-4xl lg:text-[52px] font-normal mb-6 leading-tight text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  GROW WITH US
                </motion.h1>

                <motion.p
                  className="text-base lg:text-xl font-medium text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Bring the bold flavor of cajun seafood to your community.
                  Partner with Cap&apos;t Loui to own a thriving seafood boil
                  restaurant backed by a proven system, strong brand, and
                  comprehensive support.
                </motion.p>
              </div>

              <motion.div
                className="relative w-full h-[500px] lg:h-full max-h-[600px] rounded-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/images/franchise/franchise-about.webp"
                  alt="Fresh crabs and seafood"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="order-2 lg:order-2 flex flex-col h-full"
          >
            <div className="flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <FranchiseHeroForm />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseHero;
