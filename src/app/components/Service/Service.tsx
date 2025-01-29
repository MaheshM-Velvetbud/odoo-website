
"use client"

import React, { useId } from "react";

import { Metadata } from 'next';



export const metadata: Metadata = {
  title:" VelvetBud Technologies | Innovative IT Solutions for Your Business",
  description: "Explore VelvetBud Technologies' comprehensive IT solutions designed to drive your business forward. Our offerings include expert IT consulting, seamless cloud integration and management, robust cybersecurity solutions, effective IT infrastructure management, reliable data backup and disaster recovery, advanced data analytics and business intelligence, and streamlined DevOps and automation processes. Partner with us to enhance efficiency and safeguard your digital assets",
  keywords: "IT Consulting, Cloud Integration, Cybersecurity Solutions, IT Infrastructure Management, Data Backup, Disaster Recovery, Data Analytics, Business Intelligence, DevOps, Automation, VelvetBud Technologies",
};

// Define the type for the Grid component props
interface GridProps {
  pattern?: number[][]; // ✅ More specific type
  size: number;
}


// Define the type for the GridPattern component props, including className
interface GridPatternProps {
  width: number;
  height: number;
  x?: number;
  y?: number;
  squares?: number[][];
  className?: string; // Add this line to include className
}

// FeaturesSectionDemo Component
const FeaturesSectionDemo = () => {
  return (
    <div>
        <div className="mx-auto max-w-2xl lg:text-center pt-12">
      <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-700 sm:text-5xl lg:text-balance">
       Unleashing the Power of Data and <span className="text-yellow-900"> Odoo Customization </span> 
      </p>
      <p className="mt-6 text-lg/8 text-gray-600">
      Transform your business operations with advanced database optimization, seamless Odoo customization, and cutting-edge data engineering solutions. From performance tuning to custom reporting and secure database migrations
      </p>
    </div>
    <div className="py-20 lg:py-40">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b  p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600  mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  
    </div>
  );
};

// Features data
const grid = [
  {
    title: "Advanced SQL and Database Optimization",
    description:
      "( Eg:- query optimization, indexing strategies, and performance tuning for databases like PostgreSQL, Oracle, and ClickHouse. )"
  },
  {
    title: "Data Engineering ",
    description:
      "Data pipeline creation, ETL/ELT processes, and tools like Apache Airflow, Kafka, or dbt",
  },
  {
    title: "Odoo Customization",
    description:
      "extend Odoo’s functionality with custom modules, APIs, and integrations Database Migration: plan and execute database migrations (e.g., from Oracle to PostgreSQL)",
  },
  {
    title: "Performance Tuning",
    description:
      "Optimize database performance for large-scale Odoo deployments",
  },
  {
    title: "Custom Reporting",
    description:
      " Build advanced reporting solutions using tools like Metabase, Superset, or Power BI integrated with Odoo",
  },
  {
    title: "Data Security",
    description:
      "Implement robust data security measures for on-prem Odoo deployments.",
  },

];

// Grid Component
const Grid = ({ pattern, size }: GridProps) => {
  const defaultPattern = [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];

  const p = pattern ?? defaultPattern; // Use default pattern if pattern is not provided

  return (
    <>
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] ">
        <GridPattern
          width={size}
          height={size}
          x={-12}
          y={4}
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay stroke-black/10 fill-black/10"
        />
      </div>
     
    </div>
     
    </>
  );
};

// GridPattern Component
const GridPattern = ({ width, height, x, y, squares, className, ...props }: GridPatternProps) => {
  const patternId = useId();

  return (
    <svg aria-hidden="true" className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
};

export default FeaturesSectionDemo;