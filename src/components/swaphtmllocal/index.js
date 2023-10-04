console.log("index.js 読み込み"); // スクリプトが読み込まれているか確認

htmx.defineExtension("swapFromLocalStorage", {
  onEvent: function (name, evt) {
    console.log("イベント名: " + name); // イベント名を出力
    // if (name === "click") {
    //   const newElement = localStorage.getItem("newElement");
    //   console.log("新しい要素: " + newElement); // 新しい要素を出力
    //   if (newElement) {
    //     evt.target.innerHTML = newElement;
    //     htmx.process(evt.target);
    //   }
    // }
    if (name === "htmx:trigger") {
      const targetElement = document.getElementById("oldElement"); // 明示的に要素を取得
      const newElement = localStorage.getItem("newElement");

      console.log("新しい要素: " + newElement);

      if (newElement && targetElement) {
        // targetElementも確認
        targetElement.innerHTML = newElement;
      }
    }
  },
});
