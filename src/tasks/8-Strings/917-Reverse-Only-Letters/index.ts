function reverseOnlyLetters(s: string): string {
  const sArr = s.split("");
  const isLetter = (c: string) =>
    (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) ||
    (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122);

  let left = 0;
  let right = sArr.length - 1;

  while (left < right) {
    while (!isLetter(sArr[left]) && left !== right) {
      left++;
    }

    while (!isLetter(sArr[right]) && left !== right) {
      right--;
    }

    if (left === right) {
      break;
    }

    const temp = sArr[left];
    sArr[left] = sArr[right];
    sArr[right] = temp;

    left++;
    right--;
  }

  return sArr.join("");
}
