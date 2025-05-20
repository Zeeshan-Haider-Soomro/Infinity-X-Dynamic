import AwardsSection from "../Components/AwardsSection";
import ContactForm from "../Components/ContactForm";
import ContactSocialIcons from "../Components/ContactSocialIcons";
import CustomHeading from "../Components/CustomHeading";
import FAQSection from "../Components/FAQSection";
import ImageSlider from "../Components/ImageSlider";
import TeamSection from "../Components/TeamSection";

const AboutUs = () => {
  return (
    <div>
      {/* hero section */}
      <section className="bg-[#440755] relative h-screen z-20">
        <div className="flex justify-center items-center h-[80vh]">
          <CustomHeading
            firstText="ABOUT"
            secondText="US"
            firstColor="#fff"
            secondColor="#B369A6"
            textSize="text-4xl md:text-8xl font-bold p-5 font-[poppins]"
            align="text-center"
          />
        </div>
        <ContactSocialIcons />
      </section>
      {/* ceo section */}
      <section className="bg-[#F2E6FF]">
        <div>
          <CustomHeading
            firstText="CEO'S"
            secondText="MESSAGE"
            firstColor="#5C0E6E"
            secondColor="#A95C9C"
            textSize="text-4xl md:text-7xl font-medium p-10 font-[poppins]"
            align="text-center"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-6 md:p-12">
          {/* Left Side - Text */}
          <div className="w-full md:w-1/2 text-[#320142] space-y-4">
            <p className="text-lg leading-relaxed">
              “At Infinity X Dynamics, we believe that creativity backed by
              technology has the power to transform brands and reshape
              industries. From our earliest projects to our latest digital
              breakthroughs, we’ve built IXD around one mission — to turn bold
              ideas into real impact.
              <br />
              <br />
              We don’t just develop apps or create visuals — we craft
              experiences that connect, inspire, and drive results. Every team
              member, every client, and every campaign is part of our vision to
              lead the next wave of digital innovation across Pakistan and
              beyond.
              <br />
              <br />
              Thank you for being a part of our journey. The future is dynamic —
              and we’re just getting started.”
            </p>
            <p className="font-semibold text-[#9C448D]">
              Founder & CEO - Jahanzaib Akram
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/src/assets/ceo.avif"
              alt="CEO"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
        <div>
          <div>
            <CustomHeading
              firstText="What"
              secondText="We Do"
              firstColor="#5C0E6E"
              secondColor="#A95C9C"
              textSize="text-4xl md:text-7xl font-medium p-10 font-[poppins]"
              align="text-center"
            />
          </div>
          <p className="text-center text-[#5C0E6E] text-[20px] md:px-30 px-7">Infinity X Dynamics (IXD) is a creative technology studio that blends storytelling with innovation. We specialize in VFX, CGI, app and game development, and digital marketing — helping brands grow, engage, and inspire.</p>
          <p className="text-center text-[#5C0E6E] text-[25px] md:px-30 p-7">Over the years, our bold ideas and future-ready solutions have empowered startups, brands, and enterprise clients to stand out in the digital space.</p>
        </div>
        <div>
          <AwardsSection />
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
        {/* amazing clients section */}
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
      {/* our team section */}
      <section className="bg-[#320142]">
        <TeamSection/>
      </section>
    </div>
  );
};

export default AboutUs;
