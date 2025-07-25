import { Link } from "react-router"; // ✅ Make sure this is react-router-dom, not just "react-router"

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
  "/3d-animation",
  "/2d-animation",
  "#",
  "/web-development",
  "/cartoonAnimation",
  "/whiteBoard",
  "/logo-animation",
  "#",
  "/cgi-vfx",
  "#",
  "#",
];

export default function ServiceButtons({ activeIndex }) {
  return (
    <div data-aos="fade-up" className="flex items-center justify-center">
      <div className="grid md:grid-cols-4 grid-cols-1 justify-center gap-6 mt-3">
        {services.map((label, index) => {
          const isActive = index === activeIndex;
          const link = links[index];
          const isClickable = link !== "#"; // Disable unlinked ones

          return isClickable ? (
            <Link
              key={index}
              to={link}
              className={`group relative px-6 py-3 min-w-[200px] text-white font-semibold uppercase rounded-full border-2 overflow-hidden text-center transition-all duration-300 ${
                isActive ? "bg-[#9c448d] border-[#9c448d]" : "border-white"
              }`}
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
              className="group relative px-6 py-3 min-w-[200px] text-white font-semibold uppercase rounded-full border-2 border-gray-400 cursor-not-allowed text-center opacity-50"
            >
              <span className="relative z-10">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
