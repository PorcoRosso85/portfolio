import Sortable from "sortablejs";
import { store } from "../../../repositories/StoreDocGrid";
import "./line";
import { observer } from "./observe";
import { loadFromLocalStorage } from "./loadLocalData";

// var el = document.getElementById("items");
// var sortable = Sortable.create(el);

var nestedSortables = document.querySelectorAll(".child");
for (var i = 0; i < nestedSortables.length; i++) {
  new Sortable(nestedSortables[i], {
    group: "child",
    animation: 100,
    fallbackOnBody: true,
    swapThreshold: 0.65,
    onChoose: function (evt) {
      evt.item.classList.add("highlight");
    },
    onUnchoose: function (evt) {
      evt.item.classList.remove("highlight");
    },
  });
}

console.log(store.getTable("html"));
console.log(store.getTables());

observer;

// アプリケーションの起動時にローカルストレージからデータを読み込む
window.addEventListener("DOMContentLoaded", (event) => {
  loadFromLocalStorage();
});
