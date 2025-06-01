function nextGreatestLetter(letters: string[], target: string): string {
  let left = 0;
  let right = letters.length - 1;
  let resultCode = Infinity;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let charMid = letters[mid].charCodeAt(0);

    if (target.charCodeAt(0) >= charMid) {
      left = mid + 1;
    } else {
      resultCode = Math.min(charMid, resultCode);
      right = mid - 1;
    }
  }

  return resultCode === Infinity ? letters[0] : String.fromCharCode(resultCode);
}
