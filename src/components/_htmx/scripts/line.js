var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("id", "dependency-lines");
document.body.appendChild(svg);

// 要素の位置を取得する関数
function getPositions(element) {
  var rect = element.getBoundingClientRect();
  return {
    x: rect.left + window.scrollX + rect.width / 2,
    y: rect.top + window.scrollY + rect.height / 2,
  };
}

// 要素1003と1005の位置を取得
var position1003 = getPositions(document.getElementById("1003"));
var position1005 = getPositions(document.getElementById("1005"));

// SVG要素に直線を追加
var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
line.setAttribute("class", "dependency-line");
line.setAttribute("x1", position1003.x);
line.setAttribute("y1", position1003.y);
line.setAttribute("x2", position1005.x);
line.setAttribute("y2", position1005.y);
svg.appendChild(line);
