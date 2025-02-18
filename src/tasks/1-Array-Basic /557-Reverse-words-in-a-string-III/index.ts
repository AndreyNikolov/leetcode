function reverseStr(str: string): string {
  return str.split("").reverse().join("");
}

function reverseWords(s: string): string {
  const sArr = s.split(" ");

  for (let i = 0; i < sArr.length; i++) {
    sArr[i] = reverseStr(sArr[i]);
  }

  return sArr.join(" ");
}
