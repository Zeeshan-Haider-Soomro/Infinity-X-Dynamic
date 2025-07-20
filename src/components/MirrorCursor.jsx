import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const MirrorCursor = () => {
  const x1 = useMotionValue(-100);
  const y1 = useMotionValue(-100);

  const x2 = useMotionValue(-100);
  const y2 = useMotionValue(-100);

  const spring1 = {
    damping: 20,
    stiffness: 300,
  };

  const spring2 = {
    damping: 40,
    stiffness: 100,
  };

  const cursorX = useSpring(x1, spring1);
  const cursorY = useSpring(y1, spring1);

  const mirrorX = useSpring(x2, spring2);
  const mirrorY = useSpring(y2, spring2);

  useEffect(() => {
    const move = (e) => {
      const { clientX, clientY } = e;
      x1.set(clientX - 10);
      y1.set(clientY - 10);

      // Mirror effect (reverse movement or offset)
      const mirrorOffsetX = window.innerWidth - clientX;
      const mirrorOffsetY = window.innerHeight - clientY;
      x2.set(mirrorOffsetX - 10);
      y2.set(mirrorOffsetY - 10);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x1, y1, x2, y2]);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="w-6 h-6 rounded-full bg-yellow-400 fixed pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY }}
      />

      {/* Mirror Cursor */}
      <motion.div
        className="w-6 h-6 rounded-full bg-purple-500 fixed pointer-events-none z-[9998] opacity-70"
        style={{ x: mirrorX, y: mirrorY }}
      />
    </>
  );
};

export default MirrorCursor;
