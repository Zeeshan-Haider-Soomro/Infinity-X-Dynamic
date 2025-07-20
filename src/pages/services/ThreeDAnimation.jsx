import { useState } from "react";
import BannerSectionForServices from "@/temp/components/BannerSectionForServices";
import ContactSocialIcons from "@/temp/components/ContactSocialIcons";
import CustomHeading from "@/temp/components/CustomHeading";
import TalkModal from "@/temp/components/TalkModal";
import VideoGallery from "@/temp/components/VideoGallery";
import AboutCategory from "@/temp/components/AboutCategory";
import AchievementGallery from "@/temp/components/AchievementGallery";
import FAQSection from "@/temp/components/FAQSection";
import ContactForm from "@/temp/components/ContactForm";
import ImageSlider from "@/temp/components/ImageSlider";
import FeedbackSection from "@/temp/components/FeedbackSection";

// videogallery component items

const videos2D = [
  {
    title: "2D Product Demo",
    thumbnail: "/ThumbnailImage.png",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "2D Model Walkthrough",
    thumbnail: "/ThumbnailImage.png",
    src: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    title: "2D Model Walkthrough",
    thumbnail: "/ThumbnailImage.png",
    src: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    title: "2D Model Walkthrough",
    thumbnail: "https://via.placeholder.com/300x200?text=3D+2",
    src: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    title: "2D Model Walkthrough",
    thumbnail: "https://via.placeholder.com/300x200?text=3D+2",
    src: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    title: "2D Model Walkthrough",
    thumbnail: "https://via.placeholder.com/300x200?text=3D+2",
    src: "https://www.w3schools.com/html/movie.mp4",
  },
];

// about category items fro dynamic component

const sectionHeading = (
  <>
    BENEFITS OF <br />
    3D VIDEO <span className="text-blue-400">ANIMATIONS</span>
  </>
);

const sectionDescription =
  "With our 2D animations, you can engage customers with compelling visuals, enjoy faster loading time with less load on website performance making it easier for your clients and customers to learn about your services and products.";

const cardData = [
  {
    image: '/images/engaging-storytelling.png',
    title: 'ENGAGING STORYTELLING',
    description:
      '2D animations breathe life into narratives, making them more captivating and memorable, fostering a deeper connection with the audience.',
  },
  {
    image: '/images/cost-effective.png',
    title: 'COST-EFFECTIVE PRODUCTION',
    description:
      'Compared to 3D animations, 2D animation production is often more affordable, making it an excellent choice for projects with budget constraints.',
  },
  {
    image: '/images/fast-loading.png',
    title: 'FAST LOADING TIMES',
    description:
      '2D animations are lightweight, ensuring quick loading on websites and applications, contributing to a seamless user experience.',
  },
  {
    image: '/images/versatile-style.png',
    title: 'VERSATILITY IN STYLE',
    description:
      'From whimsical and playful to sleek and professional, 2D animation offers a versatile range of styles, allowing for customization to suit various brands.',
  },
];


const ThreeDAnimation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Add this line
  return (
    <div>
      {/* hero section */}
      <section className="bg-[#440755] relative h-screen z-20">
        <div className="flex justify-center items-center h-[80vh]">
          <CustomHeading
            firstText="3D"
            secondText="ANIMATION"
            firstColor="#fff"
            secondColor="#B369A6"
            textSize="text-4xl md:text-8xl font-medium p-5 font-[poppins]"
            align="text-center"
          />
        </div>
        <ContactSocialIcons />
      </section>
      {/* Banner Section */}
      <section className="bg-[#EEDFFF]">
        <BannerSectionForServices
          imageSrc="/ceo.avif"
          description="Welcome to our vibrant world of 2D animations! Immerse yourself in the captivating realm of animated stories, advertisements, and presentations. Harnessing the power of 2D animation brings your ideas to life with charm and versatility. Enjoy the benefits of enhanced communication, as visual storytelling stimulates engagement and ensures memorable content delivery."
          buttonText="Start Now"
          onButtonClick={() => setIsModalOpen(true)}
        />
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
            secondText="3D Projects"
            firstColor="#5C0E6E"
            secondColor="#A95C9C"
            textSize="text-4xl md:text-6xl"
            align="text-center"
          />
        </div>
        <div className="pt-1">
          <VideoGallery videos={videos2D} />
        </div>
      </section>
      {/* About Category */}

      <section className="bg-[#440755]">
            <AboutCategory
        sectionHeading={sectionHeading}
        sectionDescription={sectionDescription}
        cards={cardData}
      />
      </section>
      <section className="bg-[#EEDFFF]">
             <div className="md:p-10 pt-10">
          <CustomHeading
            firstText="OUR"
            secondText="ACHIEVEMENTS"
               firstColor="#5C0E6E"
            secondColor="#A95C9C"
            textSize="text-4xl md:text-6xl font-bold p-5"
            align="text-center"
          />
        </div>
        <AchievementGallery/>
      </section>
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
       <section className="bg-[#F2E6FF]">
          <h1 className="text-center text-4xl font-bold text-[#5C0E6E] pt-5">Our</h1>
          <CustomHeading
            firstText="Amazing"
            secondText="Clients"
            firstColor="#5C0E6E"
            secondColor="#D977C8"
            textSize="text-4xl md:text-6xl font-bold"
            align="text-center"
          />
          <ImageSlider />
        </section>
              <section className="bg-[#320142]">
        <div className="md:p-14 p-8">
          <CustomHeading
            firstText="We Love"
            secondText="Feedback"
             firstColor="white"
          secondColor="#D977C8"
            textSize="text-4xl md:text-6xl font-bold"
            align="text-center"
          />
          <p className="text-[#F2E6FF] text-center md:text-2xl text-[16px] md:px-10 md:p-4 py-3 font-medium">
            Share your thoughts with us, and let's turn your feedback into the
            masterpiece that shapes our journey.
          </p>
        </div>
        <div>
          <FeedbackSection />
        </div>
      </section>

      {/* Talk modal render here */}
      <TalkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ThreeDAnimation;
