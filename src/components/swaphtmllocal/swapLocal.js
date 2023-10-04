console.log("index.js 読み込み"); // スクリプトが読み込まれているか確認

htmx.defineExtension("swapLocal", {
  onEvent: function (name, evt) {
    console.log("イベント名: " + name); // イベント名を出力
    if (name === "htmx:trigger") {
      const targetElement = document.getElementById("oldElement"); // 明示的に要素を取得
      const newElement = localStorage.getItem("newElement");

      console.log("新しい要素: " + newElement);

      if (newElement && targetElement) {
        targetElement.innerHTML = newElement;
      }
    }
  },
});
