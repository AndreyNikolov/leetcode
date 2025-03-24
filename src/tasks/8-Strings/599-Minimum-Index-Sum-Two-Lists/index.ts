function findRestaurant(list1: string[], list2: string[]): string[] {
  let minIndexSum = Infinity;
  let result: string[] = [];
  let list1Map: Record<string, number> = {};
  for (let i = 0; i < list1.length; i++) {
    list1Map[list1[i]] = i;
  }

  for (let j = 0; j < list2.length; j++) {
    const curr = list2[j];
    if (list1Map.hasOwnProperty(curr)) {
      if (list1Map[curr] + j < minIndexSum) {
        minIndexSum = list1Map[curr] + j;
        result = [curr];
      } else if (list1Map[curr] + j === minIndexSum) {
        result.push(curr);
      }
    }
  }

  return result;
}
