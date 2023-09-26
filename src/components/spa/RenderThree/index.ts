import { createObjects, N, COORD_RANGE } from "./Object";
import { animate } from "./Animate";
import ThreeRenderObjects from "three-render-objects";

const objs = createObjects();

const element = document.getElementById("myscene");
if (element) {
  const ObjRender = ThreeRenderObjects({ controlType: "trackball" })(
    element
  ).objects(objs);
  animate(ObjRender);
} else {
  console.error("Element not found");
}
