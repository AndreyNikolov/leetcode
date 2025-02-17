function mostCommonWord(paragraph: string, banned: string[]): string {
  const result = new Map();
  const bannedSet = new Set(banned);
  const words = paragraph
    .replaceAll(/[^a-zA-Z]/g, " ")
    .split(" ")
    .filter((el) => el);
  let highestFreq = 0;
  let highestFreqWord = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (bannedSet.has(word)) continue;

    let newFreq = 0;
    if (result.has(word)) {
      const oldFreq = result.get(word);
      newFreq = oldFreq + 1;
      result.set(word, newFreq);
    } else {
      newFreq = 1;
      result.set(word, newFreq);
    }

    if (newFreq > highestFreq) {
      highestFreq = newFreq;
      highestFreqWord = word;
    }
  }

  return highestFreqWord;
}

console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ])
);
