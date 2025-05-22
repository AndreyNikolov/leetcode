/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words: string[], chars: string): number {
  const charArray = new Array(26).fill(0);
  let result = 0;

  for (let i = 0; i < chars.length; i++) {
    const charIndex = chars[i].charCodeAt(0) - "a".charCodeAt(0);
    charArray[charIndex]++;
  }

  for (const word of words) {
    const wordArray = new Array(26).fill(0);

    for (let j = 0; j < word.length; j++) {
      const charIndex = word[j].charCodeAt(0) - "a".charCodeAt(0);
      wordArray[charIndex]++;
    }

    let good = true;
    for (let k = 0; k < charArray.length; k++) {
      if (charArray[k] < wordArray[k]) {
        good = false;
        break;
      }
    }
    if (good) {
      result += word.length;
    }
  }
  return result;
}
