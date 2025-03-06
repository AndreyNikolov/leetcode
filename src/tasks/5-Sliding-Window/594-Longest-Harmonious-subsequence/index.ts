function findLHS(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let length = 0;
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    const diff = nums[right] - nums[left];
    if (diff == 1) {
      length = Math.max(length, right - left + 1);
    }
    if (diff <= 1) {
      right += 1;
    } else {
      left += 1;
    }
  }

  return length;
}

/* hash map solution
class Solution:
    def findLHS(self, nums):
        freq = defaultdict(int)
        res = 0
        for num in nums:
            freq[num] += 1

        for num in freq:
            if num + 1 in freq:
                res = max(res, freq[num] + freq[num + 1])

        return res
*/
