export function animate(ObjRender: any) {
  ObjRender.tick(); // render it
  requestAnimationFrame(() => animate(ObjRender));
}
