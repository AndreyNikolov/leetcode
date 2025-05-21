function nextGreaterElement2(nums1: number[], nums2: number[]): number[] {
  const result = new Array(nums1.length).fill(-1);

  const num1Map: Record<number, number> = {};
  for (let i = 0; i < nums1.length; i++) {
    num1Map[nums1[i]] = i;
  }

  const stack = [];

  for (let j = 0; j < nums2.length; j++) {
    const curr = nums2[j];

    while (stack.length && stack[stack.length - 1] < curr) {
      const el = stack.pop()!;
      const elIndex = num1Map[el];
      result[elIndex] = curr;
    }

    if (num1Map[curr] !== undefined) {
      stack.push(curr);
    }
  }

  return result;
}
