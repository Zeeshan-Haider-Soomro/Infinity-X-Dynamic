import DynamicHeading from "../components/DynamicHeading";
import ServiceButtons from "../components/ServiceButtons";
import TypewriterText from "../components/TypewriterText";
import CustomButton from "../components/CustomButton";
import CustomHeading from "../components/CustomHeading";
import VideoSlider from "../components/VideoSlider";
import VideoSliderRight from "../components/VideoSliderRight";
import ImageSlider from "../components/ImageSlider";
import HistorySlider from "../components/HistorySlider";
import AchievementGallery from "../components/AchievementGallery";
import { useEffect, useState } from "react";
import ContactSocialIcons from "../components/ContactSocialIcons";
import { AppImages } from "../constant/AppImages";
import { Link } from "react-router";
import TalkModal from "../components/TalkModal";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Button } from "@/components/ui/button";
import { ImagesAssets } from "@/utils/ImagesAssets";
import { RecentProjects } from "@/components/RecentProjects";
import { AchievementsSection } from "@/components/AchievementsSection";
import { Card } from "@/components/ui/card";
import History from "@/components/History";

const phrases = [
  ["Graphic", "Motions"],
  ["3D", "Animations"],
  ["2D", "Animations"],
  ["Social Media", "Marketing"],
  ["Web", "Development"],
  ["Cartoon", "Animation"],
  ["Whiteboard", "Videos"],
  ["Logo", "Animation"],
  ["Augmented", "Reality"],
  ["CGI", "VFX"],
  ["IT", "Solutions"],
  ["SEO", "SMM"],
];

const awards = [
  { src: ImagesAssets.award, alt: "Award 1" },
  { src: ImagesAssets.award, alt: "Award 2" },
  { src: ImagesAssets.award, alt: "Award 3" },
];

