import React, { useState } from "react";

const AchievementGallery = () => {
  const images = [
    "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-A0xl9Rgr1jT8ByNZ.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-A0xl9Rgr1jT8ByNZ.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-A0xl9Rgr1jT8ByNZ.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mjE7bJk5qGIPRb7W.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mv0WrG7P8yHp3V5p.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mv0WrG7P8yHp3V5p.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mv0WrG7P8yHp3V5p.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mv0WrG7P8yHp3V5p.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mv0WrG7P8yHp3V5p.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mv0WrG7P8yHp3V5p.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mv0WrG7P8yHp3V5p.png",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/generated/generated-mv0WrG7P8yHp3V5p.png",
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div data-aos="flip-up" className="md:px-20 p-5 pb-20 text-center">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Achievement ${index + 1}`}
            className="w-full h-auto cursor-pointer rounded shadow-md hover:scale-105 transition"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute cursor-pointer top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 cursor-pointer text-white text-4xl hover:scale-110 transition"
          >
            &#10094;
          </button>

          <img
            src={images[currentIndex]}
            alt={`Modal ${currentIndex}`}
            className="max-w-full max-h-[80vh] rounded-lg"
          />

          <button
            onClick={nextImage}
            className="absolute cursor-pointer right-4 text-white text-4xl hover:scale-110 transition"
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default AchievementGallery;
