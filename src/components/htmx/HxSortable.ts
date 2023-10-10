import Sortable from "sortablejs";

htmx.onLoad((content: HTMLElement) => {
  const sortables: NodeListOf<HTMLElement> =
    content.querySelectorAll(".sortable");
  for (let i = 0; i < sortables.length; i++) {
    new Sortable(sortables[i], {
      group: "nested",
      animation: 150,
      // ghostClass: "blue-background-class",
      fallbackOnBody: true,
      swapThreshold: 0.65,
    });
  }
});
