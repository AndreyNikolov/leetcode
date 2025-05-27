function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const distinct = new Set(arr2);
  const rest = [];

  const freqMap: Record<number, number> = {};

  for (let i = 0; i < arr1.length; i++) {
    let curr = arr1[i];
    if (distinct.has(curr)) {
      freqMap[curr] = (freqMap[curr] || 0) + 1;
    } else {
      rest.push(curr);
    }
  }

  let result = [];

  for (const value of distinct) {
    while (freqMap[value] > 0) {
      result.push(value);
      freqMap[value]--;
    }
  }

  return [...result, ...rest.sort((a, b) => a - b)];
}
