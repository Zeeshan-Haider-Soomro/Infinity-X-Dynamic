import { useState } from "react";
import BannerSectionForServices from "../../Components/BannerSectionForServices";
import ContactSocialIcons from "../../Components/ContactSocialIcons";
import CustomHeading from "../../Components/CustomHeading";
import TalkModal from "../../Components/TalkModal";

const TwoDAnimation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Add this line
  return (
    <div>
      {/* hero section */}
      <section className="bg-[#440755] relative h-screen z-20">
        <div className="flex justify-center items-center h-[80vh]">
          <CustomHeading
            firstText="2D"
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
      </section>
      {/*  */}
      <TalkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default TwoDAnimation;
