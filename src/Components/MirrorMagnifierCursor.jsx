import React, { useEffect, useRef, useState } from "react";

const MirrorMagnifierCursor = ({ zoomTargetRef }) => {
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const [showLens, setShowLens] = useState(false);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setCursorPos({ x: clientX, y: clientY });
      setShowLens(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {showLens && zoomTargetRef?.current && (
        <div
          className="fixed w-40 h-40 rounded-full border-2 border-white overflow-hidden z-[9999] pointer-events-none"
          style={{
            left: cursorPos.x - 80, // center lens
            top: cursorPos.y - 80,
          }}
        >
          <div
            className="scale-[2] relative"
            style={{
              transformOrigin: `${cursorPos.x}px ${cursorPos.y}px`,
              position: "absolute",
              top: -cursorPos.y + 80,
              left: -cursorPos.x + 80,
              width: "100vw",
              height: "100vh",
              pointerEvents: "none",
            }}
          >
            {/* Live clone of the app content inside the lens */}
            <div
              dangerouslySetInnerHTML={{
                __html: zoomTargetRef.current.innerHTML,
              }}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MirrorMagnifierCursor;
