import React from "react";
import CustomHeading from "../Components/CustomHeading";
import ContactSocialIcons from "../Components/ContactSocialIcons";
import PortfolioTabs from "../Components/PortfolioTabs";
import AchievementGallery from "../Components/AchievementGallery";
import ContactForm from "../Components/ContactForm";
import FAQSection from "../Components/FAQSection";
import ImageSlider from "../Components/ImageSlider";
import FeedbackSection from "../Components/FeedbackSection";

const OurWork = () => {
  return (
    <div>
      {/* hero section */}
      <section className="bg-[#440755] relative h-screen z-20">
        <div className="flex justify-center items-center h-[80vh]">
          <CustomHeading
            firstText="OUR"
            secondText="WORK"
            firstColor="#fff"
            secondColor="#B369A6"
            textSize="text-4xl md:text-8xl font-bold p-5 font-[poppins]"
            align="text-center"
          />
        </div>
        <ContactSocialIcons />
      </section>
      {/* 2nd section */}
      <section className="bg-[#EEDFFF]">
        <div className="md:p-10 p-10">
          <CustomHeading
            firstText="We turn your thoughts"
            secondText="into visuals"
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
        </div>
        <div>
          <PortfolioTabs />
        </div>
      </section>
      {/* our achievement section */}
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
      {/* contact form section */}
      <section className="bg-[#EEDFFF]">
        <div>
          <ContactForm />
        </div>
        <div className="md:h-[700px] h-[1400px] px-4">
          <FAQSection />
        </div>
      </section>
      {/* amazing clients section */}
      <section className="bg-[#320142]">
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
      </section>
      {/* feedback section */}
      <section className="bg-[#EEDFFF]">
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
      </section>
    </div>
  );
};

export default OurWork;
