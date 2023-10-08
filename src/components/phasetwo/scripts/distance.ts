interface CoordinatesResult {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export function calculateCoordinates(
  elFromId: string,
  elToId: string,
): CoordinatesResult {
  const elFrom = document.getElementById(elFromId);
  const elTo = document.getElementById(elToId);

  if (elFrom === null || elTo === null) {
    throw new Error("Element not found");
  }

  const rect1 = elFrom.getBoundingClientRect();
  const rect2 = elTo.getBoundingClientRect();

  const x1 = rect1.left + rect1.width / 2;
  const y1 = rect1.top + rect1.height / 2;
  const x2 = rect2.left + rect2.width / 2;
  const y2 = rect2.top + rect2.height / 2;

  return { x1, y1, x2, y2 };
}

interface DistanceAndAngle {
  length: number;
  angle: number;
}

export function calculateDistanceAndAngle(
  coordinates: CoordinatesResult,
): DistanceAndAngle {
  const { x1, y1, x2, y2 } = coordinates;

  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  let angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
  angle = angle < 0 ? angle + 360 : angle;

  return { length, angle };
}
