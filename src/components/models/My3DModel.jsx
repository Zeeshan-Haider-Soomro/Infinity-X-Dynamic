import React, { Suspense, useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


export default function My3DModel(props) {
    const { scene } = useGLTF("/model/robot1.glb");
    const modelRef = useRef();

    // Animation sequence state
    const animationSteps = [
        { axis: "y", value: Math.PI / 4, duration: 120 },
        { axis: "x", value: -Math.PI / 8, duration: 120 },
        { axis: "y", value: -Math.PI / 4, duration: 120 },  
        { axis: "x", value: 0, duration: 60 },
        { axis: "y", value: 0, duration: 60 },
    ];

    const stepIndex = useRef(0);
    const frameCount = useRef(0);

    useFrame(() => {
        if (!modelRef.current) return;

        const step = animationSteps[stepIndex.current];
        if (!step) return;

        // Interpolate rotation toward target
        const currentRotation = modelRef.current.rotation[step.axis];
        const targetRotation = step.value;
        modelRef.current.rotation[step.axis] += (targetRotation - currentRotation) * 0.05;

        frameCount.current += 1;
        if (frameCount.current > step.duration) {
            frameCount.current = 0;
            stepIndex.current = (stepIndex.current + 1) % animationSteps.length;
        }
    });

    return (
        <Suspense fallback={null}>
            <primitive ref={modelRef} object={scene} {...props} />
        </Suspense>
    );
}
