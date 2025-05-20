import ContactSocialIcons from "../Components/ContactSocialIcons"

const ContactUs = () => {
  return (
    <div>
            {/* Hero Section */}
      <section className="bg-[#440755] relative h-screen z-20">
        <div className="flex justify-center items-center h-[80vh]">
          <div>
            <h1 className="text-5xl text-center md:text-7xl font-bold p-5 font-[poppins] text-white">
              Hi There!
            </h1>
            <h1 className="text-5xl text-center md:text-8xl font-bold p-5 font-[poppins] text-[#B369A6]">
              <span>Ready to</span><span className="text-white"> Bring Your</span>
            </h1>
               <h1 className="text-5xl text-center md:text-8xl font-bold p-5 font-[poppins] text-white">
              Story to life?
            </h1>
          </div>
        </div>
        <ContactSocialIcons />
      </section>
    </div>
  )
}

export default ContactUs