function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  let s1Count = new Array(26).fill(0);
  let s2Count = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    let s1Char = s1[i].charCodeAt(0) - "a".charCodeAt(0);
    let s2Char = s2[i].charCodeAt(0) - "a".charCodeAt(0);

    s1Count[s1Char]++;
    s2Count[s2Char]++;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) matches++;
  }

  let left = 0;

  for (let right = s1.length; right < s2.length; right++) {
    if (matches === 26) return true;

    //adding to the right
    let index = s2[right].charCodeAt(0) - "a".charCodeAt(0);
    s2Count[index]++;
    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] + 1 === s2Count[index]) {
      matches--;
    }

    //deleting from the left
    let indexL = s2[left].charCodeAt(0) - "a".charCodeAt(0);
    s2Count[indexL]--;
    if (s1Count[indexL] === s2Count[indexL]) {
      matches++;
    } else if (s1Count[indexL] - 1 === s2Count[indexL]) {
      matches--;
    }
    left++;
  }

  return matches === 26;
}
