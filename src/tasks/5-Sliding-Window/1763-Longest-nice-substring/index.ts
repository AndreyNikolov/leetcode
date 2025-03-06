function isArrNice(arr: string[]) {
  const uniques = new Set(arr);
  for (let char of uniques) {
    let isLowerCase = char.charCodeAt(0) >= 97;
    if (isLowerCase && !uniques.has(char.toUpperCase())) {
      return false;
    } else if (!uniques.has(char.toLowerCase())) {
      return false;
    }
  }
  return true;
}

function longestNiceSubstring(s: string): string {
  const sChars = s.split("");
  let result: string[] = [];

  for (let i = 0; i < sChars.length; i++) {
    for (let j = i + 1; j < sChars.length + 1; j++) {
      const subArr = sChars.slice(i, j);
      if (isArrNice(subArr) && subArr.length > result.length) {
        result = subArr;
      }
    }
  }

  return result.join("");
}
