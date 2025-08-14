// "use client";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// interface BlockInTextCardProps {
//   tag: string;
//   text: React.ReactNode;
//   examples: string[];
// }

// const Example = () => {
//   return (
//     <div className="flex items-center justify-center bg-neutral-200 px-8 py-12 text-neutral-800 rounded-3xl border border-black">
//       <BlockInTextCard
//         tag="/ Support"
//         text={
//           <>
//             <strong>Get in Touch with Us ?</strong>  Whether you have a question, need support, or want to collaborate, feel free to reach out
//           </>
//         }
//         examples={[
//           "Send Us a Message",
//           "Our Location",
//           "slaes@velvetbud.in",
          
//         ]}
//       />
//     </div>
//   );
// };

// const BlockInTextCard: React.FC<BlockInTextCardProps> = ({ tag, text, examples }) => {
//   return (
//     <div className="w-full max-w-xl space-y-6">
//       <div>
//         <p className="mb-1.5 text-sm font-light uppercase">{tag}</p>
//         <hr className="border-neutral-700" />
//       </div>
//       <p className="max-w-lg text-xl leading-relaxed">{text}</p>
//       <div>
//         <Typewrite examples={examples} />
//         <hr className="border-neutral-300" />
//       </div>
//       <button className="">
//       <a
//   href="mailto:support@yourdomain.com"
//   className="w-32 rounded-full border border-neutral-950 py-2 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100 flex items-center justify-center"
// >
//   Contact Support
// </a>

//       </button>
//     </div>
//   );
// };

// const LETTER_DELAY = 0.025;
// const BOX_FADE_DURATION = 0.125;
// const FADE_DELAY = 5;
// const MAIN_FADE_DURATION = 0.25;
// const SWAP_DELAY_IN_MS = 5500;

// interface TypewriteProps {
//   examples: string[];
// }

// const Typewrite: React.FC<TypewriteProps> = ({ examples }) => {
//   const [exampleIndex, setExampleIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setExampleIndex((pv) => (pv + 1) % examples.length);
//     }, SWAP_DELAY_IN_MS);

//     return () => clearInterval(intervalId);
//   }, [examples.length]);

//   return (
//     <p className="mb-2.5 text-sm font-light uppercase">
//       <span className="inline-block size-2 bg-neutral-950" />
//       <span className="ml-3">
//         EXAMPLE:{" "}
//         {examples[exampleIndex].split("").map((l, i) => (
//           <motion.span
//             initial={{
//               opacity: 1,
//             }}
//             animate={{
//               opacity: 0,
//             }}
//             transition={{
//               delay: FADE_DELAY,
//               duration: MAIN_FADE_DURATION,
//               ease: "easeInOut",
//             }}
//             key={`${exampleIndex}-${i}`}
//             className="relative"
//           >
//             <motion.span
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               transition={{
//                 delay: i * LETTER_DELAY,
//                 duration: 0,
//               }}
//             >
//               {l}
//             </motion.span>
//             <motion.span
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 delay: i * LETTER_DELAY,
//                 times: [0, 0.1, 1],
//                 duration: BOX_FADE_DURATION,
//                 ease: "easeInOut",
//               }}
//               className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
//             />
//           </motion.span>
//         ))}
//       </span>
//     </p>
//   );
// };

// export default Example;


"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactSection = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
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
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12"
        >
          <motion.div variants={itemVariants} className="lg:pr-8">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-7">
              We are here to help you transform your business with tailored Odoo solutions. Reach out to us with your questions, ideas, or project needs, and our team will get back to you promptly.
            </p>
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
              <ul className="mt-4 space-y-4 text-gray-600">
                <motion.li variants={itemVariants} className="flex items-center gap-x-3">
                  <svg
                    className="h-6 w-6 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>sales@vbuds.net</span>
                </motion.li>
                {/* <motion.li variants={itemVariants} className="flex items-center gap-x-3">
                  <svg
                    className="h-6 w-6 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </motion.li> */}
                <motion.li variants={itemVariants} className="flex items-center gap-x-3">
                  <svg
                    className="h-6 w-6 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>1962 VADAKKE VEEDU SASTHAMANGALAM Thiruvananthapuram Kerala 695010</span>
                </motion.li>
              </ul>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                  placeholder="Your Message"
                />
              </div>
              <motion.button
                type="submit"
                variants={buttonVariants}
                whileHover="hover"
                className="w-full rounded-md bg-yellow-500 px-4 py-2 text-lg font-semibold text-black shadow-sm hover:bg-yellow-600"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
