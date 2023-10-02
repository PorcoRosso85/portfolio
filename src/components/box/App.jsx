import StateExample from "../state/example";

export default () => {
  return (
    <>
      <group>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
      </group>
    </>
  );
};
