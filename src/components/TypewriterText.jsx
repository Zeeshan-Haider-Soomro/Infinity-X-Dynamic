import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div className="flex min-h-[160px] px-10 md:px-20 bg-transparent rounded-lg">
      <div className="text-[#FFF] font-bold font-sans md:text-4xl lg:text-6xl">
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
