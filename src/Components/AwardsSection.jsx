import AwardBox from "./AwardBox";

const AwardsSection = () => {
  return (
    <section className="container py-12">
      <div className=" mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-15">
        <div data-aos="flip-left" data-aos-delay="100">
        <AwardBox target={10} label="Major Brand Collaborations" />
        </div>
        <div data-aos="flip-left" data-aos-delay="100">
        <AwardBox target={15} label="Custom Apps & Platforms Built" />
        </div>
        <div data-aos="flip-left" data-aos-delay="100">
        <AwardBox target={30} label="Projects Completed" />
        </div>
        <div data-aos="flip-left" data-aos-delay="100">
        <AwardBox target={50} label="CGI & Animation Campaigns Delivered" />
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
