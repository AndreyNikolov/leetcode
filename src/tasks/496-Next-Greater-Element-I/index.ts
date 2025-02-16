function findNextGreatElement(el: number, nums2: number[]) {
  let foundIndex = -1;
  let greaterElement = -1;

  for (let j = 0; j < nums2.length; j++) {
    const el2 = nums2[j];
    if (el === el2) {
      foundIndex = j;
      continue;
    }
    if (foundIndex !== -1 && el2 > el) {
      greaterElement = el2;
      break;
    }
  }

  return greaterElement;
}

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const answer = [];

  for (let i = 0; i < nums1.length; i++) {
    answer.push(findNextGreatElement(nums1[i], nums2));
  }
  return answer;
}
