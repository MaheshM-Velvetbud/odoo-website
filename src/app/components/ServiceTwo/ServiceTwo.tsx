"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./style.scss"
import { Metadata } from 'next';



export const metadata: Metadata = {
  title: "VelvetBud Technologies | Expert Software Development & IT Services",
  description: "Discover VelvetBud Technologies, your partner in innovative software development and comprehensive IT services. Our expertise spans software development, data analytics & AI, database services, IT consulting, and cloud solutions. We leverage cutting-edge technology to empower your business and drive success.",
  keywords: "Software Development, Data Analytics, AI, Database Services, IT Consulting, Cloud Services, VelvetBud Technologies",
};

const Example = () => {
  return (




    <section id="gamingfeaturepage" className="bg-white">
      <HeaderSection />
      <HorizontalScrollCarousel />
    </section>

  );
};

const HeaderSection = () => {
  return (
    <div className="header-section">
      <div className="px-8 pt-16 ">
      <h4 className="text-3xl lg:text-4xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black ">
           Data driven solutions for 
{" "}
            <span className="text-yellow-900 font-bold">odoo</span>
          </h4>
           <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal">
           Leverage data-driven insights with Odoo to make informed decisions, optimize operations, and unlock the full potential of your business through intelligent analytics and tailored solutions
          </p>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] mt-8">
      <div className="sticky top-32 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
interface CardProps {
  card: {
    id: number;
    url: string;
    title: string;
    description: string;
  };
}

const Card = ({ card }: CardProps) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[450px] overflow-hidden bg-neutral-200 rounded-3xl "
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center rounded-3xl">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-yellow-900 backdrop-blur-lg rounded-3xl">
          {card.title}
        </p>
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-white text-center p-4">{card.description}</p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "https://img.freepik.com/free-vector/site-stats-concept-illustration_114360-1434.jpg",
    title: "Data Analytics Modules",
    description:"Develop custom Odoo modules for advanced reporting, dashboards, and predictive analytics",
    id: 1,
  },
  {
    url: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149242071.jpg?semt=ais_hybrid",
    title: "Integration with Databases",
    description: "integrate Odoo with high-performance databases like ClickHouse for large-scale data processing",
    id: 2,
  },
  {
    url: "https://c0.wallpaperflare.com/preview/239/96/1006/industrial-industry-automation-automatic.jpg",
    title: "Automation",
    description: "Implement automated workflows for data extraction, transformation, and loading (ETL) between Odoo and other systems",
    id: 3,
  },
  
  {
    url: "https://img.freepik.com/free-vector/ai-powered-content-creation-isometric-composition-with-human-characters-cute-robot-generating-art-computer-screen-3d-vector-illustration_1284-82522.jpg?semt=ais_hybrid",
    title: "AI/ML Integration",
    description: "Explore integrating machine learning models into Odoo for demand forecasting, customer segmentation, or inventory optimization",
    id: 5,
  },


  
];