export function loadCoordinatesFromLocalStorage() {
  const element1Coords = JSON.parse(localStorage.getItem("element1")) || {
    left: "50px",
    top: "50px",
  };
  const element2Coords = JSON.parse(localStorage.getItem("element2")) || {
    left: "200px",
    top: "200px",
  };

  document.getElementById("element1").style.left = element1Coords.left;
  document.getElementById("element1").style.top = element1Coords.top;
  document.getElementById("element2").style.left = element2Coords.left;
  document.getElementById("element2").style.top = element2Coords.top;
}

// 座標情報をローカルストレージに保存する
export function saveCoordinatesToLocalStorage(elem) {
  const rect = elem.getBoundingClientRect();
  const coords = {
    left: `${rect.left}px`,
    top: `${rect.top}px`,
  };
  localStorage.setItem(elem.id, JSON.stringify(coords));
}
