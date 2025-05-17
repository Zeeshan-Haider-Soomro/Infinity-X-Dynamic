import React, { useRef } from "react";

const HistorySlider = () => {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const scrollAmount = 320 * direction;
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    // Agar right scroll (direction = 1)
    if (direction === 1) {
      if (slider.scrollLeft + scrollAmount >= maxScrollLeft) {
        // End tak pahunche to start pe jump karo
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    } 
    // Agar left scroll (direction = -1)
    else if (direction === -1) {
      if (slider.scrollLeft + scrollAmount <= 0) {
        // Start tak pahunche to end pe jump karo
        slider.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const content = [
    {
      img: "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-image-2025-04-30-at-23.18.20_48c04afc-YX4lgy7B8guPk6XL.jpg",
      title: "Delicious Biryani",
      desc: "Enjoy the authentic taste of traditional biryani made with aromatic spices and tender meat.",
    },
    {
      img: "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-image-2025-04-30-at-23.18.20_48c04afc-YX4lgy7B8guPk6XL.jpg",
      title: "Delicious Biryani",
      desc: "Enjoy the authentic taste of traditional biryani made with aromatic spices and tender meat.",
    },
    {
      img: "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-image-2025-04-30-at-23.18.20_48c04afc-YX4lgy7B8guPk6XL.jpg",
      title: "Delicious Biryani",
      desc: "Enjoy the authentic taste of traditional biryani made with aromatic spices and tender meat.",
    },
    {
      img: "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-image-2025-04-30-at-23.18.20_48c04afc-YX4lgy7B8guPk6XL.jpg",
      title: "Delicious Biryani",
      desc: "Enjoy the authentic taste of traditional biryani made with aromatic spices and tender meat.",
    },
    {
      img: "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-image-2025-04-30-at-23.18.20_48c04afc-YX4lgy7B8guPk6XL.jpg",
      title: "Delicious Biryani",
      desc: "Enjoy the authentic taste of traditional biryani made with aromatic spices and tender meat.",
    },
    {
      img: "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-image-2025-04-30-at-23.18.20_48c04afc-YX4lgy7B8guPk6XL.jpg",
      title: "Juicy Burgers",
      desc: "Savor our juicy burgers packed with flavor, freshness, and cheesy goodness in every bite.",
    },
    {
      img: "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-image-2025-04-30-at-23.18.20_48c04afc-YX4lgy7B8guPk6XL.jpg",
      title: "Fresh Juices",
      desc: "Quench your thirst with a wide range of freshly squeezed juices and tropical fruit blends.",
    },
    {
      img: "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-image-2025-04-30-at-23.18.20_48c04afc-YX4lgy7B8guPk6XL.jpg",
      title: "Crunchy Fries",
      desc: "Golden crispy fries served hot, seasoned perfectly and paired with your favorite dips.",
    },
  ];

  return (
    <div className="w-full p-4 box-border">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-5 mb-4 scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {content.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[300px] border-2 border-black rounded-lg bg-white shadow-md p-4 text-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[200px] object-cover rounded mb-2"
              draggable={false}
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => scrollSlider(-1)}
          className="text-white cursor-pointer bg-black/40 hover:bg-black/60 rounded-full w-14 h-14 mx-2 text-2xl transition"
          aria-label="Previous"
        >
          &#10094;
        </button>
        <button
          onClick={() => scrollSlider(1)}
          className="text-white cursor-pointer bg-black/40 hover:bg-black/60 rounded-full w-14 h-14 mx-2 text-2xl transition"
          aria-label="Next"
        >
          &#10095;
        </button>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default HistorySlider;
