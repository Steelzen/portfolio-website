import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const TechnicalSkillsOct = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[1, 0]} ref={meshRef} />
      <meshStandardMaterial color="orange" wireframe="true" />
    </mesh>
  );
};

export default TechnicalSkillsOct;
