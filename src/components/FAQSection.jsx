import React, { useState } from "react";
import { ImagesAssets } from "@/utils/ImagesAssets";

const faqData = [
  {
    question: "Q1: What is Infinity X Dynamics?",
    answer: "We help businesses grow through VFX/CGI production, app and website development.",
  },
  {
    question: "Q2: What industries do you work with?",
    answer: "We work with e-commerce, health, education, tech startups, and more.",
  },
  {
    question: "Q3: Do you offer mobile app development?",
    answer: "Yes, we create cross-platform and native apps for iOS and Android.",
  },
  {
    question: "Q4: Can I request a demo?",
    answer: "Absolutely, contact us to schedule a live walkthrough or demo session.",
  },
  {
    question: "Q5: How do payments work?",
    answer: "We work with upfront and milestone-based payments depending on the project.",
  },
  // {
  //   question: "Q6: Is support available after delivery?",
  //   answer: "Yes, we offer post-launch support and maintenance packages.",
  // },
  // {
  //   question: "Q7: Where is IXD based?",
  //   answer: "We are based in Lahore, Pakistan and work with clients globally.",
  // },
  // {
  //   question: "Q8: What tools do you use for VFX?",
  //   answer: "We use Blender, Houdini, After Effects, and industry-grade tools.",
  // },
  // {
  //   question: "Q9: Do you sign NDAs?",
  //   answer: "Yes, all projects are protected with confidentiality agreements.",
  // },
  // {
  //   question: "Q10: Can I get a custom website design?",
  //   answer: "Absolutely. We create fully custom designs tailored to your brand.",
  // },
  // {
  //   question: "Q11: Do you provide content too?",
  //   answer: "Yes, we offer content writing, visuals, and SEO services as well.",
  // },
  // {
  //   question: "Q12: How do I get started?",
  //   answer: "Just contact us via our website or email to start your project.",
  // },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="relative pt-6 px-6 h-[600px] text-white overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl font-secular  font-semibold mb-12 z-10 relative">
        Frequently Asked <span className="font-black text-[#8B7190]">Questions</span> (FAQ’S)
      </h2>

      {/* FAQ Grid */}
      <div className="grid md:grid-cols-1 gap-6 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={activeIndex === index}
            toggleFAQ={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ index, question, answer, isOpen, toggleFAQ }) {
  return (
    <div className=" backdrop-blur border-b border-white/10 overflow-hidden">
      {/* Question */}
      <div
        className="flex justify-between items-center cursor-pointer px-6 py-2"
        onClick={toggleFAQ}
      >
        <div className="flex items-center gap-3">
          {/* Arrow Icon */}
          
            <ImagesAssets.curveArrow  color="#ffffff" className="w-5 h-5" />
        
          <p className="text-white font-medium">{question}</p>
        </div>

        {/* Plus/Minus Icon */}
        <span className="text-2xl text-white font-bold">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {/* Answer */}
      <div
        className={`px-6 overflow-hidden transition-all duration-300 md:ease-in-out text-white/80 text-sm ${
          isOpen ? "max-h-40 py-3" : "max-h-0 py-0"
        }`}
        style={{ transitionProperty: "max-height, padding" }}
      >
        {answer}
      </div>
    </div>
  );
}
