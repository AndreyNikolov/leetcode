/*function findIndexOfMaxElement(score: number[]) {
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
  */

function findRelativeRanks(score: number[]): string[] {
  const result = new Array(score.length).fill("");

  // construct a hash map with the score and its index
  const scoreMap = new Map();
  for (let i = 0; i < score.length; i++) {
    scoreMap.set(score[i], i);
  }

  // construct rank stack
  const rankStack = new Array(score.length)
    .fill("")
    .map((el, index) => {
      if (index === 0) {
        return "Gold Medal";
      } else if (index === 1) {
        return "Silver Medal";
      } else if (index === 2) {
        return "Bronze Medal";
      } else {
        return `${index + 1}`;
      }
    })
    .reverse();

  // sort the scores by highest first
  const sortedScore = score.sort((a, b) => b - a);
  for (let i = 0; i < sortedScore.length; i++) {
    const curr = sortedScore[i];
    const currOldIndex = scoreMap.get(curr);
    result[currOldIndex] = rankStack.pop();
  }

  return result;
}
