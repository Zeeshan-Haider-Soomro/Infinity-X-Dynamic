import { useEffect, useState } from "react";
import AwardsSection from "@/components/AwardsSection";
import ContactForm from "@/components/ContactForm";
import ContactSocialIcons from "@/components/ContactSocialIcons";
import CustomHeading from "@/components/CustomHeading";
import FAQSection from "@/components/FAQSection";
import ImageSlider from "@/components/ImageSlider";
import TeamSection from "@/components/TeamSection";
import { AppImages } from "@/constant/AppImages";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { ImagesAssets } from "@/utils/ImagesAssets";
import CustomButton from "@/components/CustomButton";
import CustomCardModal from "@/components/CustomCardModal";
import { Card, CardContent } from "@/components/ui/card";
import AwardBox from "@/components/AwardBox";
import SliderCards from "@/components/SliderCards";
import { Environment, OrbitControls } from "@react-three/drei";
import Static3DModel from "@/components/models/Model3D";
import { Canvas } from "@react-three/fiber";
import CeoMessage from "@/components/CEOMessage";

const sections = [
  {
    heading: "",
    text: `At Infinity X Dynamics, we merge creativity with cutting-edge technology
      to deliver immersive experiences. From stunning visual effects to innovative
      software solutions, our team is dedicated to bringing your vision to life.
      Founded in 2020, Infinity X Dynamics has rapidly evolved into a hub for
      digital excellence.`,
  },
  {
    heading: "What We Do",
    text: `Over the years, our bold ideas and future-ready solutions have empowered
      startups, brands, and enterprise clients to stand out in the digital space.`,
  },
];

const awards = [
  { src: ImagesAssets.award, alt: "Award 1" },
  { src: ImagesAssets.award, alt: "Award 2" },
  { src: ImagesAssets.award, alt: "Award 3" },
];

const AboutUs = () => {

  useEffect(() => {
    // Force scroll after render
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0); // delay if there's animation or content is loading
  }, []);

  const { CeoImg } = AppImages;
  return (
    <div>
      {/* hero section */}
      <div className="h-20" />
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
              About<span className="text-[#8B7190]" > Us </span>
            </h1>
            <p className="text-[16px] md:text-xl text-center md:text-left mt-4">
              At Infinity X Dynamics, we merge creativity with cutting-edge technology to deliver immersive experiences. From stunning visual effects to innovative software solutions, our team is dedicated to bringing your vision to life. Founded in 2020, Infinity X Dynamics has rapidly evolved into a hub for digital excellence.
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-secular mt-4 text-[#8B7190] font-semibold ">
              What We Do
            </h2>
            <p className="text-[16px] md:text-xl md:text-left mt-2">
              Over the years, our bold ideas and future-ready solutions have empowered startups, brands, and enterprise clients to stand out in the digital space.
            </p>
          </div>

          {/* Right: Bot Illustration */}
          <div className="absolute right-0 -top-6 sm:-top-10  md:top-18 lg:-top-16 z-20 h-[200px] w-[100px]   lg:h-full lg:w-[50%] overflow-visible pointer-events-none">
            <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, -1.2, 0]} intensity={1} />
              {/* <My3DModel scale={2} position={[0, -1.5, 0]} /> */}
              <Static3DModel scale={0.8} position={[0, -1.5, 0]} />
              <Environment preset="city" />

              <OrbitControls enableZoom={false} />
            </Canvas>

          </div>
        </div>
      </section>

      <div className="w-full flex justify-center -mt-16 ">
        <AwardsSection />
      </div>

      {/* CEO message section */}



      <CeoMessage />


      {/* Our Team Section */}
      <section className=" relative  mt-10 w-full bg-[#1a0127e6] rounded-t-[65px] border-t-[3px] border-white py-6">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16 max-w-[1236px] mx-auto">
          {/* Left Image */}
          <div className=" -top-10 left-0 h-[180px] w-[180px]   md:-top-20 md:right-0 z-20 md:h-[300px] md:w-[300px] overflow-visible pointer-events-none">
            <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[0, -1.2, 0]} intensity={1} />
              {/* <My3DModel scale={2} position={[0, -1.5, 0]} /> */}
              <Static3DModel scale={1} position={[0, -1.5, 0]} />
              <Environment preset="city" />

              <OrbitControls enableZoom={false} />
            </Canvas>

          </div>

          {/* Center Text */}
          <div className="flex-1 text-center lg:text-left  font-medium text-white text-2xl leading-[30px]">
            <h3 className="md:text-3xl font-bold mb-4 font-secular">
              Our <span className="text-[#8B7190]">Team</span>
            </h3>
            <p className="md:text-3xl text-xl px-2">
              Our strength lies in our individuality. Set up by Esther Bryce,
              the team strives to bring in the best talent in various fields,
              from architecture to interior design and sales.
            </p>
          </div>

          {/* Right Award Box */}
          <div className="w-[300px] flex justify-center">
            <AwardBox target={21} label="Team Members" />
          </div>
        </div>

        <div className="relative flex items-start">
          <div className="w-[150px] h-[150px] bg-white rounded-[75px] blur-[60px] absolute top-0 -left-[60px]" />
        </div>
        {/* Slider */}

        <SliderCards />

      </section>

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

      {/* contact form section */}
      <section className="relative">
        <div>
          <ContactForm
            heading1="Hi, "
            heading2="There!"
            highlightTextLine1="Ready to bring your"
            highlightTextLine2="story to life?"
            heading1Color="text-white text-4xl font-extrabold"
            heading2Color="text-[#8B7190] text-4xl font-extrabold"
            line1Color="text-white  font-extrabold"
            line2Color="text-[#8B7190] font-extrabold"
            headingSize="md:text-4xl  font-extrabold"
            subheadingSize="text-4xl font-extrabold"
            highlightSize="text-4xl font-extrabold"
          />
        </div>

        {/* Responsive Bot Image */}
        <section className="relative overflow-visible ">

          <div className="py-10 px-16 z-20">

            <div className=" absolute right-0 h-[180px] w-[180px]  md:-top-36 md:right-0 z-0 md:h-[280px] md:w-[280px] overflow-visible pointer-events-none">
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

      </section>


      {/* amazing clients section */}
      {/* <section className="bg-[#F2E6FF]">
        <h1 className="text-center text-4xl font-bold text-[#5C0E6E] pt-5">
          Our
        </h1>
        <CustomHeading
          firstText="Amazing"
          secondText="Clients"
          firstColor="#5C0E6E"
          secondColor="#D977C8"
          textSize="text-4xl md:text-6xl font-bold"
          align="text-center"
        />
        <ImageSlider />
      </section> */}
      {/* our team section */}
      {/* <section className="bg-[#320142]">
        <TeamSection />
      </section> */}
      <ScrollToTopButton />
    </div>
  );
};

export default AboutUs;
