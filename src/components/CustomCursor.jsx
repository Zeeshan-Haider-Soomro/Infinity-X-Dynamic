import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const addHoverListeners = () => {
      document.querySelectorAll("a, button, .cursor-hover").forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    addHoverListeners();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-[9999] pointer-events-none transition-transform duration-0 ease-in-out ${
        isHovered ? "scale-150 bg-purple-500/50" : "scale-100 bg-purple-400/20"
      } rounded-full`}
      style={{
        width: "50px",
        height: "50px",
        transform: `translate3d(${position.x - 25}px, ${position.y - 25}px, 0)`,
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CustomCursor;
