import MinHeap from "../MinHeap";

const numberGame = (nums: number[]): number[] => {
  const heap = new MinHeap(nums.length);
  const result: number[] = [];

  for (const num of nums) {
    heap.push(num);
  }

  while (heap.heapSize >= 2) {
    const [aliceNum, bobNum] = [heap.pop()!, heap.pop()!];
    result.push(bobNum, aliceNum);
  }

  return result;
};
