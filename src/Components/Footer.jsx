import { Link } from "react-router";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFilm,
  FaVideo,
  FaPhotoVideo,
  FaBolt,
  FaMagic,
  FaPenNib,
  FaNewspaper,
  FaLock,
  FaFileContract,
  FaEnvelopeOpenText,
  FaInfoCircle,
  FaBriefcase,
  FaServicestack,
  FaUsers,
  FaPhoneAlt,
} from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="bg-white text-[#A95C9C] px-2 pb-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 p-10 md:p-20 flex-wrap">

        {/* 📞 Contact Us */}
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
          <p className="mb-2 flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
            <FaPhoneAlt className="mr-2 text-[#5C0E6E]" /> +92 321 8456611
          </p>
          <p className="mb-2 flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
            <FaEnvelope className="mr-2 text-[#5C0E6E]" /> contact@infinityxdynamics.com
          </p>
          <p className="mb-2 flex items-start hover:text-[#5C0E6E] transition cursor-pointer">
            <FaMapMarkerAlt className="mr-2 mt-1 text-[#5C0E6E]" />
            <span>Infinity X Dynamics<br />Head Office - Karachi, Pakistan</span>
          </p>
        </div>

        {/* 🎨 Our Services */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-lg font-semibold mb-4">OUR SERVICES</h3>
          <ul className="space-y-2">
            <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
              <FaFilm className="mr-2 text-[#5C0E6E]" /> 2D Animation
            </li>
            <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
              <CgWebsite  className="mr-2 text-[#5C0E6E]" /> Web Development
            </li>
            <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
              <FaVideo className="mr-2 text-[#5C0E6E]" /> 3D Animation
            </li>
            <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
              <FaPhotoVideo className="mr-2 text-[#5C0E6E]" /> Motion Graphic
            </li>
            <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
              <FaBolt className="mr-2 text-[#5C0E6E]" /> Logo Animation
            </li>
            <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
              <FaMagic className="mr-2 text-[#5C0E6E]" /> CGI / VFX
            </li>
          </ul>
        </div>

        {/* 🔗 Quick Links */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2">
            <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
              <FaPenNib className="mr-2 text-[#5C0E6E]" /> Testimonials
            </li>
            <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
              <FaNewspaper className="mr-2 text-[#5C0E6E]" /> Latest News
            </li>
            <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
              <FaLock className="mr-2 text-[#5C0E6E]" /> Privacy Policy
            </li>
            <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
              <FaFileContract className="mr-2 text-[#5C0E6E]" /> Terms & Conditions
            </li>
            <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
              <FaEnvelopeOpenText className="mr-2 text-[#5C0E6E]" /> Contact Us
            </li>
          </ul>
        </div>

        {/* 📄 Pages with routing */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-lg font-semibold mb-4">PAGES</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about-us" className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
                <FaInfoCircle className="mr-2 text-[#5C0E6E]" /> About Us
              </Link>
            </li>
            <li>
              <Link to="/our-work" className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
                <FaBriefcase className="mr-2 text-[#5C0E6E]" /> Our Work
              </Link>
            </li>
            <li>
              <Link to="/our-services" className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
                <FaServicestack className="mr-2 text-[#5C0E6E]" /> Our Services
              </Link>
            </li>
            <li>
              <Link to="/our-clients" className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
                <FaUsers className="mr-2 text-[#5C0E6E]" /> Our Clients
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
                <FaEnvelopeOpenText className="mr-2 text-[#5C0E6E]" /> Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm border-t border-[#A95C9C] pt-4 pb-6">
        © {new Date().getFullYear()} Infinity X Dynamics. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
