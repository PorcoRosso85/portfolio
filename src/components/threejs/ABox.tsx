import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
