function isPathCrossing(path: string): boolean {
  let position = [0, 0];
  const visited = new Set(["0.0"]);

  for (const direction of path) {
    switch (direction) {
      case "N":
        position[1]++;
        break;
      case "S":
        position[1]--;
        break;
      case "W":
        position[0]--;
        break;
      case "E":
        position[0]++;
        break;
    }
    const newPoint = `${position[0]}.${position[1]}`;
    if (visited.has(newPoint)) return true;
    visited.add(newPoint);
  }
  return false;
}
