class MinHeap {
  private arr: (number | null)[];
  private maxSize: number;
  public heapSize: number;

  constructor(maxSize: number) {
    this.arr = new Array(maxSize).fill(null);
    this.maxSize = maxSize;
    this.heapSize = 0;
  }

  private left(i: number): number {
    return 2 * i + 1;
  }

  private right(i: number): number {
    return 2 * i + 2;
  }

  private parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  public peek(): number | null {
    return this.arr[0];
  }

  private minHeapify(i: number): void {
    const left = this.left(i);
    const right = this.right(i);
    let smallest = i;

    if (left < this.heapSize && this.arr[left]! < this.arr[smallest]!) {
      smallest = left;
    }
    if (right < this.heapSize && this.arr[right]! < this.arr[smallest]!) {
      smallest = right;
    }
    if (smallest !== i) {
      [this.arr[smallest], this.arr[i]] = [this.arr[i], this.arr[smallest]];
      this.minHeapify(smallest);
    }
  }

  public pop(): number | null {
    if (this.heapSize <= 0) {
      return null;
    }
    if (this.heapSize === 1) {
      this.heapSize -= 1;
      return this.arr[0];
    }

    const root = this.arr[0];
    this.arr[0] = this.arr[this.heapSize - 1];
    this.heapSize -= 1;

    this.minHeapify(0);

    return root;
  }

  public push(x: number): void {
    if (this.heapSize === this.maxSize) {
      console.error("Heap overflow! Could not push.");
      return;
    }

    let i = this.heapSize;
    this.arr[i] = x;

    this.heapSize += 1;

    while (i !== 0 && this.arr[this.parent(i)]! > this.arr[i]!) {
      [this.arr[i], this.arr[this.parent(i)]] = [
        this.arr[this.parent(i)],
        this.arr[i],
      ];
      i = this.parent(i);
    }
  }

  public print(): void {
    console.log(this.arr);
  }
}

function findKthLargest(nums: number[], k: number): number {
  const heap = new MinHeap(k);

  for (const num of nums) {
    if (heap.heapSize < k) {
      heap.push(num);
    } else if (num > heap.peek()!) {
      heap.pop();
      heap.push(num);
    }
  }

  return heap.peek()!;
}
