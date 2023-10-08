export function calculateCoordinates(elem1Id, elem2Id) {
  const elem1 = document.getElementById(elem1Id).getBoundingClientRect();
  const elem2 = document.getElementById(elem2Id).getBoundingClientRect();

  const x1 = elem1.left + elem1.width / 2;
  const y1 = elem1.top + elem1.height / 2; // 修正: window.innerHeight - を削除
  const x2 = elem2.left + elem2.width / 2;
  const y2 = elem2.top + elem2.height / 2; // 修正: window.innerHeight - を削除

  return { x1, y1, x2, y2 };
}

export function calculateDistanceAndAngle(coordinates) {
  const { x1, y1, x2, y2 } = coordinates;

  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  let angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
  angle = angle < 0 ? angle + 360 : angle;

  return { length, angle };
}

export function drawLine(lineId) {
  const coordinates = calculateCoordinates("element1", "element2");
  const { length, angle } = calculateDistanceAndAngle(coordinates);
  const { x1, y1 } = coordinates;
  const line = document.getElementById(lineId);

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

let draggedElement = null;

export function onMousedown(event) {
  draggedElement = event.target;
  document.addEventListener("mousemove", onMousemove);
}

export function onMousemove(event) {
  if (draggedElement) {
    const rect = draggedElement.getBoundingClientRect();
    draggedElement.style.left = `${event.clientX - rect.width / 2}px`;
    draggedElement.style.top = `${event.clientY - rect.height / 2}px`;
    drawLine("line");
  }
}

//   function onMouseup() {
//     draggedElement = null;
//     document.removeEventListener("mousemove", onMousemove);
//   }

// ドラッグが終わったら、座標情報をローカルストレージに保存する
export function onMouseup() {
  if (draggedElement) {
    saveCoordinatesToLocalStorage(draggedElement);
  }
  draggedElement = null;
  document.removeEventListener("mousemove", onMousemove);
}

export function highlightElement(event) {
  if (event.target.id === "line") {
    event.target.style.borderColor = "yellow";
  } else {
    event.target.style.backgroundColor = "yellow";
  }
}

export function removeHighlight(event) {
  if (event.target.id === "line") {
    event.target.style.borderColor = "";
  } else {
    event.target.style.backgroundColor = "";
  }
}
