import { Plane, Text } from "@react-three/drei";

const XZPlane = ({ size }) => (
  <Plane
    args={[size, size, size, size]}
    rotation={[1.5 * Math.PI, 0, 0]}
    position={[0, 0, 0]}
  >
    <meshStandardMaterial attach="material" color="#f9c74f" wireframe />
  </Plane>
);

const XYPlane = ({ size }) => (
  <Plane
    args={[size, size, size, size]}
    rotation={[0, 0, 0]}
    position={[0, 0, 0]}
  >
    <meshStandardMaterial attach="material" color="pink" wireframe />
  </Plane>
);

const YZPlane = ({ size }) => (
  <Plane
    args={[size, size, size, size]}
    rotation={[0, Math.PI / 2, 0]}
    position={[0, 0, 0]}
  >
    <meshStandardMaterial attach="material" color="#80ffdb" wireframe />
  </Plane>
);

export default function Grid({ size }) {
  const textScale = size / 20;
  return (
    <group>
      <Text
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
        position={[size / 2 + 1, 0, 0]}
        scale={[textScale, textScale, textScale]}
      >
        X+
      </Text>
      <Text
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
        position={[-size / 2 - 1, 0, 0]}
        scale={[textScale, textScale, textScale]}
      >
        X-
      </Text>
      <Text
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
        position={[0, size / 2 + 1, 0]}
        scale={[textScale, textScale, textScale]}
      >
        Y+
      </Text>
      <Text
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
        position={[0, -size / 2 - 1, 0]}
        scale={[textScale, textScale, textScale]}
      >
        Y-
      </Text>
      <Text
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
        position={[0, 0, size / 2 + 1]}
        scale={[textScale, textScale, textScale]}
      >
        Z+
      </Text>
      <Text
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
        position={[0, 0, -size / 2 - 1]}
        scale={[textScale, textScale, textScale]}
      >
        Z-
      </Text>
      <XZPlane size={size} />
      <XYPlane size={size} />
      <YZPlane size={size} />
    </group>
  );
}
