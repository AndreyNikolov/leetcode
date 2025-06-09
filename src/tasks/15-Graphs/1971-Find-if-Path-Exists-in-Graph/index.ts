function validPath(
  n: number,
  edges: number[][],
  start: number,
  destination: number
): boolean {
  const adjacencyList = new Map<number, number[]>();
  const visited = new Set<number>();

  for (const [v, e] of edges) {
    if (!adjacencyList.has(v)) adjacencyList.set(v, []);
    if (!adjacencyList.has(e)) adjacencyList.set(e, []);
    adjacencyList.get(v)!.push(e);
    adjacencyList.get(e)!.push(v);
  }

  function dfs(vertex: number): void {
    visited.add(vertex);
    const neighbours = adjacencyList.get(vertex) || [];
    for (const neighbor of neighbours) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  dfs(start);
  return visited.has(destination);
}
