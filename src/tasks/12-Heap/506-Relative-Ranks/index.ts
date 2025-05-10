function findRelativeRanks2(score: number[]): string[] {
  const result = new Array(score.length);
  const placements = new Array(score.length).fill("").map((el, index) => {
    if (index === 0) return "Gold Medal";
    if (index === 1) return "Silver Medal";
    if (index === 2) return "Bronze Medal";

    return `${index + 1}`;
  });

  const scoreMap: Record<number, number> = {};

  for (let i = 0; i < score.length; i++) {
    scoreMap[score[i]] = i;
  }

  score.sort((a, b) => b - a);

  for (let sortedS of score) {
    const place = placements.shift();
    const scoreIndex = scoreMap[sortedS];
    result[scoreIndex] = place;
  }

  return result;
}
