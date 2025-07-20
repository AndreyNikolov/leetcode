function canJump(nums: number[]): boolean {
    // greedy O(n)
    let goal = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= goal) {
            goal = i;
        }
    }
    return goal === 0;
    
    //slow BFS
    const queue = [0];
    const visited = new Set();
    visited.add(0);

    while (queue.length) {
        const index = queue.shift()!;
        const maxJump = nums[index];

        if (index === nums.length - 1) return true;

        for (let i = index + 1; i <= index + maxJump && i < nums.length; i++) {
            if (!visited.has(i)) {
                queue.push(i);
                visited.add(i);
            }
        }
    }

    return false;
};