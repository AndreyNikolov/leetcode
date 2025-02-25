function heightChecker(heights: number[]): number {
  const sortedHeights = [...heights].sort((a, b) => a - b);
  const nonMatchingHeights = sortedHeights
    .map((el, index) => el - heights[index])
    .filter((el) => el !== 0);

  return nonMatchingHeights.length;
}
