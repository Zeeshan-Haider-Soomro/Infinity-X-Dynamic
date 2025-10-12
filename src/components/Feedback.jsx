import { ImagesAssets } from "@/utils/ImagesAssets";
import { useState, useEffect } from "react";
import React from "react";

const feedbackData = [
    {
        src: ImagesAssets.person,
        name: "M. Jahanzeb Akram",
        title: "Founder | CEO",
        description:
            "Leading IXD with vision and innovation, ensuring growth and excellence.",
    },
    {
        src: ImagesAssets.person,
        name: "Zeeshan Haider Soomro",
        title: "Website Developer | CTO | Project Manager | Team Lead IT Department",
        description:
            "Driving technology strategy, managing projects, and leading IT development at IXD.",
    },
    {
        src: ImagesAssets.person,
        name: "Umar Iqbal",
        title: "CO - Founder | HR | Head Of Sales Supervisors",
        description:
            "Co-founder of IXD, leading HR initiatives and supervising the sales team.",
    },
    {
        src: ImagesAssets.person,
        name: "Syed Arham",
        title: "CO - Founder | Sales Supervisor",
        description:
            "Co-founder of IXD, guiding and managing the sales operations effectively.",
    },
];

const Feedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Responsive count
    const getVisibleCount = () => {
        if (window.innerWidth < 640) return 1; // mobile
        if (window.innerWidth < 768) return 2; // tablet
        return 3; // desktop
    };

    const [responsiveCount, setResponsiveCount] = useState(getVisibleCount());

    useEffect(() => {
        const handleResize = () => {
            const count = getVisibleCount();
            setResponsiveCount(count);
            setCurrentIndex((prev) => Math.min(prev, feedbackData.length - count));
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
            Math.min(prev + 1, feedbackData.length - responsiveCount)
        );
    };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Cards Wrapper */}
            <div
                className="flex lg:px-[105px] transition-transform duration-500 ease-in-out"
                style={{
                    width: `${(feedbackData.length * 100) / responsiveCount}%`,
                    transform: `translateX(-${(currentIndex * 100) / feedbackData.length
                        }%)`,
                }}
            >
                {feedbackData.map((item, index) => (
                    <div
                        key={index}
                        className="px-2 md:px-4 box-border"
                        style={{
                            width: `${100 / feedbackData.length}%`,
                        }}
                    >
                        <div className="h-full flex flex-col justify-between shadow-sm bg-[#3C0945] rounded-lg text-white overflow-hidden p-5">
                            {/* 👤 Rounded Image + Name/Title */}
                            <div className="flex justify-between items-start py-10 -mt-12">
                                <img
                                    className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                                    src={item.src}
                                    alt={item.name}
                                />

                                {/* Name + Title aligned to right */}
                                <div className="flex flex-col items-end ml-4">
                                    <p className="mt-2 text-right font-semibold">{item.name}</p>
                                    <p className="text-right text-xs text-gray-300">{item.title}</p>
                                </div>
                            </div>

                            {/* Feedback Content */}
                            <p className="text-gray-200 flex-grow text-[20px] text-center">
                                {item.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-10 mt-6">
                <button
                    onClick={handlePrev}
                    className="cursor-pointer hover:scale-110 transition-transform duration-300"
                    disabled={currentIndex === 0}
                >
                    <ImagesAssets.leftButton />
                </button>

                <button
                    onClick={handleNext}
                    className="cursor-pointer hover:scale-110 transition-transform duration-300"
                    disabled={currentIndex >= feedbackData.length - responsiveCount}
                >
                    <ImagesAssets.rightButton />
                </button>
            </div>
        </div>
    );
};

export default Feedback;
