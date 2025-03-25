function mostCommonWord(paragraph: string, banned: string[]): string {
  let mostFrequentWord = "";
  let mostFrequency = 0;
  const words = paragraph
    .replaceAll(/[^a-zA-Z]/g, " ")
    .split(" ")
    .filter((el) => el);
  const freqMap = new Map();

  for (const word of words) {
    const lowerWord = word.toLowerCase();
    if (banned.includes(lowerWord)) continue;
    const wordFreq = (freqMap.get(lowerWord) || 0) + 1;
    freqMap.set(lowerWord, wordFreq);

    if (mostFrequency < wordFreq) {
      mostFrequency = wordFreq;
      mostFrequentWord = lowerWord;
    }
  }

  return mostFrequentWord;
}
