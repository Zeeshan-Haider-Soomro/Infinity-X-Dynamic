// src/Components/IntroVideo.jsx
const IntroVideo = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        
      >
        <source src="/IntroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default IntroVideo
