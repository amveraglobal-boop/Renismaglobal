"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Stars, OrbitControls, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import styles from "./GlobalCanvas.module.css";

// A glowing rotating globe
function GlobeComponent() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial 
          color="#020617" 
          emissive="#0f172a"
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
          transparent={true}
          opacity={0.3}
        />
      </mesh>
      {/* A second inner solid sphere to block light */}
      <mesh>
        <sphereGeometry args={[1.9, 32, 32]} />
        <meshBasicMaterial color="#020617" />
      </mesh>
    </Float>
  );
}

// Particle System around the globe
function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.05;
      pointsRef.current.rotation.z -= delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <sphereGeometry args={[3, 48, 48]} />
      <pointsMaterial 
        color="#3b82f6" 
        size={0.02} 
        transparent={true} 
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function GlobalCanvas() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#020617']} />
        
        {/* Cinematic Lighting */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#3b82f6" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#8b5cf6" />
        
        {/* Background Stars / Dust */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Core Elements */}
        <GlobeComponent />
        <ParticleSystem />
        
        {/* Fog for depth */}
        <fog attach="fog" args={["#020617", 5, 20]} />
        
        {/* OrbitControls disabled for production, but can be enabled for debug */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
}
