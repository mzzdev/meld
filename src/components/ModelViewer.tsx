"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { BBAnchor, CameraControls, Center, Fisheye, OrbitControls, Sky, Stars, Text3D } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

function MeshComponent() {
  const fileUrl = "/models/react_logo/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  });

  return (
    <Center>
      <mesh ref={mesh}>
        <primitive object={gltf.scene} />
      </mesh>
    </Center>
  );
}

export function Model() {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <Canvas className='h-full w-full'>
        <Stars radius={100} depth={5} count={5000} factor={5} saturation={1} fade speed={1} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}