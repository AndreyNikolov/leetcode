function mergeAlternately(word1: string, word2: string): string {
  const result = [];
  const word1Chars = word1.split("");
  const word2Chars = word2.split("");

  const iterationLength = Math.min(word1Chars.length, word2Chars.length);

  for (let i = 0; i < iterationLength; i++) {
    result.push(word1Chars[i]);
    result.push(word2Chars[i]);
  }

  if (word1Chars.length > iterationLength) {
    result.push(...word1Chars.slice(iterationLength));
  }

  if (word2Chars.length > iterationLength) {
    result.push(...word2Chars.slice(iterationLength));
  }

  return result.join("");
}
