const removeElementAtIndexAndCopyArray = <T>(arr: T[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

function validPalindrome(s: string): boolean {
  const sChars = s.split("");
  let indexToDeleteLeft = -1;
  let indexToDeleteRight = -1;

  for (let i = 0; i < Math.ceil(sChars.length / 2); i++) {
    if (sChars[i] != sChars[sChars.length - i - 1]) {
      indexToDeleteLeft = i;
      indexToDeleteRight = sChars.length - 1 - i;
      break;
    }
  }

  const sChars1 =
    indexToDeleteLeft !== -1
      ? removeElementAtIndexAndCopyArray(sChars, indexToDeleteLeft)
      : sChars;

  if (sChars1.join("") === sChars1.reverse().join("")) {
    return true;
  }

  const sChars2 =
    indexToDeleteRight !== -1
      ? removeElementAtIndexAndCopyArray(sChars, indexToDeleteRight)
      : sChars;
  if (sChars2.join("") === sChars2.reverse().join("")) {
    return true;
  }

  return false;
}

/*
var validPalindrome = function(s) {
    const isPalindrome = (left, right) => {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    };
    
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
        }
        left++;
        right--;
    }
    return true;
};
*/
