function destCity(paths: string[][]): string {
  const starting = new Set();

  for (const path of paths) {
    starting.add(path[0]);
  }

  for (const path of paths) {
    if (!starting.has(path[1])) return path[1];
  }

  return "";
}
