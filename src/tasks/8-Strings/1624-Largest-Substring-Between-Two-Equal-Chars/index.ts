function maxLengthBetweenEqualCharacters(s: string): number {
  /*
    let left = 0;
    let maxSubLength = -1;
    
    while(s.length - 1 - left > maxSubLength) {
        for (let right = s.length - 1; right>=0; right--) {
            if (s[left] === s[right]) {
                maxSubLength = Math.max(maxSubLength, right - left - 1)
                left++;
                break;
            }
        }
    }

    return maxSubLength;
    */

  let maxSubLength = -1;
  let charIndex = new Map();

  for (let i = 0; i < s.length; i++) {
    if (charIndex.has(s[i])) {
      // calculate position
      maxSubLength = Math.max(maxSubLength, i - charIndex.get(s[i]) - 1);
    } else {
      charIndex.set(s[i], i);
    }
  }

  return maxSubLength;
}
