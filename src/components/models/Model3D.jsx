import React, { Suspense, useEffect, useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export default function Static3DModel(props) {
  const { scene } = useGLTF("/model/chatbot.glb");
  const modelRef = useRef();

  // ✅ Clone the model to avoid shared scene issues
  const clonedScene = useMemo(() => clone(scene), [scene]);

  useEffect(() => {
    if (!clonedScene || !modelRef.current) return;

    let blinkMesh = null;
    let blinkIndex = null;
    let blinkTimeout;
    let leftHand = null;
    let rightHand = null;
    let handInterval;

    // Traverse model to find blink morph and hands
    modelRef.current.traverse((child) => {
      if (child.isMesh && child.morphTargetDictionary?.Blink !== undefined) {
        blinkMesh = child;
        blinkIndex = child.morphTargetDictionary.Blink;
      }

      if (child.isBone) {
        const name = child.name.toLowerCase();
        if (name.includes("hand_l") || name.includes("lefthand")) {
          leftHand = child;
        }
        if (name.includes("hand_r") || name.includes("righthand")) {
          rightHand = child;
        }
      }
    });

    // Blink logic
    if (blinkMesh && blinkIndex !== null) {
      const blink = () => {
        blinkMesh.morphTargetInfluences[blinkIndex] = 1;
        setTimeout(() => {
          blinkMesh.morphTargetInfluences[blinkIndex] = 0;
        }, 150);
      };

      const startBlinking = () => {
        blink();
        blinkTimeout = setTimeout(startBlinking, Math.random() * 3000 + 3000);
      };

      startBlinking();
    }

    // Hand wave animation
    let handDirection = 1;
    const animateHands = () => {
      if (leftHand) leftHand.rotation.z += 0.1 * handDirection;
      if (rightHand) rightHand.rotation.z -= 0.1 * handDirection;
      handDirection *= -1;
    };

    handInterval = setInterval(animateHands, 2000);

    return () => {
      clearTimeout(blinkTimeout);
      clearInterval(handInterval);
    };
  }, [clonedScene]);

  // Head or other movement
  let angle = 0;
  let direction = 1;

  useFrame(() => {
    const leftHand = modelRef.current.getObjectByName("Cube003");
    if (leftHand) {
      angle += 0.01 * direction;
      if (angle > 0.5 || angle < -0.5) direction *= -1;
      leftHand.rotation.x = angle;
    }
  });

  return (
    <Suspense fallback={null}>
      <primitive ref={modelRef} object={clonedScene} {...props} />
    </Suspense>
  );
}
