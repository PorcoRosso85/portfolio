declare let htmx: any;

htmx.defineExtension("drawline", {
  onEvent: () => {
    console.log("extension fired!");
    getCoordinates();
  },
});

export function getCoordinates(): void {
  const element1 = document.getElementById("2");
  const element2 = document.getElementById("3");

  if (!element1 || !element2) {
    console.error("Element(s) not found.");
    return;
  }

  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  const x1 = rect1.left + rect1.width / 2;
  const y1 = rect1.top + rect1.height / 2;
  const x2 = rect2.left + rect2.width / 2;
  const y2 = rect2.top + rect2.height / 2;
  console.log(x1, y1, x2, y2);

  drawLine(x1, y1, x2, y2);
}

function drawLine(x1: number, y1: number, x2: number, y2: number): void {
  const line = document.createElement("div");
  line.className = "2boxline";
  document.body.appendChild(line);

  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

  line.style.width = `${length}px`;
  line.style.transform = `rotate(${angle}deg)`;
  line.style.top = `${y1}px`;
  line.style.left = `${x1}px`;
}
