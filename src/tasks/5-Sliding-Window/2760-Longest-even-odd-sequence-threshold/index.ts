/*
const isOdd = (num: number) => num % 2 !== 0;
const isEven = (num: number) => num % 2 === 0;

function longestAlternatingSubarray(nums: number[], threshold: number): number {
  let maximumSubArrayLength = 0;
  let left = -1;
  let right = -1;

  //nums = [3, 2, 5,4]
  for (let i = 0; i < nums.length; i++) {
    // skip till an even number is found
    if (isOdd(nums[i]) && left === -1) {
      continue;
    }

    if (nums[i] > threshold && left !== -1) {
      // break sequence
      maximumSubArrayLength = Math.max(right - left + 1, maximumSubArrayLength);
      left = -1;
      right = -1;
      continue;
    }

    // find even number that satisfies condition to start a window;
    if (isEven(nums[i]) && nums[i] <= threshold) {
      if (left === -1) {
        // starting a sequence
        left = i;
        right = i;
        maximumSubArrayLength = Math.max(1, maximumSubArrayLength);
      } else {
        // already in a sequence
        if (isOdd(nums[i - 1])) {
          right++;
          maximumSubArrayLength = Math.max(
            right - left + 1,
            maximumSubArrayLength
          );
        } else {
          // terminate sequence
          left = i;
          right = i;
        }
      }
    } else if (isOdd(nums[i]) && nums[i] <= threshold) {
      // odd
      if (isEven(nums[i - 1])) {
        right++;
        maximumSubArrayLength = Math.max(
          right - left + 1,
          maximumSubArrayLength
        );
      } else {
        // terminate sequence
        left = -1;
        right = -1;
      }
    }
  }

  return maximumSubArrayLength;
}
*/

function longestAlternatingSubarray(nums: number[], threshold: number): number {
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    if (nums[i] % 2 === 0 && nums[i] <= threshold) {
      //start a sequence
      count = 1;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] % 2 === nums[j - 1] % 2 || nums[j] > threshold) {
          break;
        }
        count++;
      }
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}
