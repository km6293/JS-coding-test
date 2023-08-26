// 힙구현은 못함(자료구조 다시공부해야함) 로직부분만 짜서 품
// pq 로 해보려 했는데 별짓을 다해도 시간초과남

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

    while (par > 0 && this.heap[par] < value) {
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

    while (this.heap[cur] < this.heap[left] || this.heap[cur] < this.heap[right]) {
      if (this.heap[left] < this.heap[right]) {
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


function solution(n, k, enemy) {
    var answer = 0;
    let pq = new Heap();
    for(let i = 0, cnt = enemy.length ; i < cnt ; i++){
        n -= enemy[i];
        pq.add(enemy[i]);
        if(n < 0){
            if(k == 0) break;
            
            while(pq.size() != 0){
                if(n >= 0) break;
                if(k == 0) break;
                let t = pq.poll();
                n += t;
                k--;
            }
            if(n < 0) break;
        }
        answer = i;
    }
    return (answer+1);
}