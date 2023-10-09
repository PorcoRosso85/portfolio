import Sortable from "sortablejs";

console.log("hello sorting");
// SortableJSインスタンスを作成
new Sortable(gridContainer, {
  // グリッドモードを有効にする
  swap: true,
  swapClass: "highlight", // swap項目をハイライト表示するクラス
  animation: 150,
});
