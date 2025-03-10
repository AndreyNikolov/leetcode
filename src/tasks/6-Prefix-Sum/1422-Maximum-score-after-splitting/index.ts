function maxScore(s: string): number {
  let zeroes = 0;
  let ones = s.replaceAll("0", "").length;
  let score = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      zeroes++;
    } else {
      ones--;
    }
    score = Math.max(score, zeroes + ones);
  }

  return score;
}
