import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { ImagesAssets } from "@/utils/ImagesAssets";
import CustomButton from "./CustomButton";
import clsx from "clsx";

export const RecentProjects = () => {
    const tabs = [
        "All Projects",
        "Motion Graphics",
        "2D/3D Animation",
        "Web Development",
        "CGI/VFX",
        "Logo Design",
    ];

    const allProjects = [
        {
            id: 1,
            title: "TechRec.Com",
            description:
                "Our platform streamlines the hiring process, helping businesses connect with top talent quickly and efficiently — making recruitment smarter, faster, and stress-free.",
            badge: "121K$",
            img: ImagesAssets.projects,
            category: "Web Development",
        },
        {
            id: 2,
            title: "DesignSync",
            description:
                "Our platform streamlines the hiring process, helping businesses connect with top talent quickly and efficiently — making recruitment smarter, faster, and stress-free.",
            badge: "95K$",
            img: ImagesAssets.projects,
            category: "Motion Graphics",
        },
        {
            id: 3,
            title: "AdBoost AI",
            description:
                "Our platform streamlines the hiring process, helping businesses connect with top talent quickly and efficiently — making recruitment smarter, faster, and stress-free.",
            badge: "210K$",
            img: ImagesAssets.projects,
            category: "2D Animation",
        },
        {
            id: 4,
            title: "AdBoost AI",
            description:
                "Our platform streamlines the hiring process, helping businesses connect with top talent quickly and efficiently — making recruitment smarter, faster, and stress-free.",
            badge: "210K$",
            img: ImagesAssets.projects,
            category: "2D Animation",
        },
        {
            id: 5,
            title: "AdBoost AI",
            description:
                "Our platform streamlines the hiring process, helping businesses connect with top talent quickly and efficiently — making recruitment smarter, faster, and stress-free.",
            badge: "210K$",
            img: ImagesAssets.projects,
            category: "2D Animation",
        },
        {
            id: 6,
            title: "AdBoost AI",
            description:
                "Our platform streamlines the hiring process, helping businesses connect with top talent quickly and efficiently — making recruitment smarter, faster, and stress-free.",
            badge: "210K$",
            img: ImagesAssets.projects,
            category: "2D Animation",
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    const filteredProjects =
        activeTab === 0
            ? allProjects
            : allProjects.filter(
                (project) => project.category === tabs[activeTab]
            );

    return (
        <section className="w-full py-16 bg-[#3E224F] rounded-[50px] px-4 md:px-10 lg:px-20">
            {/* Title */}
            <h2 className="text-white text-3xl md:text-4xl font-bold font-['Secular One'] mb-2">
                See Our Recent Projects
            </h2>
            <p className="text-white text-lg font-medium font-['Quicksand'] mb-8 max-w-[700px]">
                We create stunning 2D and 3D animations that captivate and communicate your vision.
            </p>

            {/* Tabs */}


            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {tabs.map((tab, index) => (
                    <CustomButton
                        key={index}
                        unstyled
                        onClick={() => setActiveTab(index)}
                        className={clsx(
                            "!w-[150px] sm:!w-[170px] !h-auto !py-2 !text-sm sm:!text-base !rounded-[25px]",
                            activeTab === index
                                ? "bg-[#320142] border border-white text-white"
                                : "bg-transparent border border-white text-white hover:bg-[#a95c9c]"
                        )}
                    >
                        {tab}
                    </CustomButton>
                ))}
            </div>



            {/* Cards */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((card) => (
                    <Card
                        key={card.id}
                        className="relative w-[305px]  bg-[#3c0945]/70 border border-white/20 hover:border-white transition-all duration-300 shadow-[0px_0px_20px_#ffffff40]  flex flex-col overflow-hidden"
                    >
                        <CardContent className="p-0 relative flex flex-col h-full">
                            {/* Image (fills top) */}
                            <div className="relative h-1/2 w-full">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-full object-cover rounded-t-[20px] "
                                />

                                {/* Top-right icon button */}
                                <div className="absolute top-2 right-2 w-12 h-12 bg-[#3c0945] rounded-full flex items-center justify-center">
                                    <div className="w-9 h-9 bg-[#1a0127] rounded-full flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            viewBox="0 0 35 35"
                                            fill="none"
                                        >
                                            <path
                                                d="M23.2007 12.9835L11.7958 21.9649M23.2007 12.9835L22.162 21.7205M23.2007 12.9835L14.4637 11.9449"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Text + badge at bottom */}
                            <div className="flex-1 p-4 flex flex-col justify-between relative">
                                <div>
                                    <h3 className="text-white text-xl font-semibold mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-white text-sm ">
                                        {card.description}
                                    </p>
                                </div>

                                {/* Badge on bottom-right */}
                                <div className="absolute bottom-2 right-4">
                                    <Badge className="rounded-full px-[17px] py-[5px] bg-[#3c0945] border border-white  text-white hover:bg-[#5c0e6e] hover:text-white transition-all">
                                        {card.badge}
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </section>
    );
};
