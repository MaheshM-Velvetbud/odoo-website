"use client";
"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ServerIcon,
  WrenchScrewdriverIcon,
  BuildingLibraryIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";

const cards = [
  {
    url: "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg",
    title: "Data Analytics Modules",
    description: "Develop custom Odoo modules for advanced reporting, dashboards, and predictive analytics",
    id: 1,
    icon: ServerIcon,
  },
  {
    url: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149242071.jpg?semt=ais_hybrid",
    title: "Integration with Databases",
    description: "Integrate Odoo with high-performance databases like ClickHouse for large-scale data processing",
    id: 2,
    icon: WrenchScrewdriverIcon,
  },
  {
    url: "https://c0.wallpaperflare.com/preview/239/96/1006/industrial-industry-automation-automatic.jpg",
    title: "Automation",
    description: "Implement automated workflows for data extraction, transformation, and loading (ETL) between Odoo and other systems",
    id: 3,
    icon: BuildingLibraryIcon,
  },
  {
    url: "https://img.freepik.com/free-vector/ai-powered-content-creation-isometric-composition-with-human-characters-cute-robot-generating-art-computer-screen-3d-vector-illustration_1284-82522.jpg?semt=ais_hybrid",
    title: "AI/ML Integration",
    description: "Explore integrating machine learning models into Odoo for demand forecasting, customer segmentation, or inventory optimization",
    id: 5,
    icon: ChartPieIcon,
  },
];

const DataSolutions = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = (index: number) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", type: "spring", bounce: 0.4 },
    },
    hover: {
      y: -10,
      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.3 },
    },
  });

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h4 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Data Driven Solutions for{" "}
            <span className="text-gray-600">ERP</span>
          </h4>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Leverage data-driven insights with Odoo to make informed decisions, optimize operations, and unlock the full potential of your business through intelligent analytics and tailored solutions
          </p>
        </motion.div>
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              variants={cardVariants(index)}
              whileHover="hover"
              className="relative bg-gray-100 rounded-lg p-6 text-left border border-gray-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-black/10 mb-4">
                <card.icon className="w-6 h-6 text-black" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-black">{card.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{card.description}</p>
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-transparent"
                whileHover={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DataSolutions;