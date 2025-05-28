function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const freq1 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    freq1[word1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    freq1[word2[i].charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  for (let j = 0; j < freq1.length; j++) {
    if (Math.abs(freq1[j]) > 3) {
      return false;
    }
  }
  return true;
}
