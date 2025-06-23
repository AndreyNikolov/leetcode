function validPathDFS(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  if (source === destination) return true;
  const visited = new Set();
  const graph = new Map();

  for (const [e1, e2] of edges) {
    if (!graph.has(e1)) graph.set(e1, []);
    if (!graph.has(e2)) graph.set(e2, []);

    graph.get(e1).push(e2);
    graph.get(e2).push(e1);
  }

  // function dfs(node: number): void {
  //   if (visited.has(node)) return;
  //   visited.add(node);
  //   const neighbours = graph.get(node);
  //   for (const neighbour of neighbours) dfs(neighbour);
  // }

  // dfs(source);
  // return visited.has(destination);
  function dfs(node: number): boolean {
    if (node === destination) return true;
    visited.add(node);

    for (const neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor) && dfs(neighbor)) {
        return true;
      }
    }

    return false;
  }

  return dfs(source);
}
