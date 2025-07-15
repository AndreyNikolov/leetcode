function maxProfit(prices: number[]): number {
    if (prices.length <= 1) return 0;

    let profit = 0;

    let bDay = 0;
    let sDay = 1;

    while(sDay < prices.length) {
        if (prices[bDay] < prices[sDay]) {
            profit = Math.max( prices[sDay] - prices[bDay], profit)
        } else {
            bDay = sDay;
        }
        sDay++
    }

    return profit;
};