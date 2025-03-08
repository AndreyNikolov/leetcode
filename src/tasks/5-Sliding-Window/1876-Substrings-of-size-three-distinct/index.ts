/*
function countGoodSubstrings(s: string): number {
  if (s.length < 3) return 0;
  let result = 0;
  let sChars = s.split("");
  let goodLength = 3;

  for (let i = 0; i <= sChars.length - goodLength; i++) {
    const curr = sChars.slice(i, i + goodLength);
    console.log(curr);
    if (curr.length === new Set(curr).size) {
      result += 1;
    }
  }

  return result;
}
*/

function countGoodSubstrings(s: string): number {
  if (s.length < 3) return 0;

  let result = 0;
  let left = 0;
  let count = new Map<string, number>();

  for (let right = 0; right < s.length; right++) {
    let curr = s[right];
    count.set(curr, (count.get(curr) || 0) + 1);

    // Maintain window size of exactly 3
    if (right - left + 1 > 3) {
      let leftChar = s[left];
      count.set(leftChar, count.get(leftChar)! - 1);
      if (count.get(leftChar) === 0) {
        count.delete(leftChar);
      }
      left++; // Move left pointer
    }

    // If window size is exactly 3 and all characters are unique
    if (right - left + 1 === 3 && count.size === 3) {
      result++;
    }
  }

  return result;
}
