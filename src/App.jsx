import { useState, useEffect } from "react";
import Header from "@/temp/components/Header";
import { Outlet } from "react-router";
import Footer from "@/temp/components/Footer";
import IntroVideo from "@/temp/components/IntroVideo";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import CustomCursor from "@/temp/components/CustomCursor";
import MirrorMagnifierCursor from "@/temp/components/MirrorMagnifierCursor";
import React, { useRef } from "react";
import MirrorCursor from "@/temp/components/MirrorCursor";
import ScrollToTop from "@/temp/components/ScrollToTop";

const App = () => {
  const appRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true); // ✅ Start with true

  // Intro Video Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 7000); // 9 seconds

    return () => clearTimeout(timer);
  }, []);

  // 🔥 Initialize AOS globally
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    // AOS.refresh();
  }, []);

  if (showIntro) {
    return <IntroVideo />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {/* <CustomCursor /> */}
      <MirrorCursor />

      {/* bg-[#3C0945] */}
      <div
        ref={appRef}
        id="main-content"
        className="overflow-hidden bg-main-color"
      >
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
