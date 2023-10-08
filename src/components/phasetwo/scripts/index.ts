import { setElementPositions, saveCoordinatesToLocalStorage } from "./store";
import {
  onMousedown,
  onMousemove,
  onMouseup,
  highlightElement,
  removeHighlight,
} from "./interaction";
import { drawLine } from "./draw";

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
