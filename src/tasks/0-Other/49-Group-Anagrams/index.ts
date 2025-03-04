function getHashedString(str: string): string {
  return str.split("").sort().join();
}

function groupAnagrams(strs: string[]): string[][] {
  const resultMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    const currStr = strs[i];
    const currentKey = getHashedString(currStr);
    if (resultMap.has(currentKey)) {
      const currentValue = resultMap.get(currentKey);
      resultMap.set(currentKey, [...currentValue, currStr]);
    } else {
      resultMap.set(currentKey, [currStr]);
    }
  }

  return Array.from(resultMap.values());
}

/*
  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/
