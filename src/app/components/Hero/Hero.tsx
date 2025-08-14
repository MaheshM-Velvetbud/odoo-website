"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative min-h-screen bg-gray-900 overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/Images/hero3.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: backgroundY,
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Empowering Businesses with <span className="text-yellow-500">ERP Solutions</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300">
            Seamlessly integrate, innovate, and grow your business with tailored Odoo Enterprise solutions designed to streamline operations and boost productivity
          </p>
        </motion.div>
        <motion.div
          className="mt-10 flex items-center justify-center gap-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="/contact"
            className="rounded-full bg-yellow-500 px-6 py-3 text-lg font-semibold text-black shadow-lg"
            whileHover={{ scale: 1.1, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
          <motion.a
            href="/service"
            className="rounded-full border border-gray-300 px-6 py-3 text-lg font-semibold text-white"
            whileHover={{ scale: 1.1, borderColor: "rgba(255, 255, 255, 0.8)" }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-5" />
    </section>
  );
};

export default HeroSection;