function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

function reverseWords(s: string): string {
  const sArr = s.split(" ");

  for (let i = 0; i < sArr.length; i++) {
    sArr[i] = reverseString(sArr[i]);
  }

  return sArr.join(" ");
}

function reverseWords2(s: string): string {
  const words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    let curr = words[i].split("");
    let left = 0;
    let right = curr.length - 1;
    while (left < right) {
      let tmp = curr[left];
      curr[left] = curr[right];
      curr[right] = tmp;

      left++;
      right--;
    }

    words[i] = curr.join("");
  }

  return words.join(" ");
}
