import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";


const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Our Work", path: "/our-work" },
    { name: "Our Services", path: "/our-services" },
    { name: "Our Clients", path: "/our-clients" },
    { name: "Contact Us", path: "/contact-us" },
  ];
  return (
       <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="h-20 w-20 flex items-center">
            <Link to="/home">
            <img src="src\assets\Logo.jpg" alt="" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="w-full bg-white px-6 sm:px-12 py-2 flex items-center justify-between">
            <img src="" alt="" />
            <nav className="flex-1 flex justify-center hidden md:flex">
            <ul className="flex gap-5 space-x-7 text-white text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#2398FF] border-b-2 border-[#2398FF] pb-1"
                        : "relative text-[#320142] hover:text-[#2398FF] transition duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-[#2398FF] hover:before:w-full before:transition-all before:duration-300"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            </nav>
            <button className="bg-[#299cf3] text-white font-semibold rounded-full px-5 py-2 ml-4 hover:bg-[#217dc4] transition hidden sm:block">LET'S TALK</button>
          </div>
          <div>
</div>


        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={24} className="text-purple-700" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[240px] bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <button onClick={() => setSidebarOpen(false)}>
            <X size={24} className="text-purple-700" />
          </button>
        </div>
        <div className="flex flex-col gap-6 px-6 py-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setSidebarOpen(false)} // auto-close on click
              className={({ isActive }) =>
                isActive
                  ? "text-purple-700 font-semibold"
                  : "text-gray-800 dark:text-white hover:text-purple-600 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Optional Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
        />
      )}
    </nav>
  )
}

export default Header