/* slow
function findLengthOfLCIS(nums: number[]): number {
  let longestSequence = 0;

  for (let i = 0; i < nums.length; i++) {
    let seqHighestNumber = nums[i];
    let currentSequence = 1;
    for (let r = i + 1; r < nums.length; r++) {
      if (nums[r] > seqHighestNumber) {
        seqHighestNumber = nums[r];
        currentSequence += 1;
      } else {
        // start from r
        i = r - 1;
        break;
      }
    }
    longestSequence = Math.max(longestSequence, currentSequence);
  }

  return longestSequence;
}
*/

function findLengthOfLCIS(nums: number[]): number {
  if (nums.length === 1) return 1;

  let longestSequence = 1;
  let currentSequence = 1;

  let startElement = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > startElement) {
      currentSequence += 1;
      startElement = nums[i];
    } else {
      longestSequence = Math.max(longestSequence, currentSequence);
      currentSequence = 1;
    }
    startElement = nums[i];
  }

  return Math.max(longestSequence, currentSequence);
}
