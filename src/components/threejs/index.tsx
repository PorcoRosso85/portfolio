import { Canvas } from "@react-three/fiber";
import TwoBoxes from "./TwoBoxes";
import RenderThree from "./render_three";
import * as ABox from "./ABox";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <TwoBoxes position={[-1.2, 0, 0]} />
        <TwoBoxes position={[1.2, 0, 0]} />
      </Canvas>
      <RenderThree />
      <ABox.default />
    </>
  );
}

export default App;
