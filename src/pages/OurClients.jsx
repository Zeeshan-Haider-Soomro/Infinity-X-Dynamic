import { useState } from "react";
import ContactForm from "../Components/ContactForm";
import ContactSocialIcons from "../Components/ContactSocialIcons";
import CustomHeading from "../Components/CustomHeading";
import FAQSection from "../Components/FAQSection";
import FeedbackSection from "../Components/FeedbackSection";

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

          {/* Modal */}
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
