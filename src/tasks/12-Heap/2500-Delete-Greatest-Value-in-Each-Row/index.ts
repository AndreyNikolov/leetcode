import { MaxHeap } from "../MaxHeap";

function deleteGreatestValue(grid: number[][]): number {
  const heaps = [];
  for (const row of grid) {
    const heap = new MaxHeap<number>(row.length);
    row.forEach((el) => heap.push(el));
    heaps.push(heap);
  }

  let result = 0;

  while (true) {
    let maxEl = -Infinity;
    let anyNonEmpty = false;

    for (const heap of heaps) {
      const curr = heap.pop();
      if (curr !== null) {
        anyNonEmpty = true;
        maxEl = Math.max(maxEl, curr);
      }
    }

    if (!anyNonEmpty) break;
    result += maxEl;
  }

  return result;
}
