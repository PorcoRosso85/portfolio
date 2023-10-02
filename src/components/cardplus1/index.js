import { films } from "./filmslist";
import { moveCamera, moveCameraAngle, setSceneHeight } from "./scenesettings";
import { updateCardVisibility } from "./cardvisibility";

document.addEventListener("DOMContentLoaded", function () {
  appendFilms(films);
  window.addEventListener("scroll", () => {
    moveCamera();
    updateCardVisibility();
  });

  window.addEventListener("mousemove", moveCameraAngle);
  setSceneHeight();
});

function createFilmItem(film) {
  return `<div>
      <h2>${film.title}</h2>
      <p>Year: ${film.release_date}</p>
      <p>Director: ${film.director}</p>
      <p>${film.description}</p>
    </div>`;
}

function appendFilms(films) {
  const filmsEl = document.querySelector(".viewport .scene3D");
  let filmsNodes = [];

  for (let film of films) {
    filmsNodes.push(createFilmItem(film));
  }

  filmsEl.innerHTML = filmsNodes.join(" ");
}
