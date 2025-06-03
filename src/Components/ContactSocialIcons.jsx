// components/ContactSocialIcons.jsx
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";

const ContactSocialIcons = () => {
  return (
    <>
      {/* Contact Icons – Bottom Left */}
      <div data-aos="fade-right" className="absolute hidden md:block left-12 -bottom-5 transform -translate-y-1/2 flex flex-col space-y-3 text-2xl z-50">
        <div className="flex space-x-2 items-center">
          <div className="border border-white rounded-full p-2">
            <a
              href="mailto:info@infinityXdynamic.com"
              className="text-white hover:text-purple-300"
            >
              <CiMail />
            </a>
          </div>
          <p className="text-white text-sm">info@infinityXdynamic.com</p>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="border border-white rounded-full p-2">
            <a
              href="tel:+923128379812"
              className="text-white hover:text-purple-300"
            >
              <IoIosCall />
            </a>
          </div>
          <p className="text-white text-sm">+92 312 8379812</p>
        </div>
      </div>

      {/* Social Media Icons – Right Side */}
      <div data-aos="fade-left" className="absolute hidden md:block top-1/4 right-12 transform -translate-y-1/2 flex flex-col space-y-4 text-2xl z-50">
        <div className="border border-white rounded-full p-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="border border-white rounded-full p-2">
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="border border-white rounded-full p-2">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="border border-white rounded-full p-2">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactSocialIcons;
