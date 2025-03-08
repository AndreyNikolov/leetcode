/*brute force
function minimumRecolors(blocks: string, k: number): number {
let minimumRepaints = Infinity;
    let left = 0;
    let right = k;
    while (right <= blocks.length) {
        const subStr = blocks.substring(left, right)
        minimumRepaints = Math.min(minimumRepaints, subStr.replaceAll('B', '').length);
        left++;
        right++;
    }

    return minimumRepaints;
}
*/

function minimumRecolors(blocks: string, k: number): number {
  let minimumRepaints = k;
  let currentRepaints = 0;
  let left = 0;

  for (let right = 0; right < blocks.length; right++) {
    if (blocks[right] === "W") {
      currentRepaints++;
    }
    if (right - left + 1 === k) {
      // window size reached
      minimumRepaints = Math.min(minimumRepaints, currentRepaints);
      if (blocks[left] === "W") {
        currentRepaints--;
      }
      left++;
    }
  }

  return minimumRepaints;
}
