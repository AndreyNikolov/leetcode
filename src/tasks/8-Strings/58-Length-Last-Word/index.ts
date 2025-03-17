function lengthOfLastWord(s: string): number {
  let result = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (result >= 1) {
        return result;
      }
    } else {
      result++;
    }
  }

  return result;
}
