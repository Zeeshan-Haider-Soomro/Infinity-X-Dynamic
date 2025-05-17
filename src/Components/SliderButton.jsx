import React from "react";

const SliderButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="text-white text-2xl bg-black/40 hover:bg-black/60 transition duration-300 rounded-full w-[60px] h-[60px] mx-4"
    >
      {children}
    </button>
  );
};

export default SliderButton;
