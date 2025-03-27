function getCharFreqArr(word: string): number[] {
  const freqArr = new Array(26).fill(0);
  for (let i = 0; i < word.length; i++) {
    const charIndex = word[i].charCodeAt(0) - 97;
    freqArr[charIndex]++;
  }

  return freqArr;
}

function countCharacters(words: string[], chars: string): number {
  let charsFreqArr = getCharFreqArr(chars);
  let result = 0;
  for (const word of words) {
    const wordFreqArr = getCharFreqArr(word);
    let shouldIncludeWord = true;
    for (let i = 0; i < 26; i++) {
      if (charsFreqArr[i] < wordFreqArr[i]) {
        shouldIncludeWord = false;
        break;
      }
    }

    if (shouldIncludeWord) {
      result += word.length;
    }
  }
  return result;
}