const Home = () => {
  const { bannerImg } = AppImages;

  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      {/* banner section */}
      <div className="">
        <section className=" top-[50px] relative z-20 p-10 pb-30 overflow-hidden">
          <h1 className="text-white text-center text-[30px] lg:text-[50px] font-secular">
            We Provide
          </h1>
          <div className="h-[100px]">
            <DynamicHeading phrases={phrases} index={index} />
          </div>
          <h1 className="text-white text-center text-[50px] lg:text-[70px] font-medium pt-2 font-secular">
            Services
          </h1>
          <div>
            <ServiceButtons activeIndex={index} />
          </div>
          <div
            data-aos="fade-up"
            className="p-10 flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-center"
          >
            <CustomButton
              onClick={() => setIsModalOpen(true)}
              className="py-6 text-base md:text-[20px]"
            >
              GET STARTED
            </CustomButton>

            <CustomButton to="/our-work" className="py-6 text-base md:text-[20px]">
              VIEW PORTFOLIO
            </CustomButton>

          </div>
          <ContactSocialIcons />
        </section>
      </div>
      {/* 2nd section  */}
      <section className="bg-[#3C0945] bg-zero bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${ImagesAssets.sectionOne})`,
        }}
      >
        <h1
          data-aos="fade-up"
          className="text-4xl font-bold text-center text-[#FFF] pt-10 p-3"
        >
          Welcome to Infinity X Dynamic,
        </h1>
        <div className="">
          <TypewriterText />
        </div>

        {/* text and image section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 p-6">
          {/* Left: Image */}

          {/* Right: Text + Button */}
          <div data-aos="fade-right" className="w-full lg:w-1/2 space-y-6">
            <p className="text-[#FFF] text-base md:text-lg leading-relaxed">
              At Infinity X Dynamics, we merge creativity with cutting-edge
              technology to deliver immersive experiences. From stunning visual
              effects to innovative software solutions, our team is dedicated to
              bringing your vision to life. Founded in 2020, Infinity X Dynamics
              has rapidly evolved into a hub for digital excellence.
            </p>

            <CustomButton to="/about-us">READ MORE</CustomButton>
          </div>

          <div data-aos="fade-left" className="relative w-full lg:w-1/2 hidden lg:block">
            <ImagesAssets.botOne />
            {/* <img
              src={ImagesAssets.botOne}
              alt="Banner"
              className="w-[400px] h-[300px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[450px] object-contain rounded-lg mx-auto z-10 relative"
            /> */}
            {/* <div className="absolute -top-8 left-1 w-50 h-50 bg-[#440755] rounded-[10px] z-0"></div> */}
            {/* <div className="absolute -bottom-7 right-1 w-50 h-50 bg-[#440755] rounded-[10px] z-0"></div> */}
          </div>
        </div>

        <section className="">
          <div>
            <RecentProjects />
          </div>
        </section>

        {/* videos section */}
        <div className="md:p-10 p-10">
          <CustomHeading
            firstText="We turn your thoughts"
            secondText="into visuals"
            firstColor="#FFF"
            secondColor="#A95C9C"
            textSize="text-2xl md:text-4xl"
            align="text-center"
          />
          <CustomHeading
            firstText="See Our Recent"
            secondText="Projects"
            firstColor="#A95C9C"
            secondColor="#FFF"
            textSize="text-4xl md:text-6xl"
            align="text-center"
          />
          <div>
            <VideoSlider />
            <VideoSliderRight />
          </div>
          <CustomButton className="text-center
            flex justify-center items-center mx-auto mt-10 transition-all duration-300
          " to={"/our-work"} >VIEW PORTFOLIO</CustomButton>
          {/* <Link to={"/our-work"}>
            <div className="text-center pt-20">
              <CustomButton
                text="VIEW PORTFOLIO"
                bgColor="#451650"
                hoverColor="#9C448D"
              />
            </div>
          </Link> */}
        </div>

      </section>



      {/* amazing client section  */}
      {/* <section className="bg-[#320142]">
        <h1 className="text-center text-4xl font-bold text-white pt-5">Our</h1>
        <CustomHeading
          firstText="Amazing"
          secondText="Clients"
          firstColor="#fff"
          secondColor="#D977C8"
          textSize="text-4xl md:text-6xl font-bold"
          align="text-center"
        />
        <ImageSlider />
      </section> */}




      {/* history slider section */}

      <History />
      {/* <section className="bg-[#EEDFFF]">
        <div data-aos="fade-up" className="md:p-10 pt-10">
          <CustomHeading
            firstText="Key Highlights in the History of"
            // secondText="Clients"
            firstColor="#5C0E6E"
            secondColor="#5C0E6E"
            textSize="text-4xl md:text-6xl font-bold"
            align="text-center"
          />
          <CustomHeading
            firstText="INFINITY X DYNAMIC"
            // secondText="Clients"
            firstColor="#A95C9C"
            secondColor="#A95C9C"
            textSize="text-4xl md:text-6xl font-bold p-5"
            align="text-center"
          />
        </div>
        <div>
          <HistorySlider />
        </div>
      </section> */}
      {/* our achievement section */}
      {/* <section className="bg-[#320142]">
        <div data-aos="fade-up" className="md:p-10 pt-10">
          <CustomHeading
            firstText="OUR"
            secondText="ACHIEVEMENTS"
            firstColor="#fff"
            secondColor="#D977C8"
            textSize="text-4xl md:text-6xl font-bold p-5"
            align="text-center"
          />
        </div>
        <AchievementGallery />
      </section> */}

      <AchievementsSection />

      {/* Awards Section */}
      <section className="w-full px-6 py-16 ">
        <div className="max-w-[1236px] mx-auto flex flex-col items-center text-center text-white">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-secular">
            Our <span className="text-[#8B7190]">Achievements</span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-3xl md:text-lg font-light mb-12">
            Over 100+ successful projects delivered for clients across 10+
            industries — from startups to global brands. Our work has earned
            long-term partnerships in countries like Egypt, UAE, and the UK.
          </p>

          {/* Awards */}
          <div className="flex flex-wrap justify-around items-center">
            {awards.map((award, index) => (
              <div
                key={index}
                className=" "
              >
                <img
                  src={award.src}
                  alt={award.alt}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <TalkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
