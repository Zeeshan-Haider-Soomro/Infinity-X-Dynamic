// components/ThreeBackground.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const FloatingGalaxy = () => {
  const groupRef = useRef();
  const particlesRef = useRef();
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.x += delta * 0.05;
      particlesRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        {/* Central glowing sphere */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[3, 32, 32]} />
          <meshStandardMaterial 
            color="#A95C9C" 
            emissive="#A95C9C"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Ring structure */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[8, 0.5, 16, 100]} />
          <meshStandardMaterial 
            color="#3C0945" 
            emissive="#A95C9C"
            emissiveIntensity={0.3}
            wireframe
          />
        </mesh>
      </group>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2000}
            array={new Float32Array(
              Array.from({ length: 2000 * 3 }, () => THREE.MathUtils.randFloatSpread(200)
            ))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#FFFFFF"
          size={0.5}
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>
    </>
  );
};


const ThreeDBackground = () => (
  <div className="absolute inset-0 z-0">
    <Canvas camera={{ position: [0, 0, 25], fov: 45 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#A95C9C" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3C0945" />
      <Suspense fallback={null}>
        <FloatingGalaxy />
        <OrbitControls 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          enablePan={false}
        />
      </Suspense>
      <color attach="background" args={['#1a0431']} />
    </Canvas>
  </div>
);


export default ThreeDBackground;