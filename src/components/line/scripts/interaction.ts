import { saveCoordinatesToLocalStorage } from "./store";
import { drawLine } from "./draw";

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
