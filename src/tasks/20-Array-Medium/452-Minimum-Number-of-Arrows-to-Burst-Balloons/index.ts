function findMinArrowShots(points: number[][]): number {
  if (points.length === 0) return 0;

  points.sort((a, b) => a[0] - b[0]);
  let prev = points[0];
  let arrows = points.length;

  for (let i = 1; i < points.length; i++) {
    const [currStart, currEnd] = points[i];

    if (prev[1] >= currStart) {
      // Merge overlapping interval
      arrows--;
      prev = [currStart, Math.min(prev[1], currEnd)];
    } else {
      prev = points[i];
    }
  }

  return arrows;
}
