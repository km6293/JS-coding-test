class Queue {
    constructor(){
        this.arr = [];
    }
    add(val){
        this.arr.push(val);
    }
    poll(){
        return this.arr.shift();
    }
    isEmpty(){
        return (this.arr.length == 0);
    }
    peek(){
        return this.arr[0];
    }
}

function solution(prices) {
    var answer = new Array(prices.length).fill(0).map((v,i) => prices.length-1-i);
    let q = new Queue();
    let pre = 0;
    
    Array.from({length:prices.length},(v,i) => i).forEach(idx => {
        if(pre > prices[idx]){
            let tq = new Queue();
            while(!q.isEmpty()){
                let t = q.poll();
                t[0] > prices[idx] ? (answer[t[1]] = idx-t[1]) : tq.add(t); 
            }
            
            q = tq;
            //while(!tq.isEmpty()) q.add(tq.poll());
        }
        q.add([prices[idx],idx]);
        pre = prices[idx];
    });
    
    return answer;
}