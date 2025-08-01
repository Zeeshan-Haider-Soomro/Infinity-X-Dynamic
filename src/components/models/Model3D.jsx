import React, { Suspense, useEffect, useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

export default function Static3DModel(props) {
  const { scene } = useGLTF("/model/robot.glb");
  const modelRef = useRef();

  const clonedScene = useMemo(() => clone(scene), [scene]);

  useEffect(() => {
    if (!clonedScene || !modelRef.current) return;

    let blinkMesh = null;
    let blinkIndex = null;
    let blinkTimeout;

    // Traverse through model children
    modelRef.current.traverse((child) => {
      console.log("Child name:", child.name);

      if (child.isMesh && child.morphTargetDictionary?.Blink !== undefined) {
        blinkMesh = child;
        blinkIndex = child.morphTargetDictionary.Blink;
      }
    });

    // Blinking
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

    return () => {
      clearTimeout(blinkTimeout);
    };
  }, [clonedScene]);

  // Animate head or hand continuously

  useFrame(({ clock }) => {
    if (!modelRef.current) return;

    const leftHand = modelRef.current.getObjectByName("Left_Hand");
    const rightHand = modelRef.current.getObjectByName("Righ_Hand");

    if (!leftHand || !rightHand) return;

    const t = clock.getElapsedTime();

    // Smooth oscillating angle (like a servo easing in/out)
    const leftRotationX = 0.4 * Math.sin(t * 1.2);
    const rightRotationX = 0.3 * Math.sin(t * 1.2 + Math.PI); // opposite phase

    // Add subtle servo-like vibration
    const vibration = Math.sin(t * 30) * 0.002;

    // Apply smoothed robotic motion
    leftHand.rotation.x = leftRotationX + vibration;
    leftHand.rotation.y = -1.2 + vibration;

    rightHand.rotation.x = rightRotationX + vibration;
    rightHand.rotation.y = -0.3 + vibration;
  });



  return (
    <Suspense fallback={null}>
      <primitive ref={modelRef} object={clonedScene} {...props} />
    </Suspense>
  );
}
