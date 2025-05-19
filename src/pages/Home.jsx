import DynamicHeading from "../Components/DynamicHeading";
import ServiceButtons from "../Components/ServiceButtons";
import TypewriterText from "../Components/TypewriterText";
import CustomButton from "../Components/CustomButton";
import CustomHeading from "../Components/CustomHeading";
import VideoSlider from "../Components/VideoSlider";
import VideoSliderRight from "../Components/VideoSliderRight";
import ImageSlider from "../Components/ImageSlider";
import HistorySlider from "../Components/HistorySlider";
import AchievementGallery from "../Components/AchievementGallery";
import { useEffect, useState } from "react";
import ContactSocialIcons from "../Components/ContactSocialIcons";

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

const Home = () => {

    const [index, setIndex] = useState(0);

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
        <section className="bg-[#320142] relative z-20 p-10 pb-30 overflow-hidden">
          <h1 className="text-white text-center text-[30px] lg:text-[50px]">We Provide</h1>
      <div className="h-[100px]">
        <DynamicHeading phrases={phrases} index={index} />
      </div>
      <h1 className="text-white text-center text-[50px] lg:text-[70px] font-medium pt-2">Services</h1>
      <div>
        <ServiceButtons activeIndex={index} />
      </div>
          <div className="p-10 flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-center">
            <button className="rounded-full bg-[#A95C9C] hover:bg-[#9C448D] py-3 px-10 text-white text-base md:text-[20px] font-medium border border-white hover:border-transparent cursor-pointer">
              GET STARTED
            </button>
            <button className="rounded-full bg-[#A95C9C] hover:bg-[#9C448D] py-3 px-10 text-white text-base md:text-[20px] font-medium border border-white hover:border-transparent cursor-pointer">
              VIEW PORTFOLIO
            </button>
          </div>
      <ContactSocialIcons />
        </section>
      </div>
      {/* 2nd section  */}
      <section className="bg-[#EEDFFF]">
        <h1 className="text-4xl font-bold text-center text-[#A95C9C] pt-10 p-3">
          Welcome to Infinity X Dynamic,
        </h1>
        <div className="">
          <TypewriterText />
        </div>
        {/* text and image section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 p-6">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="src/assets/2ndbanner.avif"
              alt="Banner"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right: Text + Button */}
          <div className="w-full lg:w-1/2 space-y-6">
            <p className="text-[#320142] text-base md:text-lg leading-relaxed">
              At Infinity X Dynamics, we merge creativity with cutting-edge
              technology to deliver immersive experiences. From stunning visual
              effects to innovative software solutions, our team is dedicated to
              bringing your vision to life. Founded in 2020, Infinity X Dynamics
              has rapidly evolved into a hub for digital excellence.
            </p>

            {/* Button aligned to left */}
            <div className="text-left">
              <CustomButton
                text="GET STARTED"
                bgColor="#A95C9C"
                hoverColor="#9C448D"
              />
            </div>
          </div>
        </div>
        {/* videos section */}
        <div className="md:p-10 p-10">
          <CustomHeading
            firstText="We turn your thoughts"
            secondText="into visuals"
            firstColor="#5C0E6E"
            secondColor="#A95C9C"
            textSize="text-2xl md:text-4xl"
            align="text-center"
          />
          <CustomHeading
            firstText="See Our Recent"
            secondText="Projects"
            firstColor="#A95C9C"
            secondColor="#5C0E6E"
            textSize="text-4xl md:text-6xl"
            align="text-center"
          />
          <div>
            <VideoSlider />
            <VideoSliderRight />
          </div>
          <div className="text-center pt-20">
            <CustomButton
              text="VIEW PORTFOLIO"
              bgColor="#451650"
              hoverColor="#9C448D"
            />
          </div>
        </div>
      </section>
      {/* 3rd section  */}
      <section className="bg-[#320142]">
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
      </section>
      {/* history slider section */}
      <section className="bg-[#EEDFFF]">
        <div className="md:p-10 pt-10">
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
      </section>
      {/* image gallery section */}
      <section className="bg-[#320142]">
        <div className="md:p-10 pt-10">
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
      </section>
    </div>
  );
};

export default Home;
