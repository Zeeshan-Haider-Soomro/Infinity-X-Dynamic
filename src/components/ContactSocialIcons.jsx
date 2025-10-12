// components/ContactSocialIcons.jsx
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";

const ContactSocialIcons = () => {
  return (
    <>
      {/* Contact Icons – Bottom Left */}
      <div data-aos="fade-right" className="absolute hidden md:block left-12 transform -translate-y-1/2 flex-col space-y-3 text-2xl z-50">
        <div className="flex space-x-2 items-center">
          <div className="border border-white rounded-full p-2">
            <a
              href="https://mail.google.com/mail/?view=cm&to=ceo@infinityxdynamics.com?subject=Inquiry&body=Hello, I would like to know more about your services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300"
            >
              <CiMail size={24} />
            </a>

          </div>
          <p className="text-white text-sm">ceo@infinityxdynamics.com</p>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="border border-white rounded-full p-2">
            <a
              href="https://wa.me/923053069747"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300"
            >
              <IoIosCall size={24} />
            </a>
          </div>
          <p className="text-white text-sm">+92 312 8379812</p>
        </div>
      </div>

      {/* Social Media Icons – Right Side */}
      <div data-aos="fade-left" className="absolute hidden md:block top-1/5 right-12 transform -translate-y-1/2  flex-col space-y-4 text-2xl z-50">
        <div className="border border-white rounded-full p-2">
          <a
            href="https://www.facebook.com/Infinityxdynamics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="border border-white rounded-full p-2">
          <a
            href="https://www.twitter.com/Infinityxdynamics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300"
          >
            <FaTwitter />
          </a>
        </div>
        <div className="border border-white rounded-full p-2">
          <a
            href="https://www.linkedin.com/InfinityXDynamics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="border border-white rounded-full p-2">
          <a
            href="https://www.instagram.com/Infinityxdynamics"
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
