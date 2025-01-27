import React from 'react';

const AboutTwo = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
              <path d="M-100.5 0h201v201h-201ZM699.5 0h201v201h-201ZM499.5 400h201v201h-201ZM-300.5 600h201v201h-201Z" strokeWidth="0" />
            </svg>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">

                <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our Expertise</h1>
               
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              className="w-[48rem] max-w-none rounded-xl     ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/Images/aboutus.png"
              alt="Dark project app screenshot"
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                <p>
                  We provide comprehensive services in Odoo development, offering tailor-made solutions to meet the specific needs of each client. Our expert team ensures seamless integration of Odoo with your existing systems, enabling smooth workflows, enhanced functionality, and better business management.

We also specialize in customizing Odoo modules, creating innovative features, and providing ongoing support to maximize the potential of your Odoo platform.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                 
                  <li className="flex gap-x-3">
                    <svg className="mt-1 size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong className="font-semibold text-gray-900">Our Mission</strong> Our mission is to deliver exceptional Odoo solutions that help businesses transform their operations. By leveraging the power of Odoo, we aim to help companies automate processes, reduce costs, and enhance collaboration within their teams
                    </span>
                  </li>
                  {/* <li className="flex gap-x-3">
                    <svg className="mt-1 size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
                      <path
                        fillRule="evenodd"
                        d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </span>
                  </li> */}
                </ul>
                <p className="mt-8">
                  Our Core Values

Integrity: We maintain transparency and honesty in every interaction.
Excellence: We go above and beyond to deliver top-notch services.
Customer-Centric: Our clients’ success and satisfaction are at the heart of everything we do.
Innovation: We continuously adapt and innovate to meet evolving needs.
                </p>
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Why Choose Us?</h2>
                <p className="mt-6">
                Expert Developers: Our team is composed of experienced Odoo developers with deep knowledge in Odoos vast ecosystem.
Tailored Solutions: We create custom solutions that fit your business needs, ensuring optimal performance and results.
Ongoing Support: We offer continuous support and maintenance, so you can focus on your business while we handle your software needs.
Proven Results: We have a track record of successfully integrating Odoo into diverse industries, from retail to manufacturing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
