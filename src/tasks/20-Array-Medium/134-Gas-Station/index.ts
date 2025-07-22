function canCompleteCircuit(gas: number[], cost: number[]): number {
    let [totalTank, currTank, startIndex] = [0, 0, 0];

    for (let i = 0; i < gas.length; i++) {
        const gain = gas[i] - cost[i];
        totalTank += gain;
        currTank += gain;

        if (currTank < 0) {
            startIndex = i + 1;
            currTank = 0;
        }
    }

    return totalTank >= 0 ? startIndex : -1;
};