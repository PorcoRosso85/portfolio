import StateExample from "./example";

export default () => {
  return (
    <>
      <mesh>
        <StateExample />
      </mesh>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
    </>
  );
};
