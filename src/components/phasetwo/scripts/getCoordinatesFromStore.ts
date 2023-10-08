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
