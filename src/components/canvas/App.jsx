import { Canvas } from "@react-three/fiber";
import BoxMesh from "../box/App.jsx";
import StateExample from "../state/App.jsx";
import Drei from "../drei/App.jsx";
import Coordinate from "../coordinate/App.jsx";

export default () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <BoxMesh />
        <Drei />
      </Canvas>
      <Canvas>
        <StateExample />
        <Drei />
      </Canvas>
      <Coordinate />
    </div>
  );
};

// createRoot(document.getElementById("root")).render(<App />);
