function nextGreaterElementStack(nums1: number[], nums2: number[]): number[] {
  const result = new Array(nums1.length).fill(-1);
  let index: Record<number, number> = {};
  for (let i = 0; i < nums1.length; i++) {
    index[nums1[i]] = i;
  }

  const stack = [];

  for (let j = 0; j < nums2.length; j++) {
    const curr = nums2[j];

    while (stack.length && curr > stack[stack.length - 1]) {
      let el = stack.pop()!;
      const elIndex = index[el];
      result[elIndex] = curr;
    }

    if (index[curr] !== undefined) {
      stack.push(curr);
    }
  }

  return result;
}
