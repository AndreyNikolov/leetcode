function findIndexOfMaxElement(score: number[]) {
  let maxElement = -1;
  let maxElementIndex = -1;
  for (let i = 0; i < score.length; i++) {
    if (maxElement < score[i]) {
      maxElement = score[i];
      maxElementIndex = i;
    }
  }

  return maxElementIndex;
}

function findRelativeRanks(score: number[]): string[] {
  const results = [];
  let athletesToBeScored = score.length;
  const ranks = Array(athletesToBeScored)
    .fill("")
    .map((el, index) => {
      if (index === 0) {
        return "Gold Medal";
      } else if (index === 1) {
        return "Silver Medal";
      } else if (index === 2) {
        return "Bronze Medal";
      }

      return `${index + 1}`;
    })
    .reverse();

  while (ranks.length > 0) {
    const nextScoreIndex = findIndexOfMaxElement(score);
    results[nextScoreIndex] = ranks.pop();
    score[nextScoreIndex] = -2;
  }

  return results;
}
