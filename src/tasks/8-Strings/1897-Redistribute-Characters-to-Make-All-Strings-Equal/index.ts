function makeEqual(words: string[]): boolean {
  // for char freq, it is better to use char array: counts = [0] * 26
  let freqArr = new Array(26).fill(0);
  // let freq: Record<string,number> = {};
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      //freq[words[i][j]] = (freq[words[i][j]] || 0) + 1;
      freqArr[words[i][j].charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
  }

  // for (const count of Object.values(freq)) {
  //     if (count % words.length !== 0) return false
  // }
  for (const charCount of freqArr) {
    if (charCount % words.length !== 0) return false;
  }

  return true;
}
