import { ImagesAssets } from "@/utils/ImagesAssets"
import AchievementGallery from "../Components/AchievementGallery"
import ContactForm from "../Components/ContactForm"
import ContactSocialIcons from "../Components/ContactSocialIcons"
import CustomHeading from "../Components/CustomHeading"
import FAQSection from "../Components/FAQSection"
import FeedbackSection from "../Components/FeedbackSection"
import ImageSlider from "../Components/ImageSlider"
import ScrollToTopButton from "../Components/ScrollToTopButton"
import CustomCardModal from "@/Components/CustomCardModal"
import { Card, CardContent } from "@/Components/ui/card"
import { AchievementsSection } from "@/Components/AchievementsSection"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/Components/ui/carousel"
import CustomButton from "@/Components/CustomButton"

const sections = [
  {
    heading: "Contact Us",
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

      {/* have a project section */}

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
      {/*  */}
      <section className="">
        <div className="md:h-[700px] h-[1400px] py-10 px-4">
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
            <h2 className="text-4xl font-bold mb-4"><span className="text-[#8B7190]">Our</span> Location</h2>
            <p className="text-lg mb-6">
              Share your thoughts with us, and let's turn your feedback into the masterpiece that shapes our journey.
            </p>
            <p className="font-semibold text-3xl text-[#8B7190]">Address</p>
            <p className="mb-4 font-semibold text-3xl">Modal Colony, Karachi, Sindh, Pakistan</p>
            <p className="font-semibold text-3xl text-[#8B7190]">Hours</p>
            <p className="font-semibold text-3xl">9 AM - 5 PM</p>
          </div>


        </div>
      </section>
      <ScrollToTopButton />
    </div>
  )
}

export default ContactUs