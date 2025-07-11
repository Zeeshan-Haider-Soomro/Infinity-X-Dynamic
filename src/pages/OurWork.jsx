import React, { useEffect, useState } from "react";
import CustomHeading from "../Components/CustomHeading";
import ContactSocialIcons from "../Components/ContactSocialIcons";
import PortfolioTabs from "../Components/PortfolioTabs";
import AchievementGallery from "../Components/AchievementGallery";
import ContactForm from "../Components/ContactForm";
import FAQSection from "../Components/FAQSection";
import ImageSlider from "../Components/ImageSlider";
import FeedbackSection from "../Components/FeedbackSection";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import AwardsSection from "@/Components/AwardsSection";
import { ImagesAssets } from "@/utils/ImagesAssets";
import CustomCardModal from "@/Components/CustomCardModal";
import { RecentProjects } from "@/Components/RecentProjects";
import { Card, CardContent } from "@/Components/ui/card";
import AwardBox from "@/Components/AwardBox";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/Components/ui/carousel";
import { AchievementsSection } from "@/Components/AchievementsSection";

const sections = [
  {
    heading: "Our Work ",
    text: `From bold animations to immersive digital experiences, every project is crafted with precision, passion, and innovation.Explore our portfolio and see how we turn ideas into visual stories that move, inspire, and deliver results.`,
  },
  {
    heading: "Our Work Speaks in Motion",
    text: `Over the years, our bold ideas and future-ready solutions have empowered
      startups, brands, and enterprise clients to stand out in the digital space.`,
  },
];

const achievementImages = [
  {
    src: ImagesAssets.person,
    name: "Mr Abc",
    title: "UI/UX Designer",
    description:
      "As a UI/UX designer at IXD, I craft interfaces that don’t just look stunning—they guide, engage, and convert with purpose.",
  },
  {
    src: ImagesAssets.person,
    name: "Ms Def",
    title: "Developer",
    description: "I turn code into digital experiences at IXD.",
  },
  {
    src: ImagesAssets.person,
    name: "Mr Ghi",
    title: "Project Manager",
    description: "I keep IXD projects on track and teams aligned.",
  },
  {
    src: ImagesAssets.person,
    name: "Ms Jkl",
    title: "Animator",
    description: "I bring IXD’s visuals to life with motion.",
  },
];

const awards = [
  { src: ImagesAssets.award, alt: "Award 1" },
  { src: ImagesAssets.award, alt: "Award 2" },
  { src: ImagesAssets.award, alt: "Award 3" },
];



const OurWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= achievementImages.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? achievementImages.length - 1 : prev - 1
    );
  };



  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  return (
    <div>
      {/* hero section */}
      <section className="top-[80px] relative min-h-screen z-20 pb-6">
        <div className="flex flex-col items-center gap-10 p-6">
          {/* Top Row: Card + Image */}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10">
            <div data-aos="fade-right">
              <CustomCardModal title=" " sections={sections} />
            </div>
            <div data-aos="fade-left" className="relative w-full lg:w-1/2">
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



      <section className="mt-10 w-full bg-[#1a0127e6] rounded-t-[65px] border-t-[3px] border-white py-16 px-4 overflow-hidden">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="lg:w-2/3 text-center lg:text-left font-['Quicksand'] text-white">
            <h3 className="text-[32px] font-semibold mb-4">We Love Feedback!</h3>
            <p className="text-xl max-w-xl">
              Share your thoughts with us, and let's turn your feedback into the
              masterpiece that shapes our journey.
            </p>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end lg:w-1/3">
            <div className="text-[32px] [-webkit-text-stroke:1px_#874182]">
              <ImagesAssets.botTwo />
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="relative w-full h-[1px] mt-6">
          <div className="w-[150px] h-[150px] bg-white rounded-full blur-[60px] absolute top-0 -left-[60px] opacity-30" />
        </div>

        {/* Carousel Section */}
        <div className="max-w-6xl mx-auto mt-16 relative px-4">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {achievementImages.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="rounded-[25px] overflow-hidden shadow-xl border border-white/10 bg-transparent">
                    {/* Image */}
                    <div
                      className="w-full h-[190px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.src})` }}
                    />

                    {/* Content */}
                    <CardContent className="p-4 bg-[#3C0945]/50 text-white text-center">
                      <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="!left-0 sm:!left-[-50px]" />
            <CarouselNext className="!right-0 sm:!right-[-50px]" />
          </Carousel>
        </div>
      </section>




      {/* our achievement section */}
      <section className="w-full px-6 py-16 ">
        <div className="max-w-[1236px] mx-auto flex flex-col items-center text-center text-white">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-[#8B7190]">Achievements</span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-3xl text-lg font-light mb-12">
            Over 100+ successful projects delivered for clients across 10+
            industries — from startups to global brands. Our work has earned
            long-term partnerships in countries like Egypt, UAE, and the UK.
          </p>

          {/* Awards */}
          <div className="flex flex-wrap justify-center gap-10">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="w-[305px] h-[189.93px] rounded-[25px] object-fill overflow-hidden bg-white/10 flex items-center justify-center shadow-xl border border-white/10"
              >
                <img
                  src={award.src}
                  alt={award.alt}
                  className="w-full h-full object-cover"
                />
              </Card>
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
            heading2Color="text-[#D977C8]"
            line1Color="text-white font-extrabold"
            line2Color="text-[#D977C8] font-extrabold"
            headingSize="md:text-4xl text-4xl font-extrabold"
            subheadingSize="text-6xl font-extrabold"
            highlightSize="text-6xl font-extrabold"
          />
        </div>

      </section>


    <AchievementsSection />


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
