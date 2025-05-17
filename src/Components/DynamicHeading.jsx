import { useEffect, useState } from "react";

const DynamicHeading = ({ phrases, index }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setOpacity(0);
    const timeout = setTimeout(() => {
      setOpacity(1);
    }, 300);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <h2
      className={`text-center font-bold flex flex-wrap justify-center items-center gap-2 transition-opacity duration-300 ${
        opacity === 0 ? "opacity-0" : "opacity-100"
      } 
      text-[42px] sm:text-[48px] md:text-[64px] lg:text-[70px] xl:text-[80px] 
      leading-tight px-4 font-sans`}
    >
      <span className="text-white">{phrases[index][0]}</span>
      <br />
      <span className="text-pink-400">{phrases[index][1]}</span>
    </h2>
  );
};

export default DynamicHeading;
