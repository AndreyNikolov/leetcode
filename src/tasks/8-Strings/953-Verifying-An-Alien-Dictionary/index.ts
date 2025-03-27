function isAlienSorted(words: string[], order: string): boolean {
  let orderA: Record<string, number> = {};
  for (let i = 0; i < order.length; i++) {
    orderA[order[i]] = i;
  }

  for (let j = 0; j < words.length - 1; j++) {
    const word1 = words[j];
    const word2 = words[j + 1];

    for (let w = 0; w < word1.length; w++) {
      if (w === word2.length) {
        return false;
      }

      if (word1[w] !== word2[w]) {
        if (orderA[word1[w]] > orderA[word2[w]]) {
          return false;
        }
        break;
      }
    }
  }

  return true;
}
