"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut", type: "spring", stiffness: 80 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative bg-gray-50 py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="absolute left-0 top-0 h-full w-full text-gray-200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="dot-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <div className="lg:col-span-2">
            <motion.h2
              variants={headingVariants}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
            >
              About Us
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="mt-6 text-lg sm:text-xl text-gray-600 leading-8"
            >
              We are passionate about helping businesses streamline their operations with cutting-edge software solutions. Specializing in Odoo development and Odoo integration, we empower organizations of all sizes to optimize their processes, enhance efficiency, and drive growth
            </motion.p>
            <motion.div
              variants={textVariants}
              className="mt-10"
            >
              <motion.a
                href="#contact"
                className="inline-block rounded-full bg-yellow-500 px-6 py-3 text-lg font-semibold text-black shadow-md hover:bg-yellow-600"
                variants={buttonVariants}
                whileHover="hover"
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            variants={textVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg
                className="h-32 w-32 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;