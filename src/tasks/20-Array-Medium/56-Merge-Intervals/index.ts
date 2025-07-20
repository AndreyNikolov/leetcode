function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])
    
    let result = [intervals[0]];

    for (let i = 1; i< intervals.length; i++) {
        const currInterval = result[result.length - 1]
        const [start, end] = intervals[i];

        if (currInterval[1] >= start) {
            currInterval[1] = Math.max(currInterval[1], end)
        } else {
            result.push([start, end]);
        }
    }

    return result;
};