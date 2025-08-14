"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
  ServerIcon,
  WrenchScrewdriverIcon,
  BuildingLibraryIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Advanced Integration Services',
    description:
      'Connect your existing tools and systems effortlessly with Odoo Enterprise. Our integration services ensure smooth data flow across all your business platforms',
    icon: ServerIcon,
  },
  {
    name: 'Custom Software Development',
    description:
      'Tailor your software to meet your specific business needs. From modules to workflows, we create solutions that fit your unique goals',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'ERP Implementation',
    description:
      'Streamline operations with Odoo’s robust ERP capabilities. We’ll help you implement and optimize the perfect solution for your business',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'User-Friendly Dashboards',
    description:
      'Empower your team with intuitive, data-driven dashboards that provide real-time insights for smarter decision-making',
    icon: ChartPieIcon,
  },
];

const Features = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: { scale: 1.05, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-400 to-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transformative Features with ERP
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Explore the advanced features that redefine how businesses operate
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              variants={cardVariants}
              whileHover="hover"
              className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 text-left shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 mb-4">
                <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.name}</h3>
              <p className="mt-2 text-gray-200">{feature.description}</p>
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-transparent"
                whileHover={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;