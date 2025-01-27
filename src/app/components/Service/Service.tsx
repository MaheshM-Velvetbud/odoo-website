import React from "react";
import { Meteors } from "../ui/meteors";

const cardsData = [
  {
    title: "Implementation",
    image: "https://c4.wallpaperflare.com/wallpaper/418/882/505/quill-pen-writing-implement-color-wallpaper-preview.jpg",
    paragraph:
      "The right tool can empower your business, but improper use can hinder it. Don't compromise on finding the right expertise to implement your chosen solution.",
  },
  {
    title: "Customization",
    image: "https://c4.wallpaperflare.com/wallpaper/418/882/505/quill-pen-writing-implement-color-wallpaper-preview.jpg",
    paragraph:
      "Complex systems require careful customization, akin to intricate surgery. Partner with global experts to ensure a successful outcome.",
  },
  {
    title: "Training",
    image: "https://c4.wallpaperflare.com/wallpaper/418/882/505/quill-pen-writing-implement-color-wallpaper-preview.jpg",
    paragraph:
      "Invest in your team's success. Get them trained by world-class experts to unlock the full potential of your chosen solution",
  },
  {
    title: "Support",
    image: "https://c4.wallpaperflare.com/wallpaper/418/882/505/quill-pen-writing-implement-color-wallpaper-preview.jpg",
    paragraph:
    "Downtime shouldn't cause stress. We provide comprehensive support so you can focus on running your business while we handle technical issues.",
  },
  {
    title: "Integration",
   image: "https://c4.wallpaperflare.com/wallpaper/418/882/505/quill-pen-writing-implement-color-wallpaper-preview.jpg",
    paragraph:
      "We integrate a wide range of products and services, both hardware and software, to seamlessly connect your chosen solution with your existing ecosystem.",
  },
  {
    title: "Development",
   image: "https://c4.wallpaperflare.com/wallpaper/418/882/505/quill-pen-writing-implement-color-wallpaper-preview.jpg",
    paragraph:
      "Our team of highly skilled developers can leverage their expertise to tailor the solution to your specific needs.",
  },
  
];

const MeteorsDemo = () => {
  return (
    <div>
         <div className="mx-auto max-w-2xl lg:text-center py-12">
      <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
        Everything you need Services
      </p>
      <p className="mt-6 text-lg/8 text-gray-600">
        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
        pulvinar et feugiat blandit at. In mi viverra elit nunc.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6" style={{
    backgroundImage: 'url("")',
    backgroundSize: 'cover', // Adjust size as needed
    backgroundPosition: 'center', // Adjust position as needed
  }}>
      {cardsData.map((card, index) => (
        <div key={index} className="w-full relative max-w-xs mx-auto">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="w-full mb-4">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              {card.title}
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              {card.paragraph}
            </p>

            <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
              Explore
            </button>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MeteorsDemo;
