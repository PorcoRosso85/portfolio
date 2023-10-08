import { loadCoordinatesFromLocalStorage } from "./drawElements";
import { drawLine } from "./drawLine";

window.addEventListener("load", function () {
  loadCoordinatesFromLocalStorage();
  drawLine("line");
});
