import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import TalkModal from "./TalkModal";
import SocialLinks from "./SocialLinks";
import { AppImages } from "@/constant/AppImages";
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
import { CurveArrow } from "@/assets/ImagesFile";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navWrapper = `fixed z-50 transition-all duration-500 ease-in-out ${scrolled
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
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center  md:gap-2 lg:gap-6">
                {navLinks.map((link) =>
                  link.name === "Our Services" ? (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuTrigger
                        className=" text-white sm:text-[14px] md:text-[16px] lg:text-[18px] font-bold bg-transparent hover:text-[#e7d5e4] transition
                          data-[state=open]:bg-transparent hover:bg-transparent focus:bg-transparent"
                      >
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent
                        className="bg-[#1A0127] text-white w-[595px] h-100vh rounded-lg flex justify-center items-center p-8 pb-12"
                      >
                        <div className="flex gap-12 pt-[29px]">
                          {/* Left Column */}
                          <div className="flex flex-col w-[222px] gap-4">
                            <h3 className="text-lg font-bold mb-2">Animation Services</h3>

                            <Link
                              to="/3d-animation"
                              className="hover:text-[#9C448D] transition flex gap-2 items-start"
                            >
                              <CurveArrow className="flex-shrink-0 mt-1" />
                              <div>
                                <div className="text-base font-semibold">2D/3D Animation</div>
                                <div className="text-sm text-gray-300">
                                  Engaging character and product animations in 2D or 3D.
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/cartoonAnimation"
                              className="hover:text-[#9C448D] transition flex gap-2 items-start"
                            >
                              <CurveArrow className="flex-shrink-0 mt-1" />
                              <div>
                                <div className="text-base font-semibold">Cartoon Animation</div>
                                <div className="text-sm text-gray-300">
                                  Stylized, fun animations perfect for storytelling.
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/whiteBoard"
                              className="hover:text-[#9C448D] transition flex gap-2 items-start"
                            >
                              <CurveArrow className="flex-shrink-0 mt-1" />
                              <div>
                                <div className="text-base font-semibold">Whiteboard Videos</div>
                                <div className="text-sm text-gray-300">
                                  Stylized, fun animations perfect for storytelling.
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/logo-animation"
                              className="hover:text-[#9C448D] transition flex gap-2 items-start"
                            >
                              <CurveArrow className="flex-shrink-0 mt-1" />
                              <div>
                                <div className="text-base font-semibold">Logo Animation</div>
                                <div className="text-sm text-gray-300">
                                  Bring your brand logo to life with motion and impact.
                                </div>
                              </div>
                            </Link>
                          </div>

                          {/* Right Column */}
                          <div className="flex flex-col w-[222px] gap-4">
                            <h3 className="text-lg font-bold mb-2">Advanced Visuals</h3>

                            <Link
                              to="/cgi-vfx"
                              className="hover:text-[#9C448D] transition flex gap-2 items-start"
                            >
                              <CurveArrow className="flex-shrink-0 mt-1" />
                              <div>
                                <div className="text-base font-semibold">VFX/CGI</div>
                                <div className="text-sm text-gray-300">
                                  Cinematic-quality visual effects and CGI enhancements.
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/motion-graphics"
                              className="hover:text-[#9C448D] transition flex gap-2 items-start"
                            >
                              <CurveArrow className="flex-shrink-0 mt-1" />
                              <div>
                                <div className="text-base font-semibold">Motion Graphics</div>
                                <div className="text-sm text-gray-300">
                                  Text, shapes, and movement to convey messages smartly.
                                </div>
                              </div>
                            </Link>

                            <Link
                              to="/augmented-reality"
                              className="hover:text-[#9C448D] transition flex gap-2 items-start"
                            >
                              <CurveArrow className="flex-shrink-0 mt-1" />
                              <div>
                                <div className="text-base font-semibold">Augmented Reality</div>
                                <div className="text-sm text-gray-300">
                                  Interactive, immersive AR experiences for your brand.
                                </div>
                              </div>
                            </Link>

                            <CustomButton className="mt-4">
                              View Portfolio
                            </CustomButton>
                          </div>
                        </div>
                      </NavigationMenuContent>

                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuLink asChild>
                        <NavLink
                          to={link.path}
                          className="sm:text-[14px] md:text-[16px] lg:text-[18px] text-white font-bold hover:text-[#9C448D] transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent"
                        >
                          {link.name}
                        </NavLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ),
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* <CustomButton onClick={() => setIsTalkModalOpen(true)}>Sign Up</CustomButton> */}
            <CustomButton
              className="hidden md:inline-flex items-center justify-center bg-[#9C448D] hover:bg-[#320142] text-white rounded-full px-5 py-2"
              onClick={() => setIsTalkModalOpen(true)}
            >
              LET&apos;S TALK
            </CustomButton>

            {/* Mobile Sidebar */}
            <Sheet>
              {/* Hamburger Button */}
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <Menu size={28} />
                </Button>
              </SheetTrigger>

              {/* Sidebar Content */}
              <SheetContent
                side="left"
                className="w-[260px] px-6 py-6 bg-gradient-to-b from-[#320142] to-[#9C448D] text-white shadow-xl"
              >
                <div className="flex flex-col justify-between h-full">
                  {/* Nav Links */}
                  <div className="space-y-5">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsTalkModalOpen(false)}
                        className={({ isActive }) =>
                          `block text-lg font-medium transition hover:text-[#FB64B6] ${isActive ? "text-[#FB64B6]" : "text-white"
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    ))}

                    {/* Call-to-action */}
                    <CustomButton
                      onClick={() => setIsTalkModalOpen(true)}
                      className="mt-4 w-full bg-[#FB64B6] text-white rounded-full py-2 px-4 font-semibold hover:bg-pink-600 transition"
                    >
                      Let’s Talk
                    </CustomButton>

                    {/* Social Icons */}
                    <div className="pt-6 border-t border-[#FB64B6]">
                      <SocialLinks />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="text-center text-xs pt-6 text-white opacity-80">
                    © {new Date().getFullYear()} Infinity X Dynamics. All Rights Reserved.
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <TalkModal
        isOpen={isTalkModalOpen}
        onClose={() => setIsTalkModalOpen(false)}
      />
    </>
  );
};

export default Header;
