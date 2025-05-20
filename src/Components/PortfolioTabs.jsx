import React, { useState } from "react";

const PortfolioTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Motion Graphic",
    "VFX/CGI",
    "3D Animation",
    "2D Animation",
    "Whiteboard",
    "Logo Animation",
    "Web Development",
  ];

  const tabContent = [
    [
      "https://via.placeholder.com/300x400/111111/FFFFFF?text=HTML",
      "https://via.placeholder.com/300x400/222222/FFFFFF?text=CSS",
      "https://via.placeholder.com/300x400/333333/FFFFFF?text=JS",
      "https://via.placeholder.com/300x400/333333/FFFFFF?text=JS",
    ],
    [
      "https://via.placeholder.com/300x400/550055/FFFFFF?text=VFX+1",
      "https://via.placeholder.com/300x400/770077/FFFFFF?text=CGI+2",
    ],
    [
      "https://via.placeholder.com/300x400/004488/FFFFFF?text=3D+Model",
      "https://via.placeholder.com/300x400/0055AA/FFFFFF?text=3D+Render",
    ],
    [
      "https://via.placeholder.com/300x400/AA4400/FFFFFF?text=2D+Sketch",
      "https://via.placeholder.com/300x400/BB5500/FFFFFF?text=2D+Scene",
    ],
    [
      "https://via.placeholder.com/300x400/FFFFFF/000000?text=Whiteboard+1",
      "https://via.placeholder.com/300x400/F8F8F8/000000?text=Whiteboard+2",
    ],
    [
      "https://via.placeholder.com/300x400/003300/FFFFFF?text=Logo+1",
      "https://via.placeholder.com/300x400/004400/FFFFFF?text=Logo+2",
    ],
    [
      "https://via.placeholder.com/300x400/000099/FFFFFF?text=Motion+1",
      "https://via.placeholder.com/300x400/0000CC/FFFFFF?text=Motion+2",
    ],
  ];

  return (
    <div className="font-sans p-4 w-screen mx-auto">
      {/* Tab Buttons */}
<div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 mb-6">
  {tabs.map((tab, index) => (
    <button
      key={index}
      className={`border-2 font-bold rounded-full cursor-pointer px-2 py-2 transition-all ${
        index === 6 ? "w-[200px]" : "w-[150px]"
      } ${
        activeTab === index
          ? "border-[#5C0E6E] text-[#5C0E6E]"
          : "border-[#a95c9c] text-[#a95c9c]"
      }`}
      onClick={() => setActiveTab(index)}
    >
      {tab}
    </button>
  ))}
</div>


      {/* Tab Content */}
   {/* Tab Content */}
<div className="flex justify-center">
  <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
    {tabContent[activeTab].map((src, i) => (
      <img
        key={i}
        src={src}
        className="rounded shadow hover:scale-105 transition-transform w-[300px] h-[300px] object-cover"
        alt={`Portfolio ${activeTab} - ${i}`}
      />
    ))}
  </div>
</div>

    </div>
  );
};

export default PortfolioTabs;
