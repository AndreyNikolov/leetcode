import { MaxHeap } from "../MaxHeap";

function pickGifts(gifts: number[], k: number): number {
  const heap = new MaxHeap<number>(gifts.length);
  for (const gift of gifts) {
    heap.push(gift);
  }

  while (k > 0) {
    let max = heap.pop();
    if (max) {
      heap.push(Math.floor(Math.sqrt(max)));
    }
    k--;
  }

  return heap.getArray().reduce((acc, val) => acc! + val!, 0) || 0;
}
