export function updateCardVisibility() {
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
