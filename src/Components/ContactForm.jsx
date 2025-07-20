import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import CustomButton from './CustomButton';
import { ImagesAssets } from '@/utils/ImagesAssets';

const ContactForm = ({
  heading1,
  heading2,
  highlightTextLine1,
  highlightTextLine2,
  heading1Color = "text-white",
  heading2Color = "text-[#A95C9C]",
  line1Color = "text-white",
  line2Color = "text-[#A95C9C]",
  headingSize = "text-4xl",
  subheadingSize = "text-2xl",
  highlightSize = "text-4xl",
  description,
  descriptionClass,
  noBg = false,
  noBorder = false,
}) => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        'service_tpjof08',
        'template_zl2utgt',
        form.current,
        'poKViSTe66jSxtizY'
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setIsSent(true);
          setIsLoading(false);
          form.current.reset();
          setTimeout(() => setIsSent(false), 4000);
        },
        (error) => {
          console.error("Email send error:", error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <section
      className={`py-16 px-4 rounded-t-[65px] 
    ${noBg ? '' : 'bg-[#1a0127]'} 
    ${noBorder ? '' : 'border-t-4 border-[#A95C9C]'}`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div data-aos=" md:fade-right" className="space-y-6 font-secular text-center md:text-left">
          <h2 className={`${headingSize} font-bold`}>
            <span className={`${heading1Color}`}>{heading1}</span>{" "}
            <span className={`${heading2Color}`}>{heading2}</span>
          </h2>
          <p className={`${descriptionClass} !font-normal !text-[Quicksand]`}>{description}</p>
          <p className={`${highlightSize} font-bold`}>
            <span className={`${line1Color}`}>{highlightTextLine1}</span>
            <br />
            <span className={`${line2Color}`}>{highlightTextLine2}</span>
          </p>

        </div>

        {/* RIGHT FORM */}
        <form
          data-aos=" md:fade-left"
          ref={form}
          onSubmit={sendEmail}
          className="w-full  bg-[#A95C9C]/50 backdrop-blur-md rounded-[25px] p-8 text-white space-y-6"
        >
          {/* Input Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#FFF]">First Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="first_name"
                required
                placeholder="Enter your first name"
                className="w-full px-4 py-3 rounded-md bg-[#8B7190] text-white border border-[#fff]/50 focus:ring-2 focus:ring-[#A95C9C] placeholder:text-white/50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#FFF]">Last Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="last_name"
                required
                placeholder="Enter your last name"
                className="w-full px-4 py-3 rounded-md bg-[#8B7190] text-white border border-[#fff]/50 focus:ring-2 focus:ring-[#A95C9C] placeholder:text-white/50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#FFF]">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="example@domain.com"
                className="w-full px-4 py-3 rounded-md bg-[#8B7190] text-white border border-[#fff]/50 focus:ring-2 focus:ring-[#A95C9C] placeholder:text-white/50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#FFF]">Phone <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="user_phone"
                required
                placeholder="+92 300 1234567"
                className="w-full px-4 py-3 rounded-md bg-[#8B7190] text-white border border-[#fff]/50 focus:ring-2 focus:ring-[#A95C9C] placeholder:text-white/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-[#FFF]">Message <span className="text-red-500">*</span></label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-md bg-[#8B7190] text-white border border-[#fff]/50 focus:ring-2 focus:ring-[#A95C9C] placeholder:text-white/50"
            ></textarea>
          </div>

          {/* Success Message */}
          {isSent && (
            <p className="text-green-400 text-sm text-center">
              ✅ Your message has been sent successfully!
            </p>
          )}

          <div className="flex justify-center mt-8">

            <CustomButton
              type="submit"
              className={isLoading ? "cursor-not-allowed opacity-50 px-8" : ""}
              disabled={isLoading}
            >
              <div className="flex items-center justify-center gap-1">
                {isLoading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                )}
                <span className="flex items-center ">
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      Submit Your Request
                      <ImagesAssets.buttonArrow />
                    </>
                  )}
                </span>
              </div>
            </CustomButton>
          </div>


        </form>
      </div>
    </section>
  );
};

export default ContactForm;
