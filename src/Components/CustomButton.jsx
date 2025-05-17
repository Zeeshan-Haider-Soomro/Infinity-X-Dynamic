// src/Components/CustomButton.jsx
import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({
  text,
  onClick,
  bgColor = "#A95C9C",
  hoverColor = "#9C448D",
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full py-3 px-10 text-white text-base md:text-[20px] font-medium border border-white hover:border-none cursor-pointer`}
      style={{
        backgroundColor: bgColor,
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) => (e.target.style.backgroundColor = bgColor)}
    >
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  hoverColor: PropTypes.string,
};

//  for dark
//        <CustomButton
//     text="VIEW PORTFOLIO"
//     bgColor="#451650"
//     hoverColor="#9C448D"
//   />

// for light
// <CustomButton
//     text="GET STARTED"
//     bgColor="#A95C9C"
//     hoverColor="#9C448D"
//   />

export default CustomButton;
