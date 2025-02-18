function isPalindrome(s: string): boolean {
  const lowerCaseAlphaNumericStr = s.toLowerCase().replace(/[^0-9a-z]/g, "");
  return (
    lowerCaseAlphaNumericStr ===
    lowerCaseAlphaNumericStr.split("").reverse().join("")
  );
}
