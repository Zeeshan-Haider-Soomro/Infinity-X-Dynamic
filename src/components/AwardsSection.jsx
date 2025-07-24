// AwardsSection.jsx
import AwardBox from "./AwardBox";

const AwardsSection = () => {
  return (
    <section className="py-8 md:py-12">
      <div
  className="
    grid
    grid-cols-2
    sm:grid-cols-2
    md:grid-cols-4
    gap-4 sm:gap-6 md:gap-[56px]
    w-full
    px-4
    md:px-8
    lg:px-12
    xl:px-16
    2xl:px-20
    max-w-screen-xl
    mx-auto
    text-center
    backdrop-blur-md
    rounded-[25px]
    p-6
  "
>

        <AwardBox target={10} label="Major Brand Collaborations" />
        <AwardBox target={15} label="Custom Apps & Platforms Built" />
        <AwardBox target={30} label="Projects Completed" />
        <AwardBox target={50} label="CGI & Animation Campaigns Delivered" />
      </div>
    </section>
  );
};

export default AwardsSection;
