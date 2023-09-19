import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import ThreeRenderObjects from "three-render-objects";

const MyScene = () => {
  const mySceneRef = useRef(null);

  useEffect(() => {
    const N = 300;
    const COORD_RANGE = 300;
    const objs = Array.from(
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

    objs.forEach((obj) => {
      ["x", "y", "z"].forEach(
        (dim) =>
          (obj.position[dim] = Math.random() * COORD_RANGE * 2 - COORD_RANGE)
      );
    });

    const ObjRender = ThreeRenderObjects({ controlType: "trackball" })(
      mySceneRef.current
    ).objects(objs);

    const animate = () => {
      ObjRender.tick();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <div ref={mySceneRef} id="myscene"></div>;
};

export default MyScene;
