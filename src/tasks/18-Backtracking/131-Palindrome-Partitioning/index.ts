function isPalindrome(s: string): boolean {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
}

function partition(s: string): string[][] {
  const len = s.length;
  const result: string[][] = [];
  const solution: string[] = [];

  function backtrack(i: number): void {
    //base case
    if (i === len) {
      result.push([...solution]);
      return;
    }
    //go over all possible substrings
    for (let j = i; j < len; j++) {
      const curr = s.slice(i, j + 1);
      if (isPalindrome(curr)) {
        solution.push(curr);
        backtrack(j + 1);
        solution.pop();
      }
    }
  }
  backtrack(0);

  return result;
}

const result = partition("aab");
console.log(result);
