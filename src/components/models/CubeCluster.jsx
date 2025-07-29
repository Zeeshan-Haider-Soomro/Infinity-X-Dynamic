import { useRef } from "react";
import { useFrame } from "@react-three/fiber";


const positions = [
  [0, 0, 0],         // center
  [1.1, 0, 0],       // right
  [-1.1, 0, 0],      // left
  [0, 1.1, 0],       // top
  [0, -1.1, 0],      // bottom
  [0, 0, 1.1],       // front
  [0, 0, -1.1],      // back
]

export const CubeCluster = () => {
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
      groupRef.current.rotation.x += 0.005
    }
  })

  return (
    <group ref={groupRef} scale={[1.5, 1.5, 1.5]}> {/* Increase scale here */}
      {positions.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#87F5FB"
            metalness={0.6}
            roughness={0.1}
            emissive="#49BFEF"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}