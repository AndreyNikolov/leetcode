function firstUniqChar2(s: string): number {
  const charFreq: Record<string, number> = {};
  for (const char of s) {
    charFreq[char] = (charFreq[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (charFreq[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}
