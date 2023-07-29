import React from "react";
import { Decal, Float } from "@react-three/drei";

const TechnicalSkills = (props) => {
  const { map } = props;

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="white" polygonOffset flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={map}
        />
      </mesh>
    </Float>
  );
};

export default TechnicalSkills;
