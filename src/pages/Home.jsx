import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  DynamicHeading,
  ServiceButtons,
  TypewriterText,
  CustomButton,
  CustomHeading,
  VideoSlider,
  VideoSliderRight,
  TalkModal,
  ScrollToTopButton,
  RecentProjects,
  AchievementsSection,
  History
} from "@/components";
import { AppImages, ImagesAssets } from "@/constant";
import { phrases, awards } from "@/data/homeData";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Banner Section */}
      <section className="relative z-20 p-6 lg:p-10 pb-30">
        <h1 className="text-white text-center text-3xl lg:text-5xl font-secular">
          We Provide
        </h1>
        <div className="h-24 lg:h-28">
          <DynamicHeading phrases={phrases} index={index} />
        </div>
        <h1 className="text-white text-center text-5xl lg:text-7xl font-medium pt-2 font-secular">
          Services
        </h1>
        <ServiceButtons activeIndex={index} />
        
        <div 
          data-aos="fade-up"
          className="p-6 lg:p-10 flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-center"
        >
          <CustomButton
            onClick={() => setIsModalOpen(true)}
            className="py-6 text-base md:text-xl"
          >
            GET STARTED
          </CustomButton>
          <CustomButton 
            to="/our-work" 
            className="py-6 text-base md:text-xl"
          >
            VIEW PORTFOLIO
          </CustomButton>
        </div>
        <ContactSocialIcons />
      </section>

      {/* Welcome Section */}
      <section 
        className="bg-[#3C0945] bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${ImagesAssets.sectionOne})` }}
      >
        <h1
          data-aos="fade-up"
          className="text-4xl font-bold text-center text-white pt-10 p-3"
        >
          Welcome to Infinity X Dynamic,
        </h1>
        <TypewriterText />

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-6">
          <div data-aos="fade-right" className="w-full lg:w-1/2 space-y-6">
            <p className="text-white text-base md:text-lg leading-relaxed">
              At Infinity X Dynamics, we merge creativity with cutting-edge
              technology to deliver immersive experiences. From stunning visual
              effects to innovative software solutions, our team is dedicated to
              bringing your vision to life. Founded in 2020, Infinity X Dynamics
              has rapidly evolved into a hub for digital excellence.
            </p>
            <CustomButton to="/about-us">READ MORE</CustomButton>
          </div>

          <div 
            data-aos="fade-left" 
            className="relative w-full lg:w-1/2 hidden lg:block"
          >
            <ImagesAssets.botOne className="animate-float" />
          </div>
        </div>

        <RecentProjects />

        {/* Videos Section */}
        <div className="p-6 md:p-10">
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
          <VideoSlider />
          <VideoSliderRight />
          <CustomButton 
            className="mt-10 transition-all duration-300" 
            to="/our-work"
          >
            VIEW PORTFOLIO
          </CustomButton>
        </div>
      </section>

      <History />
      <AchievementsSection />

      {/* Awards Section */}
      <section className="w-full px-6 py-16 bg-[#320142]">
        <div className="max-w-[1236px] mx-auto flex flex-col items-center text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-secular">
            Our <span className="text-[#8B7190]">Achievements</span>
          </h2>
          <p className="max-w-3xl md:text-lg font-light mb-12">
            Over 100+ successful projects delivered for clients across 10+
            industries — from startups to global brands. Our work has earned
            long-term partnerships in countries like Egypt, UAE, and the UK.
          </p>
          <div className="flex flex-wrap justify-around items-center gap-8">
            {awards.map((award, index) => (
              <div key={index}>
                <img src={award.src} alt={award.alt} className="max-w-full h-auto" />
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