import ContactForm from "../Components/ContactForm"
import ContactSocialIcons from "../Components/ContactSocialIcons"

const ContactUs = () => {
  return (
    <div>
            {/* Hero Section */}
      <section className="bg-[#440755] relative h-screen z-20">
        <div className="flex justify-center items-center h-[80vh]">
          <div>
            <h1 className="text-4xl text-center md:text-6xl font-bold p-5 font-[poppins] text-white">
              Hi There!
            </h1>
            <h1 className="text-4xl text-center md:text-7xl font-bold p-5 font-[poppins] text-[#B369A6]">
              <span>Ready to</span><span className="text-white"> Bring Your</span>
            </h1>
               <h1 className="text-4xl text-center md:text-7xl font-bold p-5 font-[poppins] text-white">
              Story to life?
            </h1>
          </div>
        </div>
        <ContactSocialIcons />
      </section>
      {/* have a project section */}
      <section className="bg-[#F2E6FF]">
        <div>
<ContactForm
  heading1="HAVE A"
  heading2="Project"
  highlightTextLine1="Let's build something"
  highlightTextLine2="amazing together"
  heading1Color="text-gray-900"
  heading2Color="text-pink-600"
  line1Color="text-black"
  line2Color="text-pink-700"
  headingSize="text-4xl"
  subheadingSize="text-4xl"
  highlightSize="text-5xl"
/>

        </div>
      </section>
    </div>
  )
}

export default ContactUs