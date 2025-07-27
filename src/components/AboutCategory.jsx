import React, { useState } from 'react';
import TalkModal from './TalkModal';
import CustomButton from './CustomButton';

const AboutCategory = ({ sectionHeading, sectionDescription, cards }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className=" text-white py-8 md:py-16 px-4 md:px-16">
      <div className="text-center md:text-start max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="md:translate-y-65 translate-y-10">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {sectionHeading}
          </h2>
          <p className="mt-4 mb-4 text-sm md:text-base max-w-xl">
            {sectionDescription}
          </p>
          <CustomButton className='mb-3' isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
            Start Now
          </CustomButton>
        </div>

        {/* Right Side Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-[linear-gradient(90deg,rgba(26,1,39,1)_0%,rgba(60,9,69,1)_100%)] px-4 py-8 rounded-lg shadow-md transition-all duration-500 hover:bg-white group cursor-pointer text-center hover:text-[#dcb3e7] hover:shadow-lg transform hover:scale-105 
      ${index % 2 === 0 ? 'md:translate-y-8' : 'md:-translate-y-8'}`}
            >
              <div className="flex flex-col items-center justify-center">
                <card.image
                  alt={card.title}
                  className="w-12 h-12 mb-4 transition-all duration-300 group-hover:scale-110"
                />
                <h3 className="font-bold text-lg transition-colors duration-500">
                  {card.title}
                </h3>
                <p className="text-sm mt-2 transition-colors duration-500">
                  {card.description}
                </p>
              </div>
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
