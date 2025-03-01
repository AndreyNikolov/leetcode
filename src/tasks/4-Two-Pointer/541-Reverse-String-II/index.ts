/*
function splitByLength(str: string, length: number) {
  let result = [];
  let startIndex = 0;
  while (startIndex < str.length) {
    result.push(str.slice(startIndex, startIndex + length));
    startIndex += length;
  }
  const lastBit = str.slice(startIndex);
  if (lastBit) {
    result.push(lastBit);
  }
  return result;
}

function reverseStr(s: string, k: number): string {
  const result = [];
  const substrLength = 2 * k;
  const substrs = splitByLength(s, substrLength);
  for (let i = 0; i < substrs.length; i++) {
    const substrs2 = splitByLength(substrs[i], k);
    const reversedPart = substrs2[0].split("").reverse().join("");
    result.push(reversedPart, substrs2[1]);
  }

  return result.join("");
}

*/

function reverseStr(s: string, k: number): string {
  const result = s.split("");

  for (let i = 0; i < result.length; i += 2 * k) {
    let startIndex = i;
    let endIndex = Math.min(i + k - 1, result.length - 1);

    while (startIndex < endIndex) {
      const temp = result[startIndex];
      result[startIndex] = result[endIndex];
      result[endIndex] = temp;

      startIndex++;
      endIndex--;
    }
  }

  return result.join("");
}
