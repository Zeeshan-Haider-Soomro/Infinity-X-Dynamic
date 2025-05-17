import { useEffect, useState } from "react";

const phrases = [
  ["Graphic", "Motions"],
  ["3D", "Animations"],
  ["2D", "Animations"],
  ["Social Media", "Marketing"],
  ["Web", "Development"],
  ["Cartoon", "Animation"],
  ["Whiteboard", "Videos"],
  ["Logo", "Animation"],
  ["Augmented", "Reality"],
  ["CGI", "VFX"],
  ["IT", "Solutions"],
  ["SEO", "SMM"],
];

const DynamicHeading = () => {
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setOpacity(1);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      className={`text-center font-bold flex flex-wrap justify-center items-center gap-2 transition-opacity duration-300 ${
        opacity === 0 ? "opacity-0" : "opacity-100"
      } 
      text-[36px] sm:text-[48px] md:text-[64px] lg:text-[70px] xl:text-[80px] 
      leading-tight px-4 font-sans`}
    >
      <span className="text-white">{phrases[index][0]}</span>
      <br />
      <span className="text-pink-400">{phrases[index][1]}</span>
    </h2>
  );
};

export default DynamicHeading;
