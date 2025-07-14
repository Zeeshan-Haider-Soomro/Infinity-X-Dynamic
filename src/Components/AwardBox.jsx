import { useEffect, useRef } from "react";

const AwardBox = ({ target, label }) => {
  const countRef = useRef(null);

  useEffect(() => {
    const animateCount = (el, target) => {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.max(Math.floor(duration / target), 20);

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
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current.parentElement);
  }, [target]);

  return (
    <div className="flex  flex-col items-center justify-center gap-4 cursor-pointer group">
      {/* CIRCLE NUMBER */}
      <div
        className="
          inline-flex
          justify-center
          items-center
          px-[19px]
          py-[1.5px]
          rounded-full
          border-[#8B7190]
          aspect-square
          w-[100px]
          h-[100px]
          group-hover:bg-[#320142]
          transition-colors
          duration-300
          border-[3px]
          shadow-[0_1px_8px_0px_#ffffff]
          font-secular
        "
      >
        <span
          ref={countRef}
          className="
            text-white
            text-center
            font-['Titan One']
            text-[32px]
            leading-[100px]
            font-medium
            
          "
        >
          0
        </span>
        <span
          className="
            text-white
            text-[40px]
            font-['Titan One']
            ml-1
          "
        >
          +
        </span>
      </div>

      {/* LABEL */}
      <div className="text-center text-white  text-base">
        {label}
      </div>
    </div>
  );
};

export default AwardBox;
