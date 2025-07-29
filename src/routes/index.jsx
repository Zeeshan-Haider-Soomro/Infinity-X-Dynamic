import { createBrowserRouter } from "react-router";
import App from "@/App";
import NotFound from "@/pages/NotFound";
import AboutUs from "@/pages/AboutUs";
import OurWork from "@/pages/OurWork";
import OurServices from "@/pages/OurServices";
import OurClients from "@/pages/OurClients";
import ContactUs from "@/pages/ContactUs";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ThankYou from "@/components/ThankYou";
import TwoDAnimation from "@/pages/services/TwoDAnimation";
import ThreeDAnimation from "@/pages/services/ThreeDAnimation";
import LogoAnimation from "@/pages/services/LogoAnimation";
import VfxCgi from "@/pages/services/VfxCgi";
import WebDevelopment from "@/pages/services/WebDevelopment";
import WhiteBoard from "@/pages/services/WhiteBoard";
import CartoonAnimation from "@/pages/services/CartoonAnimation";
import ProfileCTA from "@/components/ProfileCTA";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/our-work",
        element: <OurWork />,
      },
      {
        path: "/our-services",
        element: <OurServices />,
      },
      {
        path: "/our-clients",
        element: <OurClients />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/2d-animation",
        element: <TwoDAnimation />,
      },
      {
        path: "/3d-animation",
        element: <ThreeDAnimation />,
      },
      {
        path: "/logo-animation",
        element: <LogoAnimation />,
      },
      {
        path: "/cgi-vfx",
        element: <VfxCgi />,
      },
      {
        path: "/web-development",
        element: <WebDevelopment />,
      },
      {
        path: "/whiteBoard",
        element: <WhiteBoard />,
      },
      {
        path: "/cartoonAnimation",
        element: <CartoonAnimation />,
      },
      {
        path: "/thank-you",
        element: <ThankYou />,
      },
      {
        path: "/profile-cta",
        element: <ProfileCTA />,
      },
      { path: "/services/:serviceId", element: <ProfileCTA /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
