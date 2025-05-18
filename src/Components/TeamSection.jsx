import React from 'react';

const teamMembers = [
  {
    name: 'Ava Stone',
    passion: 'Lead Designer',
    image: 'src/assets/ceo.avif',
  },
  {
    name: 'Liam Ray',
    passion: 'Frontend Developer',
    image: 'src/assets/ceo.avif',
  },
  {
    name: 'Emma Sky',
    passion: '3D Artist',
    image: 'src/assets/ceo.avif',
  },
  {
    name: 'Noah Green',
    passion: 'VFX Specialist',
    image: 'src/assets/ceo.avif',
  },
  {
    name: 'Sophia White',
    passion: 'Marketing Lead',
    image: 'src/assets/ceo.avif',
  },
  {
    name: 'Mason Blue',
    passion: 'Backend Engineer',
    image: 'src/assets/ceo.avif',
  },
  {
    name: 'Isabella Moon',
    passion: 'Animator',
    image: 'src/assets/ceo.avif',
  },
  {
    name: 'James Cloud',
    passion: 'AI Specialist',
    image: 'src/assets/ceo.avif',
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#320142] py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading and Description */}
        <div className="mb-12">
          <h1 className="text-[#D977C8] text-4xl font-bold mb-4">Our Team</h1>
          <p className="w-full md:w-[500px] text-white">
            Our strength lies in our individuality. Set up by Esther Bryce, the team strives to bring in the best talent in various fields, from architecture to interior design and sales.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-md">
              <img src={member.image} alt={member.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.passion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
