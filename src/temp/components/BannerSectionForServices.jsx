import { Link } from "react-router";

const BannerSectionForServices = ({
  to = null,
  heading1,
  heading2,
  imageSrc,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="px-6 py-12 flex flex-col items-center text-center">
      {/* text and image section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 p-6">
        {/* Left: Image */}
 <div className="w-full lg:w-1/2 flex justify-center">
  <div className="relative">
    <img
      src={imageSrc}
      alt="Service Banner"
      className="w-[400px] h-[300px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[400px] object-cover rounded-lg relative z-10"
    />
    <div className="absolute -top-8 -left-8 w-50 h-50 bg-[#440755] rounded-[10px] z-0"></div>
    <div className="absolute -bottom-8 -right-8 w-50 h-50 bg-[#440755] rounded-[10px] z-0"></div>
  </div>
</div>

        {/* Right: Text + Button */}
        <div className="text-left w-full lg:w-1/2 space-y-6">
          <p className="text-[#320142] text-base md:text-lg leading-relaxed">
            {description}
          </p>
          <button
            onClick={onButtonClick}
            className="bg-[#A95C9C] hover:bg-[#9C448D] rounded-full py-3 px-10 text-white text-base md:text-[20px] font-medium cursor-pointer"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerSectionForServices;
