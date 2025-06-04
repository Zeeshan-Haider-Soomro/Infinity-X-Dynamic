const services = [
  "GRAPHIC MOTION",
  "3D ANIMATION",
  "2D ANIMATION",
  "SOCIAL MEDIA MARKETING",
  "WEB DEVELLOPMENT",
  "CARTOON ANIMATION",
  "WHITEBOARD VIDEOS",
  "LOGO ANIMATION",
  "AUGMENTED REALITY",
  "CGI/VFX",
  "IT SOLUTIONS",
  "SEO SMM",
];

const links = [
  "#",                     // GRAPHIC MOTION → not yet implemented
  "/3d-animation",         // 3D ANIMATION
  "/2d-animation",         // 2D ANIMATION
  "#",                     // SOCIAL MEDIA MARKETING
  "/web-development",      // WEB DEVELOPMENT (spelling is with 't' in your router!)
  "/cartoonAnimation",     // CARTOON ANIMATION
  "/whiteBoard",           // WHITEBOARD VIDEOS
  "/logo-animation",       // LOGO ANIMATION
  "#",                     // AUGMENTED REALITY
  "/cgi-vfx",              // CGI/VFX
  "#",                     // IT SOLUTIONS
  "#",                     // SEO SMM
];

export default function ServiceButtons({ activeIndex }) {
  return (
    <div data-aos="fade-up" className="flex items-center justify-center">
      <div className="grid md:grid-cols-4 grid-cols-1 justify-center gap-6 mt-3">
        {services.map((label, index) => {
          const isActive = index === activeIndex;
          return (
            <a
              key={index}
              href={links[index]}
              className={`group relative px-6 py-3 min-w-[200px] text-white font-semibold uppercase rounded-full border-2 overflow-hidden text-center transition-all duration-300 ${
                isActive
                  ? "bg-[#9c448d] border-[#9c448d]"
                  : "border-white"
              }`}
            >
              <span className="relative z-10">{label}</span>
              <span
                className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out rounded-full z-0 ${
                  !isActive ? "bg-[#9c448d]" : ""
                }`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
