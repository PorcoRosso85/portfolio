import { node } from "../../repositories/DirsAndFiles";
import GenerateTags from "./GenerateTags.jsx";
import Text from "../text/App.jsx";

export default () => {
  //   const dirandfiles = GenerateTags(node);
  //   return { dirandfiles };

  return (
    <group>
      <Text key={1} text={"hi"} position={[2, -2, -2]}></Text>,
      <Text key={2} text={"bye"} position={[4, -4, -4]}></Text>,
    </group>
  );
};
