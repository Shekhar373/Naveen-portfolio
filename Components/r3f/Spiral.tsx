import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Spiral: React.FC = () => {
  const images = useMemo(
    () => [
      "https://framerusercontent.com/images/IgcLM5XRZfZmy0Ph6km2OLPpw.png?width=1086&height=1448",
      "https://framerusercontent.com/images/ZY76J4LouMuIKz0buwgPhxEJIBU.png?width=1086&height=1448",
      "https://framerusercontent.com/images/fzqeAHtYZd9CYFZh8M3VqfUnVs.png?width=1108&height=1419",

      "https://framerusercontent.com/images/IgcLM5XRZfZmy0Ph6km2OLPpw.png?width=1086&height=1448",
      "https://framerusercontent.com/images/oqUykYiEDQO01is0FNb0Kac6qE.png?scale-down-to=1024&width=1122&height=1402",
      "https://framerusercontent.com/images/fzqeAHtYZd9CYFZh8M3VqfUnVs.png?width=1108&height=1419",

      "https://framerusercontent.com/images/IgcLM5XRZfZmy0Ph6km2OLPpw.png?width=1086&height=1448",
      "https://framerusercontent.com/images/ZY76J4LouMuIKz0buwgPhxEJIBU.png?width=1086&height=1448",
      "https://framerusercontent.com/images/oqUykYiEDQO01is0FNb0Kac6qE.png?scale-down-to=1024&width=1122&height=1402",

      "https://framerusercontent.com/images/nMqeFohgcxFNUB4OkEYDrMJBac8.png?width=657&height=669",
      "https://framerusercontent.com/images/fzqeAHtYZd9CYFZh8M3VqfUnVs.png?width=1108&height=1419",
      "https://framerusercontent.com/images/nMqeFohgcxFNUB4OkEYDrMJBac8.png?width=657&height=669",
    ],
    [],
  );

  const rotationRef = useRef<THREE.Group>(null);

  const textures = useTexture(images);

  const radius = 3;

  const getAngle = (index: number, total: number) => {
    return (index / total) * Math.PI * 2;
  };

  useFrame((state, delta) => {
    if (!rotationRef.current) return;

    // Continuous rotation
    rotationRef.current.rotation.y += delta * 0.15;

    // Mouse position (-1 to 1)
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    // Subtle movement (reduced strength)
    const targetX = mouseY * 0.05; // less effect than before
    const targetY = mouseX * 0.06; // less effect than before

    // Smooth interpolation
    rotationRef.current.rotation.x = THREE.MathUtils.lerp(
      rotationRef.current.rotation.x,
      targetX,
      0.05
    );

    // rotationRef.current.rotation.y = THREE.MathUtils.lerp(
    //   rotationRef.current.rotation.y,
    //   rotationRef.current.rotation.y + targetY,
    //   0.05
    // );
  });

  return (
    // STATIC GROUP
    <group position={[0, 0.7, 0]} rotation={[0.2, 0, 0.2]}>
      {/* ONLY THIS GROUP ROTATES */}
      <group ref={rotationRef}>
        {textures.map((texture, i) => {
          const angle = getAngle(i, textures.length);

          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;

          return (
            <mesh
              key={i}
              position={[x, 0, z]}
              rotation={[0, angle + Math.PI, 0]}
            >
              <planeGeometry args={[1, 1.4]} />

              <meshBasicMaterial
                map={texture}
                side={THREE.DoubleSide}
                toneMapped={false}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
};

export default Spiral;
