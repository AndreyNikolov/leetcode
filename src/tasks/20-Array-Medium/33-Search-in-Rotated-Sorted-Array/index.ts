function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    if (nums[left] > nums[right]) {
        let pLeft = left;
        let pRight = right;

        while (pLeft < pRight) {
            const mid = Math.floor((pLeft + pRight) / 2);
            if (nums[mid] === target) return mid;
            if (nums[mid] > nums[pRight]) {
                pLeft = mid + 1;
            } else {
                pRight = mid;
            }
        }

        const pivot = pLeft;

        if (target >= nums[pivot] && target <= nums[right]) {
            left = pivot;
        } else {
            right = pivot - 1;
        }
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
