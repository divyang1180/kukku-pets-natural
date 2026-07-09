"use client";

import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Environment, Text } from "@react-three/drei";
import type { Group } from "three";

function ProductBottle() {
  const meshRef = useRef<Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle oscillation so the label stays mostly face-forward
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.6) * 0.45;
    }
  });

  return (
    <group ref={meshRef} position={[0, -0.2, 0]}>
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[0.65, 0.65, 2.2, 32]} />
        <meshStandardMaterial
          color="#2ECC71"
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.92}
        />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.66, 0.66, 1.4, 32]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.6} metalness={0.0} />
      </mesh>

      {/* ── Brand Text on bottle front ── */}
      <Text
        position={[0, 0.25, 0.67]}
        fontSize={0.14}
        font="/fonts/Poppins-ExtraBold.ttf"
        color="#1D3557"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.06}
      >
        KUKKU
      </Text>
      <Text
        position={[0, 0.1, 0.67]}
        fontSize={0.075}
        font="/fonts/Poppins-Bold.ttf"
        color="#2ECC71"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.08}
      >
        PETS NATURAL
      </Text>

      {/* Thin divider line */}
      <mesh position={[0, 0.02, 0.67]}>
        <boxGeometry args={[0.5, 0.006, 0.001]} />
        <meshStandardMaterial color="#2ECC71" roughness={0.3} />
      </mesh>

      <Text
        position={[0, -0.06, 0.67]}
        fontSize={0.042}
        font="/fonts/Inter-Medium.ttf"
        color="#4a6fa5"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
      >
        PREMIUM DENTAL CARE
      </Text>

      <Text
        position={[0, -0.2, 0.67]}
        fontSize={0.065}
        font="/fonts/Poppins-Bold.ttf"
        color="#1D3557"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.04}
      >
        PET DENTAL RINSE
      </Text>

      <Text
        position={[0, -0.32, 0.67]}
        fontSize={0.035}
        font="/fonts/Inter-Medium.ttf"
        color="#6b8ab8"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.06}
      >
        FOR DOGS & CATS
      </Text>

      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.3, 0.35, 0.3, 32]} />
        <meshStandardMaterial color="#2ECC71" roughness={0.2} metalness={0.1} />
      </mesh>

      <mesh position={[0, 1.45, 0]}>
        <cylinderGeometry args={[0.33, 0.33, 0.3, 32]} />
        <meshStandardMaterial color="#1D3557" roughness={0.4} metalness={0.5} />
      </mesh>
    </group>
  );
}

function MouseParallax() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 1.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.current.y * 1.5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function FloatingElements() {
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <Float
          key={`drop-${i}`}
          speed={1.5 + i * 0.5}
          floatIntensity={1.5}
          rotationIntensity={1}
          position={[
            (i % 2 === 0 ? -1.8 : 1.8) + (Math.random() - 0.5) * 0.5,
            -1 + i * 0.8,
            -0.5 + (Math.random() - 0.5) * 0.5,
          ]}
        >
          <mesh>
            <sphereGeometry args={[0.18, 16, 16]} />
            <meshStandardMaterial
              color="#00B8D9"
              roughness={0.1}
              metalness={0.3}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}

      {[...Array(3)].map((_, i) => (
        <Float
          key={`bone-${i}`}
          speed={1 + i * 0.6}
          floatIntensity={1.2}
          rotationIntensity={1.5}
          position={[
            (i % 2 === 0 ? 2 : -2) + (Math.random() - 0.5) * 0.5,
            1.2 - i * 1.2,
            -1 + (Math.random() - 0.5) * 0.5,
          ]}
        >
          <group rotation={[Math.random(), Math.random(), 0]}>
            <mesh castShadow>
              <boxGeometry args={[0.5, 0.12, 0.12]} />
              <meshStandardMaterial color="#f7f5ee" roughness={0.8} />
            </mesh>
            <mesh position={[-0.25, 0, 0]}>
              <sphereGeometry args={[0.12, 8, 8]} />
              <meshStandardMaterial color="#f7f5ee" roughness={0.8} />
            </mesh>
            <mesh position={[0.25, 0, 0]}>
              <sphereGeometry args={[0.12, 8, 8]} />
              <meshStandardMaterial color="#f7f5ee" roughness={0.8} />
            </mesh>
          </group>
        </Float>
      ))}
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.8], fov: 45 }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8} scale={1.15}>
        <ProductBottle />
      </Float>

      <FloatingElements />

      <Environment preset="sunset" />
      <MouseParallax />
    </Canvas>
  );
}
