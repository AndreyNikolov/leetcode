function commonChars(words: string[]): string[] {
  const charFreq: Record<string, number[]> = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    for (let j = 0; j < word.length; j++) {
      if (!charFreq[word[j]]) {
        charFreq[word[j]] = new Array(words.length).fill(0);
      }

      charFreq[word[j]][i]++;
    }
  }

  const result = [];

  for (const [key, values] of Object.entries(charFreq)) {
    let minCommon = Math.min(...values);
    while (minCommon > 0) {
      result.push(key);
      minCommon--;
    }
  }

  return result;
}
