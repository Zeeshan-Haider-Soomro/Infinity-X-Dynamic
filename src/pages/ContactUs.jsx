import { ImagesAssets } from "@/utils/ImagesAssets"
import AchievementGallery from "@/components/AchievementGallery"
import ContactForm from "@/components/ContactForm"
import ContactSocialIcons from "@/components/ContactSocialIcons"
import CustomHeading from "@/components/CustomHeading"
import FAQSection from "@/components/FAQSection"
import FeedbackSection from "@/components/FeedbackSection"
import ImageSlider from "@/components/ImageSlider"
import ScrollToTopButton from "@/components/ScrollToTopButton"
import CustomCardModal from "@/components/CustomCardModal"
import { Card, CardContent } from "@/components/ui/card"
import { AchievementsSection } from "@/components/AchievementsSection"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import CustomButton from "@/components/CustomButton"
import { useState } from "react"
import SliderCards from "@/components/SliderCards"

const sections = [
  {
    text: `Reach out today and let’s bring your vision to life.Reach out today and let’s bring your vision to life.Reach out today and let’s bring your vision to life.`,
  },
  {
    heading: "Let’s create something extraordinary together.",

  },
];

const awards = [
  { src: ImagesAssets.award, alt: "Award 1" },
  { src: ImagesAssets.award, alt: "Award 2" },
  { src: ImagesAssets.award, alt: "Award 3" },
];


