"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { BBAnchor, CameraControls, Center, Fisheye, Float, OrbitControls, PresentationControls, Sky, Sparkles, Stars, Text3D, Trail } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export function MeshComponent({ fileUrl, yRotation, zRotation }: { fileUrl: string, yRotation: number, zRotation: number }) {
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += yRotation;
    mesh.current.rotation.z += zRotation;
  });

  return (
    <Center>
      <mesh ref={mesh}>
        <primitive object={gltf.scene} />
      </mesh>
    </Center>
  );
}

export function ReactModel({ fileUrl, yRotation, zRotation }: { fileUrl: string, yRotation: number, zRotation: number }) {
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
        <ambientLight color={[1, 1, 255]} intensity={.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Center position={[0, 2, 0]} rotation={[-0.1, 0, 0]}>
          <PresentationControls
            global={false}
            cursor={false}
            snap
            speed={2.5}
            azimuth={[0, 0]}
            polar={[-Infinity, Infinity]}
          >
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
              <Text3D
                font={"/fonts/Inter_SemiBold_Regular.json"}
                letterSpacing={-0.08}
              >
                React
                <meshBasicMaterial color={[1, 1, 50]} />
              </Text3D>
            </Float>
          </PresentationControls>
        </Center>
        <Center position={[0, -1, 0]} rotation={[-0.25, 0, 0]}>
          <PresentationControls
            global
            cursor={false}
            snap={true}
            polar={[0, 0]}
          >
            <Float speed={2} rotationIntensity={.5} floatIntensity={1}>
              <MeshComponent fileUrl={fileUrl} yRotation={yRotation} zRotation={zRotation} />
            </Float>
          </PresentationControls>
        </Center>
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1.2} radius={.4} />
        </EffectComposer>
      </Canvas>
    </div >
  );
}

export function ModelViewer({ fileUrl }: { fileUrl: string }) {
  return (
    <div className='flex justify-center items-center w-full h-full cursor-grab'>
      <Canvas className='h-full w-full'>
        <ambientLight color={[1, 1, 1]} intensity={1} />
        <directionalLight position={[1, 1, 1]} intensity={1} />
        <pointLight position={[1, 1, 1]} intensity={1} />
        <MeshComponent fileUrl={fileUrl} yRotation={0} zRotation={0} />
        <CameraControls />
      </Canvas>
    </div>
  );
}