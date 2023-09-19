export const animateScene = (ObjRender) => {
  const animate = () => {
    ObjRender.tick();
    requestAnimationFrame(animate);
  };

  animate();
};
