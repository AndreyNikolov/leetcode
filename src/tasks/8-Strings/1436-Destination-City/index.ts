function destCity(paths: string[][]): string {
  const outgoingSet = new Set<string>();
  const destinationSet = new Set<string>();

  for (let i = 0; i < paths.length; i++) {
    outgoingSet.add(paths[i][0]);
    destinationSet.add(paths[i][1]);
  }

  for (const dest of destinationSet) {
    if (!outgoingSet.has(dest)) {
      return dest;
    }
  }

  return "";
}
