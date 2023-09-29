import * as DREI from "@react-three/drei";

export default () => {
  return (
    <>
      <DREI.OrbitControls
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};