const ContactUs = () => {

  return (
    <div>
      {/* Hero Section */}
      {/* <section className="bg-[#440755] relative h-screen z-20">
        <div className="flex justify-center items-center h-[80vh]">
          <div className="text-center">
            <h2 className="mb-2 md:text-5xl text-4xl font-extrabold">
              <span className="text-white">Hi,</span>{' '}
              <span className="text-[#D977C8]">There</span>
            </h2>
            <p className="md:leading-20 leading-20 text-6xl font-extrabold">
              <span className="text-white pb-3 font-extrabold">Ready to Bring Your</span>
              <br />
              <span className="text-[#D977C8] mt-3 font-extrabold">Story to life?</span>
            </p>
          </div>
        </div>
     
        <ContactSocialIcons />
      </section> */}
      <div className="h-20" />
      <section className="relative flex w-full items-center sm:min-h-screen z-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImagesAssets.backgroundWave className="w-full h-[450px] sm:h-full lg:h-full object-cover" />
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-around items-center z-10 mt-8 py-8 px-2 ">
          {/* Left: Text and Stats */}
          <div className="text-white max-w-2xl rounded-3xl p-8 shadow-lg bg-white/10 backdrop-blur-md">
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-secular font-bold text-center md:text-left">
              Our <span className="text-[#8B7190]" >Clients</span>
            </h1>
            <p className="text-md md:text-2xl text-center md:text-left mt-4">
              Reach out today and let’s bring your vision to life.Reach out today and let’s bring your vision to life.Reach out today and let’s bring your vision to life.
            </p>
            <div className="flex justify-between items-center mt-6 gap-4">
              <h2 className="text-xl md:text-xl lg:text-2xl font-secular font-semibold text-[#8B7190]">
                Let’s create something extraordinary together.
              </h2>

            </div>
          </div>

          {/* Right: Bot Illustration */}
          <div data-aos="fade-left" className="relative w-full lg:w-1/2 hidden lg:block">
            <ImagesAssets.botOne />
          </div>
        </div>
      </section>

      {/* have a project section */}

      <section className=" ">
        <div>
          <ContactForm
            heading1="Have a "
            heading2="Project?"
            description="We're ready when you are. Whether you're building a brand, launching a product, or exploring new digital ideas, Infinity X Dynamics is here to bring your vision to life. Share your project details with us — our expert team will guide you every step of the way, from strategy to execution. Let’s turn your ideas into something extraordinary."
            heading1Color="text-white"
            headingSize="md:text-4xl text-4xl font-extrabold"
            descriptionClass={" text-white"}
            noBg // disables background
            noBorder // disables border
          />
        </div>

      </section>
      {/* <section className="bg-[#F2E6FF]">
        <div>
          <ContactForm
            heading1="HAVE A"
            heading2="PROJECT?"
            highlightTextLine1="We're ready when you are. Whether you're building a brand, launching a product, or exploring new digital ideas, Infinity X Dynamics is here to bring your vision to life. Share your project details with us — our expert team will guide you every step of the way, from strategy to execution. Let’s turn your ideas into something extraordinary."
            highlightTextLine2=""
            heading1Color="text-[#5C0E6E]"
            heading2Color="text-[#A95C9C]"
            line1Color="text-[#5C0E6E] font-medium"
            line2Color="text-[#5C0E6E] font-medium"
            headingSize="md:text-5xl text-4xl"
            subheadingSize="text-1xl"
            highlightSize="text-1xl"
          />

        </div>
      </section> */}
      {/* our achievement section */}
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


      <section className="w-full px-6 py-16 bg-[#1a0127] rounded-t-[65px] border-t-4 border-[#A95C9C]">
        <div className="max-w-[1236px] mx-auto flex flex-col items-center text-center text-white">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-4 font-secular">
            Our <span className="text-[#8B7190] ">Achievements</span>
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

      {/* FAQs Section */}

      <section className="relative overflow-visible ">
        {/* Bot positioned absolutely */}
        <div className="hidden md:block absolute right-6 -top-50 z-20">
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

      <AchievementsSection />
      {/* feedback section */}

      <section className="mt-10 w-full px-4 overflow-hidden pb-4">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
          {/* Text */}
          <div className="lg:w-2/3 text-center lg:text-left font-['Quicksand'] text-white">
            <h3 className="text-[32px] font-semibold mb-2 font-secular">
              We Love Feedback!
            </h3>
            <p className="text-xl max-w-lg mx-auto lg:mx-0">
              Share your thoughts with us, and let's turn your feedback into the
              masterpiece that shapes our journey.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end lg:w-1/3 mb-6 lg:mb-0">
            <div className="hidden md:block text-[32px] [-webkit-text-stroke:1px_#874182]">
              <ImagesAssets.botTwo />
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="relative w-full h-[1px] mt-2">
          <div className="w-[150px] h-[150px] bg-white rounded-full blur-[60px] absolute top-0 -left-[60px] opacity-30" />
        </div>

        {/* Carousel Section */}
        <SliderCards />
      </section>

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
      {/* our location  */}
      <section className="bg-[#320142] text-white py-12 px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Map Embed */}
          <div data-aos="fade-right" className="lg:w-1/2 w-full ">
            <iframe className="border rounded-lg overflow-hidden"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7234.773192364578!2d66.993014!3d24.917482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0fdc53c6ef%3A0xa7bc23528e1e548!2sModal%20Colony%2C%20Karachi%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716711312345!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map - Modal Colony"
            ></iframe>

            {/* Map Links */}
            <div className="mt-4 flex gap-4 flex-wrap">
              <CustomButton
                href="https://www.google.com/maps/place/Modal+Colony,+Karachi,+Sindh,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Larger Map
              </CustomButton>

              <CustomButton
                href="https://www.google.com/maps/dir//Modal+Colony,+Karachi,+Sindh,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </CustomButton>
            </div>

          </div>
          {/* Text Section */}
          <div data-aos="fade-left" className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-4 font-secular"><span className="text-[#8B7190]">Our</span> Location</h2>
            <p className="text-lg mb-6">
              Share your thoughts with us, and let's turn your feedback into the masterpiece that shapes our journey.
            </p>
            <p className="font-semibold text-3xl text-[#8B7190] font-secular">Address</p>
            <p className="mb-4 font-semibold text-3xl">Modal Colony, Karachi, Sindh, Pakistan</p>
            <p className="font-semibold text-3xl text-[#8B7190] font-secular">Hours</p>
            <p className="font-semibold text-3xl">9 AM - 5 PM</p>
          </div>


        </div>
      </section>
      <ScrollToTopButton />
    </div>
  )
}

export default ContactUs