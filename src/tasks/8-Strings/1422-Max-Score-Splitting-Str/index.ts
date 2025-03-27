function maxScore2(s: string): number {
  const zeroes = s.split("").filter((el) => el === "0").length;

  let maxScore = 0;
  let leftScore = 0;
  let rightScore = s.length - zeroes;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      leftScore += 1;
    } else {
      rightScore -= 1;
    }
    maxScore = Math.max(maxScore, leftScore + rightScore);
  }

  return maxScore;
}
