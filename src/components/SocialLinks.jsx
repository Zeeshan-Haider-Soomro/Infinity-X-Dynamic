import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-5 justify-center items-center  dark:text-white">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/Infinityxdynamics/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition-colors duration-200"
      >
        <FaFacebookF size={20} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/infinityxdynamics/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition-colors duration-200"
      >
        <FaInstagram size={20} />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-sky-400 transition-colors duration-200"
      >
        <FaTwitter size={20} />
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-600 transition-colors duration-200"
      >
        <FaYoutube size={20} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-700 transition-colors duration-200"
      >
        <FaLinkedinIn size={20} />
      </a>

      {/* TikTok */}
      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-black transition-colors duration-200"
      >
        <FaTiktok size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
