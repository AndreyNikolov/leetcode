function isPalindrome(str: string): boolean {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function firstPalindrome(words: string[]): string {
  for (const word of words) {
    if (isPalindrome(word)) return word;
  }

  return "";
}
