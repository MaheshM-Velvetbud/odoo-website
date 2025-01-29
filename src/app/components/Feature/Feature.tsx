import React from 'react';
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
    icon:ServerIcon,
  },
  {
    name: 'Custom Software Development',
    description:
      'Tailor your software to meet your specific business needs. From modules to workflows, we create solutions that fit your unique goals',
    icon: WrenchScrewdriverIcon
  },
  {
    name: 'ERP Implementation',
    description:
      'Streamline operations with Odoo’s robust ERP capabilities. We’ll help you implement and optimize the perfect solution for your business',
    icon:  BuildingLibraryIcon,
  },
  {
    name: 'User-Friendly Dashboards',
    description:
      'Empower your team with intuitive, data-driven dashboards that provide real-time insights for smarter decision-making',
    icon: ChartPieIcon,
  },
];

const Example = () => {
  return (
<div
  className="bg-black py-24 sm:py-32 rounded-3xl">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
      <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-400 sm:text-5xl lg:text-balance">
       Transformative Features with Odoo ERP
      </p>
      <p className="mt-6 text-lg/8 text-gray-600">
        Explore the advanced features that redefine how businesses operate
      </p>
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-16">
            <dt className="text-base/7 font-semibold text-gray-400">
              <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-yellow-900">
                <feature.icon aria-hidden="true" className="size-6 text-white" />
              </div>
              {feature.name}
            </dt>
            <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
</div>



  );
};

export default Example;
