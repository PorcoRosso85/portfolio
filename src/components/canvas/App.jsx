import { Canvas } from "@react-three/fiber";
import BoxMesh from "../box/App.jsx";
import StateExample from "../state/App.jsx";
import Drei from "../drei/App.jsx";
import Coordinate from "../coordinate/App.jsx";
import DirAndFiles from "../dirandfiles/App.jsx";
import Stairs from "../stairs/App.jsx";

export default () => {
  return (
    <div id="canvas-container">
      <Canvas shadows dpr={1.5} camera={{ position: [-10, 10, 5], fov: 50 }}>
        <BoxMesh />
        <Drei />
      </Canvas>
      <Canvas>
        <StateExample />
        <Drei />
      </Canvas>
      <Canvas camera={{ position: [15, 5, 10] }}>
        {/* <BoxMesh position={[0.5, 0.5, 0.5]} size={[1, 1, 1]} /> */}
        <Coordinate size={25} />
        <DirAndFiles />
      </Canvas>
      <Stairs />
    </div>
  );
};

// createRoot(document.getElementById("root")).render(<App />);
