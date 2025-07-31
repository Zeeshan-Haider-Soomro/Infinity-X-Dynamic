import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div className="flex px-10 md:px-14 bg-transparent rounded-lg">
      <div className="text-[#FFF] text-xl font-bold font-sans md:text-2xl lg:text-3xl">
        <Typewriter
          options={{
            strings: [
              `The leading VFX and <span style="color:#8B7190;">animation</span> studio in Pakistan.`
            ],
            autoStart: true,
            loop: true,
            delay: 100,
            pauseFor: 3000,
            html: true,
          }}
        />
      </div>
    </div>
  );
};

export default TypewriterText;
