import { useState, useEffect } from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router';
import Footer from './Components/Footer';
import IntroVideo from './Components/IntroVideo';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles

const App = () => {
  const [showIntro, setShowIntro] = useState(true); // ✅ Start with true

  // Intro Video Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000); // 9 seconds

    return () => clearTimeout(timer);
  }, []);

    // 🔥 Initialize AOS globally
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animate only once
    });
  }, []);

  if (showIntro) {
    return <IntroVideo />;
  }

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
