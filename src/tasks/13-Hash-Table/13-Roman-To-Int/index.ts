function romanToInt2(s: string): number {
  const numerals: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const curr = numerals[s[i]];
    const next = numerals[s[i + 1]];

    if (next > curr) {
      result -= curr;
    } else {
      result += curr;
    }
  }

  return result;
}
