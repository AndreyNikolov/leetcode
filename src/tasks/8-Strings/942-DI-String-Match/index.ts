function diStringMatch(s: string): number[] {
  let high = s.length;
  let low = 0;

  const result = new Array(high).fill(null);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      result[i] = low;
      low++;
    } else {
      // s[i] === 'D'
      result[i] = high;
      high--;
    }
  }
  result[s.length] = high--;
  return result;
}
