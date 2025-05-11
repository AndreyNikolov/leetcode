function isPalindromeValid(s: string): boolean {
  /*
  const lowerCaseAlphaNumericStr = s.toLowerCase().replace(/[^0-9a-z]/g, "");
  return (
    lowerCaseAlphaNumericStr ===
    lowerCaseAlphaNumericStr.split("").reverse().join("")
  );
  */

  let str = s.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }

  return true;
}
