import React, { useEffect, useRef, useState } from "react";
import SliderButton from "./SliderButton";

const originalImages = [
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-A0xl9Rgr1jT8ByNZ.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-A0xl9Rgr1jT8ByNZ.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-A0xl9Rgr1jT8ByNZ.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mjE7bJk5qGIPRb7W.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mv0WrG7P8yHp3V5p.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mv0WrG7P8yHp3V5p.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mv0WrG7P8yHp3V5p.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mv0WrG7P8yHp3V5p.png",
];

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
   const [activeButton, setActiveButton] = useState(null);

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  // Duplicate images for infinite illusion
  const images = [...originalImages, ...originalImages];

  useEffect(() => {
    const updateSizes = () => {
      const w = window.innerWidth;
      if (w < 640) {
        // Mobile: container width = viewport width
        setContainerWidth(w);
        setBoxWidth(w);
      } else {
        // Desktop: container wider, fixed box width
        setContainerWidth(Math.min(w, 900)); // max container width 900px
        setBoxWidth(216); // approx 200px image + gap
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);

    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  useEffect(() => {
    // Start from middle position for infinite effect
    if (sliderRef.current) {
      const slider = sliderRef.current;
      slider.scrollLeft = slider.scrollWidth / 2 - slider.clientWidth / 2;
    }
  }, [boxWidth]);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;

    const scrollAmount = direction * boxWidth;
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });

     // active button color effect
    setActiveButton(direction === 1 ? "next" : "prev");
    setTimeout(() => setActiveButton(null), 300);


    setTimeout(() => {
      const half = slider.scrollWidth / 2;
      if (direction > 0 && slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        // When scrolled to the right end, reset to middle
        slider.scrollLeft = half - slider.clientWidth;
      } else if (direction < 0 && slider.scrollLeft <= 10) {
        // When scrolled to the left end, reset to middle
        slider.scrollLeft = half;
      }
    }, 400);
  };

  // Open modal handler
  const openModal = (src) => {
    setModalImage(src);
    setModalOpen(true);
    document.body.style.overflow = "hidden"; // prevent background scroll
  };

  // Close modal handler
  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div data-aos="zoom-in" className="w-full py-12 flex flex-col items-center">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-4 scroll-smooth scrollbar-hide"
          style={{ width: containerWidth + "px" }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 rounded-lg overflow-hidden border-2 border-black bg-white flex items-center justify-center cursor-pointer"
              style={{ width: boxWidth + "px", height: "150px" }}
              onClick={() => openModal(src)}
            >
              <img
                src={src}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>

  <div className="mt-8">
          <button
            onClick={() => scrollSlider(-1)}
            className={`text-white text-2xl rounded-full w-14 h-14 mx-4 transition duration-300 cursor-pointer ${
              activeButton === "prev"
                ? "bg-purple-600"
                : "bg-black/40 hover:bg-black/60"
            }`}
          >
            &#10094;
          </button>
          <button
            onClick={() => scrollSlider(1)}
            className={`text-white text-2xl rounded-full w-14 h-14 mx-4 transition duration-300 cursor-pointer ${
              activeButton === "next"
                ? "bg-purple-600"
                : "bg-black/40 hover:bg-black/60"
            }`}
          >
            &#10095;
          </button>
        </div>
      </div>
      

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-[80vw] h-[80vh] rounded-lg shadow-lg flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal content
          >
            <img
              src={modalImage}
              alt="modal"
              className="max-w-full max-h-full object-contain rounded"
            />
            <button
              onClick={closeModal}
              className="absolute cursor-pointer top-2 right-2 text-black bg-gray-300 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold"
              aria-label="Close Modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
    </>
  );
};

export default ImageSlider;
