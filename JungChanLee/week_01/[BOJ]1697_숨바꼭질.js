// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));

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

var bfs = (strt,end) => {
    let visit = new Array(100001).fill(-1);
    let q = new Queue();
    q.add(strt);
    visit[strt] = 0;
    
    while(!q.isEmpty()){
        var cur = +q.poll();
        if(cur == end) return visit[cur];

        // +1, -1, *2 (현재 점에서 모든경우의수 탐색)
        if(cur-1 >= 0 && visit[cur-1] == -1){visit[cur-1] = visit[cur]+1; q.add(cur-1);}
        if(cur+1 <= 100000 && visit[cur+1] == -1){visit[cur+1] = visit[cur]+1; q.add(cur+1);}
        if(cur*2 <= 100000 && visit[cur*2] == -1){visit[cur*2] = visit[cur]+1; q.add(cur*2);}
    }
}

let [strt,end] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split(" ");
console.log(bfs(strt,end));