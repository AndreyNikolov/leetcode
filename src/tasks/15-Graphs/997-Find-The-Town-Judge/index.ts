function findJudge(n: number, trust: number[][]): number {
  if (trust.length < n - 1) return -1;

  const indegree: number[] = new Array(n + 1).fill(0);
  const outdegree: number[] = new Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    outdegree[a] += 1;
    indegree[b] += 1;
  }

  for (let i = 1; i <= n; i++) {
    if (indegree[i] === n - 1 && outdegree[i] === 0) {
      return i;
    }
  }

  return -1;

  /*
    if (trust.length === 0) return  n === 1 ? 1 :-1

    const seen = new Set();
    const trusters = new Set();

    for (let [a, b] of trust) {
        seen.add(`${a}-${b}`);
        trusters.add(a);
    }

    let potential = [];
    for (let i = 1; i <= n; i++) {
        if (!trusters.has(i)) {
            potential.push(i);
        }
    }

    for (const judge of potential) {
        let isTrusted = true;
        for (let i = 1; i <= n; i++) {
            if (i === judge) continue;
            if (!seen.has(`${i}-${judge}`)) {
                isTrusted = false;
                break;
            }
        }
        if (isTrusted) return judge;
    }

    return -1;
    */
}
