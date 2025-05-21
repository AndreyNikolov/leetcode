function mostCommonWord(paragraph: string, banned: string[]): string {
  const words = paragraph
    .toLowerCase()
    .replaceAll(/[^a-z]/g, " ")
    .split(" ")
    .filter((el) => el);

  const bannedSet = new Set(banned);
  const resultMap = new Map();

  let maxFreq = 0;
  let result = "";

  for (const word of words) {
    if (bannedSet.has(word)) continue;

    let newFreq = 1;
    if (resultMap.has(word)) {
      newFreq += resultMap.get(word);
    }
    resultMap.set(word, newFreq);
    if (newFreq > maxFreq) {
      maxFreq = newFreq;
      result = word;
    }
  }

  return result;
}
