"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sky, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";

function MeshComponent() {
   const fileUrl = "/models/react_logo/scene.gltf";
   const mesh = useRef<Mesh>(null!);
   const gltf = useLoader(GLTFLoader, fileUrl);

   useFrame(() => {
      mesh.current.rotation.y += 0.0005;
   });

   return (
      <mesh ref={mesh}>
         <primitive object={gltf.scene} />
      </mesh>
   );
}

export function Model() {
   return (
      <div className='flex justify-center items-center h-screen'>
         <Canvas className='h-2xl w-2xl'>
            <Stars radius={100} depth={5} count={5000} factor={5} saturation={1} fade speed={1} />
            <OrbitControls />
            <ambientLight />
            <pointLight color={0x8000FF} position={[1, 1, 1]} />
            <MeshComponent />
         </Canvas>
      </div>
   );
}