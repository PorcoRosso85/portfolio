// import {
//   loadCoordinatesFromLocalStorage,
//   updateElementPosition,
// } from "./getCoordinatesFromStore";

// 0. 座標を表すインターフェイスを定義
interface Coordinates {
  left: string;
  top: string;
}

// 1. ローカルストレージから座標をロードする関数
export function loadCoordinatesFromLocalStorage(key: string): Coordinates {
  const item = localStorage.getItem(key);
  if (item === null) {
    return { left: "50px", top: "50px" }; // デフォルトの値を返す
  }
  return JSON.parse(item);
}

// 2. 与えられた座標を使って要素を更新する関数
export function updateElementPosition(
  elementId: string,
  coords: Coordinates,
): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.left = coords.left;
    element.style.top = coords.top;
  }
}

// 3. これらの関数を使って要素の位置を設定する関数
export function setElementPositions(elFrom: string, elTo: string): void {
  const elFromCoords = loadCoordinatesFromLocalStorage(elFrom);
  const elToCoords = loadCoordinatesFromLocalStorage(elTo);

  updateElementPosition(elFrom, elFromCoords);
  updateElementPosition(elTo, elToCoords);
}

// 座標情報をローカルストレージに保存する
export function saveCoordinatesToLocalStorage(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const coords = {
    left: `${rect.left}px`,
    top: `${rect.top}px`,
  };
  localStorage.setItem(el.id, JSON.stringify(coords));
}

interface CoordinatesResult {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export function calculateCoordinates(
  elFromId: string,
  elToId: string,
): CoordinatesResult {
  const elFrom = document.getElementById(elFromId);
  const elTo = document.getElementById(elToId);

  if (elFrom === null || elTo === null) {
    throw new Error("Element not found");
  }

  const rect1 = elFrom.getBoundingClientRect();
  const rect2 = elTo.getBoundingClientRect();

  const x1 = rect1.left + rect1.width / 2;
  const y1 = rect1.top + rect1.height / 2;
  const x2 = rect2.left + rect2.width / 2;
  const y2 = rect2.top + rect2.height / 2;

  return { x1, y1, x2, y2 };
}

interface DistanceAndAngle {
  length: number;
  angle: number;
}

export function calculateDistanceAndAngle(
  coordinates: CoordinatesResult,
): DistanceAndAngle {
  const { x1, y1, x2, y2 } = coordinates;

  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  let angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
  angle = angle < 0 ? angle + 360 : angle;

  return { length, angle };
}

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

let draggedElement: HTMLElement | null = null;

export function onMousedown(event: MouseEvent): void {
  draggedElement = event.target as HTMLElement;
  document.addEventListener("mousemove", onMousemove);
}

export function onMousemove(event: MouseEvent): void {
  if (draggedElement) {
    const rect = draggedElement.getBoundingClientRect();
    draggedElement.style.left = `${event.clientX - rect.width / 2}px`;
    draggedElement.style.top = `${event.clientY - rect.height / 2}px`;
    drawLine("el1", "el2", "line");
  }
}

// ドラッグが終わったら、座標情報をローカルストレージに保存する
export function onMouseup() {
  if (draggedElement) {
    saveCoordinatesToLocalStorage(draggedElement);
  }
  draggedElement = null;
  document.removeEventListener("mousemove", onMousemove);
}

export function highlightElement(event: MouseEvent): void {
  const target = event.target as HTMLElement; // 型アサーションを使用

  if (target.id === "line") {
    target.style.borderColor = "yellow";
  } else {
    target.style.backgroundColor = "yellow";
  }
}

export function removeHighlight(event: MouseEvent): void {
  const target = event.target as HTMLElement; // 型アサーションを使用
  if (target.id === "line") {
    target.style.borderColor = "";
  } else {
    target.style.backgroundColor = "";
  }
}

window.addEventListener("load", function () {
  setElementPositions("el1", "el2");
  drawLine("el1", "el2", "line");
});

window.addEventListener("load", () => {
  const line = document.getElementById("line");
  const elFrom = document.getElementById("el1");
  const elTo = document.getElementById("el2");

  if (line === null || elFrom === null || elTo === null) {
    console.error("Some elements were not found.");
    return; // 要素がnullの場合、以降のコードをスキップ
  }

  drawLine("el1", "el2", "line");

  // 既存のマウスダウンイベントに加えて、マウスオーバー・マウスアウトイベントを追加
  elFrom.addEventListener("mousedown", onMousedown);
  elFrom.addEventListener("mouseover", highlightElement);
  elFrom.addEventListener("mouseout", removeHighlight);

  elTo.addEventListener("mousedown", onMousedown);
  elTo.addEventListener("mouseover", highlightElement);
  elTo.addEventListener("mouseout", removeHighlight);

  line.addEventListener("mouseover", highlightElement);
  line.addEventListener("mouseout", removeHighlight);

  document.addEventListener("mouseup", onMouseup);
});
