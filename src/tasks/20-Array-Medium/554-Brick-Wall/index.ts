function leastBricks(wall: number[][]): number {
  const dict = new Map();
  const rows = wall.length;
  const maxWidth = wall[0].reduce((acc, val) => acc + val, 0);

  let maxGapCount = 0;

  for (let i = 0; i < rows; i++) {
    const currRow = wall[i];
    let currGap = 0;

    for (let j = 0; j < currRow.length; j++) {
      currGap += currRow[j];
      if (currGap < maxWidth) {
        const newGapCount = (dict.get(currGap) || 0) + 1;
        dict.set(currGap, newGapCount);

        if (newGapCount > maxGapCount) {
          maxGapCount = newGapCount;
        }
      }
    }
  }

  return rows - maxGapCount;
}
