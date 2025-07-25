import { ImagesAssets } from "@/utils/ImagesAssets";
import { Badge } from "lucide-react";

const historyCards = [
  {
    image: ImagesAssets.history,
    year: "2025",
    title: "Dubai HQ Announcement",
    description:
      "Preparing for our next leap opening our headquarters in Dubai to serve global clients more closely.",
    soonTag: "#SOON",
  },
  {
    image: ImagesAssets.history,
    year: "2025",
    title: "Dubai HQ Announcement",
    description:
      "Preparing for our next leap opening our headquarters in Dubai to serve global clients more closely.",
    soonTag: "#SOON",
  },
  {
    image: ImagesAssets.history,
    year: "2025",
    title: "Dubai HQ Announcement",
    description:
      "Preparing for our next leap opening our headquarters in Dubai to serve global clients more closely.",
    soonTag: "#SOON",
  },
];

const History = () => {
  return (
    <section className="relative bg-[rgba(26,1,39,0.9)] w-full rounded-t-[65px] border-t-[3px] border-white px-6 pt-10 pb-16 overflow-hidden">
      {/* Top Headings */}
      <div className="md:p-10 pt-10">
        <h3 className="text-center text-xl font-secular md:text-3xl font-bold text-white">
          Key Highlights in the History of
        </h3>
        <h3 className="text-center text-[] mt-2 font-secular md:text-3xl font-bold text-[#8B7190]">
          INFINITY x DYNAMICS
        </h3>
        <p className="text-lg md:text-xl text-white mt-9">
          From humble beginnings to global expansion, our journey is marked by innovation, growth, and milestone moments that define the spirit of INFINITY X DYNAMIC.
        </p>
      </div>

      {/* Cards Grid with Side Buttons */}
      <div className="relative mt-14 flex justify-center items-center w-full">
        {/* Left Button */}
        <button className="absolute hidden md:block  left-0 z-10 hover:scale-110 transition-transform duration-300">
          <ImagesAssets.leftButton />
        </button>

        {/* Cards */}

        {/* <div className="hidden md:block absolute left-[-50px] top-[0px] w-[142.301px] h-[125.644px] bg-[#6B2D6E] rotate-[-42.093deg]"></div>
        <div className="hidden md:block absolute left-[-50px] top-[50px] w-[100.783px] h-[125.644px] bg-white rotate-[-18.551deg]"></div> */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-24 w-full md:max-w-7xl md:px-16 ">
          {historyCards.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl overflow-hidden flex-grow md:basis-[300px] md:max-w-[400px] w-full"
            >

              {/* Image Section */}
              <div
                className="h-[180px] rounded-t-[5px] bg-cover bg-center shadow-lg w-full"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>

              {/* Gradient Details Section */}
              <div
                className="flex-grow border rounded-xl border-white/50 opacity-50 flex flex-col justify-between p-4 bg-[#370E40]">
                {/* Year Badge */}
                <span className="inline-block bg-white text-[#3C0945] text-[16px] font-semibold px-[19px] py-1 rounded-full mb-3 w-fit">
                  {item.year}
                </span>

                {/* Title */}
                <h4 className="text-white font-semibold text-lg mb-2">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-white text-sm opacity-80 mb-3">
                  {item.description}
                </p>

                {/* Soon Tag */}
                <span className="inline-block text-white text-xl font-semibold px-[19px] py-1 rounded-2xl border border-white/50">
                  {item.soonTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button className="absolute hidden md:block  right-0 z-10 hover:scale-110 transition-transform duration-300">
          <ImagesAssets.rightButton />
        </button>
      </div>
    </section>

  );
};

export default History;
