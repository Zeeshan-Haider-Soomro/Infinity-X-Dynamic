import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import { Outlet } from "react-router";
import Footer from "@/components/Footer";
import IntroVideo from "@/components/IntroVideo";
import AOS from "aos";
import "aos/dist/aos.css";
import CustomCursor from "@/components/CustomCursor";
import MirrorMagnifierCursor from "@/components/MirrorMagnifierCursor";
import MirrorCursor from "@/components/MirrorCursor";
import ScrollToTop from "@/components/ScrollToTop";

const App = () => {
  const appRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true);

  // Timer to auto-hide intro video
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  // ✅ Skip on screen click
  useEffect(() => {
    const skipIntro = () => {
      setShowIntro(false);
    };

    if (showIntro) {
      window.addEventListener("click", skipIntro);
    }

    return () => {
      window.removeEventListener("click", skipIntro);
    };
  }, [showIntro]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (showIntro) {
    return <IntroVideo />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {/* <CustomCursor /> */}
      {/* <MirrorCursor /> */}

      <div ref={appRef} id="main-content" className="overflow-hidden bg-main-color">
        {/* <MirrorMagnifierCursor zoomTargetRef={appRef} /> */}
        <Header />
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
