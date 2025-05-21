function findRestaurant(list1: string[], list2: string[]): string[] {
  if (list1.length === 1) return list1;

  let list1IndexMap: Record<string, number> = {};
  for (let i = 0; i < list1.length; i++) {
    list1IndexMap[list1[i]] = i;
  }

  let minIndexSum = Infinity;
  let result: Record<number, string[]> = {};

  for (let j = 0; j < list2.length; j++) {
    const curr = list2[j];
    if (list1IndexMap[curr] === undefined) continue;
    if (minIndexSum >= list1IndexMap[curr] + j) {
      minIndexSum = list1IndexMap[curr] + j;
      result[minIndexSum] = result[minIndexSum]
        ? [...result[minIndexSum], curr]
        : [curr];
    }
  }

  return result[minIndexSum];
}
