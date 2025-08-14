"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    title: "Advanced SQL and Database Optimization",
    description: "( Eg:- query optimization, indexing strategies, and performance tuning for databases like PostgreSQL, Oracle, and ClickHouse. )",
  },
  {
    title: "Data Engineering ",
    description: "Data pipeline creation, ETL/ELT processes, and tools like Apache Airflow, Kafka, or dbt",
  },
  {
    title: "Odoo Customization",
    description: "extend Odoo’s functionality with custom modules, APIs, and integrations Database Migration: plan and execute database migrations (e.g., from Oracle to PostgreSQL)",
  },
  {
    title: "Performance Tuning",
    description: "Optimize database performance for large-scale Odoo deployments",
  },
  {
    title: "Custom Reporting",
    description: " Build advanced reporting solutions using tools like Metabase, Superset, or Power BI integrated with Odoo",
  },
  {
    title: "Data Security",
    description: "Implement robust data security measures for on-prem Odoo deployments.",
  },
];

const FeaturesSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        type: "spring",
        stiffness: 80,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="bg-gray-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Unleashing the Power of Data and{" "}
            <span className="text-gray-700">ERP Customization</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your business operations with advanced database optimization, seamless Odoo customization, and cutting-edge data engineering solutions. From performance tuning to custom reporting and secure database migrations
          </p>
        </motion.div>
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;