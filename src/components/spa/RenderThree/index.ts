import { createObjects } from "./Object";
import { animate } from "./Animate";
import ThreeRenderObjects from "three-render-objects";

const objs = createObjects(300, 300);

const element = document.getElementById("myscene");
if (element) {
  const ObjRender = ThreeRenderObjects({ controlType: "trackball" })(element)
    .objects(objs)
    .onClick((obj, event, intersectionPoint) => {
      // ここでクリックされたメッシュに対する処理を書く
      console.log("クリックされたオブジェクト:", obj);
      console.log("交差点の座標:", intersectionPoint);
    });
  animate(ObjRender);
} else {
  console.error("Element not found");
}
