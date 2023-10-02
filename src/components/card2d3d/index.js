let films = [
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },

  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
  {
    title: "もののけ姫",
    release_date: "1997",
    director: "宮崎駿",
    description: "説明2",
  },
];

const perspectiveOrigin = {
  x: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspectiveOriginX"
    )
  ),
  y: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspectiveOriginY"
    )
  ),
  maxGap: 10,
};

document.addEventListener("DOMContentLoaded", function () {
  appendFilms(films);
  window.addEventListener("scroll", () => {
    moveCamera();
    updateCardVisibility();
  });

  window.addEventListener("mousemove", moveCameraAngle);
  setSceneHeight();
});

function updateCardVisibility() {
  const threshold = 100; // ここまでを表示
  const cards = document.querySelectorAll(".scene3D > div");

  cards.forEach((card, index) => {
    const zPosition =
      index *
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
      );
    const opacity = zPosition > threshold ? 0 : 1; // スクロールでzpositionを変更
    card.style.setProperty("--cardOpacity", opacity);
  });
}

function moveCameraAngle(event) {
  const xGap =
    (((event.clientX - window.innerWidth / 2) * 100) /
      (window.innerWidth / 2)) *
    -1;
  const yGap =
    (((event.clientY - window.innerHeight / 2) * 100) /
      (window.innerHeight / 2)) *
    -1;
  const newPerspectiveOriginX =
    perspectiveOrigin.x + (xGap * perspectiveOrigin.maxGap) / 100;
  const newPerspectiveOriginY =
    perspectiveOrigin.y + (yGap * perspectiveOrigin.maxGap) / 100;

  document.documentElement.style.setProperty(
    "--scenePerspectiveOriginX",
    newPerspectiveOriginX
  );
  document.documentElement.style.setProperty(
    "--scenePerspectiveOriginY",
    newPerspectiveOriginY
  );
}

function moveCamera() {
  document.documentElement.style.setProperty("--cameraZ", window.pageYOffset);
}

function setSceneHeight() {
  const numberOfItems = films.length; // Or number of items you have in `.scene3D`
  const itemZ = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
  );
  const scenePerspective = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--scenePerspective"
    )
  );
  const cameraSpeed = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
  );

  const height =
    window.innerHeight +
    scenePerspective * cameraSpeed +
    itemZ * cameraSpeed * numberOfItems;

  // Update --viewportHeight value
  document.documentElement.style.setProperty("--viewportHeight", height);
}

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
