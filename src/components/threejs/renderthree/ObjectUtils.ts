import * as THREE from "three";
import ThreeRenderObjects from "three-render-objects";

const COORD_RANGE = 300;

export const createObjects = () => {
  const N = 300;

  return Array.from(
    { length: N },
    () =>
      new THREE.Mesh(
        new THREE.SphereGeometry(10, 16, 16),
        new THREE.MeshBasicMaterial({
          color: "red",
          transparent: true,
          opacity: 0.6,
        })
      )
  );
};

export const initializeScene = (sceneElement, objs) => {
  objs.forEach((obj) => {
    ["x", "y", "z"].forEach(
      (dim) =>
        (obj.position[dim] = Math.random() * COORD_RANGE * 2 - COORD_RANGE)
    );
  });

  return ThreeRenderObjects({ controlType: "trackball" })(sceneElement).objects(
    objs
  );
};
