import { ImagesAssets } from "@/utils/ImagesAssets";
import React, { useState } from "react";

const tabs = [
  "2D Animation",
  "3D Animation",
  "Cartoon Animation",
  "Motion Graphic",
  "Whiteboard",
  "Logo Animation",
  "CGI / VFX",
];

const tabContent = [
  [ImagesAssets.demobanner, ImagesAssets.demobanner],
  [ImagesAssets.demobanner, ImagesAssets.demobanner],
  [ImagesAssets.demobanner, ImagesAssets.demobanner],
  [ImagesAssets.demobanner, ImagesAssets.demobanner],
  [ImagesAssets.demobanner, ImagesAssets.demobanner],
  [ImagesAssets.demobanner, ImagesAssets.demobanner],
  [ImagesAssets.demobanner, ImagesAssets.demobanner],
];

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="font-sans px-4 py-8 max-w-[1400px] mx-auto w-full">
      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
              activeTab === index
                ? "bg-[#5C0E6E] text-white shadow-lg"
                : "bg-transparent border border-[#a95c9c] text-[#a95c9c] hover:text-white hover:bg-[#a95c9c]"
            } ${index === 6 ? "w-[200px]" : "w-[150px]"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex justify-center">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {tabContent[activeTab].map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-lg"
              data-aos="zoom-in"
            >
              <img
                src={src}
                alt={`Portfolio ${activeTab}-${i}`}
                className="w-[300px] h-[300px] object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioTabs;
