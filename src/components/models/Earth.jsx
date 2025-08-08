"use client";

import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./Loader";

const Earth = () => {
  const { scene } = useGLTF("./planet/scene.gltf");

  // Add rotation logic using useFrame
  useFrame(() => {
    if (scene) {
      scene.rotation.y += 0.005; // Adjust the speed by changing 0.01
    }
  });

  return (
    <primitive
      object={scene}
      scale={1.8}
      position-y={0}
      rotation-y={0}
      position-z={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <div
      className="absolute inset-0"
      style={{
        zIndex: 5,
        pointerEvents: "auto", // Enable pointer events
      }}
    >
      <Canvas
        shadows
        frameloop="always" // Ensure continuous updates
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EarthCanvas;
