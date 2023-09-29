import { Text } from "@react-three/drei";

export default ({ text, position }) => {
  return (
    <>
      <Text
        color="white"
        anchorX="left"
        anchorY="top"
        fontSize={4}
        position={position}
      >
        {text}
      </Text>
    </>
  );
};
