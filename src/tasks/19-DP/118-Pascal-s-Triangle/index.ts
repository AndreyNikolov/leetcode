function generate(numRows: number): number[][] {
  const result: number[][] = [];

  function helper(i: number) {
    if (i === numRows) return;

    if (i === 0) {
      result.push([1]);
    } else {
      const prev = result[i - 1];
      const curr: number[] = [];

      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          curr.push(1);
        } else {
          curr.push(prev[j - 1] + prev[j]);
        }
      }

      result.push(curr);
    }

    helper(i + 1);
  }

  helper(0);
  return result;
}

function generateDP(numRows: number): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const curr: number[] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        curr.push(1);
      } else {
        curr.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(curr);
  }

  return result;
}
