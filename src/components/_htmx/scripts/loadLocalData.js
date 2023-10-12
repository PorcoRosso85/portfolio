import { targetNode } from "./observe";

// ローカルストレージからノードのデータを読み込む関数
export function loadFromLocalStorage() {
  const data = localStorage.getItem("nodeData");
  if (data) {
    console.log("nodeData key data found in local storage.");
    targetNode.innerHTML = data;
    console.log(
      "Data successfully loaded from local storage and applied to targetNode.",
    );
  } else {
    console.log("No data found for nodeData key in local storage.");
  }
}
