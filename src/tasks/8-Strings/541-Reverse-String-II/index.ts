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
