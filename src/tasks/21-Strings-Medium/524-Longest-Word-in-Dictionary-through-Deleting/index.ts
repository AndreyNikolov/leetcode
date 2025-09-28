function findLongestWord(s: string, dictionary: string[]): string {
  dictionary.sort((a, b) => {
    if (a.length != b.length) {
      return b.length - a.length;
    }

    return a.localeCompare(b);
  });

  for (const word of dictionary) {
    let sI = 0;
    let wI = 0;

    while (sI < s.length) {
      if (s[sI] === word[wI]) {
        wI++;
      }

      sI++;
    }

    if (wI === word.length) return word;
  }

  return "";
}
