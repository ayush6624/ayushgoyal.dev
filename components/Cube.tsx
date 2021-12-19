import { MeshWobbleMaterial } from '@react-three/drei';
import { useFrame, MeshProps } from '@react-three/fiber';
import { useRef } from 'react';

interface CubeMeshProps {
  position: [number, number, number];
  color?: string;
  args?: [number, number, number];
  speed: number;
}

export const Cube = ({ position, color, args, speed }: CubeMeshProps) => {
  const meshRef = useRef<MeshProps>(null);

  useFrame(() => {
    if (meshRef && meshRef.current) {
      meshRef.current.rotation.x +=-.03; meshRef.current.rotation.y += 0.03
    }
  });

  return (
    <mesh castShadow ref={meshRef} position={position}>
      <boxBufferGeometry attach="geometry" args={args ?? [2, 2, 2]} />
      {/* @ts-expect-error Poorly defined types */}
      <MeshWobbleMaterial
        factor={0.4}
        speed={speed}
        attach="material"
        color={color}
      />
    </mesh>
  );
};
