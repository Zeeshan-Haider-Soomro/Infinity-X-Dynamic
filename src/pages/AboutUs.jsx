import { useEffect, useState } from "react";
import AwardsSection from "../Components/AwardsSection";
import ContactForm from "../Components/ContactForm";
import ContactSocialIcons from "../Components/ContactSocialIcons";
import CustomHeading from "../Components/CustomHeading";
import FAQSection from "../Components/FAQSection";
import ImageSlider from "../Components/ImageSlider";
import TeamSection from "../Components/TeamSection";
import { AppImages } from "../constant/AppImages";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import { ImagesAssets } from "@/utils/ImagesAssets";
import CustomButton from "@/Components/CustomButton";
import CustomCardModal from "@/Components/CustomCardModal";
import { Card, CardContent } from "@/Components/ui/card";
import AwardBox from "@/Components/AwardBox";

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
    // Force scroll after render
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0); // delay if there's animation or content is loading
  }, []);
  const { CeoImg } = AppImages;
  return (
    <div>
      {/* hero section */}
      <section className="top-[80px] relative min-h-screen z-20 pb-6">
        <div className="flex flex-col items-center gap-10 p-6">
          {/* Top Row: Card + Image */}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10">
            <div data-aos="fade-right">
              <CustomCardModal title="About Us" sections={sections} />
            </div>
            <div data-aos="fade-left" className="relative w-full lg:w-1/2">
              <ImagesAssets.botOne />
            </div>
          </div>

          {/* Awards Section Centered */}
          <div className="w-full flex justify-center -mt-16">
            <AwardsSection />
          </div>
        </div>
      </section>

      {/* CEO message section */}
      <section className="relative px-4 py-12 flex flex-col items-center justify-center">
        {/* Bot image at top right */}
        <div className="absolute -top-24 right-0 z-10">
          <ImagesAssets.botTwo />
        </div>

        {/* CEO Message Card */}
        <div className="relative w-full max-w-[1236px] flex-shrink-0 rounded-[25px] bg-white/10 shadow-[0px_0px_25px_#FFF] text-white px-10 py-12 overflow-hidden">
          {/* Text content */}
          <h2 className="text-4xl font-bold mb-6">~ CEO’S Message~</h2>

          <p className="text-lg font-light leading-relaxed mb-6 w-[80%]">
            At Infinity X Dynamics, we believe that creativity backed by
            technology has the power to transform brands and reshape industries.
            From our earliest projects to our latest digital breakthroughs,
            we've built IXD around one mission — to turn bold ideas into real
            impact. We don't just develop apps or create visuals — we craft
            experiences that connect, inspire, and drive results. Every team
            member, every client, and every campaign is part of our vision to
            lead the next wave of digital innovation across Pakistan and beyond.
            Thank you for being a part of our journey. The future is dynamic —
            and we're just getting started.
          </p>

          <div className="mt-4 items-center text-center">
            <p
              className="text-[#8B7190] text-start w-[50%] font-[Poppins] text-[32px] italic font-semibold leading-normal mb-2 mx-auto"
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#874182",
              }}
            >
              "In a world full of noise, creativity is our code and innovation
              is our voice."
            </p>
            <p className="text-lg font-medium text-white">
              Founder & CEO - Jahanzaib Akram
            </p>
          </div>

          {/* CEO Image positioned at bottom-right inside the box */}
          <div className="relative flex items-start">
            <div className="w-[150px] h-[150px] bg-white rounded-[75px] blur-[60px] absolute -top-40 right-0" />
            <img
              src={CeoImg}
              alt="CEO"
              className="absolute right-3 bottom-0 w-[269px] h-[269px] rounded-full object-cover shadow-[0_0_20px_#874182] border border-white"
            />
          </div>

        </div>

        {/* Awards Section */}
        {/* <div className="w-full max-w-[1236px] mt-16">
          <AwardsSection />
        </div> */}
      </section>

      {/* Our Team Section */}
      <section className="mt-10 w-full bg-[#1a0127e6] rounded-t-[65px] border-t-[3px] border-white py-2">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16 max-w-[1236px] mx-auto">
          {/* Left Image */}
          <div className="w-[300px] flex justify-center">
            <div className="[-webkit-text-stroke:1px_#874182] [font-family:'Secular_One',Helvetica] font-normal text-[32px] leading-[100px] whitespace-nowrap">
              <ImagesAssets.botThree />
            </div>
          </div>

          {/* Center Text */}
          <div className="flex-1 text-center lg:text-left  font-medium text-white text-2xl leading-[30px]">
            <h3 className="text-3xl font-bold mb-4">
              Our <span className="text-[#8B7190]">Team</span>
            </h3>
            <p>
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
        <div className="flex flex-col justify-around items-center">
          <div className="flex justify-around overflow-hidden w-full max-w-[1000px] mx-auto">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                width: `${(achievementImages.length / visibleCount) * 100}%`,
              }}
            >
              {achievementImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/3 mb-8 px-3 " // Added vertical spacing between rows
                >
                  <Card className="rounded-[25px] overflow-hidden shadow-xl border border-white/10 bg-transparent h-[400px] py-8 flex flex-col">
                    {/* Image */}
                    <div
                      className="w-full h-[190px] rounded-t-[25px] bg-cover bg-center flex-shrink-0"
                      style={{
                        backgroundImage: `url(${image.src})`,
                      }}
                    />

                    {/* Details */}
                    <CardContent className="p-4 py-8 bg-[#3C0945]/50 w-full flex-grow rounded-b-[10px] flex flex-col justify-start text-left text-white">
                      <h1 className="text-2xl font-bold mb-2">{image.name}</h1>
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <p className="text-white/80 text-sm">
                        {image.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-start gap-10 mt-12">
            <button
              onClick={handlePrev}
              className="hover:scale-110 transition-transform duration-300"
            >
              <ImagesAssets.leftButton />
            </button>

            <button
              onClick={handleNext}
              className="hover:scale-110 transition-transform duration-300"
            >
              <ImagesAssets.rightButton />
            </button>
          </div>
        </div>

      </section>

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
