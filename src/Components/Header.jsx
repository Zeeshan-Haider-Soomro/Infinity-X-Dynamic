import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import TalkModal from "./TalkModal";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isTalkModalOpen, setIsTalkModalOpen] = useState(false);

  const navLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Our Work", path: "/our-work" },
    { name: "Our Services", path: "#" },
    { name: "Our Clients", path: "/our-clients" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const services = [
    {
      label: "2D Animation",
      icon: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png",
    },
    {
      label: "3D Animation",
      icon: "https://cdn-icons-png.flaticon.com/512/2166/2166824.png",
    },
    {
      label: "Cartoon Animation",
      icon: "https://cdn-icons-png.flaticon.com/512/4905/4905451.png",
    },
    {
      label: "Motion Graphic",
      icon: "https://cdn-icons-png.flaticon.com/512/846/846338.png",
    },
    {
      label: "Whiteboard",
      icon: "https://cdn-icons-png.flaticon.com/512/9476/9476796.png",
    },
    {
      label: "Logo Animation",
      icon: "https://cdn-icons-png.flaticon.com/512/4187/4187457.png",
    },
    {
      label: "Augmented Reality",
      icon: "https://cdn-icons-png.flaticon.com/512/2972/2972865.png",
    },
    {
      label: "CGI / VFX",
      icon: "https://cdn-icons-png.flaticon.com/512/2907/2907100.png",
    },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="h-16 w-24 flex items-center">
          <Link to="/">
            <img
              src="src\assets\Logo.jpg"
              alt="Logo"
              className="h-full w-auto"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center text-[#320142] font-semibold text-lg relative">
          {navLinks.map((link) =>
            link.name === "Our Services" ? (
              <div
                key={link.name}
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
                className="relative group"
              >
                <span className="cursor-pointer hover:text-[#9C448D]">
                  {link.name}
                </span>

                {showServices && (
                  <div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-100 transition-all duration-300 ease-in-out ${
                      showServices
                        ? "opacity-100 scale-100 visible"
                        : "opacity-0 scale-95 invisible"
                    }`}
                  >
                    {/* Arrow */}
                    <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white shadow border-l border-t border-gray-200 z-50"></div>

                    {/* Dropdown Panel */}
                    <div className="bg-white shadow-xl rounded-xl p-6 w-[90vw] max-w-4xl border border-gray-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform"
                          >
                            <img
                              src={service.icon}
                              alt={service.label}
                              className="w-14 h-14 object-contain p-2 bg-gray-100 rounded-lg shadow"
                            />
                            <span className="text-black font-semibold">
                              {service.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#320142] border-b-2 border-[#320142] pb-1"
                    : "hover:text-[#9C448D] transition"
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>

   <div className="flex items-center gap-3">
         {/* Talk Button */}
        <button
          className=" cursor-pointer md:block bg-[#9C448D] hover:bg-[#320142] text-white px-5 py-2 rounded-full transition"
          onClick={() => setIsTalkModalOpen(true)}
        >
          LET'S TALK
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden pt-1">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={35} className="text-[#320142]" />
          </button>
        </div>
      </div>
   </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[240px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} className="text-[#9C448D]" />
          </button>
        </div>
        <div className="flex flex-col gap-6 px-6 py-8 text-[#320142] font-semibold">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setSidebarOpen(false)}
              className="hover:text-[#9C448D] transition"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}
      <TalkModal
        isOpen={isTalkModalOpen}
        onClose={() => setIsTalkModalOpen(false)}
      />
    </nav>
  );
};

export default Header;
