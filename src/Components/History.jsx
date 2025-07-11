const History = () => {
  return (
    <section className="bg-[rgba(26,1,39,0.9)] w-full rounded-t-[65px] border-t-[3px] border-white px-6 pt-10 pb-16">
      {/* Headings */}
      <div className="text-center space-y-4">
        <h2 className="text-white text-[32px] font-normal leading-[3]">
          Key Highlights in the History of
        </h2>
        <h3 className="text-white text-[32px] font-normal leading-[3]">
          <span className="text-[#8b7190]">INFINITY x DYNAMICS</span>
        </h3>
      </div>

      {/* Paragraph */}
      <p className="text-white text-2xl font-medium leading-[30px] mt-14 max-w-5xl mx-auto text-center px-4">
        From humble beginnings to global expansion, our journey is marked by
        innovation, growth, and milestone moments that define the spirit of
        INFINITY X DYNAMIC.
      </p>

      {/* Images Grid */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-stretch">
        {[
          "https://cdn.builder.io/api/v1/image/assets/7ed207259b02478a9dc06d688a7c628f/99613095-96bc-4cc2-bf43-a54b69595656?placeholderIfAbsent=true",
          "https://cdn.builder.io/api/v1/image/assets/7ed207259b02478a9dc06d688a7c628f/4bf3c43de74a23a151c9ba72f79acdf03db4519d?placeholderIfAbsent=true",
          "https://cdn.builder.io/api/v1/image/assets/7ed207259b02478a9dc06d688a7c628f/7bb76642-6ea2-43b9-8a46-afc8b20309d4?placeholderIfAbsent=true",
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Company milestone ${index + 1}`}
            className="w-full h-[320px] object-cover rounded-xl border border-white/10 shadow-lg"
          />
        ))}
      </div>
    </section>
  );
};

export default History;
