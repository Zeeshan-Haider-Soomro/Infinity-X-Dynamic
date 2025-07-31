import React, { Suspense, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Static3DModel(props) {
  const { scene } = useGLTF("/model/chatbot.glb");
  const modelRef = useRef();

  useEffect(() => {
    if (!scene || !modelRef.current) return;

    let blinkMesh = null;
    let blinkIndex = null;
    let blinkTimeout;
    let leftHand = null;
    let rightHand = null;
    let handInterval;

    // Traverse model to find blink morph target and hand bones
    modelRef.current.traverse((child) => {
      if (child.isMesh && child.morphTargetDictionary?.Blink !== undefined) {
        blinkMesh = child;
        blinkIndex = child.morphTargetDictionary.Blink;
      }

      if (child.isBone) {
        const name = child.name.toLowerCase();
        if (name.includes("hand_l") || name.includes("lefthand")) {
          leftHand = child;
          console.log("Found Left Hand:", child.name);
        }
        if (name.includes("hand_r") || name.includes("righthand")) {
          rightHand = child;
          console.log("Found Right Hand:", child.name);
        }
      }
    });

    // 🟢 Start blinking if Blink morph target exists
    if (blinkMesh && blinkIndex !== null) {
      const blink = () => {
        blinkMesh.morphTargetInfluences[blinkIndex] = 1; // Close eyes
        setTimeout(() => {
          blinkMesh.morphTargetInfluences[blinkIndex] = 0; // Open eyes
        }, 150);
      };

      const startBlinking = () => {
        blink();
        blinkTimeout = setTimeout(startBlinking, Math.random() * 3000 + 3000); // every 3–6 sec
      };

      startBlinking();
    }

    // ✋ Hand animation: small waving motion
    let handDirection = 1;
    const animateHands = () => {
      if (leftHand) {
        leftHand.rotation.z += 0.1 * handDirection;
      }
      if (rightHand) {
        rightHand.rotation.z -= 0.1 * handDirection;
      }
      handDirection *= -1;
    };

    handInterval = setInterval(animateHands, 2000);

    // Cleanup
    return () => {
      clearTimeout(blinkTimeout);
      clearInterval(handInterval);
    };
  }, [scene]);
  
  let angle = 0;
let direction = 1;

// Model3D.jsx:82 Group: Scene
// Model3D.jsx:82 Mesh: Cube  = body
// Model3D.jsx:82 Group: Cube001 = head
// Model3D.jsx:82 Mesh: Cube002_1 
// Model3D.jsx:82 Mesh: Cube002_2
// Model3D.jsx:82 Mesh: Cube004
// Model3D.jsx:82 Mesh: Cube002
// Model3D.jsx:82 Mesh: Cube003



// cube001 is the head mome

useFrame(() => {
  const leftHand = modelRef.current.getObjectByName("Cube003");
  if (leftHand) {
    angle += 0.01 * direction;
    if (angle > 0.5 || angle < -0.5) direction *= -1;

    leftHand.rotation.x = angle; // waving forward/backward
  
  }
});

  return (
    <Suspense fallback={null}>
      <primitive ref={modelRef} object={scene} {...props} />
    </Suspense>
  );
}
