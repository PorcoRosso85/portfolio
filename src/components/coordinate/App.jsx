import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls, useTexture, Text } from "@react-three/drei";
import Grid from "./Grid";
import Controls from "./Controls";
import "./styles.css";
import Cube from "./Cube";

export default () => {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 10] }}>
        <Suspense
          fallback={
            <Text
              color="white" // default
              anchorX="center" // default
              anchorY="middle" // default
            >
              Loading
            </Text>
          }
        >
          <OrbitControls />
          <directionalLight intensity={0.5} position={[6, 2, 1]} />
          <ambientLight intensity={0.1} />
          <Grid size={10} />

          {/* <Cube
            handleClick={() => console.log("clicked on the cube")}
            rotation={[
              xRotation * Math.PI,
              yRotation * Math.PI,
              zRotation * Math.PI,
            ]}
            position={[xPosition, yPosition, zPosition]}
            scale={[xScale, yScale, zScale]}
          /> */}
        </Suspense>
      </Canvas>
      ;
    </>
  );
};
