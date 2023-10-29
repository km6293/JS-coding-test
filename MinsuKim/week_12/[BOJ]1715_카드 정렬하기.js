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

  getLength(){
    return this.heap.length;
  }
}


input.shift();

const pq = new PriorityQueue();

input.forEach(value => pq.insert(+value.trim()));
let total = 0;
while(pq.getLength() > 2){
  let a = pq.remove();
  let b = pq.remove();
  total += a + b;
  pq.insert(a + b);
}

console.log(total);