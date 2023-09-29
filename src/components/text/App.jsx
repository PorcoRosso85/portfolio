import { Text, useCursor } from "@react-three/drei";
import { useState } from "react";

export default ({ text, position }) => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  return (
    <>
      <Text
        color={clicked ? "purple" : hovered ? "yellow" : "white"}
        anchorX="left"
        anchorY="top"
        fontSize={4}
        position={position}
        onClick={(e) => setClicked(!clicked)}
        onPointerOver={(e) => setHovered(true)}
        onPointerOut={(e) => setHovered(false)}
      >
        {text}
      </Text>
    </>
  );
};
