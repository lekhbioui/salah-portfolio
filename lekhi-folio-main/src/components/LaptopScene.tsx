import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const LaptopModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.25;
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* Base */}
      <mesh position={[0, -0.4, 0]}>
        <boxGeometry args={[2.4, 0.18, 1.6]} />
        <meshStandardMaterial color="#0f172a" metalness={0.7} roughness={0.25} />
      </mesh>

      {/* Screen frame */}
      <mesh position={[0, 0.55, -0.65]} rotation={[-0.25, 0, 0]}>
        <boxGeometry args={[2.2, 1.45, 0.1]} />
        <meshStandardMaterial color="#111827" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0.55, -0.59]} rotation={[-0.25, 0, 0]}>
        <planeGeometry args={[1.95, 1.2]} />
        <meshStandardMaterial
          color="#0ea5e9"
          emissive="#0284c7"
          emissiveIntensity={1.1}
          metalness={0.2}
          roughness={0.15}
        />
      </mesh>

      {/* Keyboard zone */}
      <mesh position={[0, -0.28, 0.08]}>
        <boxGeometry args={[1.8, 0.03, 1]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      {/* Glow platform */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.1, 64]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.35} />
      </mesh>
    </group>
  );
};

const LaptopScene = () => {
  return (
    <div className="w-full h-[520px]">
      <Canvas camera={{ position: [0, 1.2, 4.8], fov: 42 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-4, 3, 2]} intensity={2} color="#38bdf8" />
        <pointLight position={[4, -2, 2]} intensity={1.5} color="#8b5cf6" />

        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.8}>
          <LaptopModel />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.2}
          maxPolarAngle={Math.PI / 1.9}
          minPolarAngle={Math.PI / 2.6}
        />
      </Canvas>
    </div>
  );
};

export default LaptopScene;