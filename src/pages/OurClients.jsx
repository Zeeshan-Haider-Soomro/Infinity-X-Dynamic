import ContactForm from "../Components/ContactForm";
import ContactSocialIcons from "../Components/ContactSocialIcons";
import CustomHeading from "../Components/CustomHeading";
import FAQSection from "../Components/FAQSection";
import FeedbackSection from "../Components/FeedbackSection";

const clientLogos = [
  { id: 1, src: "src/assets/2ndbanner.avif", alt: "Client 1" },
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

const OurClients = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#440755] relative h-screen z-20">
        <div className="flex justify-center items-center h-[80vh]">
          <div>
            <h1 className="text-5xl md:text-8xl font-bold p-5 font-[poppins] text-white">
              OUR AMAZING
            </h1>
            <h1 className="text-5xl text-center md:text-8xl font-bold p-5 font-[poppins] text-[#B369A6]">
              CLIENTS
            </h1>
          </div>
        </div>
        <ContactSocialIcons />
      </section>

      {/* Gallery Section */}
      <section className="bg-[#EEDFFF] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
          {clientLogos.map((logo) => (
            <div key={logo.id} className="cursor-pointer hover:scale-105 transition-transform duration-300">
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-48 h-48 object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </section>
            {/* contact form section */}
      <section className="bg-[#320142]">
        <div>
           <ContactForm />
        </div>
        <div className="md:h-[700px] h-[1400px] px-4">
           <FAQSection />
        </div>
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

export default OurClients;
