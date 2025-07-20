import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ImagesAssets } from "@/utils/ImagesAssets";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const serviceLinks = [
    "2D Animation",
    "Web Development",
    "3D Animation",
    "Motion Graphic",
    "Logo Animation",
    "CGI / VFX",
  ];

  const quickLinks = [
    "Testimonials",
    "Latest News",
    "Privacy Policy",
    "Terms & Conditions",
    "Contact Us",
  ];

  const pageLinks = [
    { text: "About Us", url: "https://infinityxdynamics.com/about-us" },
    { text: "Our Work", url: "https://infinityxdynamics.com/our-work" },
    { text: "Our Services", url: "https://infinityxdynamics.com/our-services" },
    { text: "Our Clients", url: "https://infinityxdynamics.com/our-clients" },
    { text: "Contact Us", url: "https://infinityxdynamics.com/contact-us" },
  ];

  const socialLinks = [
    { icon: <FaTwitter />, alt: "Twitter", to: "/twitter" },
    { icon: <FaInstagram />, alt: "Instagram", to: "/instagram" },
    { icon: <FaLinkedin />, alt: "LinkedIn", to: "/linkedin" },
    { icon: <FaFacebook />, alt: "Facebook", to: "/facebook" },
  ];

  return (
    <footer className="w-full">
      <Card className="w-full bg-[#1a0127] opacity-90 border-0 rounded-none">
        <CardContent className="p-0">
          <div className="container mx-auto px-4 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(5,minmax(0,1fr))] gap-8 py-10">

              {/* Logo Section */}
              <div className="min-w-[200px] pr-4 flex flex-col">
                <div className="relative sm:w-[160px] sm:h-[160px] flex items-start">
                  <div className="sm:w-[150px] sm:h-[150px] bg-white rounded-full blur-[100px] absolute top-0 left-5" />
                  <ImagesAssets.footerLogo />
                </div>
              </div>

              {/* OUR SERVICES */}
              <div className="min-w-[200px] flex flex-col">
                <h3 className="text-white font-bold mb-4">OUR SERVICES</h3>
                <ul className="space-y-1">
                  {serviceLinks.map((service, idx) => (
                    <li key={`service-${idx}`} className="text-white leading-[28px]">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* QUICK LINKS */}
              <div className="min-w-[200px] flex flex-col">
                <h3 className="text-white font-bold mb-4">QUICK LINKS</h3>
                <ul className="space-y-1">
                  {quickLinks.map((link, idx) => (
                    <li key={`quick-${idx}`} className="text-white leading-[28px]">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>

              {/* PAGES */}
              <div className="min-w-[200px] flex flex-col">
                <h3 className="text-white font-bold mb-4">PAGES</h3>
                <ul className="space-y-1">
                  {pageLinks.map((link, idx) => (
                    <li key={`page-${idx}`} className="text-white leading-[28px]">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-purple-300 transition"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONNECT WITH US */}
              <div className="min-w-[200px] flex flex-col">
                <h3 className="text-white font-bold mb-4">CONNECT WITH US!</h3>

                <div className="flex flex-col space-y-2">
                  {/* Phone */}
                  <p className="flex items-center  text-white leading-[28px] hover:text-[#A95C9C] transition cursor-pointer">
                    <span className="p-2 mr-2 rounded-full bg-white/10 flex items-center justify-center">
                      <FaPhoneAlt className="text-white w-4 h-4" />
                    </span>
                    <span >
                      +92 321 8456611
                    </span>
                  </p>

                  {/* Email */}
                  <div className="flex items-center text-white hover:text-[#A95C9C] transition cursor-pointer break-all">
                    <span className="p-2 mr-2 rounded-full bg-white/10 flex items-center justify-center">
                      <FaEnvelope className="text-white w-4 h-4" />
                    </span>
                    <span >
                      contact@infinityxdynamics.com
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-start text-white leading-[28px] hover:text-[#A95C9C] transition cursor-pointer">
                    <span className="p-2 mr-2 rounded-full bg-white/10 flex items-center justify-center mt-1">
                      <FaMapMarkerAlt className="text-white w-4 h-4" />
                    </span>
                    <span>
                      Infinity X Dynamics Head Office - Karachi, Pakistan
                    </span>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-6">
                  {socialLinks.map((social, idx) => (
                    <NavLink
                      key={`social-${idx}`}
                      to={social.to}
                      className="w-10 h-10 flex items-center justify-center border border-[#4b1b57] rounded-full text-white hover:text-[#A95C9C] transition"
                      title={social.alt}
                    >
                      {social.icon}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <Separator className="my-6 bg-[#4b1b57]" />
            <div className="text-center">
              <p className="text-white leading-[28px]">
                © {new Date().getFullYear()} Infinity X Dynamics. All Rights Reserved.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </footer>

  );
};

export default Footer;

// import { Link } from "react-router";
// import {
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaFilm,
//   FaVideo,
//   FaPhotoVideo,
//   FaBolt,
//   FaMagic,
//   FaPenNib,
//   FaNewspaper,
//   FaLock,
//   FaFileContract,
//   FaEnvelopeOpenText,
//   FaInfoCircle,
//   FaBriefcase,
//   FaServicestack,
//   FaUsers,
//   FaPhoneAlt,
// } from "react-icons/fa";
// import { CgWebsite } from "react-icons/cg";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-[#A95C9C] px-2 pb-10">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 p-10 md:p-20 flex-wrap">

//         {/* 📞 Contact Us */}
//         <div className="flex-1 min-w-[300px]">
//           <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
//           <p className="mb-2 flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//             <FaPhoneAlt className="mr-2 text-[#5C0E6E]" /> +92 321 8456611
//           </p>
//           <p className="mb-2 flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//             <FaEnvelope className="mr-2 text-[#5C0E6E]" /> contact@infinityxdynamics.com
//           </p>
//           <p className="mb-2 flex items-start hover:text-[#5C0E6E] transition cursor-pointer">
//             <FaMapMarkerAlt className="mr-2 mt-1 text-[#5C0E6E]" />
//             <span>Infinity X Dynamics<br />Head Office - Karachi, Pakistan</span>
//           </p>
//         </div>

//         {/* 🎨 Our Services */}
//         <div className="flex-1 min-w-[220px]">
//           <h3 className="text-lg font-semibold mb-4">OUR SERVICES</h3>
//           <ul className="space-y-2">
//             <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//               <FaFilm className="mr-2 text-[#5C0E6E]" /> 2D Animation
//             </li>
//             <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//               <CgWebsite  className="mr-2 text-[#5C0E6E]" /> Web Development
//             </li>
//             <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//               <FaVideo className="mr-2 text-[#5C0E6E]" /> 3D Animation
//             </li>
//             <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//               <FaPhotoVideo className="mr-2 text-[#5C0E6E]" /> Motion Graphic
//             </li>
//             <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//               <FaBolt className="mr-2 text-[#5C0E6E]" /> Logo Animation
//             </li>
//             <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//               <FaMagic className="mr-2 text-[#5C0E6E]" /> CGI / VFX
//             </li>
//           </ul>
//         </div>

//         {/* 🔗 Quick Links */}
//         <div className="flex-1 min-w-[220px]">
//           <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
//           <ul className="space-y-2">
//             <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//               <FaPenNib className="mr-2 text-[#5C0E6E]" /> Testimonials
//             </li>
//             <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//               <FaNewspaper className="mr-2 text-[#5C0E6E]" /> Latest News
//             </li>
//             <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//               <FaLock className="mr-2 text-[#5C0E6E]" /> Privacy Policy
//             </li>
//             <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//               <FaFileContract className="mr-2 text-[#5C0E6E]" /> Terms & Conditions
//             </li>
//             <li className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//               <FaEnvelopeOpenText className="mr-2 text-[#5C0E6E]" /> Contact Us
//             </li>
//           </ul>
//         </div>

//         {/* 📄 Pages with routing */}
//         <div className="flex-1 min-w-[220px]">
//           <h3 className="text-lg font-semibold mb-4">PAGES</h3>
//           <ul className="space-y-2">
//             <li>
//               <Link to="/about-us" className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//                 <FaInfoCircle className="mr-2 text-[#5C0E6E]" /> About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/our-work" className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//                 <FaBriefcase className="mr-2 text-[#5C0E6E]" /> Our Work
//               </Link>
//             </li>
//             <li>
//               <Link to="/our-services" className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//                 <FaServicestack className="mr-2 text-[#5C0E6E]" /> Our Services
//               </Link>
//             </li>
//             <li>
//               <Link to="/our-clients" className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//                 <FaUsers className="mr-2 text-[#5C0E6E]" /> Our Clients
//               </Link>
//             </li>
//             <li>
//               <Link to="/contact-us" className="flex items-center hover:text-[#5C0E6E] transition cursor-pointer">
//                 <FaEnvelopeOpenText className="mr-2 text-[#5C0E6E]" /> Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Line */}
//       <div className="text-center text-sm border-t border-[#A95C9C] pt-4 pb-6">
//         © {new Date().getFullYear()} Infinity X Dynamics. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
