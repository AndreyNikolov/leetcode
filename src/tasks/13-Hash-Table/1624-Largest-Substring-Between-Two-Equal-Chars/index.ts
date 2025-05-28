function maxLengthBetweenEqualCharacters2(s: string): number {
  let maxSubLength = -1;
  let charIndex = new Map();

  for (let i = 0; i < s.length; i++) {
    if (charIndex.has(s[i])) {
      maxSubLength = Math.max(maxSubLength, i - charIndex.get(s[i]) - 1);
    } else {
      charIndex.set(s[i], i);
    }
  }

  return maxSubLength;
}
