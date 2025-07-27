import React, { useEffect, useState } from "react";
import CustomHeading from "@/components/CustomHeading";
import ContactSocialIcons from "@/components/ContactSocialIcons";
import PortfolioTabs from "@/components/PortfolioTabs";
import AchievementGallery from "@/components/AchievementGallery";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import ImageSlider from "@/components/ImageSlider";
import FeedbackSection from "@/components/FeedbackSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import AwardsSection from "@/components/AwardsSection";
import { ImagesAssets } from "@/utils/ImagesAssets";
import CustomCardModal from "@/components/CustomCardModal";
import { RecentProjects } from "@/components/RecentProjects";
import { Card, CardContent } from "@/components/ui/card";
import AwardBox from "@/components/AwardBox";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AchievementsSection } from "@/components/AchievementsSection";
import SliderCards from "@/components/SliderCards";
import CustomButton from "@/components/CustomButton";

const sections = [
  {
    text: `From bold animations to immersive digital experiences, every project is crafted with precision, passion, and innovation.Explore our portfolio and see how we turn ideas into visual stories that move, inspire, and deliver results.`,
  },
  {
    heading: "Our Work Speaks in Motion",
  },
];

const awards = [
  { src: ImagesAssets.award, alt: "Award 1" },
  { src: ImagesAssets.award, alt: "Award 2" },
  { src: ImagesAssets.award, alt: "Award 3" },
];



