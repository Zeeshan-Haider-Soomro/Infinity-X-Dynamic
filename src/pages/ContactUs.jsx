import AchievementGallery from "../Components/AchievementGallery"
import ContactForm from "../Components/ContactForm"
import ContactSocialIcons from "../Components/ContactSocialIcons"
import CustomHeading from "../Components/CustomHeading"
import FAQSection from "../Components/FAQSection"
import FeedbackSection from "../Components/FeedbackSection"
import ImageSlider from "../Components/ImageSlider"
import ScrollToTopButton from "../Components/ScrollToTopButton"

const ContactUs = () => {
  return (
    <div>
            {/* Hero Section */}
      <section className="bg-[#440755] relative h-screen z-20">
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
        {/* <div className="flex justify-center items-center h-[80vh]">
          <div>
            <h1 className="text-4xl text-center md:text-6xl font-bold p-5 font-[poppins] text-white">
              Hi There!
            </h1>
            <h1 className="text-4xl text-center md:text-7xl font-bold p-5 font-[poppins] text-[#B369A6]">
              <span className="text-white">Ready to</span><span className="text-[#D977C8]"> Bring Your</span>
            </h1>
               <h1 className="text-4xl text-center md:text-7xl font-bold p-5 font-[poppins] text-white">
              Story to life?
            </h1>
          </div>
        </div> */}
        <ContactSocialIcons />
      </section>
      {/* have a project section */}
      <section className="bg-[#F2E6FF]">
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
      </section>
            {/* our achievement section */}
      <section className="bg-[#320142]">
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
      </section>
      {/*  */}
      <section className="bg-[#F2E6FF]">
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
          <section className="bg-[#320142]">
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
      {/* our location  */}
 <section className="bg-[#320142] text-white py-12 px-6 lg:px-24">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Text Section */}
        <div data-aos="fade-right" className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Our Location</h2>
          <p className="text-lg mb-6">
            Visit us at Infinity X Dynamics for innovative marketing solutions and
            business growth strategies tailored to your needs.
          </p>
          <p className="font-semibold">Address</p>
          <p className="mb-4">Modal Colony, Karachi, Sindh, Pakistan</p>
          <p className="font-semibold">Hours</p>
          <p>9 AM - 5 PM</p>
        </div>

        {/* Map Embed */}
        <div data-aos="fade-left" className="lg:w-1/2 w-full">
          <iframe
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
          <div className="mt-4 flex gap-4">
            <a
              href="https://www.google.com/maps/place/Modal+Colony,+Karachi,+Sindh,+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#320142] font-semibold py-2 px-4 rounded hover:bg-purple-100 transition"
            >
              View Larger Map
            </a>
            <a
              href="https://www.google.com/maps/dir//Modal+Colony,+Karachi,+Sindh,+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#320142] font-semibold py-2 px-4 rounded hover:bg-purple-100 transition"
            >
              Directions
            </a>
          </div>
        </div>
      </div>
    </section>
        <ScrollToTopButton/>
    </div>
  )
}

export default ContactUs