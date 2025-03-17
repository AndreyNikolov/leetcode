function romanToInt(s: string): number {
  const romanMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  // can be implemented with 0 to n with subtracting current, if next is bigger
  for (let i = s.length - 1; i >= 0; i--) {
    const curr = romanMap[s[i]];
    const prev = romanMap[s[i - 1]];

    if (prev < curr) {
      result += curr - prev;
      i--;
    } else {
      result += curr;
    }
  }
  return result;
}
