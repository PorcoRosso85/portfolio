import Sortable from "sortablejs";

htmx.onLoad((content: HTMLElement) => {
  const sortables: NodeListOf<HTMLElement> =
    content.querySelectorAll(".sortable");
  for (let i = 0; i < sortables.length; i++) {
    const sortable: HTMLElement = sortables[i];
    new Sortable(sortable, {
      animation: 150,
      ghostClass: "blue-background-class",
    });
  }
});
