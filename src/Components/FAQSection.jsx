import React, { useState } from 'react';
import CustomHeading from './CustomHeading';

const faqData = [
  {
    question: 'Q1: What is Infinity X Dynamics?',
    answer: 'We help businesses grow through VFX/CGI production, app and website development.',
  },
  {
    question: 'Q2: What industries do you work with?',
    answer: 'We work with e-commerce, health, education, tech startups, and more.',
  },
  {
    question: 'Q3: Do you offer mobile app development?',
    answer: 'Yes, we create cross-platform and native apps for iOS and Android.',
  },
  {
    question: 'Q4: Can I request a demo?',
    answer: 'Absolutely, contact us to schedule a live walkthrough or demo session.',
  },
  {
    question: 'Q5: How do payments work?',
    answer: 'We work with upfront and milestone-based payments depending on the project.',
  },
  {
    question: 'Q6: Is support available after delivery?',
    answer: 'Yes, we offer post-launch support and maintenance packages.',
  },
  {
    question: 'Q7: Where is IXD based?',
    answer: 'We are based in Lahore, Pakistan and work with clients globally.',
  },
  {
    question: 'Q8: What tools do you use for VFX?',
    answer: 'We use Blender, Houdini, After Effects, and industry-grade tools.',
  },
  {
    question: 'Q9: Do you sign NDAs?',
    answer: 'Yes, all projects are protected with confidentiality agreements.',
  },
  {
    question: 'Q10: Can I get a custom website design?',
    answer: 'Absolutely. We create fully custom designs tailored to your brand.',
  },
  {
    question: 'Q11: Do you provide content too?',
    answer: 'Yes, we offer content writing, visuals, and SEO services as well.',
  },
  {
    question: 'Q12: How do I get started?',
    answer: 'Just contact us via our website or email to start your project.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="px-6 pb-20">
        <div>
            
           <CustomHeading
            firstText="Frequently Asked"
            secondText="Questions"
            firstColor="#fff"
            secondColor="#D977C8"
            textSize="text-4xl md:text-6xl font-bold p-5"
            align="text-center"
          />
        </div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Left Column */}
          <div className="flex-1 space-y-4">
            {faqData.slice(0, 6).map((faq, index) => (
              <FAQItem
                key={index}
                index={index}
                activeIndex={activeIndex}
                toggleFAQ={toggleFAQ}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-4 mt-6 md:mt-0">
            {faqData.slice(6).map((faq, index) => (
              <FAQItem
                key={index + 6}
                index={index + 6}
                activeIndex={activeIndex}
                toggleFAQ={toggleFAQ}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ index, activeIndex, toggleFAQ, question, answer }) {
  const isOpen = index === activeIndex;

  return (
    <div className="bg-[#FFFFFF] rounded-lg shadow">
      <div
        className="bg-[#A95C9C] text-white px-5 py-4 font-semibold text-lg cursor-pointer relative rounded-t-lg"
        onClick={() => toggleFAQ(index)}
      >
        {question}
        <span className="absolute right-5 top-4 text-xl">{isOpen ? '-' : '+'}</span>
      </div>
      <div
        className={`px-5 text-gray-700 bg-[#F7F3FF] rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 py-4' : 'max-h-0 py-0'
        }`}
        style={{ transitionProperty: 'max-height, padding' }}
      >
        {answer}
      </div>
    </div>
  );
}
