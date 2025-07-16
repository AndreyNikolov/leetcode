function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;

    let result = 0;

    while(left < right) {
        const leftH = height[left];
        const rightH = height[right];
        const area = (right - left) * Math.min(leftH, rightH)
        result = Math.max(result, area)

        if (leftH >= rightH) {
            right--
        } else {
            left++
        }
    }

    return result;
};