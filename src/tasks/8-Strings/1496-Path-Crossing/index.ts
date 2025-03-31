function isPathCrossing(path: string): boolean {
  const visited = new Set(["0:0"]);
  let currentPoint = { x: 0, y: 0 };

  for (let i = 0; i < path.length; i++) {
    switch (path[i]) {
      case "N":
        currentPoint.x++;
        break;
      case "S":
        currentPoint.x--;
        break;
      case "E":
        currentPoint.y++;
        break;
      case "W":
        currentPoint.y--;
        break;
      default:
        break;
    }

    if (visited.has(`${currentPoint.x}:${currentPoint.y}`)) {
      return true;
    }
    visited.add(`${currentPoint.x}:${currentPoint.y}`);
  }
  return false;
}
