"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { BBAnchor, CameraControls, Center, Fisheye, OrbitControls, PresentationControls, Sky, Sparkles, Stars, Text3D } from "@react-three/drei";
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
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={5}
          fade
          speed={2} />
        <ambientLight intensity={.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Center position={[0, 2, 0]} rotation={[-0.25, 0, 0]}>
          <PresentationControls
            global={false}
            cursor={false}
            snap
            speed={2.5}
            azimuth={[0, 0]}
            polar={[-Infinity, Infinity]}
          >
            <Text3D
              font={"/fonts/Inter_SemiBold_Regular.json"}
              letterSpacing={-0.08}
            >
              React
              <meshNormalMaterial />
            </Text3D>
          </PresentationControls>
        </Center>
        <Center position={[0, -1, 0]} rotation={[-0.25, 0, 0]}>
          <PresentationControls
            global={false}
            cursor={false}
            snap={true}
            polar={[0, 0]}
          >
            <MeshComponent />
          </PresentationControls>
        </Center>
      </Canvas>
    </div >
  );
}