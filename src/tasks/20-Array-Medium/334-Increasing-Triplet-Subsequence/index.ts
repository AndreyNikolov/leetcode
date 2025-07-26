function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;

  for (const num of nums) {
    if (first >= num) {
      first = num;
    } else if (second >= num) {
      second = num;
    } else {
      return true;
    }
  }
  return false;
  /*
   for (let k = nums.length - 1; k>=0; k--){
        const K = nums[k];

        for (let j = k - 1; j>=0; j--) {
            const J = nums[j];

            if (K > J) {
                for (let i = j - 1; i>=0; i--) {
                    const I = nums[i];
                    if (J > I) return true
                }
            }
        }
    }
    return false; 
    */
}
