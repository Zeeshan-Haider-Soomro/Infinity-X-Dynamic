import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / winHeight) * 100;

      setScrollProgress(scrolled);

      if (scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        className="fixed bottom-10 right-6 z-50 cursor-pointer"
        aria-label="Scroll to top"
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
          style={{
            background: `conic-gradient(#5C0E6E ${scrollProgress}%, #f3f3f3 ${scrollProgress}%)`,
          }}
        >
          <div className="w-10 h-10 bg-[#A95C9C] hover:bg-[#5C0E6E] text-white rounded-full flex items-center justify-center transition-all duration-300">
            <FaArrowUp className="text-lg" />
          </div>
        </div>
      </div>
    )
  );
};

export default ScrollToTopButton;
