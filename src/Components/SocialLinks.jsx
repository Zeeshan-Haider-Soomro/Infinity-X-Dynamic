import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok
} from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-5 justify-center items-center text-black">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
        <FaFacebookF size={20} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
        <FaInstagram size={20} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
        <FaTwitter size={20} />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
        <FaYoutube size={20} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
        <FaLinkedinIn size={20} />
      </a>
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
        <FaTiktok size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
