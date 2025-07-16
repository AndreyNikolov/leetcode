function minCostClimbingStairs(cost: number[]): number {
    /*
    // either start at position 0
    // or position 1
    
    // has to climb the array until startIndex = cost.length
    function helper(i, currCost) {
        if (i >= cost.length) {
            //minCost = Math.min(minCost, currCost);
            return currCost;
        }
        let newCost = currCost + cost[i]

        return Math.min(helper(i+1, newCost), helper(i+2, newCost))
    }

    // out of all posible climbgs, find the one with the smallest cost 
    return Math.min(helper(0, 0), helper(1, 0))
    */
    const result = new Array(cost.length).fill(0)
    result[0] = cost[0]
    result[1] = cost[1]

    for (let i = 2; i<cost.length; i++) {
        result[i] = cost[i] + Math.min(result[i-1], result[i-2])
    }
    //console.log(result)
    return Math.min(result[cost.length - 1], result[cost.length-2])
};