import React, { useEffect, useState } from "react";
import CustomHeading from "@/temp/components/CustomHeading";
import ContactSocialIcons from "@/temp/components/ContactSocialIcons";
import PortfolioTabs from "@/temp/components/PortfolioTabs";
import AchievementGallery from "@/temp/components/AchievementGallery";
import ContactForm from "@/temp/components/ContactForm";
import FAQSection from "@/temp/components/FAQSection";
import ImageSlider from "@/temp/components/ImageSlider";
import FeedbackSection from "@/temp/components/FeedbackSection";
import ScrollToTopButton from "@/temp/components/ScrollToTopButton";
import AwardsSection from "@/temp/components/AwardsSection";
import { ImagesAssets } from "@/utils/ImagesAssets";
import CustomCardModal from "@/temp/components/CustomCardModal";
import { RecentProjects } from "@/temp/components/RecentProjects";
import { Card, CardContent } from "@/temp/components/ui/card";
import AwardBox from "@/temp/components/AwardBox";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/temp/components/ui/carousel";
import { AchievementsSection } from "@/temp/components/AchievementsSection";
import SliderCards from "@/temp/components/SliderCards";

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
      <section className="w-full relative min-h-screen z-20 pb-6">
        <div className="absolute inset-0 z-0">
          <ImagesAssets.backgroundWave className="w-full h-full object-cover items-center" />
        </div>

        <div className="flex flex-col justify-center items-center min-h-screen gap-10 p-6">
          {/* Top Row: Card + Image */}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10">
            <div data-aos="fade-right">
              <CustomCardModal title="Our Work" sections={sections} />
            </div>
            <div data-aos="fade-left" className="relative w-full lg:w-1/2 hidden lg:block">
              <ImagesAssets.botOne />
            </div>
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
      <section className="w-full bg-[#1a0127e6] rounded-t-[65px] border-t-[3px] border-white px-4 overflow-hidden py-10">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="lg:w-2/3 text-center lg:text-left font-['Quicksand'] text-white">
            <h3 className="text-[32px] font-semibold mb-2">We Love Feedback!</h3>
            <p className="text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed text-white/80">
              Share your thoughts with us, and let's turn your feedback into the
              masterpiece that shapes our journey.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end lg:w-1/3">
            <div className="text-[32px] [-webkit-text-stroke:1px_#874182] hidden lg:block">
              <ImagesAssets.botTwo />
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="relative w-full mt-8 ">
          <div className="w-[150px] h-[150px] bg-white rounded-full blur-[60px] absolute top-0 -left-[60px] opacity-30" />
        </div>

        <SliderCards />

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
      <section className="bg-[#320142]">
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
