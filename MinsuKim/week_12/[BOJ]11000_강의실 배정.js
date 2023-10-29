let input = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
// let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

class PriorityQueue{
  constructor(){
    this.heap = [null];
  }

  insert(node) {
    let current = this.heap.length;

    while (current > 1) {
      const parent = Math.floor(current / 2);
      if (this.heap[parent] > node) {
        this.heap[current] = this.heap[parent];
        current = parent;
      } else break;
    }

    this.heap[current] = node;
  }

  remove() {
    let min = this.heap[1];

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (this.heap[leftChildIndex]) {
        let childIndexToCompare = leftChildIndex;
        if (
          this.heap[rightChildIndex] &&
          this.heap[rightChildIndex] < this.heap[childIndexToCompare]
        )
          childIndexToCompare = rightChildIndex;

        if (this.heap[current] > this.heap[childIndexToCompare]) {
          [this.heap[current], this.heap[childIndexToCompare]] = [
            this.heap[childIndexToCompare],
            this.heap[current],
          ];
          current = childIndexToCompare;
        } else break;

        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }

    return min;
  }

}

input.shift();
input = input.map(value => value.trim().split(' ').map(Number));
input.sort((a,b) => a[0] - b[0]);

const pq = new PriorityQueue();

input.forEach(([s,t]) => {
  if (pq.heap.length === 1) pq.insert(t);
  else {
    const min = pq.heap[1];
    if (s < min) {
      pq.insert(t);
    } else {
      pq.remove();
      pq.insert(t);
    }
  }
});

console.log(pq.heap.length-1);