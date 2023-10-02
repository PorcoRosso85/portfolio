export function updateSingleFilm(filmData, index) {
  const filmToUpdate = document.getElementById(`film-${index}`);
  if (filmToUpdate) {
    filmToUpdate.innerHTML = createFilmItem(filmData, index);
  }
}

// // 使用例：2番目の映画情報を更新
// const newFilmData = {
//   title: "新しいタイトル",
//   release_date: "2023",
//   director: "新しい監督",
//   description: "新しい説明",
// };
// updateSingleFilm(newFilmData, 1);
