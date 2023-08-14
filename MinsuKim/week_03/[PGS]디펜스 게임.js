class MaxHeap{
  constructor(){
    this.heap = [null];
  }    
  
  insert(node){
    let current = this.heap.length;
    while(current > 1){
      let parent = Math.floor(current / 2);
      if(this.heap[parent] < node){
        this.heap[current] = this.heap[parent];
        current = parent;
      }else break;
    }
    this.heap[current] = node;
  }
  
  remove(){
    let max = this.heap[1];
    
    if(this.heap.length > 1){
      this.heap[1] = this.heap[this.heap.length-1];
      this.heap.splice(this.heap.length-1);
      
      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;
      
      while(this.heap[leftChildIndex]){
        let childIndexToCompare = leftChildIndex;
        
        if(this.heap[rightChildIndex] &&(
          this.heap[rightChildIndex] > this.heap[childIndexToCompare]
        )) childIndexToCompare = rightChildIndex;
        
        if(this.heap[childIndexToCompare] > this.heap[current]){
          [this.heap[current] , this.heap[childIndexToCompare]] = 
          [this.heap[childIndexToCompare] , this.heap[current]];
          
          current = childIndexToCompare;
        }else break;
        
        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
          
      }
    }else{
        return null;
    }
    return max;
  }
  
}

function solution(n, k, enemy) {

  let maxHeap = new MaxHeap();
  let index = 0;

  for(let i = 0 ; i < enemy.length; i++){
    let nowValue = enemy[i];
    maxHeap.insert(nowValue);
    if(n < nowValue){
      if(k < 1) break;
      let max = maxHeap.remove();
      if(max){
        k -= 1;
        n += max;
        n -= nowValue;
        index += 1;
      }else break;
    }else{
      n -= nowValue;
      index += 1;
    }
  }
  return index;
}