// src/Components/TypewriterText.jsx
import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div className="flex min-h-[150px] px-10 md:px-20 bg-transparent rounded-lg">
      <div className="text-[#5c0e6e] font-bold font-sans text-4xl md:text-4xl lg:text-6xl">
        <Typewriter
          options={{
            strings: ["The leading VFX and animation studio in Pakistan."],
            autoStart: true,
            loop: true,
            delay: 100,
            pauseFor: 3000,
          }}
        />
      </div>
    </div>
  );
};

export default TypewriterText;
