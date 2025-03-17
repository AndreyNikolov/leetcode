function findPrefix(str1: string, str2: string): string {
  const result = [];
  const length = Math.min(str1.length, str2.length);
  for (let i = 0; i < length; i++) {
    if (str1[i] === str2[i]) {
      result.push(str1[i]);
    } else {
      break;
    }
  }
  return result.join("");
}

var longestCommonPrefix = function (strs: string[]): string {
  let longestPrefix = strs[0];

  if (!longestPrefix) return "";

  for (let i = 1; i < strs.length; i++) {
    longestPrefix = findPrefix(longestPrefix, strs[i]);
    if (!longestPrefix) return "";
  }

  return longestPrefix;
};
