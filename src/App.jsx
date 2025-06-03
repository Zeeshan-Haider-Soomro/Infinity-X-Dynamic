import { useState, useEffect } from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router';
import Footer from './Components/Footer';
import IntroVideo from './Components/IntroVideo';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import CustomCursor from './Components/CustomCursor';
import MirrorMagnifierCursor from './Components/MirrorMagnifierCursor';
import React, { useRef } from 'react';
import MirrorCursor from './Components/MirrorCursor';
import ScrollToTop from './Components/ScrollToTop';

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
    <div>
      <ScrollToTop />
      <CustomCursor />
      {/* <MirrorCursor/> */}
    <div ref={appRef} id="main-content" className="overflow-hidden">
       {/* <MirrorMagnifierCursor zoomTargetRef={appRef} /> */}
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default App;
