/* Naive
function findNextGreatElement(el, nums2) {
    let foundIndex = -1;
    let greaterElement = -1;

    for (let j=0; j<nums2.length; j++){
        const el2 = nums2[j]
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
    const answer = []

    for (let i=0; i< nums1.length; i++) {
        answer.push(findNextGreatElement(nums1[i], nums2))
    }
    return answer;
};
*/

function findNextGreaterElement(element: number, arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    if (element < arr[i]) {
      return arr[i];
    }
  }
  return -1;
}

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const result = new Array(nums1.length).fill(-1);

  // conver the num1 array to a hash map, where the integer is the key, and the index of it is the value
  const num1Map = new Map();
  for (let i = 0; i < nums1.length; i++) {
    num1Map.set(nums1[i], i);
  }

  //O(n+m)
  const stack = [];

  for (let j = 0; j < nums2.length; j++) {
    const curr = nums2[j];
    // if stack is not empty and we have elements to compare with curr
    while (stack.length > 0 && stack[stack.length - 1] < curr) {
      const lower = stack.pop();
      if (num1Map.has(lower)) {
        const index = num1Map.get(lower);
        result[index] = curr;
      }
    }

    // else
    if (num1Map.has(curr)) {
      stack.push(curr);
    }
  }

  return result;

  /*
    // O(n*m)
    for (let j = 0; j<nums2.length; j++) {
        if (!num1Map.has(nums2[j])) continue;

        const positionOfJInNums1 = num1Map.get(nums2[j]); // 1
        const greater = findNextGreaterElement(nums2[j], nums2.slice(j+1));
        result[positionOfJInNums1] = greater;
    }

    return result;
    */
}
