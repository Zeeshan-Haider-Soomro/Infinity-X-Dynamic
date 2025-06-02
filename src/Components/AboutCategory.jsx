import React, { useState } from 'react';
import TalkModal from './TalkModal';

const AboutCategory = ({ sectionHeading, sectionDescription, cards }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#440755] text-white md:py-16 px-4 md:px-16">
      <div className="text-center md:text-start max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="md:translate-y-65 translate-y-10">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {sectionHeading}
          </h2>
          <p className="mt-4 text-sm md:text-base max-w-xl">
            {sectionDescription}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
          >
            START NOW
          </button>
        </div>

        {/* Right Side Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:mt-35 mt-5 mb-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-blue-500 p-6 px-4 py-6 rounded-lg shadow-md transition-all duration-500 hover:bg-white group cursor-pointer md:text-start text-center py-20 
              ${index % 2 === 0 ? 'md:translate-y-8' : 'md:-translate-y-8'}`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-12 h-12 mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
              />
              <h3 className="font-bold text-lg group-hover:text-black transition-colors duration-500">
                {card.title}
              </h3>
              <p className="text-sm mt-2 group-hover:text-black transition-colors duration-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Talk Modal */}
      <TalkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default AboutCategory;
