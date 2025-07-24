function hIndex(citations: number[]): number {
  citations.sort((a, b) => a - b);

  for (let i = 0; i < citations.length; i++) {
    const h = citations.length - i;
    if (citations[i] >= h) {
      return h;
    }
  }

  return 0;
}
