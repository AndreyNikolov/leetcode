function validPathBFS(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  const visited = new Set<number>([source]);
  const queue = [source];

  const graph = new Map<number, Array<number>>();
  for (const [src, dest] of edges) {
    if (!graph.has(src)) graph.set(src, []);
    if (!graph.has(dest)) graph.set(dest, []);

    graph.get(src)!.push(dest);
    graph.get(dest)!.push(src);
  }

  while (queue.length) {
    const current = queue.shift()!;

    if (current === destination) return true;

    for (const neighbor of graph.get(current)!) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return false;
}
