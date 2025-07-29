import { Link } from "react-router-dom"; 

const services = [
  "GRAPHIC MOTION",
  "3D ANIMATION", 
  "2D ANIMATION",
  "SOCIAL MEDIA MARKETING",
  "WEB DEVELOPMENT",
  "CARTOON ANIMATION",
  "WHITEBOARD VIDEOS",
  "LOGO ANIMATION",
  "AUGMENTED REALITY",
  "CGI/VFX",
  "IT SOLUTIONS",
  "SEO SMM",
];

const links = [
  "#",
  "/services/3d-animation",
  "/services/2d-animation",
  "#",
  "/services/web-development",
  "/services/cartoon-animation",
  "/services/whiteboard-videos",
  "/services/logo-animation",
  "#",
  "/services/cgi-vfx",
  "#",
  "#",
];

export default function ServiceButtons({ activeIndex }) {
  return (
    <div data-aos="fade-up" className="flex items-center justify-center px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 md:gap-4 w-full max-w-6xl">
        {services.map((label, index) => {
          const isActive = index === activeIndex;
          const link = links[index];
          const isClickable = link !== "#";
          const buttonClasses = `group relative px-4 py-2 md:px-6 md:py-3 w-full text-white font-semibold uppercase rounded-full border-2 overflow-hidden text-center transition-all duration-300 text-sm sm:text-base ${
            isActive 
              ? "bg-[#9c448d] border-[#9c448d]" 
              : "border-white hover:border-[#9c448d]"
          }`;

          return isClickable ? (
            <Link
              key={index}
              to={link}
              className={buttonClasses}
            >
              <span className="relative z-10">{label}</span>
              <span
                className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out rounded-full z-0 ${
                  !isActive ? "bg-[#9c448d]" : ""
                }`}
              />
            </Link>
          ) : (
            <div
              key={index}
              className="group relative px-4 py-2 md:px-6 md:py-3 w-full text-white font-semibold uppercase rounded-full border-2 border-gray-400 cursor-not-allowed text-center opacity-50 text-sm sm:text-base"
            >
              <span className="relative z-10">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
