function maxDistToClosest(seats: number[]): number {
  const n = seats.length;
  const left = new Array(n).fill(Infinity);
  const right = new Array(n).fill(Infinity);

  let lastOccupied = -Infinity;
  for (let i = 0; i < n; i++) {
    if (seats[i] === 1) {
      lastOccupied = i;
    }
    left[i] = i - lastOccupied;
  }

  lastOccupied = Infinity;
  for (let i = n - 1; i >= 0; i--) {
    if (seats[i] === 1) {
      lastOccupied = i;
    }
    right[i] = lastOccupied - i;
  }

  let maxDist = 0;
  for (let i = 0; i < n; i++) {
    if (seats[i] === 0) {
      const closest = Math.min(left[i], right[i]);
      maxDist = Math.max(maxDist, closest);
    }
  }

  return maxDist;
}
