import { Canvas } from "@react-three/fiber";
import BoxMesh from "../box/App.jsx";

export default () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <BoxMesh />
      </Canvas>
    </div>
  );
};

// createRoot(document.getElementById("root")).render(<App />);
