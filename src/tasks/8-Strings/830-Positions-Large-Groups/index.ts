function largeGroupPositions(s: string): number[][] {
  const result = [];
  const windowSize = 3;
  let start = 0;

  while (start < s.length) {
    let end = start;

    while (end < s.length && s[end] === s[start]) {
      end++;
    }

    if (end - start >= windowSize) {
      result.push([start, end - 1]);
    }
    start = end;
  }

  return result;
}
