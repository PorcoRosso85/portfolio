import Sortable from "sortablejs";

var el = document.getElementById("items");
var sortable = Sortable.create(el);

var nestedSortables = document.querySelectorAll(".nested-sortable");
for (var i = 0; i < nestedSortables.length; i++) {
  new Sortable(nestedSortables[i], {
    group: "nested",
    animation: 150,
    fallbackOnBody: true,
    swapThreshold: 0.65,
  });
}
