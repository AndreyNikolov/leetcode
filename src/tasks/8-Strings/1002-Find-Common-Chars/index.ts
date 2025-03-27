function commonChars(words: string[]): string[] {
  let freqMap: Record<string, number[]> = {};

  for (let i = 0; i < words.length; i++) {
    words[i].split("").forEach((letter) => {
      if (freqMap[letter]) {
        freqMap[letter][i] = (freqMap[letter][i] || 0) + 1;
      } else {
        const freqArr = new Array(words.length).fill(null);
        freqArr[i] = 1;
        freqMap[letter] = freqArr;
      }
    });
  }

  const result = [];

  for (const [key, values] of Object.entries(freqMap)) {
    if (values.filter((el) => el).length === words.length) {
      let count = Math.min(...values);
      while (count > 0) {
        result.push(key);
        count--;
      }
    }
  }

  return result;
}
