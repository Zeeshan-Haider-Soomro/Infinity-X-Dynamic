import { useEffect, useRef } from "react";

const AwardBox = ({ target, label }) => {
  const countRef = useRef(null);

  useEffect(() => {
    const animateCount = (el, target) => {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.floor(duration / target);

      const counter = setInterval(() => {
        start++;
        el.textContent = start;
        if (start >= target) clearInterval(counter);
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount(countRef.current, target);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current.parentElement);
  }, [target]);

  return (
    <div className="w-90 md:w-64 h-56 border-b-4 border-transparent bg-gray-100 rounded-lg text-center p-6 transition-all duration-300 m-auto hover:bg-blue-50 hover:border-[#9C448D] flex flex-col justify-center items-center cursor-pointer">
      <div className="text-5xl font-bold text-black flex items-center">
        <span ref={countRef}>0</span>
        <span className="text-[#9C448D] ml-1">+</span>
      </div>
      <div className="mt-4 text-xl font-semibold text-gray-800">{label}</div>
    </div>
  );
};

export default AwardBox;
