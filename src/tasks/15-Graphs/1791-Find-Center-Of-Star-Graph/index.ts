function findCenter(edges: number[][]): number {
  const buffer: number[] = [];
  for (let i = 0; i < edges.length; i++) {
    const vertices = edges[i];
    if (buffer.includes(vertices[0])) {
      return vertices[0];
    }
    if (buffer.includes(vertices[1])) {
      return vertices[1];
    } else {
      buffer.push(vertices[0]);
      buffer.push(vertices[1]);
    }
  }
  return -1;
}
