function uncommonFromSentences(s1: string, s2: string): string[] {
  const s1Arr = s1.split(" ");
  const s2Arr = s2.split(" ");

  const freqMap = new Map();
  const result = [];

  for (const word1 of s1Arr) {
    freqMap.set(word1, (freqMap.get(word1) || 0) + 1);
  }

  for (const word2 of s2Arr) {
    freqMap.set(word2, (freqMap.get(word2) || 0) + 1);
  }

  for (const [key, value] of freqMap) {
    if (value === 1) {
      result.push(key);
    }
  }

  return result;
}
