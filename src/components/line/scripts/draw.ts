import { calculateCoordinates, calculateDistanceAndAngle } from "./distance";

export function drawLine(elFromId: string, elToId: string, lineId: string) {
  const coordinates = calculateCoordinates(elFromId, elToId);
  const { length, angle } = calculateDistanceAndAngle(coordinates);
  const { x1, y1 } = coordinates;
  const line = document.getElementById(lineId);

  if (line == null) {
    throw new Error("Line element not found");
  }

  // TODO: css外部化
  line.style.position = "absolute";
  line.style.height = "2px"; // ラインの太さを設定
  line.style.backgroundColor = "black"; // ラインの色を設定
  line.style.transformOrigin = "0 50%"; // 回転の基点を設定
  line.style.width = `${length}px`;
  line.style.transform = `rotate(${angle}deg)`;
  line.style.left = `${x1}px`;
  line.style.top = `${y1 - 1}px`; // ラインの太さを考慮
}
