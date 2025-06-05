import { useState } from "react";
import { PlayCircle } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";

export default function VideoGallery({ videos, title = "Our Videos" }) {
  const [modalVideo, setModalVideo] = useState(null);

  const openModal = (video) => setModalVideo(video);
  const closeModal = () => setModalVideo(null);

  return (
    <div className="py-12  text-white">
      {/* <h2 className="text-3xl font-bold text-center mb-8">{title}</h2> */}
      <div className="text-center grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 px-4 max-w-6xl mx-auto">
        {videos?.map((video, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => openModal(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <PlayCircle className="w-12 h-12 text-white" />
              <span className="mt-2 text-lg">Play</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-black p-4 rounded-lg max-w-3xl w-full relative">
            <button
              onClick={closeModal}
              className="cursor-pointer absolute md:-top-5 top-0 right-0 md:-right-5 text-white text-2xl font-bold"
            >
              x
            </button>
            <video controls autoPlay className="w-full h-auto rounded-md">
              <source src={modalVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 className="mt-2 text-xl text-center">{modalVideo.title}</h3>
          </div>
        </div>
      )}
      <ScrollToTopButton/>
    </div>
  );
}
