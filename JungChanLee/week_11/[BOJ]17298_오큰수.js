// let [n, ...input] = require('fs').readFileSync("/dev/stdin").toString().trim().split("\n");
// let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
// let [column, row] = n.split(' ').map(Number); 
// input = input.map(e => e.split(' ').map(Number));

class Stack {
    constructor() {
        this._arr = [];
    }
    push(item) {
        this._arr.push(item);
    }
    pop() {
        return this._arr.pop();
    }

    isEmpty(){
        return this._arr.length == 0 ? true : false;
    }

    peek(){
        return this._arr[this._arr.length-1];
    }
}

var solve = () => {
    let [n, ...input] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split("\n");
    let ansArr = new Array(parseInt(n)).fill(0);
    let stack = new Stack();
    input[0].split(" ").map(cur => parseInt(cur)).forEach((cur,idx) => {
        while(true){
            if(stack.isEmpty()) break;
            if(stack.peek()[0] >= cur) break;
            let t = stack.pop();
            ansArr[t[1]] = cur;
        }
        stack.push([cur,idx]);
    });
    while(!stack.isEmpty()){
        let t = stack.pop();
        ansArr[t[1]] = -1;
    }
    console.log(ansArr.join(" "));
};

solve();