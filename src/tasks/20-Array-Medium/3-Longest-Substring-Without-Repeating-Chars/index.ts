function lengthOfLongestSubstring(s: string): number {
    const uniques = new Set();
    let result = 0
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        const letter = s[right]
        while (uniques.has(letter)) {
            uniques.delete(s[left])
            left++
        }
        uniques.add(letter)
        result = Math.max(right - left + 1, result)
    }

    return result;
};