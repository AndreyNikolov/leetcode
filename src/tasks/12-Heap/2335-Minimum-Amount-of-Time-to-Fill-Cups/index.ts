function fillCups(amount: number[]): number {
  let time = 0;

  while (true) {
    amount.sort((a, b) => b - a);

    if (amount[0] === 0) break;

    if (amount[1] > 0) {
      amount[1]--;
    }
    amount[0]--;

    time++;
  }

  return time;
}

/*
 def fillCups(self, amount):
        maxi = 0
        total = 0
        for i in range(len(amount)):
            total += amount[i]
            maxi = max(maxi, amount[i])
        return max(maxi, (total + 1) // 2)
*/
