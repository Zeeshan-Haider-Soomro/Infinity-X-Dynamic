import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        'service_tpjof08',     // Replace with your Service ID
        'template_zl2utgt',    // Replace with your Template ID
        form.current,
        'poKViSTe66jSxtizY'    // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setIsLoading(false);
          form.current.reset();
          setTimeout(() => setIsSent(false), 4000); // Auto-hide success message
        },
        (error) => {
          console.error(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <section className="py-12 md:px-4">
      <div className="max-w-5xl mx-auto rounded-2xl flex flex-col md:flex-row items-center p-8 gap-8">
        {/* Left Side Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-white">Hi</span>{' '}
            <span className="text-[#A95C9C]">There!</span>
          </h2>
          <p className="text-4xl font-bold text-white">
            Ready to bring your <br />{' '}
            <span className="text-[#A95C9C]">story to life?</span>
          </p>
        </div>

        {/* Right Side Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="md:w-1/2 bg-white p-5 rounded-2xl w-full space-y-4"
        >
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Your First Name: <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="first_name"
              required
              placeholder="Enter Your First Name"
              className="w-full border-[1.5px] border-gray-400 rounded-md px-4 py-2 focus:outline-none hover:border-[#b44ac0] focus:ring-2 focus:ring-[#b44ac0]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Your Last Name: <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="last_name"
              required
              placeholder="Enter Your Last Name"
              className="w-full border-[1.5px] border-gray-400 rounded-md px-4 py-2 focus:outline-none hover:border-[#b44ac0] focus:ring-2 focus:ring-[#b44ac0]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Your Email Address: <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter Your Email Address"
              className="w-full border-[1.5px] border-gray-400 rounded-md px-4 py-2 focus:outline-none hover:border-[#b44ac0] focus:ring-2 focus:ring-[#b44ac0]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Contact Number: <span className="text-red-700">*</span>
            </label>
            <input
              type="text"
              name="user_phone"
              required
              placeholder="Contact Number"
              className="w-full border-[1.5px] border-gray-400 rounded-md px-4 py-2 focus:outline-none hover:border-[#b44ac0] focus:ring-2 focus:ring-[#b44ac0]"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Your Message: <span className="text-red-700">*</span>
            </label>
            <textarea
              name="message"
              required
              rows="3"
              placeholder="Type your message here"
              className="w-full border-[1.5px] border-gray-400 rounded-md px-4 py-2 focus:outline-none hover:border-[#b44ac0] focus:ring-2 focus:ring-[#b44ac0]"
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              disabled={isLoading}
              className={`${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#A95C9C] hover:bg-[#9C448D] cursor-pointer'
              } text-white font-semibold py-2 px-6 rounded-full transition flex items-center justify-center gap-2`}
            >
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
              {isLoading ? 'Sending...' : 'Submit Your Request'}
            </button>
          </div>

          {isSent && (
            <p className="text-green-600 text-sm text-center mt-2">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
