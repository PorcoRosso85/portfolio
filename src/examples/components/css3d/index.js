let cube = document.getElementById("cube");
let scene = document.getElementById("scene");
let startX, startY;
let initialRotationX = 0;
let initialRotationY = 0;
let rotateX = 0; // 外で宣言
let rotateY = 0; // 外で宣言
let initialScale = 1;

scene.addEventListener("mousedown", (e) => {
  e.preventDefault();
  startX = e.pageX;
  startY = e.pageY;
  initialRotationX = rotateX; // 更新
  initialRotationY = rotateY; // 更新

  document.addEventListener("mousemove", rotateCube);
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", rotateCube);
  });
});

function rotateCube(e) {
  let x = e.pageX - startX;
  let y = e.pageY - startY;

  rotateX = initialRotationX - y * 0.5;
  rotateY = initialRotationY + x * 0.5;

  cube.style.transform = `scale(${initialScale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

// 青のドットを追加
for (let i = 0; i < 30; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");

  let x = (Math.random() - 0.5) * 100;
  let y = (Math.random() - 0.5) * 100;
  let z = (Math.random() - 0.5) * 100;

  dot.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  cube.appendChild(dot);
}

// マウススクロールで拡大・縮小
scene.addEventListener("wheel", (e) => {
  e.preventDefault();

  initialScale += e.deltaY * -0.001;
  initialScale = Math.min(Math.max(0.125, initialScale), 4);

  cube.style.transform = `scale(${initialScale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
