import Sortable from "sortablejs";

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
  });
}
