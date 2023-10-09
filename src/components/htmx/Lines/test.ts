function drawLine(x1: number, y1: number, x2: number, y2: number) {
  const line = document.getElementById("line") as HTMLElement;
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  line.style.width = length + "px";
  line.style.height = "2px"; // 直線の幅
  line.style.transform = `translate(${x1}px, ${y1}px) rotate(${
    angle * (180 / Math.PI)
  }deg)`;
}

// 2点間の直線を描画
drawLine(50, 50, 150, 150);
