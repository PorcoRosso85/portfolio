// debounce関数の定義
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// ローカルストレージにノードを保存する関数
function saveToLocalStorage() {
  const data = targetNode.innerHTML;
  localStorage.setItem("nodeData", data);
  console.log("saved!");
}
//
// 子要素の変更を処理する関数
function handleChildListMutation(mutation) {
  // ここで`dataDocGrid`を更新
  console.log("child is changed");
}

// 属性の変更を処理する関数
function handleAttributesMutation(mutation) {
  console.log("attr is changed");
  console.log(targetNode);
  // 属性の変更をローカルストレージに保存
  debounce(saveToLocalStorage, 5000)();
}

// Mutation Observerのインスタンスを作成
export const observer = new MutationObserver((mutationsList, observer) => {
  // 各変更に対して
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      // 子要素の変更を処理
      handleChildListMutation(mutation);
    } else if (mutation.type === "attributes") {
      // 属性の変更を処理
      handleAttributesMutation(mutation);
    }
  }
});

// 対象のDOM要素を選択
export const targetNode = document.getElementById("1000");

// オブザーバーの設定オプション
const config = { attributes: true, childList: true, subtree: true };

// 対象のDOM要素を監視開始
observer.observe(targetNode, config);
