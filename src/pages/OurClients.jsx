import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import ContactSocialIcons from "@/components/ContactSocialIcons";
import CustomHeading from "@/components/CustomHeading";
import FAQSection from "@/components/FAQSection";
import FeedbackSection from "@/components/FeedbackSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { ImagesAssets } from "@/utils/ImagesAssets";
import CustomCardModal from "@/components/CustomCardModal";
import AwardBox from "@/components/AwardBox";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import SliderCards from "@/components/SliderCards";
import { Canvas } from "@react-three/fiber";
import Static3DModel from "@/components/models/Model3D";
import { Environment, OrbitControls } from "@react-three/drei";

const clientLogos = [
  { id: 1, src: "/2ndbanner.avif", alt: "Client 1" },
  { id: 2, src: "/images/clients/client2.png", alt: "Client 2" },
  { id: 3, src: "/images/clients/client3.png", alt: "Client 3" },
  { id: 4, src: "/images/clients/client4.png", alt: "Client 4" },
  { id: 5, src: "/images/clients/client5.png", alt: "Client 5" },
  { id: 6, src: "/images/clients/client6.png", alt: "Client 6" },
  { id: 7, src: "/images/clients/client7.png", alt: "Client 7" },
  { id: 8, src: "/images/clients/client8.png", alt: "Client 8" },
  { id: 9, src: "/images/clients/client9.png", alt: "Client 9" },
  { id: 10, src: "/images/clients/client10.png", alt: "Client 10" },
  // Add more up to 20 as needed
];

const sections = [
  {

    text: "Our clients consistently praise our creativity, reliability, and results — with glowing reviews from across the globe, reflecting trust in every project we deliver.",
  },
  {
    heading: "Their vision, our creativity",

  },
  {
    content: (
      <div className="w-[300px] flex justify-center">
        <AwardBox target={100} label="Satisfied Clients" />
      </div>
    ),
  },
];




const OurClients = () => {

  return (
    <div>
      {/* Hero Section */}

      {/* Spacer to push content below fixed header */}
      <div className="h-20" />
      {/* Our Clients Section */}
      <section className="relative flex w-full items-center min-h-screen z-0 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <ImagesAssets.backgroundWave className="w-full h-full lg:h-full object-cover" />
        </div>

        {/* Foreground Content */}
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 z-10 relative gap-16">
          {/* Left: Text and Stats */}
          <div className="text-white max-w-2xl rounded-3xl p-8 shadow-lg bg-white/10 backdrop-blur-md">
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-secular font-bold text-center md:text-left">
              Our <span className="text-[#8B7190]" >Clients</span>
            </h1>
            <p className="text-lg md:text-2xl text-center md:text-left mt-4">
              Our clients consistently praise our creativity, reliability, and results — with glowing reviews from across the globe, reflecting trust in every project we deliver.
            </p>
            <div className="flex justify-between items-center mt-6 gap-4">
              <h2 className="text-xl md:text-xl lg:text-2xl font-semibold ">
                Their vision, our creativity
              </h2>
              <AwardBox target={100} label="Satisfied Clients" className="ml-0 md:ml-4" />
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

      {/* Feedback Section */}
      <section className="w-full z-0 rounded-t-[65px] border-t-[3px] border-white overflow-hidden">
        {/* Header Section */}

        <div className="relative flex justify-between items-center py-16 p-8">
          <div className="text-center lg:text-left text-white ">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">We Love Feedback !</h1>
            <p className=" text-xl md:text-2xl ">Share your thoughts with us, and let's turn your feedback into<br /> the masterpiece that shapes our journey.</p>
          </div>
          <div className="z-30 absolute  h-[180px] w-[180px] -top-10 -right-6 md:-top-10   md:h-[300px] md:w-[300px] overflow-visible pointer-events-none">
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


        {/* Glow Effect */}
        <div className="relative w-full h-[1px] mt-6">
          <div className="w-[150px] h-[150px] bg-white rounded-full blur-[60px] absolute top-0 -left-[60px] opacity-30" />
        </div>

        {/* Carousel Section */}
        <SliderCards />
      </section>

      <section >
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
      <section className="relative overflow-visible ">

        <div className="py-10 px-16 z-20">

          <div className=" absolute right-0 h-[180px] w-[180px]  md:-top-36 md:right-0 z-0 md:h-[300px] md:w-[300px] overflow-visible pointer-events-none">
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


      {/* Gallery Section */}
      {/* <section className="bg-[#EEDFFF] py-16 px-4">
        <div className="md:px-20 p-5 pb-20 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientLogos.map((src, index) => (
              <img
                key={index}
                src={src.src}
                alt={`Client ${index + 1}`}
                className="w-full h-auto cursor-pointer rounded shadow-md hover:scale-105 transition"
                onClick={() => openModal(index)}
              />
            ))}
          </div>

       
          {modalOpen && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <button
                onClick={closeModal}
                className="absolute cursor-pointer top-4 right-4 text-white text-3xl"
              >
                &times;
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 cursor-pointer text-white text-4xl hover:scale-110 transition"
              >
                &#10094;
              </button>

              <img
                src={clientLogos[currentIndex].src}
                // alt={`Modal ${currentIndex}`}
                alt={clientLogos[currentIndex].alt}
                className="max-w-full max-h-[80vh] rounded-lg"
              />

              <button
                onClick={nextImage}
                className="absolute cursor-pointer right-4 text-white text-4xl hover:scale-110 transition"
              >
                &#10095;
              </button>
            </div>
          )}
        </div>
      </section> */}
      {/* contact form section */}
      {/* <section className="bg-[#320142]">
        <div>
          <ContactForm
            heading1="Hi, "
            heading2="There!"
            highlightTextLine1="Ready to bring your"
            highlightTextLine2="story to life?"
            heading1Color="text-white"
            heading2Color="text-[#D977C8]"
            line1Color="text-white font-extrabold"
            line2Color="text-[#D977C8] font-extrabold"
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
              firstColor="#fff"
              secondColor="#D977C8"
              textSize="text-4xl md:text-6xl font-bold p-5"
              align="text-center"
            />
          </div>
          <FAQSection />
        </div>
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

export default OurClients;
