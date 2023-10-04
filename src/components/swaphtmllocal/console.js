console.log("LocalStorage newElement:", localStorage.getItem("newElement"));

// TODO: shadow dom内のスコープされたスクリプト＝shadow-rootからたどって取得すべき
document.getElementById("oldElement").addEventListener("click", function () {
  console.log("クリックされました");
});
