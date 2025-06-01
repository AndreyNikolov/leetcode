function findKthPositive(arr: number[], k: number): number {
  const seen = new Set(arr);
  let current = 1;
  while (k > 0) {
    if (!seen.has(current)) {
      k--;
    }
    current++;
  }

  return current - 1;
}
