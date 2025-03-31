function mergeAlternately(word1: string, word2: string): string {
  let result = [];

  for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
    if (word1[i]) {
      result.push(word1[i]);
    }
    if (word2[i]) {
      result.push(word2[i]);
    }
  }

  return result.join("");
}
