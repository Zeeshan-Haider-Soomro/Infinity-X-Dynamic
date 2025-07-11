import React from "react";
import PropTypes from "prop-types";

const CustomCardModal = ({ title, sections }) => {
  return (
    <div
      className="
        w-full
        p-5
        pt-8
        pb-20
        flex
        flex-col
        items-start
        gap-[22px]
        rounded-[25px]
        bg-white/10
        text-white
        backdrop-blur-md
        relative
        
      "
    >
      {title && <h2 className="text-3xl font-bold">{title}</h2>}

      {sections?.map((section, index) => (
        <div key={index}>
          {section.heading && (
            <h3 className="text-2xl font-semibold mb-2">{section.heading}</h3>
          )}
          {section.text && (
            <p className="text-lg leading-relaxed">{section.text}</p>
          )}
        </div>
      ))}

      {/* AwardBox at bottom-right */}
      <div className="absolute bottom-5 right-5">
        <div className="w-[300px] flex justify-center">
          {/* You can also pass this as a prop if needed */}
          {sections?.find((s) => s.content)?.content}
        </div>
      </div>
    </div>
  );
};

CustomCardModal.propTypes = {
  title: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      text: PropTypes.string,
      content: PropTypes.node, // JSX like <AwardBox />
    })
  ),
};

export default CustomCardModal;
