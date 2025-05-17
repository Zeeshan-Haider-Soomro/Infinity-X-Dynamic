import React, { useState } from "react";

const videos = [
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-11-at-00.08.34_9da75282-YX4lpBEPNqHaBxPY.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-10-at-23.20.23_2aa91aa1-AGB2KWlzkpc753kL.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-10-at-23.17.04_f8d7ba76-AR0LKDavN2FDLMP2.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/vid-20240510-wa0040-AXb0bqDaVZtV6vEz.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/vid-20240510-wa0039-YD0l2JQ7xMTDNZrQ.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-10-at-23.17.04_66e4d0fb-mv0WV1ree9caMN8V.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-10-at-23.17.03_da7da9f9-d951VBGGvQCg4EaD",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-10-at-23.17.03_76a6014e-ALperQMEWohnLgQM.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-10-at-23.17.03_4d74b5f9-Aq2WVDwgRns3yND6.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-10-at-23.17.02_83f7edce-ALperQMXljHkplBj.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-10-at-23.17.02_9da82c77-Awv4oBwkZLUGxpNj.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-10-at-23.16.00_158355b1-m7V30eQVzMi42v3k.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-10-at-23.16.00_4fca8df1-dOqaoPepbWUl5k4B.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-10-at-23.15.59_e7f4eb3b-A0xlpPGVMpiJ1Xa2.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-10-at-23.15.58_36eb4d1b-mnlWVPgeRbcq6Ql4.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-10-at-23.15.55_77f193d7-dOqaoPeN6Ncp3O2J.mp4",
  "https://assets.zyrosite.com/AVL7Qn7WvkSKJGaj/whatsapp-video-2025-05-10-at-23.15.54_4f5173bc-YNqBKl3pJaiLneQ8.mp4",

];

// Duplicate array for seamless infinite scrolling
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
      {/* Custom keyframes for RIGHTWARD scroll */}
      <style>{`
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="w-full">
        <div
          className="flex w-max"
          style={{
            animation: "scrollRight 100s linear infinite",
          }}
        >
          {allVideos.map((video, idx) => (
            <div
              key={idx}
              onClick={() => openModal(video)}
              className="w-[300px] h-[250px] flex-shrink-0 cursor-pointer relative overflow-hidden transition-transform duration-300 hover:scale-105 bg-gray-800"
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
              className="w-full max-h-[80vh] rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSlider;
