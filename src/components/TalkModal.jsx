import { X } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import emailjs from '@emailjs/browser';
import { ImagesAssets } from "@/utils/ImagesAssets";
import CustomButton from "./CustomButton";

const TalkModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('service_tpjof08', 'template_zl2utgt', formRef.current, 'poKViSTe66jSxtizY')
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          onClose(); // Close modal
          navigate("/thank-you"); // Navigate to thank you page
        },
        (error) => {
          console.error(error.text);
          setIsSending(false);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-[#FFF] rounded-xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden relative shadow-xl md:h-[500px]">
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 text-white bg-[#320142] hover:bg-[#9C448D] rounded-full w-8 h-8 flex items-center justify-center transition"
          disabled={isSending}
        >
          <X size={20} />
        </button>

        {/* Left Side Image – Hidden on Mobile */}
        <div className="hidden md:block w-1/2 bg-[#320142]">
          <img
            src={ImagesAssets.formImage}
            alt="VFX"
            className="w-full h-full object-cover"

          />
        </div>

        <div className="w-full md:w-1/2 p-6 space-y-4 text-[#320142]">
          <h3 className="text-sm font-semibold text-[#4B1B57] uppercase font-secular">Limited Time Offer</h3>
          <h2 className="text-2xl font-bold leading-tight text-[#000] font-secular">
            Exclusive Video <br /> Animations Awaits
          </h2>

          <form ref={formRef} className="space-y-3" onSubmit={handleSubmit}>
            <label className="text-sm font-semibold text-[#3C0945]">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter Name"
              required
              disabled={isSending}
              className="w-full p-2 rounded-[8px] bg-white text-[#320142] placeholder-[#9C448D] border border-[#8B7190] focus:outline-[#FB64B6]"
            />
            <label className="text-sm font-semibold text-[#3C0945]">
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter Email"
              required
              disabled={isSending}
              className="w-full p-2 rounded-[8px] bg-white text-[#320142] placeholder-[#9C448D] border border-[#8B7190]"
            />
            {/* <input
              type="tel"
              name="user_phone"
              placeholder="Enter Phone"
              required
              disabled={isSending}
              className="w-full p-3 rounded bg-white text-[#320142] placeholder-[#9C448D] border border-[#9C448D]"
            /> */}

            <label className="text-sm font-semibold text-[#3C0945]">
              Tell Us About Your Project
            </label>
            <textarea
              placeholder="Tell us about your project"
              required
              name="message"
              disabled={isSending}
              className="w-full p-3 rounded-[8px] bg-white text-[#320142] placeholder-[#9C448D] border border-[#8B7190] h-28"
            />
            <CustomButton
              type="submit"
              disabled={isSending}
              className
            >
              {isSending && (
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
              {isSending ? "Sending..." : "SIGNUP NOW"}
            </CustomButton>

          </form>
        </div>
      </div>
    </div>
  );
};

export default TalkModal;