const OurWork = () => {



  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  return (
    <div>
      {/* hero section */}
      <div className="h-20" />
      {/* Our Clients Section */}
      <section className="relative flex w-full items-center min-h-screen z-0 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <ImagesAssets.backgroundWave className="w-full h-full object-cover" />
        </div>

        {/* Foreground Content */}
        <div className="flex flex-col-reverse lg:flex-row justify-around items-center z-10 p-5 gap-10">
          {/* Left: Text and Stats */}
          <div className="text-white max-w-2xl rounded-3xl p-8 shadow-lg bg-white/10 backdrop-blur-md">
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-secular font-bold text-center md:text-left">
              <span className="text-[#8B7190]">Work </span>Our
            </h1>
            <p className="text-lg md:text-2xl text-center md:text-left mt-4">
              Our clients consistently praise our creativity, reliability, and results — with glowing reviews from across the globe, reflecting trust in every project we deliver.
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-secular mt-4 text-[#8B7190] font-semibold ">
              Their vision, our creativity
            </h2>
          </div>

          {/* Right: Bot Illustration */}
          <div data-aos="fade-left" className="relative w-full lg:w-1/2 hidden lg:block">
            <ImagesAssets.botOne />
          </div>
        </div>
      </section>

      <section className=" w-full pb-4">

        <div className="w-full flex flex-col items-center justify-center text-center px-4 md:h-auto md:flex-row md:justify-between md:text-left md:px-24 md:pb-16">
          <div>
            <h3 className="text-white font-secular text-lg md:text-2xl font-bold">
              See Our Recent <span className="text-[#A95C9C]">Projects</span>
            </h3>
            <p className="text-white text-lg md:text-2xl font-bold mt-2">
              We turn your thoughts into visuals
            </p>
          </div>
          <CustomButton className="mt-4 md:mt-0" to="/our-work">
            VIEW ALL PROJECTS
          </CustomButton>
        </div>


        <div className="max-w-full mx-auto px-4 md:px-[122px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[67px] mt-6">
            <Card className="bg-[#320142] text-white p-4 text-center border-0">
              <p className="text-lg font-semibold mb-2">TechRec.Com</p>
              <img
                src={ImagesAssets.video}
                alt="Project 1"
                className="w-full object-cover rounded-lg"
              />
            </Card>
            <Card className="bg-[#320142] text-white p-4 text-center border-0">
              <p className="text-lg font-semibold mb-2">TechRec.Com</p>
              <img
                src={ImagesAssets.video}
                alt="Project 2"
                className="w-full object-cover rounded-lg"
              />
            </Card>
            <Card className="bg-[#320142] text-white p-4 text-center border-0">
              <p className="text-lg font-semibold mb-2">TechRec.Com</p>
              <img
                src={ImagesAssets.video}
                alt="Project 3"
                className="w-full object-cover rounded-lg"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* 2nd section */}
      <section className="">
        {/* <div className="md:p-10 p-10">
          <CustomHeading
            firstText="See Our Recent Projects"
            secondText="We turn your thoughts into visuals"
            firstColor="#A95C9C"
            secondColor="#5C0E6E"
            textSize="text-2xl md:text-3xl"
            align="text-center"
          />
          <CustomHeading
            firstText="See Our Recent"
            secondText="Projects"
            firstColor="#5C0E6E"
            secondColor="#A95C9C"
            textSize="text-4xl md:text-6xl"
            align="text-center"
          />
        </div> */}
        <div>
          <RecentProjects />
          {/* <PortfolioTabs /> */}
        </div>
      </section>

      {/* Feedback section */}
      <section className="w-full bg-[#1a0127e6] rounded-t-[65px] border-t-[3px] border-white px-2 sm:px-4 py-8 overflow-hidden">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-10">

          {/* Text */}
          <div className="w-full lg:w-2/3 text-center lg:text-left font-['Quicksand'] text-white">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-2">We Love Feedback!</h3>
            <p className="text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed text-white/80">
              Share your thoughts with us, and let's turn your feedback into the
              masterpiece that shapes our journey.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="w-[300px] max-w-full hidden lg:block">
              <ImagesAssets.botTwo className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="relative w-full mt-6">
          <div className="w-[120px] h-[120px] bg-white rounded-full blur-[60px] absolute top-0 -left-[50px] opacity-30" />
        </div>

        {/* Slider Cards */}
        <div className="mt-6">
          <SliderCards />
        </div>
      </section>



      {/* our achievement section */}
      <section className="w-full px-6 py-16 ">
        <div className="max-w-[1236px] mx-auto flex flex-col items-center text-center text-white">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-4 font-secular">
            Our <span className="text-[#8B7190]">Achievements</span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-3xl text-lg font-light mb-12">
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


      {/* <section className="bg-[#320142]">
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
      </section> */}

      {/* contact form section */}
      <section>
        <div>
          <ContactForm
            heading1="Hi, "
            heading2="There!"
            highlightTextLine1="Ready to bring your"
            highlightTextLine2="story to life?"
            heading1Color="text-white"
            heading2Color="text-[#8B7190]"
            line1Color="text-white font-extrabold"
            line2Color="text-[#8B7190] font-extrabold"
            headingSize="md:text-4xl text-4xl font-extrabold"
            subheadingSize="text-4xl font-extrabold"
            highlightSize="text-4xl font-extrabold"
          />
        </div>

      </section>


      <AchievementsSection noBg noBorder />

      {/* FAQs Section */}

      <section className="relative overflow-visible ">
        {/* Bot positioned absolutely */}
        <div className="absolute right-6 -top-40 z-10">
          <ImagesAssets.botTwo />
        </div>

        <div className="py-10 px-4 relative z-20">
          {/* <CustomHeading
                  firstText="Frequently Asked"
                  secondText="Questions"
                  firstColor="#FFF"
                  secondColor="#A95C9C"
                  textSize="text-4xl md:text-6xl font-bold p-5"
                  align="text-center"
                /> */}

          <FAQSection />
        </div>
      </section>



      {/* <section className="bg-[#EEDFFF]">
        <div>
          <ContactForm
            heading1="Hi, "
            heading2="There!"
            highlightTextLine1="Ready to bring your"
            highlightTextLine2="story to life?"
            heading1Color="text-[#5C0E6E]"
            heading2Color="text-[#A95C9C]"
            line1Color="text-[#5C0E6E] font-extrabold"
            line2Color="text-[#A95C9C] font-extrabold"
            headingSize="md:text-4xl text-4xl font-extrabold"
            subheadingSize="text-6xl font-extrabold"
            highlightSize="text-6xl font-extrabold"
          />
        </div>
        <div className="md:h-[700px] h-[1400px] px-4">
          <div>

            <CustomHeading
              firstText="Frequently Asked"
              secondText="Questions"
              firstColor="#5C0E6E"
              secondColor="#A95C9C"
              textSize="text-4xl md:text-6xl font-bold p-5"
              align="text-center"
            />
          </div>
          <FAQSection />
        </div>
      </section> */}

      {/* amazing clients section */}
      {/* <section className="bg-[#320142]">
        <h1 className="text-center text-4xl font-bold text-white pt-5">Our</h1>
        <CustomHeading
          firstText="Amazing"
          secondText="Clients"
          firstColor="white"
          secondColor="#D977C8"
          textSize="text-4xl md:text-6xl font-bold"
          align="text-center"
        />
        <ImageSlider />
      </section> */}

      {/* feedback section */}
      {/* <section className="bg-[#EEDFFF]">
        <div className="md:p-14 p-8">
          <CustomHeading
            firstText="We Love"
            secondText="Feedback"
            firstColor="#5C0E6E"
            secondColor="#A95C9C"
            textSize="text-4xl md:text-6xl font-bold"
            align="text-center"
          />
          <p className="text-[#5C0E6E] text-center md:text-2xl text-[16px] md:px-10 md:p-4 py-3 font-medium">
            Share your thoughts with us, and let's turn your feedback into the
            masterpiece that shapes our journey.
          </p>
        </div>
        <div>
          <FeedbackSection />
        </div>
      </section> */}
      <ScrollToTopButton />
    </div>
  );
};

export default OurWork;
