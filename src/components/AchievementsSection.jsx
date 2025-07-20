import React from "react";
import { Card, CardContent } from "./ui/card";
import { ImagesAssets } from "@/utils/ImagesAssets";

export const AchievementsSection = (props) => {
  const { noBg, noBorder } = props;
  const testimonials = [
    {
      id: 1,
      rotation: "lg:rotate-[0deg]",
      position: "lg:top-[40px] lg:left-1/2 lg:-translate-x-1/2",
      avatarSrc: ImagesAssets.client,
      flagSrc: ImagesAssets.flag,
      flagSize: "w-[25px] h-[25px]",
      flagPosition: "left-[81px] top-[5px]",
    },
    {
      id: 2,
      rotation: "lg:rotate-[-13.55deg]",
      position: "lg:top-[260px] lg:left-[10%]",
      avatarSrc: ImagesAssets.client,
      flagSrc: ImagesAssets.flag,
      flagSize: "w-[30px] h-[30px]",
      flagPosition: "left-36 top-0",
    },
    {
      id: 3,
      rotation: "lg:rotate-[24.93deg]",
      position: "lg:top-[260px] lg:right-[10%]",
      avatarSrc: ImagesAssets.client,
      flagSrc: ImagesAssets.flag,
      flagSize: "w-[33px] h-[33px]",
      flagPosition: "left-[41px] top-0",
    },
  ];

  return (
    <section
  className={
    `mt-10 w-full px-6 pb-24 relative overflow-hidden ` +
    `${noBg ? "" : "bg-[#1a0127e6] "} ` +
    `${noBorder ? "" : "border-t-[3px] border-white rounded-t-[65px]"}`
  }
>
      {/* Centered Heading and Text */}
      <div className="flex flex-col items-center text-center pt-10 z-10 relative">
        <h2 className="text-[32px]  font-secular leading-[100px]">
          <span className="text-white">Our </span>
          <span className="text-[#8b7190]">Amazing </span>
          <span className="text-white">Clients</span>
        </h2>

        <p className="mt-4 max-w-3xl  text-white text-2xl leading-[30px]">
          Our clients consistently praise our creativity, reliability, and
          results — with glowing reviews from across the globe, reflecting trust
          in every project we deliver.
        </p>
      </div>

      {/* Cards Layout */}
      <div className="relative h-auto lg:h-[600px] mt-10 flex flex-col items-center gap-6 lg:block">
        {testimonials.map((t) => (
          <Card
            key={t.id}
            className={`w-[90%] sm:w-[320px] h-[300px] rounded-[15px] bg-[#3c0945]/70 border border-white/10 shadow-[0px_30px_30px_#ffffffb2]
              ${t.rotation} ${t.position} 
              lg:absolute`}
          >
            <CardContent className="relative w-full h-full p-5">
              <h4 className="text-2xl text-white font-bold font-secular mb-3">
                “Extra<span className="text-[#8b7190]">Ordinary</span>”
              </h4>
              <p className="text-white text-sm font-['Quicksand'] leading-5 mb-4">
                Working with their team was a game-changer for my business. From
                Cairo, I reached out for a website, and they delivered a sleek,
                professional site that exceeded my expectations!
              </p>

              {/* Avatar & Client Info */}
              <div className="flex items-center gap-3 absolute bottom-5 left-5">
                <img
                  src={t.avatarSrc}
                  alt="Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-white text-sm font-semibold">Ahmed M.</div>
                  <div className="text-white text-xs opacity-70">
                    Co-Founder Day App
                  </div>
                </div>

                {/* Flag */}
                <t.flagSrc/>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
