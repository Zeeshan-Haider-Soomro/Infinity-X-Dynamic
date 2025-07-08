import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import TalkModal from "./TalkModal";
import SocialLinks from "./SocialLinks";
import { AppImages } from "../constant/AppImages";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import CustomButton from "./CustomButton";

const Header = () => {
  const { Logo } = AppImages;
  const [isTalkModalOpen, setIsTalkModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About Us", path: "/about-us" },
    { name: "Our Work", path: "/our-work" },
    { name: "Our Services", path: "#" },
    { name: "Our Clients", path: "/our-clients" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const services = [
    { label: "2D Animation", icon: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png" },
    { label: "3D Animation", icon: "https://cdn-icons-png.flaticon.com/512/2166/2166824.png" },
    { label: "Cartoon Animation", icon: "https://cdn-icons-png.flaticon.com/512/4905/4905451.png" },
    { label: "Motion Graphic", icon: "https://cdn-icons-png.flaticon.com/512/846/846338.png" },
    { label: "Whiteboard", icon: "https://cdn-icons-png.flaticon.com/512/9476/9476796.png" },
    { label: "Logo Animation", icon: "https://cdn-icons-png.flaticon.com/512/4187/4187457.png" },
    { label: "Augmented Reality", icon: "https://cdn-icons-png.flaticon.com/512/2972/2972865.png" },
    { label: "CGI / VFX", icon: "https://cdn-icons-png.flaticon.com/512/2907/2907100.png" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navWrapper = `fixed z-50 transition-all duration-500 ease-in-out ${
    scrolled
      ? "w-full left-0 right-0 top-0 rounded-none bg-[#320142] shadow-[0_0_10px_#874182]"
      : "top-[15px] left-[21px] right-[21px] rounded-[50px] bg-[rgba(255,255,255,0.25)] shadow-[0_0_10px_#874182] backdrop-blur-md"
  }`;

  return (
    <>
      <nav className={navWrapper}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-md overflow-hidden"
          >
            <img src={Logo} alt="Logo" className="h-12 w-12 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) =>
                  link.name === "Our Services" ? (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuTrigger
                        className="font-['Quicksand'] text-white text-[18px] font-bold bg-transparent hover:text-[#9C448D] transition
                          data-[state=open]:bg-transparent hover:bg-transparent focus:bg-transparent"
                      >
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-white shadow-md rounded-lg p-4">
                        <ul className="grid w-[90vw] max-w-4xl gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                          {services.map((service, index) => (
                            <li key={index}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={`/services/${service.label
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="flex items-center gap-3 p-2 rounded transition-colors hover:text-[#9C448D]"
                                >
                                  <img
                                    src={service.icon}
                                    alt={service.label}
                                    className="w-12 h-12 object-contain p-1 bg-gray-100 rounded-lg shadow"
                                  />
                                  <span className="text-sm font-semibold text-[#320142]">
                                    {service.label}
                                  </span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuLink asChild>
                        <NavLink
                          to={link.path}
                          className="font-['Quicksand'] text-[18px] text-white font-bold hover:text-[#9C448D] transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent"
                        >
                          {link.name}
                        </NavLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <CustomButton>Sign Up</CustomButton>
            <CustomButton
              className="hidden md:inline-flex items-center justify-center bg-[#9C448D] hover:bg-[#320142] text-white rounded-full px-5 py-2"
              onClick={() => setIsTalkModalOpen(true)}
            >
              LET&apos;S TALK
            </CustomButton>

            {/* Mobile Sidebar */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu size={28} className="text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] px-4 py-6">
                <div className="flex flex-col items-start gap-6">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsTalkModalOpen(false)}
                      className="hover:text-[#9C448D] text-[#320142] font-semibold"
                    >
                      {link.name}
                    </NavLink>
                  ))}
                  <SocialLinks />
                </div>
                <div className="text-center text-sm mt-6 border-t pt-4 border-[#A95C9C]">
                  © {new Date().getFullYear()} Infinity X Dynamics. All Rights Reserved.
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <TalkModal isOpen={isTalkModalOpen} onClose={() => setIsTalkModalOpen(false)} />
    </>
  );
};

export default Header;
