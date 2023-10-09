document.addEventListener("DOMContentLoaded", () => {
  const dragAreas = document.querySelectorAll(".drag-area");

  dragAreas.forEach((area) => {
    area.addEventListener("dragover", dragOver);
    area.addEventListener("drop", drop);
  });

  const items = document.querySelectorAll(".draggable-item");

  items.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
  });
});

let draggedItem = null;

function dragStart(e) {
  draggedItem = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  e.target.appendChild(draggedItem);
}
