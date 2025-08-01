import { useState } from "react";
import { Card } from "@/components/ui/card";
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
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      category: "Web Development",
    },
    {
      id: 2,
      title: "DesignSync",
      video: "https://www.w3schools.com/html/movie.mp4",
      category: "Motion Graphics",
    },
    {
      id: 3,
      title: "AdBoost AI",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      category: "2D/3D Animation",
    },
    {
      id: 4,
      title: "LogoCraft",
      video: "https://www.w3schools.com/html/movie.mp4",
      category: "Logo Design",
    },
    {
      id: 5,
      title: "VFX Masters",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      category: "CGI/VFX",
    },
    {
      id: 6,
      title: "Web Innovators",
      video: "https://www.w3schools.com/html/movie.mp4",
      category: "Web Development",
    },
    {
      id: 7,
      title: "Creative Studio",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      category: "Motion Graphics",
    },
    {
      id: 8,
      title: "Digital Dreams",
      video: "https://www.w3schools.com/html/movie.mp4",
      category: "2D/3D Animation",
    },
    {
      id: 9,
      title: "Brand Vision",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      category: "Logo Design",
    },
    {
      id: 10,
      title: "Cinematic Effects",
      video: "https://www.w3schools.com/html/movie.mp4",
      category: "CGI/VFX",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredProjects =
    activeTab === 0
      ? allProjects
      : allProjects.filter(
          (project) => project.category === tabs[activeTab]
        );

  return (
    <section className="w-full py-8 bg-[#3E224F] px-4 md:px-8 lg:px-16 rounded-[50px]">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-white font-secular text-2xl md:text-4xl font-bold mb-2">
          See Our Recent <span className="text-[#8B7190]">Projects</span>
        </h2>
        <p className="text-white text-lg font-medium font-['Quicksand'] max-w-[700px]">
          We create stunning 2D and 3D animations that captivate and communicate your vision.
        </p>
      </div>

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
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {filteredProjects.slice(0, 4).map((project) => (
          <Card
            key={project.id}
            className="bg-[#320142] text-white p-4 text-center border-0 w-full max-w-[320px] relative group"
          >
            <p className="text-lg font-semibold mb-2">{project.title}</p>

            <div className="relative">
              <video
                className="w-full h-[180px] object-cover rounded-lg"
                src={project.video}
                muted
                preload="metadata"
                controls={false}
              />
              <button
                onClick={() => setSelectedVideo(project.video)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-lg transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal for Video Playback */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 text-white text-3xl z-10"
            >
              &times;
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-[70vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
