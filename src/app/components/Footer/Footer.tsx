"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", type: "spring", stiffness: 90 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.3,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="relative bg-gray-100 py-2 sm:py-2 overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="absolute left-0 top-0 h-full w-full text-gray-300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="diamond-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M30 0 L60 30 L30 60 L0 30 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diamond-pattern)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-y-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center sm:items-start">
            <img
              src="/Images/logo2.png"
              alt="Footer logo"
              className="h-40 w-36 sm:h-48 sm:w-44 mb-4 filter brightness-0"
            />
            {/* <p className="text-center sm:text-left text-gray-600 text-sm">
              1962 Vadakke Veedu Sasthamangalam, Thiruvananthapuram, Kerala 695010
            </p> */}
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <motion.li variants={itemVariants}>
                <a href="#" className="hover:text-yellow-500">Home</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="/service" className="hover:text-yellow-500">Service</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="/about" className="hover:text-yellow-500">About Us</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="/contact" className="hover:text-yellow-500">Contact</a>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <motion.li variants={itemVariants}>
                <a href="#" className="hover:text-yellow-500">Courses</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#" className="hover:text-yellow-500">Pricing</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="#" className="hover:text-yellow-500">Blog</a>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <motion.li variants={itemVariants}>
                <a href="#" className="hover:text-yellow-500">Terms & Conditions</a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="" className="hover:text-yellow-500">Privacy Policy</a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mt-0 flex justify-center gap-8"
        >
          <motion.a
            href="https://facebook.com"
            variants={iconVariants}
            whileHover="hover"
            className="text-2xl text-blue-600"
            aria-label="Facebook"
          >
            <BsFacebook />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            variants={iconVariants}
            whileHover="hover"
            className="text-2xl text-gray-700"
            aria-label="Twitter"
          >
            <BsTwitter />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            variants={iconVariants}
            whileHover="hover"
            className="text-2xl text-pink-600"
            aria-label="Instagram"
          >
            <BsInstagram />
          </motion.a>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="mt-6 text-center text-gray-600 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Vbuds. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;