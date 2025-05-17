import { X } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import emailjs from '@emailjs/browser';

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
      <div className="bg-[#EEDFFF] rounded-xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden relative shadow-xl">
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
            src="https://i.ibb.co/2NwcKgh/vfx-image.png"
            alt="VFX"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 space-y-4 text-[#320142]">
          <h3 className="text-sm font-semibold text-[#9C448D] uppercase">Limited Time Offer</h3>
          <h2 className="text-2xl font-bold leading-tight text-[#320142]">
            Exclusive Video <br /> Animations Awaits
          </h2>

          <form ref={formRef} className="space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder="Enter Name"
              required
              disabled={isSending}
              className="w-full p-3 rounded bg-white text-[#320142] placeholder-[#9C448D] border border-[#9C448D] focus:outline-[#FB64B6]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter Email"
              required
              disabled={isSending}
              className="w-full p-3 rounded bg-white text-[#320142] placeholder-[#9C448D] border border-[#9C448D]"
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Enter Phone"
              required
              disabled={isSending}
              className="w-full p-3 rounded bg-white text-[#320142] placeholder-[#9C448D] border border-[#9C448D]"
            />
            <textarea
              placeholder="Tell us about your project"
              required
              name="message"
              disabled={isSending}
              className="w-full p-3 rounded bg-white text-[#320142] placeholder-[#9C448D] border border-[#9C448D] h-24"
            />
            <button
              type="submit"
              disabled={isSending}
              className="w-full flex items-center justify-center gap-2 bg-[#FB64B6] cursor-pointer text-white font-semibold py-3 rounded hover:bg-[#9C448D] transition disabled:opacity-60 disabled:cursor-not-allowed"
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
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TalkModal;
