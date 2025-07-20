import { ImagesAssets } from "@/utils/ImagesAssets";
import { useState, useEffect } from "react";
import React from "react";

const achievementImages = [
  {
    src: ImagesAssets.person,
    name: "Mr Abc",
    title: "UI/UX Designer",
    description:
      "As a UI/UX designer at IXD, I craft interfaces that don’t just look stunning—they guide, engage, and convert with purpose.",
  },
  {
    src: ImagesAssets.person,
    name: "Ms Def",
    title: "Developer",
    description: "I turn code into digital experiences at IXD.",
  },
  {
    src: ImagesAssets.person,
    name: "Mr Ghi",
    title: "Project Manager",
    description: "I keep IXD projects on track and teams aligned.",
  },
  {
    src: ImagesAssets.person,
    name: "Ms Jkl",
    title: "Animator",
    description: "I bring IXD’s visuals to life with motion.",
  },
];

const SliderCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine number of visible cards based on screen width
  const getVisibleCount = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 768) return 2; // tablet
    return 3; // desktop
  };

  const [responsiveCount, setResponsiveCount] = useState(getVisibleCount());

  // Update visible card count on window resize
  useEffect(() => {
    const handleResize = () => {
      const count = getVisibleCount();
      setResponsiveCount(count);
      // Reset index if needed
      setCurrentIndex((prev) =>
        Math.min(prev, achievementImages.length - count)
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, achievementImages.length - responsiveCount)
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Cards Wrapper */}
      <div
        className="flex lg:px-[105px] transition-transform duration-500 ease-in-out"
        style={{
          width: `${(achievementImages.length * 100) / responsiveCount}%`,
          transform: `translateX(-${
            (currentIndex * 100) / achievementImages.length
          }%)`,
        }}
      >
        {achievementImages.map((item, index) => (
          <div
            key={index}
            className="px-2 md:px-4 box-border"
            style={{
              width: `${100 / achievementImages.length}%`,
            }}
          >
            <div className="h-full flex flex-col justify-between shadow-sm bg-[#3C0945] rounded-lg text-white overflow-hidden">
              <a href="#">
                <img
                  className="w-full h-[180px] object-cover"
                  src={item.src}
                  alt={item.name}
                />
              </a>
              <div className="p-5 flex flex-col flex-grow">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight">
                    {item.name}
                  </h5>
                </a>
                <p className="mb-1 text-sm">{item.title}</p>
                <p className="text-sm text-gray-200 flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-10 mt-6">
        <button
          onClick={handlePrev}
          className="hover:scale-110 transition-transform duration-300"
          disabled={currentIndex === 0}
        >
          <ImagesAssets.leftButton />
        </button>

        <button
          onClick={handleNext}
          className="hover:scale-110 transition-transform duration-300"
          disabled={
            currentIndex >= achievementImages.length - responsiveCount
          }
        >
          <ImagesAssets.rightButton />
        </button>
      </div>
    </div>
  );
};

export default SliderCards;
