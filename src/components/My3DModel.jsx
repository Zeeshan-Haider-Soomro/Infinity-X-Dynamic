import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

export default function My3DModel(props) {
  const { scene } = useGLTF("/model/robot1.glb"); // ✅ path from /public

  return (
    <Suspense fallback={null}>
      <primitive object={scene} {...props} />
    </Suspense>
  );
}
