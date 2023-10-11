import Sortable from "sortablejs";

// var el = document.getElementById("items");
// var sortable = Sortable.create(el);

var nestedSortables = document.querySelectorAll(".nested-sortable");
for (var i = 0; i < nestedSortables.length; i++) {
  const nestedSortableInstance = new Sortable(nestedSortables[i], {
    group: "nested",
    animation: 150,
    fallbackOnBody: true,
    swapThreshold: 0.65,
    ghostClass: "blue-background-class",
    filter: ".htmx-indicator",

    // onMove: function (evt) {
    //   return evt.related.className.indexOf("htmx-indicator") === -1;
    // },
    // onEnd: function (evt) {
    //   this.option("disabled", true);
    // },
  });
  // nestedSortable.addEventListener("htmx:afterSwap", function () {
  //   nestedSortableInstance.option("disabled", false);
  // });
}
