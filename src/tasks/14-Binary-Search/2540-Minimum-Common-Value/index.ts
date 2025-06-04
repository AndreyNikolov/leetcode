function getCommon2(nums1: number[], nums2: number[]): number {
  const binarySearch = (target: number, nums: number[]): boolean => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        return true;
      }
    }
    return false;
  };

  // Ensure binary search is done on the larger array
  if (nums1.length > nums2.length) {
    return getCommon2(nums2, nums1);
  }

  // Search for each element of nums1 in nums2
  for (const num of nums1) {
    if (binarySearch(num, nums2)) {
      return num;
    }
  }

  // Return -1 if no common element is found
  return -1;
}
