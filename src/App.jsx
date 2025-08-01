import { useState, useEffect, useRef, Suspense } from "react";
import { Outlet } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroVideo from "@/components/IntroVideo";
import CustomCursor from "@/components/CustomCursor";
import MirrorMagnifierCursor from "@/components/MirrorMagnifierCursor";
import MirrorCursor from "@/components/MirrorCursor";
import ScrollToTop from "@/components/ScrollToTop";

const App = () => {
  const appRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true);

  // Auto-hide intro video after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  // Allow user to skip intro on click
  useEffect(() => {
    const handleClick = () => setShowIntro(false);

    if (showIntro) {
      window.addEventListener("click", handleClick);
    }

    return () => window.removeEventListener("click", handleClick);
  }, [showIntro]);

  // Initialize AOS animation on scroll
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Intro video overlay
  if (showIntro) {
  return (
    <Suspense fallback={<div className="bg-black h-screen w-screen" />}>
      <IntroVideo />
    </Suspense>
  );
}


  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      {/* Optional Cursors - Enable one if needed */}
      {/* <CustomCursor /> */}
      {/* <MirrorCursor /> */}

      <div
        ref={appRef}
        id="main-content"
        className="overflow-hidden bg-main-color"
      >
        {/* <MirrorMagnifierCursor zoomTargetRef={appRef} /> */}

        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
