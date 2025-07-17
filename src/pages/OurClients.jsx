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


const OurClients = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? clientLogos.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === clientLogos.length - 1 ? 0 : prev + 1));
  return (
    <div>
      {/* Hero Section */}
      <section className=" w-full md:px-6 py-20 md:py-16 relative md:min-h-screen z-20 pb-6">
        <div className="absolute inset-0 z-0">
          <ImagesAssets.backgroundWave className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-center gap-10 p-6">
          {/* Top Row: Card + Image */}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10">
            <div data-aos="fade-right sm:fade-up" className="w-full lg:w-1/2">
              <CustomCardModal title="Our Clients" sections={sections} />
            </div>
            <div data-aos="fade-left" className="relative w-full lg:w-1/2 hidden lg:block">
              <ImagesAssets.botOne />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 w-full bg-[#1a0127e6] rounded-t-[65px] border-t-[3px] border-white py-8 px-4 overflow-hidden">
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
            <div className="text-[32px] [-webkit-text-stroke:1px_#874182] hidden md:block">
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
                    <CardContent className="p-4 bg-[#3C0945]/50 text-white ">
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
        <div className="md:h-[700px] h-[1400px] px-4">
          {/* <div>
            <CustomHeading
              firstText="Frequently Asked"
              secondText="Questions"
              firstColor="#fff"
              secondColor="#D977C8"
              textSize="text-4xl md:text-6xl font-bold p-5"
              align="text-center"
            />
          </div> */}
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
