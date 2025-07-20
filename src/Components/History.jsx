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
      <div className="text-center">
        <h2 className="text-white text-2xl md:text-[32px] font-normal leading-[3] font-secular">
          Key Highlights in the History of
        </h2>
        <h3 className="text-white text-2xl md:text-[32px] font-normal leading-[3]">
          <span className="text-[#8b7190] font-medium font-secular">
            INFINITY x DYNAMICS
          </span>
        </h3>
      </div>

      {/* Paragraph */}
      <p className="text-white text-xl md:text-2xl font-medium leading-[30px] mt-14 max-w-5xl mx-auto text-center px-4">
        From humble beginnings to global expansion, our journey is marked by
        innovation, growth, and milestone moments that define the spirit of
        INFINITY X DYNAMIC.
      </p>

      {/* Decorative background shapes */}


      {/* Cards Grid with Side Buttons */}
      <div className="relative mt-14 flex justify-center items-center w-full">
        {/* Left Button */}
        <button className="absolute left-0 z-10 hover:scale-110 transition-transform duration-300">
          <ImagesAssets.leftButton />
        </button>

        {/* Cards */}

        {/* <div className="hidden md:block absolute left-[-50px] top-[0px] w-[142.301px] h-[125.644px] bg-[#6B2D6E] rotate-[-42.093deg]"></div>
        <div className="hidden md:block absolute left-[-50px] top-[50px] w-[100.783px] h-[125.644px] bg-white rotate-[-18.551deg]"></div> */}
        <div className="flex flex-wrap justify-center gap-24 w-full max-w-7xl px-16 ">
          {historyCards.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl  overflow-hidden flex-grow basis-[300px] max-w-[400px] w-full"
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
                className="flex-grow border rounded-xl border-white/50 opacity-50 flex flex-col justify-between p-4 bg-[#370E40]"

              >
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
        <button className="absolute right-0 z-10 hover:scale-110 transition-transform duration-300">
          <ImagesAssets.rightButton />
        </button>
      </div>
    </section>

  );
};

export default History;
