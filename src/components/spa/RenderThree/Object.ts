import * as THREE from "three";

export const N = 300;
export const COORD_RANGE = 300;

export function createObjects(): THREE.Mesh[] {
  const objs = [...Array(N)].map(
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

  objs.forEach((obj) => {
    ["x", "y", "z"].forEach(
      (dim) =>
        (obj.position[dim] = Math.random() * COORD_RANGE * 2 - COORD_RANGE)
    );
  });

  return objs;
}
