import AwardBox from "./AwardBox";

const AwardsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <AwardBox target={10} label="Major Brand Collaborations" />
        <AwardBox target={15} label="Custom Apps & Platforms Built" />
        <AwardBox target={30} label="Projects Completed" />
        <AwardBox target={50} label="CGI & Animation Campaigns Delivered" />
      </div>
    </section>
  );
};

export default AwardsSection;
