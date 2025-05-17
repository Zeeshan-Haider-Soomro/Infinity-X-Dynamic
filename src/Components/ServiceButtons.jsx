
const services = [
  { label: "GRAPHIC MOTION", link: "your-link-1.html" },
  { label: "3D ANIMATION", link: "your-link-2.html" },
  { label: "2D ANIMATION", link: "your-link-3.html" },
  { label: "SOCIAL MEDIA MARKETING", link: "your-link-4.html" },
  { label: "WEB DEVELLOPMENT", link: "your-link-5.html" },
  { label: "CARTOON ANIMATION", link: "your-link-6.html" },
  { label: "WHITEBOARD VIDEOS", link: "your-link-6.html" },
  { label: "LOGO ANIMATION", link: "your-link-6.html" },
  { label: "AUGMENTED REALITY", link: "your-link-6.html" },
  { label: "CGI/VFX", link: "your-link-6.html" },
  { label: "IT SOLUTIONS", link: "your-link-6.html" },
];

export default function ServiceButtons() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            className="group relative px-6 py-3 min-w-[220px] text-white font-semibold uppercase rounded-full border-2 border-white overflow-hidden transition-all duration-300 text-center"
          >
            <span className="relative z-10">{service.label}</span>
            <span className="absolute inset-0 bg-[#9c448d] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out rounded-full z-0" />
          </a>
        ))}
      </div>
    </div>
  );
}
