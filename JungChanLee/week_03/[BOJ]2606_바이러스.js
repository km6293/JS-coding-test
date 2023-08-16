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

var bfs = () => {
    let rtnVal = 0;
    let q = new Queue();
    let visit = new Array(n).fill(false);
    visit[0] = true;
    q.add(0);

    while(!q.isEmpty()){
        let tmp = q.poll();
        Array.from({length:n},(a,i) => i).forEach(val => {
            info[tmp][val] == 1 && !visit[val] && (function(){
                visit[val] = true;
                q.add(val);
                rtnVal++;
            })();
        });
    }

    return rtnVal;
}

let [n, m, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
input = input.map(val => val.trim().split(" "));
let info = new Array(+n).fill(0).map(val => new Array(+n).fill(0));
input.forEach(val => info[+val[0]-1][+val[1]-1] = info[+val[1]-1][+val[0]-1] = 1);
console.log(bfs());