//우선순위큐 Heap 구현공부 필요

class Heap {
    constructor() {
      this.heap = [null];
    }
  
    swap(a, b) {
      [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
  
    size() {
      return this.heap.length - 1;
    }
  
    empty() {
      return this.size() === 0;
    }
  
    add(value) {
      this.heap.push(value);
      let cur = this.heap.length - 1;
      let par = Math.floor(cur / 2);
  
      while (par > 0 && this.heap[par] > value) {
        this.swap(cur, par);
        cur = par;
        par = Math.floor(cur / 2);
      }
    }
  
    poll() {
      if (this.empty()) {
        return 0;
      }
      if (this.size() === 1) {
        return this.heap.pop();
      }
      let returnValue = this.heap[1];
      this.heap[1] = this.heap.pop();
  
      let cur = 1;
      let left = 2;
      let right = 3;
  
      while (this.heap[cur] > this.heap[left] || this.heap[cur] > this.heap[right]) {
        if (this.heap[left] > this.heap[right]) {
          this.swap(cur, right);
          cur = right;
        } else {
          this.swap(cur, left);
          cur = left;
        }
        left = cur * 2;
        right = cur * 2 + 1;
      }
  
      return returnValue;
    }
}

let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
input = input.map(cur => Number(cur.trim()));

n == 1 ? console.log(0) 
: n == 2 ? console.log(input[0]+input[1]) 
: (function(){
    let pq = new Heap();
    let answer = 0;
    input.forEach(cur => pq.add(Number(cur)));
    while(pq.size() != 1){
        let t1 = pq.poll();
        let t2 = pq.poll();
        answer += (t1+t2);
        pq.add((t1+t2));
    }
    console.log(answer);
})();
