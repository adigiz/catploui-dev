"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const FranchiseBenefitsSection: React.FC = () => {
  const benefits = [
    {
      img: "/images/franchise/Site Selection.png",
      title: "SITE SELECTION",
      desc: "We assist with market analysis and securing ideal retail locations.",
    },
    {
      img: "/images/franchise/Training Program.png",
      title: "TRAINING PROGRAM",
      desc: "Comprehensive 4-week onboarding program for owners and staff.",
    },
    {
      img: "/images/franchise/Marketing Support.png",
      title: "MARKETING SUPPORT",
      desc: "Grand opening kit + ongoing promotions and seasonal campaigns.",
    },
    {
      img: "/images/franchise/Operations Manual.png",
      title: "OPERATIONS MANUAL",
      desc: "Detailed guides to run every part of your restaurant efficiently.",
    },
    {
      img: "/images/franchise/Vendor & Supply Chain Access.png",
      title: "VENDOR & SUPPLY CHAIN ACCESS",
      desc: "Exclusive products, sauces, uniforms, and sourcing partners.",
    },
    {
      img: "/images/franchise/Technology Tools.png",
      title: "TECHNOLOGY TOOLS",
      desc: "POS system, online ordering, and reporting dashboards.",
    },
  ];

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
    <section className="w-full py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-3xl lg:text-4xl font-normal text-[#333333] mb-12"
        >
          FRANCHISE BENEFITS
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="flex flex-col gap-12">
            <motion.div variants={itemVariants}>
              <BenefitItem
                img={benefits[0].img}
                title={benefits[0].title}
                desc={benefits[0].desc}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <BenefitItem
                img={benefits[1].img}
                title={benefits[1].title}
                desc={benefits[1].desc}
              />
            </motion.div>
          </div>

          <div className="flex flex-col gap-12">
            <motion.div variants={itemVariants}>
              <BenefitItem
                img={benefits[2].img}
                title={benefits[2].title}
                desc={benefits[2].desc}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <BenefitItem
                img={benefits[3].img}
                title={benefits[3].title}
                desc={benefits[3].desc}
              />
            </motion.div>
          </div>

          <div className="flex flex-col gap-12">
            <motion.div variants={itemVariants}>
              <BenefitItem
                img={benefits[4].img}
                title={benefits[4].title}
                desc={benefits[4].desc}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <BenefitItem
                img={benefits[5].img}
                title={benefits[5].title}
                desc={benefits[5].desc}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BenefitItem = ({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) => (
  <motion.div
    className="text-center flex flex-col items-center justify-start h-full"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="h-[70px] flex items-center justify-center mb-4">
      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 200,
        }}
      >
        <Image
          src={img}
          alt={title}
          width={70}
          height={70}
          className="mx-auto"
        />
      </motion.div>
    </div>
    <motion.h3
      className="text-primary text-xl font-normal uppercase tracking-wide mb-2 min-h-[3rem] flex items-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {title}
    </motion.h3>
    <motion.p
      className="text-md text-[#666666]"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {desc}
    </motion.p>
  </motion.div>
);

export default FranchiseBenefitsSection;
