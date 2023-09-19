import { Canvas } from "@react-three/fiber";
import MyApp from "./Box";
import TwoBoxes from "./TwoBoxes";

function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <TwoBoxes position={[-1.2, 0, 0]} />
      <TwoBoxes position={[1.2, 0, 0]} />
    </Canvas>
    // <MyApp />
  );
}

export default App;
