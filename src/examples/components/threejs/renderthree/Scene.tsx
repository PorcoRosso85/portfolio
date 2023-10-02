import React, { useEffect, useRef } from "react";
import { createObjects, initializeScene } from "./ObjectUtils";
import { animateScene } from "./AnimationUtils";

const Scene = () => {
  const mySceneRef = useRef(null);

  useEffect(() => {
    const objs = createObjects();
    const ObjRender = initializeScene(mySceneRef.current, objs);
    animateScene(ObjRender);
  }, []);

  return <div ref={mySceneRef} id="myscene"></div>;
};

export default Scene;
