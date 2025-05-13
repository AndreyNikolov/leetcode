export class MaxHeap<T> {
  private arr: (T | null)[];
  private maxSize: number;
  private heapSize: number;

  constructor(maxSize: number) {
    this.arr = new Array<T | null>(maxSize).fill(null);
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

  public peek(): T | null {
    return this.arr[0];
  }

  private maxHeapify(i: number): void {
    const left = this.left(i);
    const right = this.right(i);
    let largest = i;

    if (left < this.heapSize && this.arr[left]! > this.arr[largest]!) {
      largest = left;
    }
    if (right < this.heapSize && this.arr[right]! > this.arr[largest]!) {
      largest = right;
    }
    if (largest !== i) {
      [this.arr[largest], this.arr[i]] = [this.arr[i], this.arr[largest]];
      this.maxHeapify(largest);
    }
  }

  public pop(): T | null {
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

    this.maxHeapify(0);

    return root;
  }

  public increaseKey(i: number, newVal: T): void {
    this.arr[i] = newVal;
    while (i !== 0 && this.arr[this.parent(i)]! < this.arr[i]!) {
      [this.arr[i], this.arr[this.parent(i)]] = [
        this.arr[this.parent(i)]!,
        this.arr[i]!,
      ];
      i = this.parent(i);
    }
  }

  public deleteKey(i: number): void {
    this.increaseKey(i, Infinity as unknown as T);
    this.pop();
  }

  public push(x: T): void {
    if (this.heapSize === this.maxSize) {
      console.error("Heap overflow! Could not push.");
      return;
    }

    let i = this.heapSize;
    this.arr[i] = x;

    this.heapSize += 1;

    while (i !== 0 && this.arr[this.parent(i)]! < this.arr[i]!) {
      [this.arr[i], this.arr[this.parent(i)]] = [
        this.arr[this.parent(i)]!,
        this.arr[i]!,
      ];
      i = this.parent(i);
    }
  }
}
