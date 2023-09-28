console.log("show shadowRoot");
document.addEventListener("DOMContentLoaded", function () {
  let shadowElement = document.getElementById("shadow-element");
  if (shadowElement && shadowElement.shadowRoot) {
    let pElement = shadowElement.shadowRoot.querySelector("p");
    if (pElement) {
      console.log(pElement.textContent);
    } else {
      console.log("p要素が見つかりません");
    }
  } else {
    console.log("shadowElementまたはshadowRootが見つかりません");
  }
});
