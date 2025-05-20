import React, { useEffect, useRef, useState } from "react";

const feedbacks = [
  {
    title: "Team Lead as d asd asdm a d ad a da dasdj adsas d a dja dj asd ja dja sd",
    image: "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mjE7bJk5qGIPRb7W.png",
    name: "Ali Khan",
  },
  { title: "Team Lead", image: "https://via.placeholder.com/150", name: "Ali Khan" },
  { title: "Team Lead", image: "https://via.placeholder.com/150", name: "Ali Khan" },
  { title: "Team Lead", image: "https://via.placeholder.com/150", name: "Ali Khan" },
  { title: "Team Lead", image: "https://via.placeholder.com/150", name: "Ali Khan" },
  { title: "Designer", image: "https://via.placeholder.com/150", name: "Sara Ahmed" },
  { title: "Developer", image: "https://via.placeholder.com/150", name: "Zeeshan Haider" },
  { title: "Manager", image: "https://via.placeholder.com/150", name: "Amna Raza" },
];

const FeedbackSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sliderRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const boxes = sliderRef.current.children;
      indexRef.current = (indexRef.current + 1) % boxes.length;
      const scrollAmount = boxes[indexRef.current].offsetLeft - sliderRef.current.offsetLeft;
      sliderRef.current.style.transform = `translateX(-${scrollAmount}px)`;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="overflow-hidden w-full max-w-5xl mx-auto pb-20">
      <div ref={sliderRef} className="flex gap-5 transition-transform duration-500 ease-in-out">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`flex-shrink-0 w-[300px] h-[400px] bg-white border-2 rounded-xl p-5 text-center cursor-pointer transition-all duration-300 ${
              activeIndex === index
                ? "border-blue-400 shadow-md shadow-blue-200"
                : "border-gray-400"
            }`}
          >
            <p className="text-lg font-bold text-gray-600">{feedback.title}</p>
            <img
              src={feedback.image}
              alt={feedback.name}
              className="w-36 h-36 mt-5 mx-auto rounded-full object-cover"
            />
            <h4 className="mt-3 text-xl text-gray-800 font-semibold">{feedback.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSection;
