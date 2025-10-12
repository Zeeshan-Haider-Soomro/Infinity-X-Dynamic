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
import { Canvas } from "@react-three/fiber";
import Static3DModel from "@/components/models/Model3D";
import { Environment, OrbitControls } from "@react-three/drei";
import Modal from "@/components/ui/modal";
import { projects } from "@/data/serviceCards";
import Feedback from "@/components/Feedback";

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
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  return (
    <div>
      {/* hero section */}
      <div className="h-20" />
      <section className="relative flex w-full items-center sm:min-h-screen z-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImagesAssets.backgroundWave className="w-full h-[450px] sm:h-full lg:h-full object-cover" />
        </div>
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 z-10 relative gap-16">
          {/* Left: Text and Stats */}
          <div className="text-white max-w-2xl rounded-3xl p-8 shadow-lg bg-white/10 backdrop-blur-md">
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-secular font-bold text-center md:text-left">
              Our <span className="text-[#8B7190]" >Work</span>
            </h1>
            <p className="text-md md:text-2xl text-center md:text-left mt-4">
              From bold animations to immersive digital experiences, every project is crafted with precision, passion, and innovation.Explore our portfolio and see how we turn ideas into visual stories that move, inspire, and deliver results.
            </p>
            <div className="flex justify-between items-center mt-6 gap-4">
              <h2 className="text-xl md:text-xl lg:text-2xl font-secular font-semibold text-[#8B7190]">
                Our Work Speaks in Motion
              </h2>

            </div>
          </div>

          {/* Right: Bot Illustration */}
          <div data-aos="fade-left" className="relative -top-4 sm:w-full lg:w-1/2 sm:block hidden">
            <div className=" overflow-visible pointer-events-none z-20 h-[300px] w-[250px] md:h-[400px] md:w-[350px]">
              <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, -1.2, 0]} intensity={1} />
                {/* <My3DModel scale={2} position={[0, -1.5, 0]} /> */}
                <Static3DModel scale={1} position={[0, -1.5, 0]} />
                <Environment preset="city" />

                <OrbitControls enableZoom={false} />
              </Canvas>

            </div>
          </div>
        </div>
      </section>



      {/* 2nd section */}
      <section className="">

        <div >
          <RecentProjects
            rows={2}
            cardsPerRow={4}
            enablePagination={true}
          />

          {/* <PortfolioTabs /> */}
        </div>
      </section>

      {/* Feedback section */}
      <section className="mt-8 w-full bg-[#1a0127e6] rounded-t-[65px] border-t-[3px] border-white px-2 sm:px-4 py-8 overflow-hidden">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-10">

          {/* Text */}
          <div className="py-20 w-full lg:w-2/3 text-center lg:text-left font-['Quicksand'] text-white">
            <h3 className="md:text-5xl font-bold mb-4 font-secular">We Love Feedback!</h3>
            <p className="text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed text-white/80">
              Share your thoughts with us, and let's turn your feedback into the
              masterpiece that shapes our journey.
            </p>
          </div>

          {/* Right Illustration */}
   
        </div>

        {/* Glow Effect */}
        <div className="relative w-full mt-6">
          <div className="w-[120px] h-[120px] bg-white rounded-full blur-[60px] absolute top-0 -left-[50px] opacity-30" />
        </div>

        {/* Slider Cards */}
        <div className="mt-6">
          {/* <SliderCards /> */}
          {/* <FeedbackSection/> */}
          <Feedback/>
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
            long-term partnerships in countries like UAE, KSA, AU, UK and the USA.
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
        <div className="py-10 px-16 z-20">
          <div className=" absolute right-0 h-[180px] w-[180px]  md:-top-24 md:right-0 z-20 md:h-[300px] md:w-[300px] overflow-visible pointer-events-none">
            <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, -1.2, 0]} intensity={1} />
              {/* <My3DModel scale={2} position={[0, -1.5, 0]} /> */}
              <Static3DModel scale={1} position={[0, -1.5, 0]} />
              <Environment preset="city" />

              <OrbitControls enableZoom={false} />
            </Canvas>

          </div>
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
