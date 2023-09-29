import { Box } from "@react-three/drei";

const Cube = ({ position, rotation, scale = [1, 1, 1], handleClick }) => (
  <Box
    args={[1, 1, 1]}
    position={position}
    rotation={rotation}
    scale={scale}
    onClick={handleClick}
  >
    <meshStandardMaterial attach="material" color="white" />
  </Box>
);

export default Cube;
