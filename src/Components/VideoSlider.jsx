import React, { useState } from "react";

const videos = [
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/gill-hgnz9h59jidagqidq0ivhp5bmdjaaaf-Aq2WL9wRbQcRa3EX.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/00d-d951bLQaRJhN4j11.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/00a-1-m7V3nOQq9jUy5z3k.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/vid-20240406-wa0004-d951bLQy1jI5VP3o.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/359701361_2598124700346656_24574664336281471_n-1-Yan14LEn2QFn6JW6.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/321073323_658863636021377_5056958411199249387_n-1-1-Awv4zVwRRPtebJRL.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/120768427_3284314881653022_3478039436386755981_n-1-mv0WvGwR99cMpzjJ.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/vid-20240314-wa0002-mjE736g0q0i5QVl8.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/grounding-well-final-YD0l2JQJyqTNZNQO.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/moondial---6357-2-mePx87qXywc277z3.mp4",
];

// Double the videos to create seamless loop
const allVideos = [...videos, ...videos];

const VideoSlider = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (src) => {
    setCurrentVideo(src);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideo(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* Animation Keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="w-full pt-5">
        <div
          className="flex w-max"
          style={{
            animation: "scroll 60s linear infinite",
          }}
        >
          {allVideos.map((video, idx) => (
            <div
              key={idx}
              className="w-[300px] h-[250px] flex-shrink-0 cursor-pointer relative overflow-hidden transition-transform duration-300 hover:scale-105 bg-gray-800"
              onClick={() => openModal(video)}
            >
              <video
                className="w-full h-full object-cover"
                muted
                loop
                preload="metadata"
                playsInline
                src={`${video}#t=0.1`}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl pointer-events-none">
                ▶
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 focus:outline-none cursor-pointer"
            >
              &times;
            </button>
            <video
              key={currentVideo}
              src={currentVideo}
              controls
              autoPlay
              className="w-full max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSlider;
