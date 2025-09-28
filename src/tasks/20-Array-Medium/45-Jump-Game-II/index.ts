function jump(nums: number[]): number {
  let l = 0;
  let r = 0;
  let res = 0;

  while (r < nums.length - 1) {
    let maxJump = 0;
    for (let i = l; i <= r; i++) {
      maxJump = Math.max(maxJump, i + nums[i]);
    }
    l = r + 1;
    r = maxJump;
    res += 1;
  }

  return res;
}

function jumpLtoR(nums: number[]): number {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
}
