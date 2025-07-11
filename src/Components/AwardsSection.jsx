// AwardsSection.jsx
import AwardBox from "./AwardBox";

const AwardsSection = () => {
  return (
    <section className="py-12">
      <div
        className="
          inline-flex
          flex-wrap
          justify-center
          items-center
          gap-[56px]
          w-full
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
